import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../img/login-right.png";
import "./Login.css";
const Login = () => {
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  };

  return (
    <Fragment>
      <section className="cover">
        <div className="wrapper">
          <div className="login">
            <div className="title">
              <h1>login</h1>
            </div>
            <div className="form">
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="input-container">
                  <label>Email Address </label>
                  <input type="email" name="email" required />
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="pass" required />
                </div>

                <div className="rows">
                  <div className="check">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label htmlFor="vehicle1">Remember Me</label>
                  </div>
                  <div className="forget-pass">
                    <Link to="">Forget Password</Link>
                  </div>
                </div>

                <div className="button-container">
                  <input type="submit" value="LOGIN" />
                </div>
                <div className="have-account">
                  <p>Does Not Have an account?</p>
                  <Link to="/">SignUp</Link>
                </div>
                <div className="login-with">
                  <p>or login with</p>
                </div>
                <div className="two-link">
                  <div className="google">
                    <i class="fab fa-google ic"></i>
                    <Link to="/">Google</Link>
                  </div>
                  <div className="facebook">
                    <i className="fab fa-facebook-f ic"></i>
                    <Link to="/">Facebook</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="image">
            <img src="/images/shot2.jpg" alt="image" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
