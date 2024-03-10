import "./register-and-login.styles.scss";
import React from "react";
import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";

const RegisterAndLogin = () => {
  return (
    <div className={"pt-5 pl-3 pr-3 pb-5"} style={{ minHeight: "91vh" }}>
      <div className="row">
        <div className="col-md-6 col-sm-12" style={{margin: 'auto'}}>
        {/* <Register /> */}
         
        <Login />
        </div>
      </div>
    </div>
  );
};

export default RegisterAndLogin;
