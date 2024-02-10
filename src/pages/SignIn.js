// SignIn.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";

function SignIn() {
  const navigate = useNavigate();
  const { SignIn, user } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    SignIn(username, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/explore");
    }
  }, [user]);

  return (
    <div
      style={{
        backgroundImage: `url("/images/image-1.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
      className="d-flex align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 signin-container">
            <div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="/images/snapframe-logo.svg"
                  height="20px"
                  alt="logo"
                />
              </div>
              <form style={{ paddingTop: "20px" }}>
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Link
                  style={{
                    textAlign: "center",
                    fontWeight: "200",
                    color: "#000",
                    margin: "20px",
                  }}
                  to="#"
                >
                  Forgotton your password?
                </Link>
                <button type="button" onClick={signIn}>
                  Log in
                </button>
              </form>
            </div>
            {/* 
            <div style={{ textAlign: "Center", margin: "10px" }}>or</div>
            <div className="d-flex justify-content-around">
              <span className="social-provider ">
                <FaGoogle className="social-provider-icon" />
                Login with Google
              </span>
              <span className="social-provider">
                <FaApple className="social-provider-icon" />
                Login with Apple
              </span>
            </div> */}

            <div style={{ textAlign: "center" }}>
              Don't have an account?
              <Link
                to="/signUp"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
