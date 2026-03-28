import React from 'react';

const History = () => {
    const history = [
        { id: 1, route: 'Islamabad -> Lahore', date: '2023-10-15', status: 'Completed', risk: 'Low' },
        { id: 2, route: 'Karachi -> Hyderabad', date: '2023-11-02', status: 'Completed', risk: 'Medium' }
    ];

    return (
        <div className="main">
            <div className="header">
                <h1>Trip History</h1>
                <p>Review your past journeys and safety performance</p>
            </div>

            <div className="card">
                <div className="card-title">Past Trips</div>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border)', textAlign: 'left' }}>
                            <th style={{ padding: '12px 0' }}>Route</th>
                            <th style={{ padding: '12px 0' }}>Date</th>
                            <th style={{ padding: '12px 0' }}>Risk Level</th>
                            <th style={{ padding: '12px 0' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(trip => (
                            <tr key={trip.id} style={{ borderBottom: '1px solid var(--border)' }}>
                                <td style={{ padding: '12px 0' }}>{trip.route}</td>
                                <td style={{ padding: '12px 0', color: '#6b7280' }}>{trip.date}</td>
                                <td style={{ padding: '12px 0' }}>
                                    <span className={`route-badge ${trip.risk === 'Low' ? 'badge-safe' : 'badge-moderate'}`}>
                                        {trip.risk}
                                    </span>
                                </td>
                                <td style={{ padding: '12px 0', color: 'var(--success)' }}>{trip.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
