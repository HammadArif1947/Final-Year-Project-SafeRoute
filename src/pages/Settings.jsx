import React from 'react';

const Settings = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>Application Settings</h1>
                <p>Configure and personalize your SafeRoute experience for maximum safety</p>
            </div>

            <div className="grid">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div className="card fade-in">
                        <div className="card-title">
                            <i className="fas fa-sliders-h"></i>
                            General Preferences
                        </div>
                        <div className="form-group">
                            <label>Language</label>
                            <select defaultValue="English (UK)">
                                <option>English (UK)</option>
                                <option>Urdu (پاکستانی)</option>
                                <option>English (US)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Distance Units</label>
                            <select defaultValue="Kilometers (km)">
                                <option>Kilometers (km)</option>
                                <option>Miles (mi)</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Automatic Night Mode</div>
                                <div style={{ fontSize: '12px', color: '#6b7280' }}>Switch theme based on local time</div>
                            </div>
                            <input type="checkbox" defaultChecked />
                        </div>
                    </div>

                    <div className="card fade-in">
                        <div className="card-title">
                            <i className="fas fa-bell"></i>
                            Notifications
                        </div>
                        {[
                            { title: 'Route Risk Alerts', desc: 'Real-time hazard notifications' },
                            { title: 'Tourism Highlights', desc: 'Points of interest suggestions' },
                            { title: 'Driver Fatigue Prompts', desc: 'Breaks suggested by AI analyzer' }
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.title}</div>
                                    <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.desc}</div>
                                </div>
                                <input type="checkbox" defaultChecked />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <div className="card fade-in">
                        <div className="card-title">
                            <i className="fas fa-shield-alt"></i>
                            Privacy & Security
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Share Trip Progress</div>
                                <div style={{ fontSize: '12px', color: '#6b7280' }}>Allow emergency contacts to track</div>
                            </div>
                            <input type="checkbox" />
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <button className="btn btn-secondary" style={{ marginBottom: '10px' }}>Change Application PIN</button>
                            <button className="btn btn-secondary">Download My Data</button>
                        </div>
                    </div>

                    <div className="card fade-in">
                        <div className="card-title" style={{ color: 'var(--danger)' }}>
                            <i className="fas fa-exclamation-triangle"></i>
                            Danger Zone
                        </div>
                        <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5' }}>
                            Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <button className="btn" style={{ background: '#fee2e2', color: '#ef4444', border: '1px solid #fecaca' }}>
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '30px' }}>
                <button className="btn btn-primary" style={{ width: 'auto' }}>Update Preferences</button>
            </div>
        </div>
    );
};

export default Settings;
