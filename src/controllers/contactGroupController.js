const { createContactGroup } = require("../models/contactGroups");
const { contactGroupErrorView, createContactGroupView } = require("../views/contactGroupView")


const createContactGroupController = async (contactId, groupId) => {
  try {
    const contactGroup = await createContactGroup(contactId, groupId);
    createContactGroupView(contactGroup);
  } catch (error) {
    contactGroupErrorView(error);
  }
}

module.exports = {createContactGroupController};