import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import { motion } from 'framer-motion';

// Define the types for the base markers
interface Base {
  position: LatLngExpression;
  name: string;
}

// Tank icon
const tankIcon = new L.Icon({
  iconUrl: '/assets/tank1.png',  // Ensure the correct path for your tank image
  iconSize: [40, 40]
});

// Base icon
const baseIcon = new L.Icon({
  iconUrl: '/assets/base1.png',  // Ensure the correct path for your base image
  iconSize: [40, 40]
});

// Sample data for military bases
const militaryBases: Base[] = [
  { position: [51.515, -0.10], name: "Base Alpha" },
  { position: [51.525, -0.12], name: "Base Bravo" },
];

const RealTimeTankMovement: React.FC = () => {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]); // Use tuple type

  // Handle map click to move the tank
  const MapClickHandler = () => {
    useMapEvents({
      click(e: L.LeafletMouseEvent) {
        setPosition([e.latlng.lat, e.latlng.lng]);  // Move tank to the clicked location
      },
    });
    return null;
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      {/* Map tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Click handler for map */}
      <MapClickHandler />

      {/* Tank marker with motion animation */}
      <Marker position={position} icon={tankIcon}>
        <motion.div
          animate={{ x: position[1] * 100, y: position[0] * 100 }}  // Animation based on position
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <img src="/assets/tank.png" alt="tank" />  {/* Ensure the correct path for tank image */}
        </motion.div>
      </Marker>

      {/* Military base markers with tooltips */}
      {militaryBases.map((base, index) => (
        <Marker key={index} position={base.position} icon={baseIcon}>
          <Tooltip>{base.name}</Tooltip>  {/* Display base name on hover */}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RealTimeTankMovement;