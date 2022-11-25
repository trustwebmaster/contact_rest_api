import {Request, Response} from "express";
import {response} from "../../helpers";
import logger from "../../logger";
import {Contact} from "../../models";

export default async (req: Request, res: Response) => {

  try {

    const {id} = req.params;
    const contact = await Contact.findByPk(id);

    logger.info(`Contact ${contact?.name} deleted`);

    if (!contact) {
      return res.status(404).json(response(false, "Contact not found"));
    }

    await contact.destroy();
    res.status(200).json(response(true, "Successfully deleted contact"));
  } catch (error) {
    logger.error(`Exception deleting contact ${error}`);
    return res.status(500).json(response(false, "Internal Server Error"));
  }
};
