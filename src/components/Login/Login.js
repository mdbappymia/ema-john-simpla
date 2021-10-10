import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Login.css";

const Login = () => {
  const location = useLocation();
  console.log(location.state?.from);
  const { googleSignIn, user } = useAuth();
  const history = useHistory();
  const destination_url = location.state?.from || "/shop";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      history.push(destination_url);
    });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" placeholder="Enter your email" />
          <br />
          <input type="password" name="" placeholder="Your password" />
          <br />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        <p>{user.displayName}</p>
        <p>
          New to ema-john <Link to="/register">Create account</Link>
        </p>
        <p>------------or--------------</p>
        <button onClick={handleGoogleSignIn} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
