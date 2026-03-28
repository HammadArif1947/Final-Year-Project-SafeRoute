import React from 'react';

const Profile = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>User Profile</h1>
                <p>Manage your professional driver profile and personal information</p>
            </div>

            <div className="card fade-in" style={{ padding: '0', overflow: 'hidden', marginBottom: '30px' }}>
                <div style={{ height: '120px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', position: 'relative' }}></div>
                <div style={{ padding: '0 30px 30px', marginTop: '-50px', position: 'relative' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        color: 'var(--primary)',
                        border: '4px solid white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        marginBottom: '15px'
                    }}>
                        <i className="fas fa-user-tie"></i>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <div>
                            <h2 style={{ fontSize: '24px', margin: '0' }}>Muhammad Hammad Arif</h2>
                            <p style={{ color: '#6b7280', margin: '5px 0 0' }}>Professional Traveler • Lahore, Pakistan</p>
                        </div>
                        <button className="btn btn-primary" style={{ width: 'auto' }}>
                            <i className="fas fa-camera" style={{ marginRight: '8px' }}></i>Edit Avatar
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="card fade-in">
                    <div className="card-title">
                        <i className="fas fa-id-card"></i>
                        Personal Details
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" defaultValue="Muhammad Hammad Arif" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" defaultValue="hammadarif1947@gmail.com" />
                    </div>
                    <div className="form-group" style={{ marginBottom: '0' }}>
                        <label>Phone Number</label>
                        <input type="tel" defaultValue="+92 3494761103" />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div className="card fade-in">
                        <div className="card-title">
                            <i className="fas fa-car-side"></i>
                            Vehicle Information
                        </div>
                        <div className="form-group">
                            <label>Default Vehicle</label>
                            <input type="text" defaultValue="Toyota Corolla Cross (AWD)" />
                        </div>
                        <div className="form-group" style={{ marginBottom: '0' }}>
                            <label>Plate Number</label>
                            <input type="text" defaultValue="ABC-1234" />
                        </div>
                    </div>

                    <div className="card fade-in">
                        <div className="card-title">
                            <i className="fas fa-heartbeat"></i>
                            Emergency Contact
                        </div>
                        <div className="form-group">
                            <label>Contact Name</label>
                            <input type="text" defaultValue="Syed Muhammad Sarim" />
                        </div>
                        <div className="form-group" style={{ marginBottom: '0' }}>
                            <label>Contact Phone</label>
                            <input type="tel" defaultValue="+92 321 7654321" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '30px' }}>
                <button className="btn btn-secondary" style={{ width: 'auto' }}>Discard</button>
                <button className="btn btn-primary" style={{ width: 'auto' }}>Save Profile Changes</button>
            </div>
        </div>
    );
};

export default Profile;
