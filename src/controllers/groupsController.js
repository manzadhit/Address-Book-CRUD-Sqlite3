const { createGroup, updateGroups } = require("../models/groups");
const { createGroupView, groupsErrorView, updateGroupsView } = require("../views/groupsView");

const createGroupController = async (groupName) => {
  try {
    const group = await createGroup(groupName);
    createGroupView(group);
  } catch (error) {
    groupsErrorView(error);
  }
}

const updateGroupsController = async (id, groupName) => {
  try {
    const groupUpdated = await updateGroups(id, groupName);
    updateGroupsView(groupUpdated);
  } catch (error) {
    groupsErrorView(error);
  }
}

module.exports = { createGroupController, updateGroupsController }
