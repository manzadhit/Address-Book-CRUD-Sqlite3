const db = require("../connection/connection");

const createGroup = (groupName) => {
  return new Promise((resolve, reject) => {
    db.run("INSERT INTO Groups (groupName) VALUES (?)", [groupName], (err) => {
      if (err) {
        reject(err);
      } else {
        db.get(
          "SELECT * FROM Groups WHERE groupName = ?",
          [groupName],
          (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          }
        );
      }
    });
  });
};

const updateGroup = (id, groupName) => {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE Groups SET groupName = ? WHERE id = ?",
      [groupName, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          db.get("SELECT * FROM Groups WHERE id = ?", [id], (err, data) => {
            if (err) {
              reject(err);
            } else if (!data) {
              reject(new Error(`Group with id ${id} not found`));
            } else {
              resolve(data);
            }
          });
        }
      }
    );
  });
};

const deleteGroup = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM Groups WHERE id = ?", [id], (err, data) => {
      if (err) {
        reject(err);
      } else if (!data) {
        reject(new Error(`Groups with id ${id} not found`));
      } else {
        db.run("DELETE FROM Groups WHERE id = ?", [id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    });
  });
};

const showGroups = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `
    SELECT Groups.groupName, Contacts.name, Contacts.phoneNumber, Contacts.company, Contacts.email
    FROM Groups
    JOIN GroupContact ON GroupContact.groupId = Groups.id
    JOIN Contacts ON GroupContact.contactId = Contacts.id 
    `,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

module.exports = {
  createGroup,
  updateGroup,
  deleteGroup,
  showGroups,
};
