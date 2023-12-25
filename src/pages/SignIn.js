// SignIn.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const { SignIn, user } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    SignIn(username, password);
  };

  useEffect(() => {
    if (user) {
      navigate('/explore');
    }
  }, [user])



  return (
    <div className="signup-container">
      <h2>Sign In</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={signIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
