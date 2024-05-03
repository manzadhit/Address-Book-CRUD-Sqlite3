// View
const createGroupView = (group) => {
  console.log("Group Created");
  console.log(`ID : ${group.id}`);
  console.log(`GroupName : ${group.groupName}`);
};

const groupsErrorView = (error) => {
    console.log(
      "An error occurred while processing the request : \n",
      error.message
    );
}

module.exports = {
  createGroupView,
  groupsErrorView
};
