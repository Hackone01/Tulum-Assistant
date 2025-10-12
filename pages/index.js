import Head from 'next/head';
import TulumRealEstateAgent from '../components/TulumRealEstateAgent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tulum Real Estate Assistant</title>
      </Head>
      <main className="min-h-screen bg-white p-6">
        <TulumRealEstateAgent />
      </main>
    </>
  );
}
