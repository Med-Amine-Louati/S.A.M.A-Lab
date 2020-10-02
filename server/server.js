var express = require("express");
var bodyParser = require("body-parser");
const db = require("../db/database.js");
const ise = require("../db/issues.js");
const feature = require("../db/features.js");
const comments = require("../db/comments.js");
const port = 3000;
const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());

app.post("/create_organization", async (req, res) => {
  try {
    await db.createOrganization(
      req.body.userID,
      req.body.name,
      req.body.description
    );
  } catch (e) {
    console.log(e);
  }
});

app.get("/organization/:userID", async (req, res) => {
  try {
    const data = await db.getOrganization(req.params.userID);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

app.post("/deleteOrg", async (req, res) => {
  try {
    await db.deleteOrganisation(req.body.userID, req.body.id);
  } catch (e) {
    console.log(e);
  }
});

/***************************Issues************************************ */
/********************Create *****/
app.post("/create_issue", async (req, res) => {
  try {
    console.log(req.body);
    await ise.createIssue(
      req.body.title,
      req.body.description,
      req.body.state,
      req.body.posteposterIDID,
      req.body.projectID
    );

    res.send("cool ");
  } catch (e) {
    console.log(e);
  }
});
/**
 * Get all the issues  by projectID
 */

app.get("/get_Issue/:projectID", async (req, res) => {
  try {
    const issues = await ise.getAllIssue(req.params.projectID);
    res.send(issues);
  } catch (e) {
    console.log(e);
  }
});
/********************************Done*********************************** */

/****************************Delete ************************** */

app.post("/delete_issue", async (req, res) => {
  try {
    await ise.deleteIssue(req.body.id, req.body.projectID);
    res.send("coool");
  } catch (e) {
    console.log(e);
  }
});

/********************************Done*********************************** */

/****************************Update ************************** */

app.put("/update_Issue/:id", async (req, res) => {
  try {
    await ise.updateIssue([req.params.id], req.body.state, req.body.projectID);
    res.send("cool");
  } catch (e) {
    console.log(e);
  }
});
/***************************Feacherssssssss************************************ */
/********************Create *****/
app.post("/create_feature", async (req, res) => {
  try {
    console.log(req.body);
    await feature.createFeature(
      req.body.title,
      req.body.description,
      req.body.state,
      req.body.posterID,
      req.body.projectID
    );

    res.send("cool ");
  } catch (e) {
    console.log(e);
  }
});
/*************************Done************************* */

/****************************Get All************************** */
app.get("/get_feacher/:projectID", async (req, res) => {
  try {
    await feature.getAllFeature(req.params.projectID);
    res.send("cool");
  } catch (e) {
    console.log(e);
  }
});
/********************************Done*********************************** */

/****************************Delete ************************** */

app.post("/delete_feacher", async (req, res) => {
  try {
    await feature.deleteFeature(req.body.id, req.body.projectID);
    res.send("coool");
  } catch (e) {
    console.log(e);
  }
});

/********************************Done*********************************** */

/****************************Update ************************** */

app.put("/update_feacher/:id", async (req, res) => {
  try {
    await feature.updateFeature(
      [req.params.id],
      req.body.state,
      req.body.projectID
    );
    res.send("cool");
  } catch (e) {
    console.log(e);
  }
});
/*******************************Comments Crud ************************************************* */
/*******************Create comments  */
app.post("/createComment", async (req, res) => {
  try {
    console.log(req.body);
    res.send(
      await comments.createComment(
        req.body.text,
        req.body.userID,
        req.body.issueID
      )
    );

    
  } catch (e) {
    console.log(e);
  }
});
app.get("/getComments/:projectID", async (req, res) => {
  try {
    res.send(await comments.getAllFeature(req.params.projectID));
    
  } catch (e) {
    console.log(e);
  }
});
/********************************Done with only modif title*********************************** */

app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
