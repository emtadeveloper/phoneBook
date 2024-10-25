const asynHandler = require("express-async-handler");
const ContactModel = require("../models/contactModel");

// @desc   Get All Contact
// @route  Get /api/contact
// @access private

const getContacts = asynHandler(async (req, res) => {
  const contacts = await ContactModel.find({ user_id: req.user._id });
  if (!contacts) {
    res.status(404);
    throw new Error("Not Found");
  }
  res.status(200).json(contacts);
});

// @desc   Get  Contact
// @route  Get /api/contact
// @access public

const getContact = asynHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Not Found");
  }
  res.status(200).json(contact);
});

// @desc   create  Contact
// @route  post /api/contact
// @access public

const createContact = asynHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const contact = await ContactModel.create({ name, email, phone, user_id: user._id });
  res.status(200).json(contact);
});

// @desc   update Contact
// @route  put /api/contact
// @access private

const updateContact = asynHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  if (contact.user_id.toString() !== req.user._id) {
    res.status(403);
    throw new Error("User don't have permission to update");
  }
  const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedContact);
});

// @desc   delete Contact
// @route  delete /api/contact
// @access private

const deleteContact = asynHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  if (contact.user_id.toString() !== req.user._id) {
    res.status(403);
    throw new Error("User don't have permission to delete");
  }

  await contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };
