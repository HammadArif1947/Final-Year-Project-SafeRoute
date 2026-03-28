import React from 'react';

const ScenicViewCard = ({ view }) => {
    return (
        <div className="card fade-in" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={view.images[0]} alt={view.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--dark)' }}>{view.name}</h3>
                    <div className="route-badge badge-safe">
                        <i className="fas fa-star" style={{ color: '#f59e0b', marginRight: '4px' }}></i>
                        {view.rating}
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', fontSize: '13px', color: '#6b7280', marginBottom: '15px' }}>
                    <span><i className="fas fa-camera" style={{ marginRight: '6px' }}></i>{view.photos} photos</span>
                    <span><i className="fas fa-clock" style={{ marginRight: '6px' }}></i>Best: {view.bestTime}</span>
                </div>
                <button className="btn btn-primary" style={{ padding: '10px' }}>
                    <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>Add to Itinerary
                </button>
            </div>
        </div>
    );
};

export default ScenicViewCard;
