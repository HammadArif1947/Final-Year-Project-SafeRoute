import React from 'react';
import RouteCard from '../components/RouteCard/RouteCard';

const NewTrip = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>New Trip</h1>
                <p>Plan your next adventure with safety and tourism in mind</p>
            </div>

            <div className="grid">
                <RouteCard />
                <div className="card">
                    <div className="card-title">Recent Destinations</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {['Murree', 'Naran', 'Kaghan'].map(dest => (
                            <div key={dest} className="stat-box" style={{ textAlign: 'left', padding: '12px' }}>
                                <i className="fas fa-history" style={{ marginRight: '10px', color: '#6b7280' }}></i>
                                {dest}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTrip;
