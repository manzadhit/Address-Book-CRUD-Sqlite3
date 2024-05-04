const { createContactGroup, updateContactGroups, deleteContactGroup } = require("../models/contactGroups");
const { contactGroupErrorView, updateContactGroupView, createContactGroupView, deleteContactGroupView } = require("../views/contactGroupView")


const createContactGroupController = async (contactId, groupId) => {
  try {
    const contactGroup = await createContactGroup(contactId, groupId);
    createContactGroupView(contactGroup);
  } catch (error) {
    contactGroupErrorView(error);
  }
}

const updateContactGroupController = async (id, contactId, groupId) => {
  try {
    const contactGroupUpdated = await updateContactGroups(id, contactId, groupId);
    updateContactGroupView(contactGroupUpdated);
  } catch (error) {
    contactGroupErrorView(error);
  }
}

const deleteContactGroupController = async (id) => {
  try {
    await deleteContactGroup(id);
    deleteContactGroupView();
  } catch (error) {
    contactGroupErrorView(error);
  }
};

module.exports = {
  createContactGroupController,
  updateContactGroupController,
  deleteContactGroupController,
};