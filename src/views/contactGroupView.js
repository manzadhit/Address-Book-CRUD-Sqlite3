// View
const createContactGroupView = (contactGroup) => {
  console.log("ContactGroup Created");
  console.log(`ID : ${contactGroup.id}`);
  console.log(`contactId : ${contactGroup.contactId}`);
  console.log(`groupId : ${contactGroup.groupId}`);
};


const contactGroupErrorView = (error) => {
  console.log(
    "An error occurred while processing the request \n message :",
    error.message
  );
};

module.exports = {
  createContactGroupView,
  contactGroupErrorView
};
