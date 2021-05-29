import React from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      style :"none"
    };
  }

  render() {
      let {email,password,style}=this.state;
      
    return (
        <div id="login-row" className="row justify-content-center align-items-center">
        <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" action="" method="post">
                    <h3 className="text-center">Login</h3>
                    <div className="form-group">
                        <label for="username" className="text-info">Email:</label><br/>
                        <input type="email" name="email" id="email" className="form-control"/>
                        <span className="text-info errormessage" style={{display:style}}>Email Id is required</span>
                    </div>
                    <div class="form-group">
                        <label for="password" className="text-info">Password:</label><br/>
                        <input type="text" name="password" id="email" className="form-control"/>
                        <span className="text-info errormessage" style={{display:style}}>Email Id is required</span>
                    </div>
                   
                   
                </form>
            </div>
        </div>
    </div>
    );
  }
}
export default Login;
