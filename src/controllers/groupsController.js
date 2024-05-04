const { createGroup, updateGroup } = require("../models/groups");
const { createGroupView, groupsErrorView, updateGroupView } = require("../views/groupsView");

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

module.exports = { createGroupController, updateGroupController }
