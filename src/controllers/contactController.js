const { createContact, updateContact } = require("../models/contact");
const { createContactView, updateContactView, contactErrorView, help } = require("../views/contactView");

const createContactController = async(name, phoneNumber, company, email) => {
  try {
    const contact = await createContact(name, phoneNumber, company, email);
    createContactView(contact);
  } catch (error) {
    contactErrorView(error);
  }
}

const updateContactController = async(id, name, phoneNumber, company, email) => {
  try {
    const contact = await updateContact(id, name, phoneNumber, company, email);
    updateContactView(contact);
  } catch (error) {
    contactErrorView(error);
  }
}

const helpCommand = () => {
  help()
}

module.exports = { createContactController, updateContactController, helpCommand };