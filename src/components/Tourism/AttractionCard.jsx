import React from 'react';

const AttractionCard = ({ attraction }) => {
    return (
        <div className="card fade-in">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                {attraction.tags.map(tag => (
                    <span key={tag} className="route-badge badge-moderate" style={{ fontSize: '10px' }}>{tag}</span>
                ))}
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--dark)', marginBottom: '8px' }}>{attraction.name}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#6b7280', marginBottom: '15px' }}>
                <span><i className="fas fa-clock" style={{ width: '18px' }}></i>{attraction.hours}</span>
                <span><i className="fas fa-ticket-alt" style={{ width: '18px' }}></i>From {attraction.price}</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn btn-primary" style={{ flex: '1', padding: '10px' }}>
                    <i className="fas fa-calendar-plus" style={{ marginRight: '8px' }}></i>Add to Trip
                </button>
                <button className="icon-btn" style={{ width: '40px', height: '40px' }}>
                    <i className="fas fa-map-marker-alt"></i>
                </button>
            </div>
        </div>
    );
};

export default AttractionCard;
