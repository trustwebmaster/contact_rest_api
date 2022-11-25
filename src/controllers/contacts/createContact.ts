import {Request, Response} from "express";
import {response} from "../../helpers";
import logger from "../../logger";
import {Contact} from "../../models";
import {validationResult} from "express-validator";

export default async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(response(false, "Bad Request", null, errors.array()));
    }

    const {email, name, mobileOne, mobileTwo} = req.body;

    try {

        const _contact = new Contact({
            email,
            name,
            mobileOne,
            mobileTwo,
        });

        await _contact.save();

        const contactData = {..._contact.toJSON()};

        res.status(200).json(response(true, "Successfully saved new contact", contactData));

    } catch (error) {

        logger.error(`Exception creating contact ${error}`);
        return res.status(500).json(response(false, "Internal Server Error"));
    }
};
