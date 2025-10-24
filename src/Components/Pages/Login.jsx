import React from "react";
import { Link } from "react-router-dom";
import "../../Style/PageStyle/Auth.css";
import loginImg from "/src/assets/card.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-image">
          <img src={loginImg} alt="Login" />
        </div>

        <div className="auth-card">
          <h2>Welcome Back 👋</h2>
          <p className="auth-subtitle">
            Login to continue your learning journey
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>

            <button type="submit" className="btn auth-btn w-100">Login</button>
          </form>

          <div className="divider"><span>or</span></div>

          <div className="social-buttons">
            <button className="social-btn google"><FaGoogle /> Continue with Google</button>
            <button className="social-btn facebook"><FaFacebookF /> Continue with Facebook</button>
          </div>

          <p className="auth-text">
            Don’t have an account?{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
