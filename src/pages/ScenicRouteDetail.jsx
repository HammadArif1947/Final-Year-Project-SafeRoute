import React from 'react';

const ScenicRouteDetail = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>Karakoram Highway (KKH) Detail</h1>
                <p>The Eighth Wonder of the World - Connecting Pakistan and China</p>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="card-title">Route Overview</div>
                    <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                        The Karakoram Highway (KKH) is one of the highest paved roads in the world, passing through the Karakoram mountain range.
                        It follows the paths of the ancient Silk Road, offering views of Nanga Parbat, Rakaposhi, and Passu Cones.
                    </p>
                    <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div className="stat-box">
                            <div className="stat-value">1,300 km</div>
                            <div className="stat-label">Total Length</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-value">15,397 ft</div>
                            <div className="stat-label">Max Elevation</div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-title">Travel Tips</div>
                    <ul style={{ listStyle: 'none', padding: '0', color: '#6b7280', fontSize: '14px' }}>
                        <li style={{ marginBottom: '12px' }}>
                            <i className="fas fa-snowflake" style={{ color: 'var(--accent)', marginRight: '10px' }}></i>
                            Check Khunjerab Pass opening status during winter.
                        </li>
                        <li style={{ marginBottom: '12px' }}>
                            <i className="fas fa-gas-pump" style={{ color: 'var(--danger)', marginRight: '10px' }}></i>
                            Fill up your tank at Gilgit; fuel stations are sparse ahead.
                        </li>
                        <li>
                            <i className="fas fa-camera-retro" style={{ color: 'var(--success)', marginRight: '10px' }}></i>
                            Stop at the junction of three mountain ranges for photos.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ScenicRouteDetail;
