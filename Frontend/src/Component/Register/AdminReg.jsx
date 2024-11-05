import React from "react";
import "./Register.css";
import StudentReg from "./StudentReg";
// import { Link } from "react-router-dom"

const AdminReg = () => {
  return (
    <div className="container form__ --100vh">
     <div className="form-container">
     <p className="title">Create an account</p>
      <form className="form">
        <div className="--dir-column">
          <label htmlFor="fullname">Full name:</label>
          <input
            type="text"
            className="input"
            name="fullname"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="--dir-column">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="--dir-column">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div className="--dir-column">
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="card">
          <ul>
            <li className="indicator">
              <span>&nbsp; Lowercase & Uppercase</span>
            </li>
            <li className="indicator">
              <span>&nbsp; Number(0-9)</span>
            </li>
            <li className="indicator">
              <span>
                &nbsp; Special Character(!@#$^&*)
              </span>
            </li>
            <li className="indicator">
              <span>&nbsp; At least 6 Characters.</span>
            </li>
          </ul>
        </div>
        <button className="--btn" >
          Signing you up...  Create Account
        </button>
      </form>

      {/* <p>
        Already have an account? Login
      </p> */}
     </div>
    </div>
  );
};

export default AdminReg;

