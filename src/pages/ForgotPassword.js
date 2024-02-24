import React, { useState } from "react";
import { resetPassword } from "aws-amplify/auth";
import { confirmResetPassword } from "aws-amplify/auth";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [username, setUserName] = useState("");
  const [confirmationCode, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  async function handleResetPassword() {
    try {
      console.log(username);
      const output = await resetPassword({ username });
      handleResetPasswordNextSteps(output);
    } catch (error) {
      //need for  error handling via toast after request limit reached
      console.log(error);
    }
  }

  function handleResetPasswordNextSteps(output) {
    const { nextStep } = output;
    console.log(nextStep);
    switch (nextStep.resetPasswordStep) {
      case "CONFIRM_RESET_PASSWORD_WITH_CODE":
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        //add a toast for showing that mail has been sent successfully.
        setStatus(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case "DONE":
        console.log("Successfully reset password.");
        break;
    }
  }

  async function handleConfirmResetPassword() {
    try {
      const output = await confirmResetPassword({
        username,
        confirmationCode,
        newPassword,
      });
      console.log({ output });
    } catch (error) {
      // implement toast for wrong otp entered
      console.log(error);
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url("/images/image-8.jpg")`,
        height: "100vh",
        backgroundSize: "cover",
      }}
      className="d-flex align-items-center"
    >
      {/* <Header /> */}
      {/* <h1>Forgot Password</h1> */}

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
              {status === null && (
                <form style={{ paddingTop: "20px" }}>
                  <label htmlFor="username">Email</label>
                  <input
                    type="text"
                    id="username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "200",
                      fontSize: "12px",
                    }}
                  >
                    Confirmation code will sent on your registered email.
                  </div>

                  <button type="button" onClick={handleResetPassword}>
                    Send Verification code
                  </button>
                </form>
              )}

              {status !== null && (
                <div>
                  <form>
                    <label htmlFor="code">Verification Code</label>
                    <input
                      type="text"
                      id="code"
                      value={confirmationCode}
                      onChange={(event) => setCode(event.target.value)}
                    />
                    <label htmlFor="new-password">New Password</label>
                    <div className="d-flex flex-row">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="new-password"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                      />
                      <div
                        style={{
                          backgroundColor: " #f8f8f8",
                          marginTop: "5px",
                          marginBottom: "10px",
                        }}
                        className="d-flex justify-content-center align-items-center px-1"
                        onClick={toggleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {!showPassword ? <Visibility /> : <VisibilityOff />}
                      </div>
                    </div>
                    <button type="button" onClick={handleConfirmResetPassword}>
                      Change Password
                    </button>
                  </form>
                  <p>{status}</p>
                </div>
              )}
            </div>
            <div>
              <div style={{ textAlign: "center", padding: "10vh 0px 0px 0px" }}>
                Already have an account?
                <Link
                  to="/signin"
                  style={{ color: "#000", textDecoration: "underline" }}
                >
                  Log in
                </Link>
              </div>
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
    </div>
  );
}

export default ForgotPassword;
