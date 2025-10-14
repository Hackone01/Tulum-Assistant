import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically load the map component with no SSR
const MapWithMarkers = dynamic(() => import('../components/MapWithMarkers'), {
  ssr: false,
});

export default function PropertiesPage() {
  return (
    <>
      <Head>
        <title>Properties Map View</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Available Properties in Tulum</h1>
        <MapWithMarkers />
      </main>
    </>
  );
}

