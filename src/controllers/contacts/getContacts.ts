import {Request, Response} from "express";
import {response} from "../../helpers";
import logger from "../../logger";
import {Contact} from "../../models";

export default async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.findAll();

        const contactsData = [...contacts.map((contact) => contact.toJSON())];

        res.status(200)
            .json(response(true, "Contacts fetched successfully", contactsData));

    } catch (error) {

        logger.error(`Exception creating contact ${error}`);
        res.sendStatus(422);
    }
};
