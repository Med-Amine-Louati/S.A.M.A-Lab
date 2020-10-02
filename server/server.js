var express = require("express");
var bodyParser = require("body-parser");
const db = require('../db/database.js');
const port = 3000;
const app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());

app.post("/create_organization",async (req,res)=>{
  try{
    await db.createOrganization(req.body.userID,req.body.name,req.body.description);
  }catch(e){console.log(e)}
})

app.get("/organization/:userID",async (req,res)=>{
  try{
    const data = await db.getOrganization(req.params.userID);
    res.send(data)
  }catch(e){console.log(e)}
})

app.post("/deleteOrg",async (req,res)=>{
  try{
    await db.deleteOrganisation(req.body.userID,req.body.id)
  }catch(e){console.log(e)}
})

app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
