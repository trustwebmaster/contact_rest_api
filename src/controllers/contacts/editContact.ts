import { Request, Response } from "express";
import { response } from "../../helpers";
import logger from "../../logger";
import { Contact } from "../../models";

export default async (req: Request, res: Response) => {
  try {
    // update contact
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    if (!contact) {
      return res.status(404).json(response(false, "Contact not found"));
    }

    const { email, name, mobileOne, mobileTwo } = req.body;
    contact.email = email;
    contact.name = name;
    contact.mobileOne = mobileOne;
    contact.mobileTwo = mobileTwo;
    await contact.save();

    const contactData = { ...contact.toJSON() };

    return res
      .status(200)
      .json(response(true, "Successfully updated contact", contactData));
  } catch (error) {
    logger.error(`Exception deleting contact ${error}`);
    return res.status(500).json(response(false, "Internal Server Error"));
  }
};
