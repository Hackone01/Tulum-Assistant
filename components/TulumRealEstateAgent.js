import { useState } from "react";

export default function TulumRealEstateAgent() {
  const [userQuery, setUserQuery] = useState("");
  const [results, setResults] = useState([]);
  const [buyerInfo, setBuyerInfo] = useState({ name: "", email: "", budget: "", notes: "" });
  const [offerGenerated, setOfferGenerated] = useState(null);

  const handleSearch = async () => {
    const mockResults = [
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
    setResults(mockResults);
  };

  const handleOfferGenerate = async () => {
    const selectedProperty = results[0] || {
      title: "2-bedroom Lock-Off Apartment, Karanda Tulum",
      price: "$399,000 USD",
      agent: "Karanda Tulum",
      location: "Region 15, Block 86, Tulum, Quintana Roo",
      amenities: ["Pool", "Gym", "Beach Club Shuttle", "Spa", "Security 24/7"]
    };

    const payload = {
      buyerName: buyerInfo.name || "Randall L. Hackworth & Melissan Milagros Torres",
      sellerName: selectedProperty.agent,
      propertyTitle: selectedProperty.title,
      location: selectedProperty.location,
      price: selectedProperty.price,
      amenities: selectedProperty.amenities,
      trust: true,
      language: "en"
    };

    try {
      const res = await fetch("/api/generateOffer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.pdfUrl) {
        setOfferGenerated(data.pdfUrl);
      }
    } catch (error) {
      console.error("Failed to generate PDF", error);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🏡 Tulum Real Estate Marketplace Assistant</h1>

      <div className="space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="Search for 2BR in Aldea Zama..."
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">Search Listings</button>
      </div>

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

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">📝 Submit Offer / Buyer Info</h2>
        <input className="border p-2 w-full" placeholder="Full Name" value={buyerInfo.name} onChange={(e) => setBuyerInfo({ ...buyerInfo, name: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Email" value={buyerInfo.email} onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Budget (USD)" value={buyerInfo.budget} onChange={(e) => setBuyerInfo({ ...buyerInfo, budget: e.target.value })} />
        <textarea className="border p-2 w-full" placeholder="Preferred location, property type, trust preference, etc." value={buyerInfo.notes} onChange={(e) => setBuyerInfo({ ...buyerInfo, notes: e.target.value })} />
        <button onClick={handleOfferGenerate} className="bg-green-600 text-white px-4 py-2 rounded">Generate Offer Letter</button>
        {offerGenerated && (
          <div className="mt-4">
            <a href={offerGenerated} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Download Offer Letter PDF</a>
          </div>
        )}
      </div>

      <div className="pt-6">
        <h2 className="text-xl font-semibold">📱 Follow Local Agents</h2>
        <p>Check out TikToks and reels from verified brokers. Coming soon!</p>
      </div>
    </div>
  );
}
