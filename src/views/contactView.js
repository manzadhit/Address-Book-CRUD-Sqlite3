// View
const createContactView = (contact) => {
  console.log("Contact Created");
  console.log(`ID : ${contact.id}`);
  console.log(`Name : ${contact.name}`);
  console.log(`Phone Number : ${contact.phoneNumber}`);
  console.log(`Company : ${contact.company}`);
  console.log(`Email : ${contact.email}`);
};

const contactErrorView = (error) => {
  console.log("An error occurred while processing the request", error.message);
}

module.exports = { createContactView, contactErrorView };
