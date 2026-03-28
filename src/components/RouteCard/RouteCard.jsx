import React from 'react';

const RouteCard = () => {
    return (
        <div className="card fade-in">
            <div className="card-title">
                <i className="fas fa-location-pin"></i>
                Route Planner
            </div>

            <div className="form-group">
                <label>Starting Location</label>
                <div className="input-group">
                    <input type="text" placeholder="Enter start location..." defaultValue="Islamabad" />
                    <button className="icon-btn">
                        <i className="fas fa-map-pin"></i>
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label>Destination</label>
                <div className="input-group">
                    <input type="text" placeholder="Enter destination..." defaultValue="Skardu" />
                    <button className="icon-btn">
                        <i className="fas fa-map-pin"></i>
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label>Travel Preferences</label>
                <select defaultValue="Balanced (Safety + Speed)">
                    <option>Balanced (Safety + Speed)</option>
                    <option>Safety First</option>
                    <option>Fastest Route</option>
                    <option>Comfort-Focused</option>
                </select>
            </div>

            <div className="form-group">
                <label>Driver Profile</label>
                <select defaultValue="Conservative Driver">
                    <option>Conservative Driver</option>
                    <option>Moderate Driver</option>
                    <option>Aggressive Driver</option>
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                    <label>Road Type</label>
                    <select defaultValue="Highway">
                        <option>Highway</option>
                        <option>Backroads</option>
                        <option>Scenic</option>
                        <option>Coastal</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Season</label>
                    <select defaultValue="Summer">
                        <option>Summer</option>
                        <option>Winter</option>
                        <option>Spring</option>
                        <option>Autumn</option>
                    </select>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                    <label>Difficulty</label>
                    <select defaultValue="Easy">
                        <option>Easy</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Weather</label>
                    <select defaultValue="Clear">
                        <option>Clear</option>
                        <option>Rainy</option>
                        <option>Snowy</option>
                        <option>Foggy</option>
                    </select>
                </div>
            </div>

            <button className="btn btn-primary">
                <i className="fas fa-search" style={{ marginRight: '8px' }}></i>Find Safe Route
            </button>
        </div>
    );
};

export default RouteCard;
