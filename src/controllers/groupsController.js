const { createGroup, updateGroup, deleteGroup } = require("../models/groups");
const { createGroupView, groupsErrorView, updateGroupView, deleteGroupView } = require("../views/groupsView");

const createGroupController = async (groupName) => {
  try {
    const group = await createGroup(groupName);
    createGroupView(group);
  } catch (error) {
    groupsErrorView(error);
  }
}

const updateGroupController = async (id, groupName) => {
  try {
    const groupUpdated = await updateGroup(id, groupName);
    updateGroupView(groupUpdated);
  } catch (error) {
    groupsErrorView(error);
  }
}

const deleteGroupController = async (id) => {
  try {
    await deleteGroup(id);
    deleteGroupView()
  } catch (error) {
    groupsErrorView(error);
  }
}

module.exports = {
  createGroupController,
  updateGroupController,
  deleteGroupController,
};
