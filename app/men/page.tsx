import React from 'react';
import CategoryHero from '@/components/CategoryHero';
import ProductCard, { Product } from '@/components/ProductCard';

export const metadata = {
  title: 'Men — Sherwanis, Bandhgalas & Kurtas | Bhavini',
  description: 'Tailored sherwanis, bandhgala suits, and hand-block kurtas — quiet luxury for festivals, weddings, and everyday.',
};

const menEdit: Product[] = [
  { name: 'Ishan Ivory Sherwani', craft: 'Raw silk · Delhi', price: '₹64,000', swatches: ['#F4ECDD', '#B8862B'], art: 'zari' },
  { name: 'Yuvan Bandhgala', craft: 'Wool blend · Jodhpur', price: '₹38,500', swatches: ['#1F1813', '#D98E2B'], art: 'block' },
  { name: 'Arav Block-Print Kurta', craft: 'Khadi · Jaipur', price: '₹4,800', swatches: ['#F4E6CC', '#9C3B1B'], art: 'block' },
  { name: 'Manav Linen Kurta-Pyjama', craft: 'Hand-loomed linen · Pondicherry', price: '₹7,200', swatches: ['#FBF6EC', '#3F5C3A'], art: 'paisley' },
  { name: 'Veer Brocade Nehru Jacket', craft: 'Banarasi brocade', price: '₹22,400', swatches: ['#5A1A1A', '#D98E2B'], art: 'zari' },
  { name: 'Dhruv Kalamkari Shirt', craft: 'Hand-painted · Andhra', price: '₹6,900', swatches: ['#E7DAC1', '#3F5C3A'], art: 'kalamkari' },
  { name: 'Rohan Maroon Bandhgala', craft: 'Silk & wool · Mumbai', price: '₹42,000', swatches: ['#5A1A1A', '#B8862B'], art: 'paisley' },
  { name: 'Aarush Bandhani Stole', craft: 'Tie-dye · Kutch', price: '₹3,600', swatches: ['#9C3B1B', '#FBF6EC'], art: 'bandhani' },
  { name: 'Ayaan Embroidered Kurta', craft: 'Cotton silk · Lucknow', price: '₹7,800', swatches: ['#FBF6EC', '#5A1A1A'], art: 'zari' },
  { name: 'Kabir Brocade Jacket', craft: 'Banarasi brocade', price: '₹18,400', swatches: ['#1F1813', '#D98E2B'], art: 'zari' },
  { name: 'Nikhil Angrakha Kurta', craft: 'Hand-block cotton · Bagru', price: '₹6,200', swatches: ['#F4E6CC', '#C0612A'], art: 'block' },
  { name: 'Dev Silk Dhoti Set', craft: 'Matka silk · Bengal', price: '₹16,800', swatches: ['#F4ECDD', '#B8862B'], art: 'paisley' },
];

const groomLooks = [
  { name: 'The Sangeet', desc: 'Pastel kurta, churidar, structured Nehru jacket', tone: '#D98E2B' },
  { name: 'The Haldi', desc: 'Block-print kurta, soft pyjamas, leather mojaris', tone: '#3F5C3A' },
  { name: 'The Pheras', desc: 'Ivory sherwani, brocade dupatta, sehra', tone: '#5A1A1A' },
];

export default function MenPage() {
  return (
    <>
      <CategoryHero
        eyebrow="The men’s atelier"
        title="Quiet ceremony."
        description="A bandhgala that holds its line after three weddings. A kurta soft enough for Sunday brunch and sharp enough for the mandap. Tailored over four fittings — never rushed."
        motif="mandala"
      />

      <section id="edit" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-3">The edit</p>
            <h2 className="font-display text-4xl text-maroon">For ceremony, court, and the in-between</h2>
          </div>
          <p className="text-sm text-muted max-w-sm">All sizes cut to measure. Allow 4–6 weeks for tailoring.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {menEdit.map((p) => <ProductCard key={p.name} product={p} />)}
        </div>
      </section>

      <section className="bg-[#1F1813] text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.28em] text-marigold mb-4">The groom’s wardrobe</p>
            <h2 className="font-display text-4xl md:text-5xl">Three looks, one wedding</h2>
            <p className="mt-5 max-w-2xl mx-auto text-ivory/70">
              A complete groom&rsquo;s wardrobe styled and tailored together — so every ceremony feels of one piece.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {groomLooks.map((l) => (
              <div key={l.name} className="border border-ivory/15 p-8 hover:border-marigold transition-colors">
                <span className="inline-block h-1 w-10 mb-6" style={{ background: l.tone }} />
                <h3 className="font-display text-3xl text-ivory">{l.name}</h3>
                <p className="mt-3 text-sm text-ivory/70 leading-relaxed">{l.desc}</p>
                <a href="/contact/" className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-marigold hover:text-ivory">
                  Style this look →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
