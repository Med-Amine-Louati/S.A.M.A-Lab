DROP DATABASE IF EXISTS project;
CREATE DATABASE project;
USE project;


CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL UNIQUE,
  first_name varchar(255) NOT NULL UNIQUE,
  last_name varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL ,
  email varchar(255) NOT NULL UNIQUE,
  role varchar(255) NOT NULL,
  privilege varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);
 CREATE TABLE organizations (
   id int NOT NULL AUTO_INCREMENT,
   name varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   userID int NOT NULL,
   FOREIGN KEY (userID) REFERENCES users(id),
    PRIMARY KEY (ID)
);

CREATE TABLE projects (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250),
  organizationID int NOT NULL,
  FOREIGN KEY (organizationID) REFERENCES organizations(id),
  PRIMARY KEY (ID)
);

CREATE TABLE Privileges(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);
CREATE TABLE Privll_User(
   id int NOT NULL AUTO_INCREMENT,
  userID int NOT NULL,
  privID int NOT NULL,
  FOREIGN KEY (userID) REFERENCES Users(id),
  FOREIGN KEY (userID) REFERENCES Privileges(id),
  PRIMARY KEY (ID)
);



CREATE TABLE Issues(
     id int NOT NULL AUTO_INCREMENT,
   title varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   postedID int NOT NULL,
   projectID int NOT NULL,
   FOREIGN KEY (projectID) REFERENCES projects(id),
   FOREIGN KEY (postedID) REFERENCES users(id),
   state varchar(50) NOT NULL,
   PRIMARY KEY (ID)
);



CREATE TABLE Feachers(
     id int NOT NULL AUTO_INCREMENT,
   title varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   postedID int NOT NULL,
   projectID int NOT NULL,
   FOREIGN KEY (projectID) REFERENCES projects(id),
   FOREIGN KEY (postedID) REFERENCES users(id),
   state varchar(50) NOT NULL,
   PRIMARY KEY (ID)
   
);

CREATE TABLE Comments(
  id int NOT NULL AUTO_INCREMENT,
  text varchar(250) NOT NULL,
   userID int NOT NULL,
   issueID int NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(id),
   FOREIGN KEY (issueID) REFERENCES issues(id),
   createdAt datetime NOT NULL,
PRIMARY KEY (ID)
);

CREATE TABLE Messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(250) NOT NULL,
  senderID int NOT NULL,
  receiverID int NOT NULL,
  FOREIGN KEY (senderID) REFERENCES users(id),
  FOREIGN KEY (receiverID) REFERENCES users(id),
  PRIMARY KEY (ID)
);