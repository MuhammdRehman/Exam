
import React from 'react';
import logo from '../assets/images/movie.png';
import  '../stylesheets/header.css';
import Searchbar from './searchbar';


const Navbar = () => {
    return (
        <div className="navContainer">
            <div className="container">
                <img
                    style={{ height: '50px', width: '40px' }}
                    src={logo}
                    alt="Movie Explorer"
                />
                <h2><strong><span style={{ color: 'red' }}>Movie Explorer</span></strong></h2>
            </div>
            <div className="container3">
                <Searchbar />
            </div>
            <div className="container2">
                <div className="Home">
                    <a href='./home.jsx'>Home</a>
                </div>
                <div className="profile">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                </div>
            </div>
        </div>
        
    );
}

export default Navbar;
