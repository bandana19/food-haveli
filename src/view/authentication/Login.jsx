import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useForm } from "react-hook-form";
import { Toaster } from "../../components/toaster/Toaster";
import { getUserAction, loginAction } from "../../service/action/authentication";
import { useDispatch } from "react-redux";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginButton = (data) => {
    const callBack = (res) => {
      localStorage.setItem("token", res.token);
      if (res.user.role === "user") {
        navigate("/user/dashboard");
      } else if (res.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (res.user.role === "delivery") {
        navigate("/delevery/dashboard");
      } else if (res.user.role === "client") {
        navigate("/restraunt/dashboard");
      }

      Toaster.success("Login Successfully");
    };
    dispatch(loginAction({ data: data, cb: callBack }));
  };

  const callback=(res)=>{
      if (res.user.role === "user") {
        navigate("/user/dashboard");
      } else if (res.user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (res.user.role === "delivery") {
        navigate("/delevery/dashboard");
      } else if (res.user.role === "client") {
        navigate("/restraunt/dashboard");
      }

  }
  useEffect(()=>{
   dispatch(getUserAction({cb:callback}))
  },[])
  
  return (
    <Fragment>
      <Header />
      <div className="login-file bor">
        <h1 className="text-center">Login</h1>
        <p>We suggest using the email address you use at work.</p>
        <h2 className={errors?.email && "text-danger"}> Email</h2>
        <input
          type="text"
          {...register("email", {
            required: true,
          })}
          placeholder="Enter Email"
        />
        <h2 className={errors?.password && "text-danger"}>Password</h2>
        <input
          className="text-box"
          {...register("password", {
            required: true,
          })}
          type="text"
          placeholder=" Enter Password "
        />
        <p className="forget">Forgot password</p>

        <button className="login-button" onClick={handleSubmit(loginButton)}>
          Login
        </button>

        <p>OR</p>
        <button className="click-button">
          <img className="google-img" src="/img/google.webp" alt="" />
          <span>Continue with Google</span>
        </button>
        <button className="button-github">
          <img className="git-image" src="/github.png" alt="" />
          <span>Continue with GitHub</span>
        </button>
        <p>
          You dont have an account yet?{" "}
          <span className="link-tag">
            <Link to={"/register"}>Sing up</Link>
          </span>
        </p>
        <p className="disc">
          By Creating account you agree to our <span>Terms of Service </span>and{" "}
          <span>Privacy Policy</span>
        </p>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
