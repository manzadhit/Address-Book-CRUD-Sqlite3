const command = process.argv[2];
const argument = process.argv.slice(3);
const { createContactController } = require("./controllers/contactController");


/*
====================
ADDRESS BOOK COMMAND
====================

> node index.js createContact <name> <phoneNumber> <company> <email>
> node index.js updateContact <id> <name> <phoneNumber> <company> <email>
> node index.js deleteContact <id>
> node index.js showContact
> node index.js createGroups <groupName>
> node index.js updateGroups <id> <groupName>
> node index.js deleteGroups <id>
> node index.js showGroups
> node index.js createContactGroups <contactId> <groupId>
> node index.js updateContactGroups <id> <contactId> <groupId>
> node index.js deleteContactGroups <id> 
> node index.js help

*/

switch(command) {
  case "createContact":
    createContactController(argument[0], argument[1], argument[2], argument[3]);
    break;
  default:
    break;
}