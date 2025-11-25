'use client';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  return (
    <div className="aspect-video border">
      <MapContainer
        center={[23.999841, 90.419945]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg relative z-10"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[23.999841, 90.419945]}>
          <Popup>Gazipur City</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
