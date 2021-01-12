import React from 'react'
import pReact from './logo192.png'
import './AppCard.css'

export const AppCard = (props: { title: String; description: String }) => {
    return (
        <div className="app-card">
            <img className="card-icon" src={pReact} alt=""/>
            <span className="card-title">{props.title}</span>
            <span className="card-description">{props.description}</span>
        </div>
    )
}

export default AppCard;
