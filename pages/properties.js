import dynamic from 'next/dynamic';
import React from 'react';

const MapWithMarkers = dynamic(() => import('../components/MapWithMarkers'), { ssr: false });

export default function PropertiesPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Map of Listings</h1>
      <MapWithMarkers />
    </div>
  );
}
