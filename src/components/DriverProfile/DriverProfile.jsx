import React from 'react';

const DriverProfile = () => {
    return (
        <div className="card fade-in">
            <div className="card-title">
                <i className="fas fa-user-check"></i>
                Driver Profile
            </div>
            <div className="driver-profile">
                <div className="avatar">
                    <i className="fas fa-user"></i>
                </div>
                <div className="driver-name">Hammad</div>
                <div className="driver-level">Conservative Driver</div>
            </div>
            <div className="stats-grid">
                <div className="stat-box">
                    <div className="stat-value">98</div>
                    <div className="stat-label">Safety Score</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">45</div>
                    <div className="stat-label">Trips</div>
                </div>
            </div>
        </div>
    );
};

export default DriverProfile;
