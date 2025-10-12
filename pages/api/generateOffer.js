export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    buyerName = 'Randall L. Hackworth & Melissan Milagros Torres',
    sellerName = 'Karanda Tulum',
    propertyTitle = '2-bedroom Lock-Off Apartment, Karanda Tulum',
    location = 'Region 15, Block 86, Tulum, Quintana Roo',
    price = '$399,000 USD',
    amenities = ['Pool', 'Gym', 'Beach Club Shuttle', 'Spa', 'Security 24/7'],
    trust = true,
    language = 'en'
  } = req.body;

  const content = `**Property Brochure & Offer Intent**

**Property:** ${propertyTitle}  
**Location:** ${location}  
**Price:** ${price}  
**Agent/Developer:** ${sellerName}  

**Buyer(s):** ${buyerName}  

We, the undersigned, hereby express our intention to purchase the above-referenced property located within the ${sellerName} development. The unit is part of a luxury residential project featuring amenities such as ${amenities.join(", ")}.

${trust ? "As the property is situated in the restricted zone of Mexico, we understand and accept that ownership will be structured through a fideicomiso (Mexican bank trust), with us as designated beneficiaries, in accordance with Mexican law." : ""}

This document reflects our serious interest to proceed with the acquisition, subject to final due diligence and agreement to all legal terms. It does not constitute a binding contract.

Thank you for your attention. We look forward to moving forward with this opportunity.

Sincerely,

${buyerName}`;

  const mockPdfUrl = 'https://myaidrive.com/pdf-viewer?url=file-id://letter_0c00b503-0332-4588-8a64-16f4ead3e2d1.pdf';

  return res.status(200).json({ pdfUrl: mockPdfUrl });
}
