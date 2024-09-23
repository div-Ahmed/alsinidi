import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapComponentProps {
  apiKey: string;
}

const containerStyle = {
  width: '100%',
  height: '470px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapComponent: React.FC<MapComponentProps> = ({ apiKey }) => {
  const [location, setLocation] = useState(center);

  const handleLocationSelect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setLocation(newLocation);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      {/* <button onClick={handleLocationSelect} className="px-4 py-2 bg-blue-500 text-white rounded">Select your location</button> */}
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
