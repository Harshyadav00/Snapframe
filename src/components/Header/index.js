import React from 'react'

import './Header.css' ;
import InstagramLogo from '../../logo.jpg';

const index = () => {
  return (
    <nav className='Nav' >
        <div className='Nav-menus' >
            <div className='Nav-brand'>
                <a className='Nav-brand-logo' href='/' >
                    <img src={InstagramLogo} alt='Instagram' />
                </a>
            </div>
        </div>
    </nav>
  )
}

export default index