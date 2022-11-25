import { Router } from "express";
import { ContactsController } from "../controllers";
import { body } from "express-validator";

const router = Router();

router.get("", ContactsController.getContacts);
router.post(
  "",
  body("email", "Email is required").exists().isEmail(),
  body("name", "Name is required").exists(),
  body("mobileOne", "Mobile One is required").exists(),
  ContactsController.createContact
);
router.delete("/:id", ContactsController.deleteContact);
router.put("/:id", ContactsController.editContact);

export default router;
