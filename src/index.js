const command = process.argv[2];
const argument = process.argv.slice(3);
const {
  createContactController,
  helpCommand,
  updateContactController,
  deleteContactController,
  showContactController,
} = require("./controllers/contactController");
const {
  createContactGroupController,
  updateContactGroupController,
  deleteContactGroupController,
} = require("./controllers/contactGroupController");
const {
  createGroupController,
  updateGroupController,
  deleteGroupController,
  showGroupsController,
} = require("./controllers/groupsController");

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

switch (command) {
  case "createContact":
    createContactController(argument[0], argument[1], argument[2], argument[3]);
    break;
  case "updateContact":
    updateContactController(
      argument[0],
      argument[1],
      argument[2],
      argument[3],
      argument[4]
    );
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
    updateGroupController(argument[0], argument[1]);
    break;
  case "deleteGroups":
    deleteGroupController(argument[0]);
    break;
  case "showGroups":
    showGroupsController();
    break;
  case "createContactGroups":
    createContactGroupController(argument[0], argument[1]);
    break;
  case "updateContactGroups":
    updateContactGroupController(argument[0], argument[1], argument[2]);
    break;
  case "deleteContactGroups":
    deleteContactGroupController(argument[0]);
    break;
  default:
    helpCommand();
    break;
}
