import React from 'react';
import './Navbar.css';
import me from './shay.jpg';
import { Badge } from '../Social Media Badges/Badge';



export default function Navbar() {
    return (
        <header className="bg-dark side-nav text-dark">
            <img src={me} className="profilePic" alt="shay"/>
            <span className="title"><span className="theme-green">Shay</span><span className="theme-pink">.Geek</span></span>
            
            <div className="nav-links">
                <p>About</p>
                <p>Apps</p>
                <p>Privacy</p>
            </div>
            

            <div className="social-media">
                <Badge url="https://twitter.com/shay_geek_nz" icon={['fab', 'twitter']}/>
                <Badge url="https://instagram.com/ishaymus" icon={['fab', 'instagram']}/>
                <Badge url="https://github.io/iShaymus" icon={['fab', 'github']}/>
            </div>
        </header>
    )
}
