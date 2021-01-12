import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-dark main-nav text-dark">
            <NavLink to="/">
                <span className="title"><span className="theme-green">Shay</span><span className="theme-pink">.Geek</span></span>
            </NavLink>
            
            <div className="nav-links">
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/apps">APPS</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/photography">PHOTOS</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
