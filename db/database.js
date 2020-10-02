const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

/***** crud operations for organisations table *****/
const createOrganization = function (userID, name, description) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO organizations set ?`,
      { name, description, userID },
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


const getOrganization = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from organizations where userID=${userID}`,
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

const deleteOrganisation = function (userID, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `delete from organizations where userID=${userID} and id=${id}`,
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

const updateOrgenazation = function (id, name, description, userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `update organizations set name=${name},description=${description} where id=${id} and userID=${userID} `,
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

/***** crud operations for projects table *****/
const addProject = function (name, description, organizationID) {
  return new Promise((resolve, reject) => {
    connection.query(`insert into projects set ?`),
      { name, description, organizationID },
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      };
  });
};

const getproject = function (organizationID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from organizations where organizationID=${organizationID}`,
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

const deleteProject = function (organizationID, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `delete from projects where organizationID=${organizationID} and id=${id}`,
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
/********I think this update gone be with only the project id because the render will be the organization id***/
const updateProject = function (id, name, description, organizationID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `update projects set name=${name},description=${description} where id=${id} and organizationID=${organizationID} `,
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
/************************** Crud operations for privilege table ***Create & Delete********************************/
/***********Create Privilege**********************/
const createPrivilege = function (name) {
  return new Promise((resolve, reject) => {
    connection.query(`insert into Privileges set ?`),
      {name},
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      };
  });
};
/***********Delete Privilege**********************/
const deletePrivilege = function (id) {
    return new Promise((resolve, reject) => {
        connection.query(`delete from projects where id=${id}`, (e, result) => {
            if (e) {
                console.log(e);
                return reject();
            }
            resolve(result);
        });
    });
};

/******************Create User************************** */
const createUser = function (username,first_name,last_name,password,email,role,privilege) {

    return new Promise((resolve, reject) => {
        connection.query(`insert into users set ? `), {username,first_name,last_name,password,email,role,privilege},
        (e, result) => {
            if (e) {
                console.log(e);
                return reject();
            }
            resolve(result);
        };
    });
};



/***** displaying the connection to the database *****/
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});



module.exports = {
  connection,
  createOrganization,
  getOrganization,
  deleteOrganisation,
  updateOrgenazation,
  /* just to clarify */
  addProject,
  getproject,
  deleteProject,
  updateProject,

  /**Users */
  createUser,

};
