const command = process.argv[2];
const argument = process.argv.slice(3);
const { createContactController, helpCommand, updateContactController, deleteContactController, showContactController } = require("./controllers/contactController");
const { createGroupController, updateGroupsController } = require("./controllers/groupsController");


/*
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
> node src/index.js help

*/

switch(command) {
  case "createContact":
    createContactController(argument[0], argument[1], argument[2], argument[3]);
    break;
  case "updateContact":
    updateContactController(argument[0], argument[1], argument[2], argument[3], argument[4]);
    break;
  case "deleteContact":
    deleteContactController(argument[0]);
    break;
  case "showContact":
    showContactController();
    break;
  case "createGroups":
    createGroupController(argument[0]);
    break;
  case "updateGroups":
    updateGroupsController(argument[0], argument[1]);
    break;
  default:
    helpCommand()
    break;
}