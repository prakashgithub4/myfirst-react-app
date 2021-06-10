import React from "react";
import axios from "axios";

import {Link} from'react-router-dom';
import {connect} from 'react-redux';
import {loginMiddlware} from '../reduxStore/middlewares';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      show: "none",
      flag:true,
      message:null
    };
  }

  _changeMail = (event) => {
    let email = event.target.value;
   
    this.setState({
      email: email,
    });
  };
  _onSetPassword =(event)=>{
     let password = event.target.value;
     this.setState({
      password:password
     });
  }
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
    let loginmiddleware = loginMiddlware(this.state);
     this.props.dispatch(loginmiddleware)
  };
  
  

  render() {
   
      
    let { error, show,message } = this.state;

    return (
      <div
        id="login-row"
        className="row justify-content-center align-items-center"
      >
        {message}
       
        <div id="login-column" className="col-md-6">
          <div id="login-box" className="col-md-12">
            <form id="login-form" className="form" action="" method="post">
              <h3 className="text-center">Login</h3>
              {(this.state.flag==false)?<span>Invalid user name or password</span>:null}
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
                  type="password"
                  name="password"
                  id="email"
                  className="form-control"
                  onKeyUp={this._onSetPassword}
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
                <Link to={'/register'}>Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,props){
  console.log(state)
  if(state.AuthReducer?.isLoading == true){
    props.history.push('/');
  }else{
   return {
    isLoading:state.AuthReducer?.isLoading
   } 
  }
 
}
export default connect(mapStateToProps)(Login);
