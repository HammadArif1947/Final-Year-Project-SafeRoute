import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';

const MapContainer = () => {
  // Example markers for route start/end
  const [markers, setMarkers] = useState([
    { lat: 33.6844, lng: 73.0479 }, // Lahore
    { lat: 34.0151, lng: 71.5249 }  // Islamabad
  ]);

  // Example polyline for route path
  const path = markers.map(marker => ({ lat: marker.lat, lng: marker.lng }));

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = markers.length
    ? { lat: markers[0].lat, lng: markers[0].lng }
    : { lat: 33.6844, lng: 73.0479 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBocUzDM1XzhT7BJNRDQXvLe56IpafN_tU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {markers.map((marker, idx) => (
          <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
        <Polyline
          path={path}
          options={{ strokeColor: '#FF0000', strokeOpacity: 0.8, strokeWeight: 4 }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;