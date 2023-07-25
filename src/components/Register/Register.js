import React from "react";
import "./register.scss";
import RegisterIcon from "../../Images/Group 21.svg";
import GIcon from "../../Images/Group 22.svg";
import FIcon from "../../Images/Group 23.svg";
import AIcon from "../../Images/Group 24.svg";

const Register = () => {
  return (
    <>
      <div className="row d-flex register_container">
        <div className="col-lg-6 col-md-12 register_heading">
          <h3>
            Start your journey <br />
            with us.
          </h3>
          <img src={RegisterIcon} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 register_heading_right">
          <span className="welcome">Welcome </span>
          <h1>Create new account</h1>
          <h3 className="already_have_account">
            Already have an account?{" "}
            <span style={{ color: "red" }}>Log In</span>
          </h3>

          <form>
            <div className="row">
              <div className="col-lg-6 col-md-12 first_name">
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="form-control"
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="col-lg-6 col-md-12 first_name">
                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label for="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile_number"
                  name="mobile"
                  className="form-control"
                  required
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label for="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="form-control"
                  required
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="form-check-input"
                required
              />
              <label for="terms" className="form-check-label">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="submit_btn">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
            <h3 className="already_have_account_mobile">
              Already have an account?{" "}
              <span style={{ color: "red" }}>Log In</span>
            </h3>
          </form>

          <div className="line-container">
            <hr className="line" />
            <span className="text">Or continue with</span>
            <hr className="line" />
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center login_icons">
              <img src={GIcon} alt="" />
              <img src={FIcon} alt="" />
              <img src={AIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
