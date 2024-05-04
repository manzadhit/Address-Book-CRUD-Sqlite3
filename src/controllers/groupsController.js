const {
  createGroup,
  updateGroup,
  deleteGroup,
  showGroups,
} = require("../models/groups");
const {
  createGroupView,
  groupsErrorView,
  updateGroupView,
  deleteGroupView,
  showGroupsView,
} = require("../views/groupsView");

const createGroupController = async (groupName) => {
  try {
    const group = await createGroup(groupName);
    createGroupView(group);
  } catch (error) {
    groupsErrorView(error);
  }
};

const updateGroupController = async (id, groupName) => {
  try {
    const groupUpdated = await updateGroup(id, groupName);
    updateGroupView(groupUpdated);
  } catch (error) {
    groupsErrorView(error);
  }
};

const deleteGroupController = async (id) => {
  try {
    await deleteGroup(id);
    deleteGroupView();
  } catch (error) {
    groupsErrorView(error);
  }
};

const showGroupsController = async () => {
  try {
    const groups = await showGroups();
    showGroupsView(groups);
  } catch (error) {
    groupsErrorView(error);
  }
};

module.exports = {
  createGroupController,
  updateGroupController,
  deleteGroupController,
  showGroupsController,
};
