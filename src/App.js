import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Header from "./components/Header";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserDetails from "./pages/user/UserDetails";
// index.js or App.js
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import CreatePost from "./pages/CreatePost";
import Sidebar from "./components/Sidebar";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

Amplify.configure(awsmobile);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/explore" />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route indes path="/explore" element={<Explore />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
