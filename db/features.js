const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

/************************** Crud operations for Feachhhhheeeeerss table ***Create & Delete********************************/
/***********Create Feachhhhheeeeers Done **********************/
const query = (str) => {
  return new Promise((resolve, reject) => {
    connection.query(str, (e, result) => {
      if (e) {
        console.log(e);
        return reject();
      }
      resolve(result);
    });
  });
};
const createFeature = function(title, description, state, posterID, projectID) {

  return new Promise((resolve, reject) => {
    connection.query(
      `insert into Features set ?`,
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

/***********Delete Feachhhhheeeeers**********************/
const deleteFeature = function(id, projectID) {

  return new Promise((resolve, reject) => {
    connection.query(
      `delete from Features where id=${id} and projectID = ${projectID}`,
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

/*********************update  Feachhhhheeeeers for only the state***************************** */

const updateFeature = async (id, state, projectID) => {
  try {
    let result = await query(
      `update Features set state = "${state}" where id = ${id} and projectID = ${projectID}`
    );
    console.log({ result });
    return result;
  } catch (e) {
    console.log({ e });
  }
};



/*********************Get all the Feachhhhheeeeers with the id Done***************************** */
const getAllFeature = function(projectID) {

  return new Promise((resolve, reject) => {
    connection.query(
      `select * from Features where projectID=${projectID}`,
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
  /*Feachhhhheeeeers*/
  createFeature,
  deleteFeature,
  updateFeature,
  getAllFeature,
};
