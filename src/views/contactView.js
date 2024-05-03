// View
const createContactView = (contact) => {
  console.log("Contact Created");
  console.log(`ID : ${contact.id}`);
  console.log(`Name : ${contact.name}`);
  console.log(`Phone Number : ${contact.phoneNumber}`);
  console.log(`Company : ${contact.company}`);
  console.log(`Email : ${contact.email}`);
};

const updateContactView = (contact) => {
  console.log("Contact Updated");
  console.log(`ID : ${contact.id}`);
  console.log(`Name : ${contact.name}`);
  console.log(`Phone Number : ${contact.phoneNumber}`);
  console.log(`Company : ${contact.company}`);
  console.log(`Email : ${contact.email}`);
};

const deleteContactView = () => {
  console.log("Successfully delete contact");
}

const contactErrorView = (error) => {
  console.log("An error occurred while processing the request : \n", error.message);
}


const help = () => {
  console.log(`
====================
ADDRESS BOOK COMMAND
====================

> node src/index.js createContact <name> <phoneNumber> <company> <email>
> node src/index.js updateContact <id> <name> <phoneNumber> <company> <email>
> node src/index.js deleteContact <id>
> node src/index.js showContact
> node src/index.js createGroups <groupName>
> node src/index.js updateGroups <id> <groupName>
> node src/index.js deleteGroups <id>
> node src/index.js showGroups
> node src/index.js createContactGroups <contactId> <groupId>
> node src/index.js updateContactGroups <id> <contactId> <groupId>
> node src/index.js deleteContactGroups <id> 
  `);
}

module.exports = {
  createContactView,
  contactErrorView,
  updateContactView,
  deleteContactView,
  help,
};
