import React, { useEffect } from 'react'

import './Header.css';
// import InstagramLogo from "";
import { useAuth } from '../../AuthContext';
import { Button } from '@aws-amplify/ui-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, SignOut } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/explore');
    }
  }, [])


  return (
    <nav className='Nav' >
      <div className='Nav-menus' >
        <div className='Nav-brand'>
          <a className='Nav-brand-logo' href='/' >
            <img src={process.env.PUBLIC_URL + "/images/logo.jpeg"} alt='Instagram' />
          </a>
        </div>
        {user && <Button onClick={SignOut}  >Sign Out</Button>}
        {!user && <Link to='/signIn' >Sign In</Link>}
        {!user && <NavLink to='/signUp' >Sign Up</NavLink>}
      </div>
    </nav>
  )
}

export default Navbar