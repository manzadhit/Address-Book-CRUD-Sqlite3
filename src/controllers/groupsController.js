const { createGroup } = require("../models/groups");
const { createGroupView, groupsErrorView } = require("../views/groupsView");

const createGroupController = async (groupName) => {
  try {
    const group = await createGroup(groupName);
    createGroupView(group);
  } catch (error) {
    groupsErrorView(error);
  }
}

module.exports = { createGroupController }
