const { createContact } = require("../models/contact");
const { createContactView, contactErrorView } = require("../views/contactView");

const createContactController = async(name, phoneNumber, company, email) => {
  try {
    const contact = await createContact(name, phoneNumber, company, email);
    await createContactView(contact);
  } catch (error) {
    await contactErrorView(error);
  }
}

module.exports = { createContactController };