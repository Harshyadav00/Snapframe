import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

Amplify.configure(awsmobile);

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          {/* <Header /> */}
          <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route indes path="/explore" element={<Explore />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
