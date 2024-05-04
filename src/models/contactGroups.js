const db = require("../connection/connection");

const createContactGroup = (contactId, groupId) => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO GroupContact (contactId, groupId) VALUES (?, ?)",
      [contactId, groupId],
      (err) => {
        if (err) {
          reject(err);
        } else {
          db.get(
            "SELECT * FROM GroupContact WHERE contactId = ? AND groupId = ?",
            [contactId, groupId],
            (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            }
          );
        }
      }
    );
  });
};

const updateContactGroups = (id, contactId, groupId) => {
  return new Promise((resolve, reject) => {
    db.run(
      `
        UPDATE GroupContact
        SET contactId = ?, groupId = ?
        WHERE id = ?
        `,
      [contactId, groupId, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          db.get(
            "SELECT * FROM GroupContact WHERE id = ?",
            [id],
            (err, data) => {
              if (err) {
                reject(err);
              } else if (!data) {
                reject(new Error(`GroupContact with id ${id} not found`));
              } else {
                resolve(data);
              }
            }
          );
        }
      }
    );
  });
};

const deleteContactGroup = (id) => {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM GroupContact WHERE id = ?", [id], (err, data) => {
      if (err) {
        reject(err);
      } else if (!data) {
        reject(new Error(`ContactGroups with id ${id} not found`));
      } else {
        db.run("DELETE FROM GroupContact WHERE id = ?", [id], (err) => {
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

module.exports = { createContactGroup, updateContactGroups, deleteContactGroup };
