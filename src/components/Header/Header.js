import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <Link to='/'>Home</Link>
            <Link to='/orders'>Order</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Header;