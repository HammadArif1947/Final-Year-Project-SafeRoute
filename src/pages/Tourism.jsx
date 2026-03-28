import React, { useState } from 'react';
import ScenicViewCard from '../components/Tourism/ScenicViewCard';
import HotelCard from '../components/Tourism/HotelCard';
import AttractionCard from '../components/Tourism/AttractionCard';

const Tourism = () => {
    const [activeTab, setActiveTab] = useState('scenic');

    const data = {
        scenic: [
            { id: 1, name: 'Karakoram Highway', images: ['https://via.placeholder.com/400x250'], rating: 5.0, photos: 450, bestTime: 'Morning' },
            { id: 2, name: 'Babusar Top', images: ['https://via.placeholder.com/400x250'], rating: 4.9, photos: 320, bestTime: 'Afternoon' }
        ],
        hotels: [
            { id: 1, name: 'PC Bhurban', images: ['https://via.placeholder.com/400x250'], price: 'Rs. 25,000', amenities: ['Spa', 'Luxury'], rooms: ['Deluxe'] },
            { id: 2, name: 'Serena Shigar', images: ['https://via.placeholder.com/400x250'], price: 'Rs. 30,000', amenities: ['Heritage'], rooms: ['Raja Room'] }
        ],
        attractions: [
            { id: 1, name: 'Badshahi Mosque', tags: ['History'], hours: '8:00 - 20:00', price: 'Free' },
            { id: 2, name: 'Attabad Lake', tags: ['Nature'], hours: 'Sunrise - Sunset', price: 'Rs. 500' }
        ]
    };

    return (
        <div className="main">
            <div className="header">
                <h1>Tourism Hub</h1>
                <p>Discover scenic routes, attractions, and premium stays</p>
            </div>

            <div className="grid">
                <div>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                        <button
                            className={`btn ${activeTab === 'scenic' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveTab('scenic')}
                            style={{ width: 'auto' }}
                        >Scenic Views</button>
                        <button
                            className={`btn ${activeTab === 'hotels' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveTab('hotels')}
                            style={{ width: 'auto' }}
                        >Hotels</button>
                        <button
                            className={`btn ${activeTab === 'attractions' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setActiveTab('attractions')}
                            style={{ width: 'auto' }}
                        >Attractions</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {activeTab === 'scenic' && data.scenic.map(v => <ScenicViewCard key={v.id} view={v} />)}
                        {activeTab === 'hotels' && data.hotels.map(h => <HotelCard key={h.id} hotel={h} />)}
                        {activeTab === 'attractions' && data.attractions.map(a => <AttractionCard key={a.id} attraction={a} />)}
                    </div>
                </div>

                <div className="card" style={{ height: 'fit-content' }}>
                    <div className="card-title">
                        <i className="fas fa-map-signs"></i>
                        Live Itinerary
                    </div>
                    <div style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
                        <div className="stat-value" style={{ fontSize: '28px' }}>2.5h</div>
                        <div className="stat-label">Total Time</div>
                    </div>
                    <div style={{ padding: '20px 0' }}>
                        <div style={{ color: '#6b7280', fontSize: '14px', textAlign: 'center' }}>
                            Your itinerary is empty. Add scenic spots or attractions to get started!
                        </div>
                    </div>
                    <button className="btn btn-primary" disabled>Optimize Trip</button>
                </div>
            </div>
        </div>
    );
};

export default Tourism;
