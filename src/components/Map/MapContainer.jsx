import React from 'react';

const MapContainer = () => {
    return (
        <div className="card fade-in" style={{ height: '400px', padding: '0', overflow: 'hidden', position: 'relative' }}>
            <div className="card-title" style={{ padding: '20px', position: 'absolute', top: '0', left: '0', zIndex: '1', background: 'rgba(255,255,255,0.8)', width: '100%', borderBottom: '1px solid var(--border)' }}>
                <i className="fas fa-map-marked-alt"></i>
                Interactive Route Map
            </div>
            <div style={{ width: '100%', height: '100%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', color: '#6b7280' }}>
                    <i className="fas fa-map-marked-alt" style={{ fontSize: '48px', marginBottom: '16px' }}></i>
                    <p>Google Maps Integration Placeholder</p>
                    <p style={{ fontSize: '12px' }}>API Key required for live map</p>
                </div>
            </div>
        </div>
    );
};

export default MapContainer;
