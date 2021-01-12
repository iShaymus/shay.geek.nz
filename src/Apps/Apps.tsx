import React, { Component } from 'react';
import AppCard from './AppCard';
import './Apps.css'

export default class Apps extends Component {
    render() {
        return (
            <div className="app-grid">
                <AppCard title="Raffle Picker" description="Pick a winner for your raffles"/>
                <AppCard title="Otago Fire and Police Radio" description="Pick a winner for your raffles"/>
                <AppCard title="Cloud Pager" description="Pick a winner for your raffles"/>
                <AppCard title="Fire Map" description="Pick a winner for your raffles"/>
                <AppCard title="Raffle Picker" description="Pick a winner for your raffles"/>
                <AppCard title="Otago Fire and Police Radio" description="Pick a winner for your raffles"/>
                <AppCard title="Cloud Pager" description="Pick a winner for your raffles"/>
                <AppCard title="Fire Map" description="Pick a winner for your raffles"/>
                <AppCard title="Otago Fire and Police Radio" description="Pick a winner for your raffles"/>
                <AppCard title="Cloud Pager" description="Pick a winner for your raffles"/>
                <AppCard title="Fire Map" description="Pick a winner for your raffles"/>
            </div>
        )
    }
}
