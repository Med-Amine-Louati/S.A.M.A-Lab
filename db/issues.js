const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

/************************** Crud operations for Issues table ***Create & Delete********************************/
/***********Create Issue Done **********************/
// const query = (str) => {
//   return new Promise((resolve, reject) => {
//     connection.query(str, (e, result) => {
//       if (e) {
//         console.log(e);
//         return reject();
//       }
//       resolve(result);
//     });
//   });
// };
const createIssue = function (title, description, state, posterID, projectID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `insert into issues set ?`,
      {
        title,
        description,
        state,
        posterID,
        projectID,
      },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};

/***********Delete Issue**********************/
const deleteIssue = function (id, projectID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `delete from issues where id=${id} and projectID = ${projectID}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};

/*********************update  Issue for only the state***************************** */

const updateIssue = async (id, state, projectID) => {
  try {
    let result = await query(
      `update issues set state = "${state}" where id = ${id} and projectID = ${projectID}`
    );
    console.log({ result });
    return result;
  } catch (e) {
    console.log({ e });
  }
};



/*********************Get all the Issue with the id Done***************************** */
const getAllIssue = function (projectID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from Issues where projectID=${projectID}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};
/******************************************* */
module.exports = {
  /*Issue*/
  createIssue,
  deleteIssue,
  updateIssue,
  getAllIssue,
};
