import React from 'react';

const Statistics = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>Statistics</h1>
                <p>Your journey in numbers</p>
            </div>

            <div className="grid">
                <div className="stat-card">
                    <div className="stat-label">Total Distance</div>
                    <div className="stat-value">1,250 km</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Total Hours</div>
                    <div className="stat-value">48h</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Cities Visited</div>
                    <div className="stat-value">12</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Highest Peak</div>
                    <div className="stat-value">4,733 m</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
