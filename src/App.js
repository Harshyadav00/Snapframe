import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './components/Header';
import Explore from './pages/Explore';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
// index.js or App.js
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import { PrivateRoute } from './components/Routes';

Amplify.configure(awsmobile);


function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
