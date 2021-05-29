import React from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      show: "none",
    };
  }

  _changeMail = (event) => {
    let email = event.target.value;
    console.log(email);
    this.setState({
      email: email,
    });
  };
  _onSubmitForm = () => {
    
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.state.email == "") {
      this.setState({
        error: "Email field is empty",
        show: "block",
      });
    } else if (!this.state.email.match(validRegex)) {
      this.setState({
        error: "Email Address is not valid",
        show: "block",
      });
    } else {
      this.setState({
        error: "",
        show: "none",
      });
    }
  };

  render() {
    let { error, show } = this.state;

    return (
      <div
        id="login-row"
        className="row justify-content-center align-items-center"
      >
        <div id="login-column" className="col-md-6">
          <div id="login-box" className="col-md-12">
            <form id="login-form" className="form" action="" method="post">
              <h3 className="text-center">Login</h3>
              <div className="form-group">
                <label for="username" className="text-info">
                  Email:
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onKeyUp={this._changeMail}
                  className="form-control"
                />
                <span
                  className="text-info errormessage"
                  style={{ display: show }}
                >
                  {error}
                </span>
              </div>
              <div className="form-group">
                <label for="password" className="text-info">
                  Password:
                </label>
                <br />
                <input
                  type="text"
                  name="password"
                  id="email"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this._onSubmitForm}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
