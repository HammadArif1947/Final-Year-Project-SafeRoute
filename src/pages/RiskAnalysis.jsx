import React from 'react';

const RiskAnalysis = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>Risk Analysis</h1>
                <p>AI-powered assessment of your travel routes</p>
            </div>

            <div className="card">
                <div className="card-title">Proactive Risk Mitigation</div>
                <div className="alert alert-warning">
                    <i className="fas fa-exclamation-triangle"></i>
                    <span><strong>Pre-emptive Warning:</strong> High probability of heavy traffic on M2 near Kallar Kahar during weekend peak hours.</span>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h3>Common Factors</h3>
                    <ul style={{ paddingLeft: '20px', color: '#6b7280', lineHeight: '2' }}>
                        <li>Steep gradients (Salt Range)</li>
                        <li>Brake failure risk areas</li>
                        <li>Fog frequency (Winter)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RiskAnalysis;
