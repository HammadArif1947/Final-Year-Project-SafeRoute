import React from 'react';

const HotelGallery = () => {
    const hotels = [
        { name: 'PC Bhurban', price: 'Rs. 25,000', rating: 4.8, distance: 'Murree Hills' },
        { name: 'Luxus Hunza', price: 'Rs. 35,000', rating: 4.9, distance: 'Attabad Lake' },
        { name: 'Serena Gilgit', price: 'Rs. 22,000', rating: 4.7, distance: 'Gilgit City' }
    ];

    return (
        <div className="card fade-in" style={{ marginTop: '30px' }}>
            <div className="card-title">
                <i className="fas fa-hotel"></i>
                Stays in Pakistan
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                {hotels.map((hotel, index) => (
                    <div key={index} className="stat-box" style={{ textAlign: 'left', padding: '15px' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>{hotel.name}</div>
                        <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{hotel.price}</div>
                        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                            <i className="fas fa-star" style={{ color: '#f59e0b' }}></i> {hotel.rating} • {hotel.distance}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelGallery;
