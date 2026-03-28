import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="logo">
                <i className="fas fa-route"></i>
                <span>SafeRoute</span>
            </div>

            <div className="nav-section">
                <div className="nav-title">Main</div>
                <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-home"></i>
                    <span>Dashboard</span>
                </Link>
                <Link to="/new-trip" className={`nav-item ${location.pathname === '/new-trip' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-map"></i>
                    <span>New Trip</span>
                </Link>
                <Link to="/history" className={`nav-item ${location.pathname === '/history' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-history"></i>
                    <span>History</span>
                </Link>
                <Link to="/tourism" className={`nav-item ${location.pathname === '/tourism' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-umbrella-beach"></i>
                    <span>Tourism Hub</span>
                </Link>
            </div>

            <div className="nav-section">
                <div className="nav-title">Analytics</div>
                <Link to="/statistics" className={`nav-item ${location.pathname === '/statistics' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-chart-line"></i>
                    <span>Statistics</span>
                </Link>
                <Link to="/risk-analysis" className={`nav-item ${location.pathname === '/risk-analysis' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-exclamation-circle"></i>
                    <span>Risk Analysis</span>
                </Link>
            </div>

            <div className="nav-section">
                <div className="nav-title">Account</div>
                <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-user"></i>
                    <span>Profile</span>
                </Link>
                <Link to="/settings" className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
                    <i className="fas fa-cog"></i>
                    <span>Settings</span>
                </Link>
                <div className="nav-item">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
