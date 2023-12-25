// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { signUp, confirmSignUp } from 'aws-amplify/auth';
import '../App.css';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

function SignUp() {
  const { user } = useAuth() ; 
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState();
  const [isSignUpComplete, setIsSignUpComplete] = useState(false);


  useEffect(() => {
    if (user) {
      navigate('/explore');
    }
  }, [user])


  const createUser = async () => {
    try {
      // Define the user data
      const userData = {
        fullName: name,
        email: email,
        userName: userName,
        userId: userId,
      };

      // Make a POST request to the backend endpoint for user creation
      const response = await axios.post('http://localhost:8077/createUser', userData);

      // Handle the response from the backend
      console.log('User creation successful:', response.data);
      navigate("/signin");

    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle the error, such as displaying an error message to the user.
    }
  };


  // Function to handle the sign-up process
  const handleSignUp = async () => {
    try {
      // Validate fields before submitting
      if (!name || !email || !userName || !password || !confirmPassword) {
        console.error('Please fill in all fields');

        return;
      }

      if (password !== confirmPassword) {
        console.error('Password and Confirm Password must match');
        return;
      }

      // Sign up the user
      const signUpResponse = await signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
        },
      });

      setUserId(signUpResponse.userId);
      console.log(userId);
      // If sign-up is successful, prompt for OTP
      if (signUpResponse.isSignUpComplete === false) {
        setIsSignUpComplete(true);
      }

      console.log('Sign-up successful:', signUpResponse);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  // Function to handle OTP verification
  const handleVerifyOTP = async () => {
    try {
      // Validate OTP field before submitting
      if (!otp) {
        console.error('Please enter the OTP');
        return;
      }

      // Log user information
      console.log('Full Name:', name);
      console.log('Email:', email);
      console.log('OTP:', otp);

      // Confirm the sign-up with the OTP
      const confirmSignUpResponse = await confirmSignUp({
        username: email,
        confirmationCode: otp,
      });

      console.log('OTP confirmed:', confirmSignUpResponse);

      createUser();
      <Navigate to='/signIn' />;
    } catch (error) {
      console.error('Error confirming sign-up:', error);
    }
  };

  // Render the sign-up form
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {!isSignUpComplete ? (
        <form>
          {/* Ask for Full Name */}
          <label htmlFor="name">Name:</label>
          <input required type="text" id="name" onChange={(e) => setName(e.target.value)} />

          {/* Ask for Email */}
          <label htmlFor="email">Email:</label>
          <input required type="email" id="email" onChange={(e) => setEmail(e.target.value)} />

          {/* Ask for UserName */}
          <label htmlFor="userName">UserName:</label>
          <input required type="UserName" id="userName" onChange={(e) => setUserName(e.target.value)} />

          {/* Ask for Password */}
          <label htmlFor="password">Password:</label>
          <input required type="password" id="password" onChange={(e) => setPassword(e.target.value)} />

          {/* Ask for Confirm Password */}
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            required
            type="password"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* Button to initiate sign-up */}
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      ) : (
        <div>
          {/* Display sign-up completion message */}
          <p>Sign-up complete. Check your email for the OTP.</p>

          {/* Ask for OTP */}
          <label htmlFor="otp">Enter OTP:</label>
          <input type="text" id="otp" onChange={(e) => setOtp(e.target.value)} />

          {/* Button to verify OTP */}
          <button type="button" onClick={handleVerifyOTP}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
}

export default SignUp;
