import React from "react";
import { Checkbox } from "@nextui-org/react";
import { AiFillEyeInvisible } from "react-icons/ai";

import "./signIn.scss";

const SignIn = () => {
  return (
    <main className="signIn app__flex auth">
      <section className="auth__img img-size">
        <img
          src="https://res.cloudinary.com/intuneteq/image/upload/v1673438686/Link-park-v2/Frame_15971_ivgcpf.png"
          alt="sign-in"
        />
      </section>
      <form className="auth__form column-flex" action="submit">
        <h2 className="sub-text">Welcome Back Mr/Mrs</h2>
        <p className="p-text">Please enter your details to get started</p>
        <section className="column-flex form-inputs">
          <div className="form-control column-flex">
            <label>Email Address</label>
            <div>
              <input type="email" name="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="form-control column-flex">
            <label>Password</label>
            <div>
              <input type="password" name="email" placeholder="Password" />
              <AiFillEyeInvisible />
            </div>
          </div>
          <div className="remember-me app__flex-2">
            <div className="app__flex-2">
              <Checkbox className="check-box" />
              <span>Remeber me</span>
            </div>
            <span>Forgot password?</span>
          </div>
          <div className="form-btn">
            <button className="btn-primary">Sign In</button>
          </div>
        </section>
      </form>
    </main>
  );
};

export default SignIn;
