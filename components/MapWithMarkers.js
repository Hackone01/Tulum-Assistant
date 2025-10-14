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
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-1/3 p-2 space-y-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="border rounded-xl p-3 cursor-pointer shadow-md hover:bg-gray-100"
            onClick={() => handleClick(property)}
          >
            <h3 className="font-bold text-lg">{property.title}</h3>
            <p>{property.price}</p>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-2/3 h-[500px]">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={(map) => (mapRef.current = map)}
          >
            {properties.map((property) => (
              <Marker
                key={property.id}
                position={property.position}
                onClick={() => setSelected(property)}
              />
            ))}

            {selected && (
              <InfoWindow
                position={selected.position}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h2 className="font-bold">{selected.title}</h2>
                  <p>{selected.price}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

