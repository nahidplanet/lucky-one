import React from 'react';
import logo from '../../../src/icons.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <div className='Header'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search">
                    <div className='search-box'>
                        <input type="search" placeholder='Search Here...' name="" id="search" />
                    </div>
                    <button type="submit">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;