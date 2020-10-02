import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/authentication/Login.jsx";
import Signup from "./components/authentication/Signup.jsx";
import DashBoard from "./components/dashboard/DashBoard.jsx";
import axios from "axios"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data : []
    };
  }
componentDidMount() {
 
}
  render() {
    return (
      <DashBoard />
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
