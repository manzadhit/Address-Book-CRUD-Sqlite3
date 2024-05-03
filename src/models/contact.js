const db = require("../connection/connection");

const createContact = (name, phoneNumber, company, email) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Contacts (name, phoneNumber, company, email) VALUES (?, ?, ?, ?)`,
      [name, phoneNumber, company, email],
      (err) => {
        if (err) {
          reject(err);
        } else {
          db.get(
            "SELECT * FROM Contacts WHERE name = ? AND phoneNumber = ? AND company = ? AND email = ?",
            [name, phoneNumber, company, email],
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

module.exports = { createContact };
