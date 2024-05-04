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

const updateGroups = (id, groupName) => {
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
            }else if (!data) {
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

module.exports = {
  createGroup,
  updateGroups
};
