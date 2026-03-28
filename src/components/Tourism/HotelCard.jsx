import React from 'react';

const HotelCard = ({ hotel }) => {
    return (
        <div className="card fade-in" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ position: 'relative' }}>
                <img src={hotel.images[0]} alt={hotel.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }}></div>
                </div>
            </div>
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '18px', color: 'var(--dark)' }}>{hotel.name}</h3>
                    <span style={{ fontWeight: 'bold', color: 'var(--primary)', fontSize: '18px' }}>{hotel.price}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px' }}>
                    {hotel.amenities.map(a => (
                        <span key={a} style={{ fontSize: '11px', background: 'var(--light)', padding: '4px 8px', borderRadius: '4px', color: '#6b7280' }}>
                            {a}
                        </span>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-primary" style={{ flex: '1', padding: '10px' }}>Book Now</button>
                    <button className="btn btn-secondary" style={{ flex: '1', padding: '10px' }}>Details</button>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
