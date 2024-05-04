// View
const createGroupView = (group) => {
  console.log("Group Created");
  console.log(`ID : ${group.id}`);
  console.log(`GroupName : ${group.groupName}`);
};

const updateGroupView = (groupUpdated) => {
  console.log("Group Updated");
  console.log(`ID : ${groupUpdated.id}`);
  console.log(`GroupName : ${groupUpdated.groupName}`);
};

const deleteGroupView = () => {
  console.log("Successfully delete group");
}


const groupsErrorView = (error) => {
    console.log(
      "An error occurred while processing the request \n message :",
      error.message
    );
}

module.exports = {
  createGroupView,
  groupsErrorView,
  updateGroupView,
  deleteGroupView
};
