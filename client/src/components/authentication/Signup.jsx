import React from "react";

class Signup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="signup-form">
        <form action="#" method="post">
          <h2 className="text-center">Sign up</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
