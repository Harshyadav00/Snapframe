// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { signIn, signOut, signUp, getCurrentUser } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
      console.log(userData);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };

  const SignIn = async (username, password) => {
    try {
      await signIn({ username: username, password: password });

      checkUser();
      // navigate("/explore")
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const SignOut = async () => {
    try {
      console.log("Sign out");
      await signOut();
      setUser(null);
      navigate("/signIn");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const SignUp = async (username, password) => {
    try {
      await signUp({
        username,
        password,
      });
      console.log("Sign-up successful");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const authContextValue = {
    user,
    SignIn,
    SignOut,
    SignUp,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
