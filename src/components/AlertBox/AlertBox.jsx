import React from 'react';

const AlertBox = () => {
    return (
        <div className="card fade-in" style={{ marginTop: '30px' }}>
            <div className="card-title">
                <i className="fas fa-cloud"></i>
                Route Hazards & Alerts (Pakistan)
            </div>

            <div className="alert alert-warning">
                <i className="fas fa-cloud-rain"></i>
                <span><strong>Weather Alert:</strong> Heavy rain/landslide warning on KKH near Kohistan area. Drive with caution.</span>
            </div>

            <div className="alert alert-danger">
                <i className="fas fa-exclamation-circle"></i>
                <span><strong>High Risk Zone:</strong> Steep narrow curves detected near Babusar Top. Use low gear.</span>
            </div>

            <div className="alert alert-success">
                <i className="fas fa-wind"></i>
                <span><strong>Weather OK:</strong> Clear skies and moderate wind on Makran Coastal Highway segment.</span>
            </div>
        </div>
    );
};

export default AlertBox;
