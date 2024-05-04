// View
const createContactGroupView = (contactGroup) => {
  console.log("ContactGroup Created");
  console.log(`ID : ${contactGroup.id}`);
  console.log(`contactId : ${contactGroup.contactId}`);
  console.log(`groupId : ${contactGroup.groupId}`);
};

const updateContactGroupView = (contactGroupUpdated) => {
  console.log("ContactGroup updated");
  console.log(`ID : ${contactGroupUpdated.id}`);
  console.log(`contactId : ${contactGroupUpdated.contactId}`);
  console.log(`groupId : ${contactGroupUpdated.groupId}`);
};


const contactGroupErrorView = (error) => {
  console.log(
    "An error occurred while processing the request \n message :",
    error.message
  );
};

const deleteContactGroupView = () => {
  console.log("Successfully delete Contact Group");
};

module.exports = {
  createContactGroupView,
  contactGroupErrorView,
  updateContactGroupView,
  deleteContactGroupView,
};
