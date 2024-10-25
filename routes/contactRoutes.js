const express = require("express");
const {
  getContact,
  createContact,
  deleteContact,
  updateContact,
  getContacts,
} = require("../controller/contactController");
const validateToken = require("../middleware/validationTokenHandler");

const router = express.Router();

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
