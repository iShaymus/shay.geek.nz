import React from 'react'
import { Badge } from '../Social Media Badges/Badge';
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="social-media">
                <Badge url="https://twitter.com/shay_geek_nz" icon={['fab', 'twitter']}/>
                <Badge url="https://instagram.com/ishaymus" icon={['fab', 'instagram']}/>
                <Badge url="https://github.io/iShaymus" icon={['fab', 'github']}/>
            </div>
        </footer>
        
    )
}
