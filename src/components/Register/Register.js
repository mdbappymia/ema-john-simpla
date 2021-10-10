import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Register</h2>
        <form onSubmit="">
          <input type="email" name="email" placeholder="Enter your email" />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Re-Enter your password"
          />
          <br />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        <p>------------or--------------</p>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
