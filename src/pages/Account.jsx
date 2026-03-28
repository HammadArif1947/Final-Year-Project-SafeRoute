import React from 'react';

const Account = () => {
    return (
        <div className="main">
            <div className="header">
                <h1>My Account</h1>
                <p>Manage your account settings and preferences</p>
            </div>

            <div className="card">
                <div className="card-title">Subscription Status</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>Pro Plan</div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>Billed annually. Next renewal Oct 2026.</div>
                    </div>
                    <button className="btn btn-secondary" style={{ width: 'auto' }}>Manage</button>
                </div>
            </div>
        </div>
    );
};

export default Account;
