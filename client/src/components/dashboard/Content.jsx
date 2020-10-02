import React from "react";
import { Switch, Route } from "react-router-dom";
import OrganizationsList from "../organizations/OrganizationsList.jsx";
import AddOrganization from "../organizations/AddOrganization.jsx";
import ProjectsList from "../projects/ProjectsList.jsx"
import AddProject from "../projects/AddProject.jsx";
import Home from "./Home.jsx";
import OrganizationDetail from "../organizations/OrganizationDetail.jsx";

var Content = () => (
  <div>
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/organizations">
        <OrganizationsList />
      </Route>
      <Route path="/oranizations/:id" component={OrganizationDetail} />
      <Route path="/organizations/new">
        <AddOrganization />
      </Route>
      <Route exact path="/projects/">
        <ProjectsList />
      </Route>
      <Route path="/projects/new">
        <AddProject />
      </Route>
    </Switch>
  </div>
);

export default Content;
