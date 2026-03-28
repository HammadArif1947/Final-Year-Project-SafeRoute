import React from 'react';

const RouteOption = ({ name, badge, time, distance, risk, traffic, selected }) => {
    return (
        <div className={`route-option ${selected ? 'selected' : ''}`}>
            <div className="route-header">
                <span className="route-name">{name}</span>
                <span className={`route-badge ${badge === 'Safest' ? 'badge-safe' : 'badge-moderate'}`}>{badge}</span>
            </div>
            <div className="route-stats">
                <div className="stat">
                    <i className="fas fa-hourglass-end"></i>
                    <span><strong>{time}</strong></span>
                </div>
                <div className="stat">
                    <i className="fas fa-road"></i>
                    <span><strong>{distance}</strong></span>
                </div>
                <div className="stat">
                    <i className="fas fa-exclamation-triangle"></i>
                    <span><strong>Risk: {risk}%</strong></span>
                </div>
                <div className="stat">
                    <i className="fas fa-users"></i>
                    <span><strong>{traffic}</strong></span>
                </div>
            </div>
        </div>
    );
};

export default RouteOption;
