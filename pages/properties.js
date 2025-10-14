import dynamic from 'next/dynamic';
import Head from 'next/head';

const MapWithMarkers = dynamic(() => import('@/components/MapWithMarkers'), {
  ssr: false,
});

export default function PropertiesPage() {
  return (
    <>
      <Head>
        <title>Properties | Tulum Real Estate Assistant</title>
      </Head>
      <main className="min-h-screen bg-white p-6">
        <h1 className="text-2xl font-bold mb-4">Explore Properties in Tulum</h1>
        <MapWithMarkers />
      </main>
    </>
  );
}
