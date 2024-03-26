import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className="login-file bor">
        <h1 className="text-center">Login</h1>
        <p>We suggest using the email address you use at work.</p>
        <h2>Address Email</h2>
        <input type="text" placeholder="Enter Email" />
        <h2>Password</h2>
        <input className="text-box" type="text" placeholder=" Enter Password " />
        <p className="forget">Forgot password</p>
        <button className="login-button">Login</button>
        <p>OR</p>
       <button className="click-button"><img className="google-img" src='/img/google.webp'/>
       <span>Continue with Google</span>
       </button>
       <button className="button-github"><img className="git-image" src='/github.png'/>
       <span>Continue with GitHub</span>
       </button>
       <p>You dont have an account yet? <span className="link-tag">Sing up</span></p>
       <p className="disc">By Creating account you agree to our <span>Terms of Service </span>and <span>Privacy Policy</span></p>
      </div>
    </Fragment>
  );
};

export default Login;
