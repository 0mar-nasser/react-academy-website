import React from "react";
import { Link } from "react-router-dom";
import "../../Style/PageStyle/Auth.css";
import signupImg from "/src/assets/card.jpg";

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-container reverse">
        <div className="auth-image">
          <img src={signupImg} alt="Signup" />
        </div>

        <div className="auth-card">
          <h2>Create Your Account 🚀</h2>
          <p className="auth-subtitle">
            Join our academy and start your professional journey
          </p>

          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your full name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>

            <button type="submit" className="btn auth-btn w-100">Sign Up</button>
          </form>

          <p className="auth-text">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
