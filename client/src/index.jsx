import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/authentication/Login.jsx";
import Signup from "./components/authentication/Signup.jsx";
import DashBoard from "./components/dashboard/DashBoard.jsx";



export class App extends React.Component {
  render() {
    return (
      <DashBoard />
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
