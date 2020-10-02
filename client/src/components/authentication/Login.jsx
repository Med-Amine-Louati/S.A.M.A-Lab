import React from "react";

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="login-form">
        <form action="#" method="post" >
          <h2 className="text-center">Log in</h2>
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
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" >
              Log in
            </button>
          </div>
        </form>
        <p className="text-center">
          <a href="#" onClick={()=>{}}>Create an Account</a>
        </p>
      </div>
    );
  }
}

export default Login;
