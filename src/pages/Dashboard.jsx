import React, { useState } from 'react';
import RouteCard from '../components/RouteCard/RouteCard';
import DriverProfile from '../components/DriverProfile/DriverProfile';
import RouteOption from '../components/RouteOption/RouteOption';
import AlertBox from '../components/AlertBox/AlertBox';
import HotelGallery from '../components/Hotels/HotelGallery';
import ImageGallery from '../components/Gallery/ImageGallery';
import WeatherCard from '../components/Weather/WeatherCard';

// Google Maps imports
import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from '@react-google-maps/api';

const Dashboard = () => {
    // Example route markers
    const [markers] = useState([
        { lat: 33.6844, lng: 73.0479, label: 'Lahore' },      // Start
        { lat: 34.0151, lng: 71.5249, label: 'Islamabad' }   // End
    ]);

    // Path for polyline
    const path = markers.map(marker => ({ lat: marker.lat, lng: marker.lng }));

    // Optional: InfoWindow state
    const [selectedMarker, setSelectedMarker] = useState(null);

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = markers.length
        ? { lat: markers[0].lat, lng: markers[0].lng }
        : { lat: 33.6844, lng: 73.0479 };

    return (
        <div className="main">
            {/* Header */}
            <div className="header">
                <h1>Plan Your Safe Route</h1>
                <p>AI-Powered Road Trip Planner with Safety, Traffic, and Personalized Intelligence</p>
            </div>

            <div className="grid">
                {/* Left Column: Trip Planning */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <RouteCard />
                    <WeatherCard location="Skardu" />

                    {/* Interactive Map */}
                    <LoadScript googleMapsApiKey="AIzaSyBocUzDM1XzhT7BJNRDQXvLe56IpafN_tU">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={7}
                        >
                            {/* Markers */}
                            {markers.map((marker, idx) => (
                                <Marker
                                    key={idx}
                                    position={{ lat: marker.lat, lng: marker.lng }}
                                    onClick={() => setSelectedMarker(marker)}
                                />
                            ))}

                            {/* InfoWindow */}
                            {selectedMarker && (
                                <InfoWindow
                                    position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <div>{selectedMarker.label}</div>
                                </InfoWindow>
                            )}

                            {/* Route Polyline */}
                            <Polyline
                                path={path}
                                options={{
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 0.8,
                                    strokeWeight: 4
                                }}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>

                {/* Right Column: Stats & Profiles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <DriverProfile />

                    {/* Quick Stats */}
                    <div className="card fade-in">
                        <div className="card-title">
                            <i className="fas fa-gauge"></i>
                            Quick Stats
                        </div>
                        <div className="risk-card">
                            <div className="risk-item">
                                <div className="risk-label">Avg. Route Risk</div>
                                <div className="risk-value risk-low">
                                    <i className="fas fa-arrow-down"></i> 12%
                                </div>
                            </div>
                        </div>
                        <div className="risk-card">
                            <div className="risk-item">
                                <div className="risk-label">Danger Zones</div>
                                <div className="risk-value">3</div>
                            </div>
                        </div>
                    </div>

                    <HotelGallery />
                </div>
            </div>

            {/* Recommended Routes */}
            <div className="card fade-in">
                <div className="card-title">
                    <i className="fas fa-list"></i>
                    Recommended Routes
                </div>

                <div className="alert alert-success">
                    <i className="fas fa-check-circle"></i>
                    <span><strong>Route analysis complete!</strong> 3 optimized routes found.</span>
                </div>

                <div className="routes-grid">
                    <RouteOption
                        name="N75/N15 via Kaghan (Recommended)"
                        badge="Safest"
                        time="12h 45m"
                        distance="520 km"
                        risk="12"
                        traffic="Moderate Traffic"
                        selected={true}
                    />
                    <RouteOption
                        name="N35 Karakoram Highway (Scenic)"
                        badge="Moderate"
                        time="15h 30m"
                        distance="610 km"
                        risk="28"
                        traffic="Low Traffic"
                    />
                    <RouteOption
                        name="M2 to M1 via Burhan (Fast)"
                        badge="Moderate"
                        time="11h 20m"
                        distance="580 km"
                        risk="15"
                        traffic="Heavy Traffic"
                    />
                </div>
            </div>

            {/* Bottom Grid: Alerts & Gallery */}
            <div className="grid" style={{ marginTop: '30px' }}>
                <AlertBox />
                <ImageGallery />
            </div>
        </div>
    );
};

export default Dashboard;