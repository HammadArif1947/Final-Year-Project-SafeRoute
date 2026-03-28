import React, { useState, useEffect } from 'react';
import { tourismAPI } from '../../utils/tourismAPI';

const WeatherCard = ({ location }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await tourismAPI.getWeatherData(location);
            setWeather(data);
        };
        fetchWeather();
    }, [location]);

    if (!weather) return <div className="card">Loading weather...</div>;

    const getWeatherIcon = (condition) => {
        switch (condition.toLowerCase()) {
            case 'sunny': return 'fa-sun';
            case 'cloudy':
            case 'partly cloudy': return 'fa-cloud-sun';
            case 'snow': return 'fa-snowflake';
            case 'rainy': return 'fa-cloud-showers-heavy';
            default: return 'fa-cloud';
        }
    };

    return (
        <div className="card fade-in">
            <div className="card-title">
                <i className="fas fa-temperature-half"></i>
                Regional Weather ({weather.location})
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <i className={`fas ${getWeatherIcon(weather.condition)}`} style={{ fontSize: '48px', color: 'var(--primary)' }}></i>
                    <div>
                        <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{weather.temp}°C</div>
                        <div style={{ color: '#6b7280' }}>{weather.condition}</div>
                    </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '13px', color: '#6b7280' }}>
                    <div>Humidity: {weather.humidity}%</div>
                    <div>Wind: {weather.windSpeed} km/h</div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {weather.forecast.map((day, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>{day.day}</div>
                            <i className={`fas ${getWeatherIcon(day.condition)}`} style={{ color: i === 1 ? 'var(--accent)' : '#4b5563', marginBottom: '4px' }}></i>
                            <div style={{ fontWeight: 'bold' }}>{day.temp}°</div>
                        </div>
                    ))}
                </div>
            </div>

            {weather.condition.toLowerCase() === 'snow' && (
                <div className="alert alert-danger" style={{ marginTop: '15px', marginBottom: '0' }}>
                    <i className="fas fa-snowflake"></i>
                    <span>Severe Snow Alert: Tire chains required.</span>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;
