import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useRef } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 20.2115,
  lng: -87.4654,
};
const results = [
  {
    title: "2BR Condo in Aldea Zama",
    price: "$249,000",
    agent: "Sofia Real Estate",
    link: "#"
  },
  {
    title: "Eco Villa in La Veleta",
    price: "$399,000",
    agent: "Tulum Homes",
    link: "#"
  }
];

const properties = [
  {
    id: 1,
    title: 'Karanda 2BR Penthouse',
    price: '$320,000',
    position: { lat: 20.2099, lng: -87.4652 },
  },
  {
    id: 2,
    title: 'Karanda Jungle Studio',
    price: '$175,000',
    position: { lat: 20.2132, lng: -87.4678 },
  },
];

export default function MapWithMarkers() {
  const [selected, setSelected] = useState(null);
  const mapRef = useRef(null);

  const handleClick = (property) => {
    setSelected(property);
    if (mapRef.current) {
      mapRef.current.panTo(property.position);
    }
  };

 return (
  <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold">🏡 Tulum Real Estate Marketplace Assistant</h1>
    
    
    {/* Listings */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {results.map((property, idx) => (
        <div key={idx} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <p>{property.price}</p>
          <p>Agent: {property.agent}</p>
          <a href={property.link} className="text-blue-600 underline">Contact Agent</a>
        </div>
      ))}
    </div>

    {/* Map */}
    <div className="pt-6">
      <MapWithMarkers />
    </div>

    {/* Footer */}
    <div className="pt-6">
      <h2 className="text-xl font-semibold">📱 Follow Local Agents</h2>
      <p>Check out TikToks and reels from verified brokers. Coming soon!</p>
    </div>
  </div>
);

}
