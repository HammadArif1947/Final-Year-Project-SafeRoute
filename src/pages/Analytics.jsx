import React from 'react';

const Analytics = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>Analytics</h1>
                <p>Deep dive into your driving behaviors and route trends</p>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="card-title">Safety Trends</div>
                    <div style={{ height: '200px', background: 'var(--light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280' }}>
                        [Safety Chart Visualization Placeholder]
                    </div>
                </div>
                <div className="card">
                    <div className="card-title">Efficiency Score</div>
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--primary)' }}>85%</div>
                        <div style={{ color: '#6b7280' }}>Excellent work!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
