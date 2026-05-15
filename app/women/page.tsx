import React from 'react';
import CategoryHero from '@/components/CategoryHero';
import ProductCard, { Product } from '@/components/ProductCard';

export const metadata = {
  title: 'Women — Saris, Lehengas & Kurta Sets | Bhavini',
  description: 'Hand-woven saris, festive lehengas, and everyday kurta sets from family ateliers across India.',
};

const womenEdit: Product[] = [
  { name: 'Mahima Banarasi Sari', craft: 'Pure silk · Banaras', price: '₹42,800', swatches: ['#5A1A1A', '#D98E2B'], art: 'zari' },
  { name: 'Sanjh Anarkali', craft: 'Bagru block · Rajasthan', price: '₹14,200', swatches: ['#FBF6EC', '#C0612A'], art: 'block' },
  { name: 'Vanya Bandhani Dupatta', craft: 'Tie-dye · Kutch', price: '₹6,400', swatches: ['#9C3B1B', '#FBF6EC'], art: 'bandhani' },
  { name: 'Aranya Kalamkari Kurta', craft: 'Hand-painted · Sri Kalahasti', price: '₹8,900', swatches: ['#E7DAC1', '#3F5C3A'], art: 'kalamkari' },
  { name: 'Indrayani Leheriya Sari', craft: 'Wave dye · Jaipur', price: '₹18,600', swatches: ['#F4ECDD', '#9C3B1B'], art: 'leheriya' },
  { name: 'Kalini Paisley Kurta Set', craft: 'Mul cotton · Lucknow', price: '₹11,400', swatches: ['#F4E6CC', '#5A1A1A'], art: 'paisley' },
  { name: 'Reva Bridal Lehenga', craft: 'Zardozi · Delhi', price: '₹1,84,000', swatches: ['#1F1813', '#D98E2B'], art: 'zari' },
  { name: 'Tara Kanjivaram Sari', craft: 'Silk & gold · Kanchipuram', price: '₹56,200', swatches: ['#9C3B1B', '#B8862B'], art: 'zari' },
  { name: 'Naira Chanderi Suit Set', craft: 'Silk cotton · Madhya Pradesh', price: '₹12,600', swatches: ['#F4ECDD', '#B8862B'], art: 'paisley' },
  { name: 'Mira Printed Sharara Set', craft: 'Block print · Jaipur', price: '₹15,900', swatches: ['#C0612A', '#F4E6CC'], art: 'block' },
  { name: 'Aashi Tissue Dupatta', craft: 'Handwoven tissue · Varanasi', price: '₹9,200', swatches: ['#FBF6EC', '#D98E2B'], art: 'zari' },
  { name: 'Meera Cotton Angrakha', craft: 'Ajrakh cotton · Kutch', price: '₹7,600', swatches: ['#1F1813', '#9C3B1B'], art: 'block' },
];

const categories = ['All', 'Saris', 'Lehengas', 'Kurta sets', 'Dupattas', 'Bridal'];

export default function WomenPage() {
  return (
    <>
      <CategoryHero
        eyebrow="The women’s atelier"
        title="Cloth that remembers."
        description="Banarasi silk taken six weeks on the loom. Bandhani tied dot by dot in Bhuj. Block prints stamped by hand in Bagru. Pieces meant to be passed forward — from grandmother to granddaughter."
        motif="arch"
      />

      <section id="edit" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-3">The edit</p>
            <h2 className="font-display text-4xl text-maroon">Twelve pieces for this season</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.15em]">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 border ${i === 0 ? 'bg-maroon text-ivory border-maroon' : 'border-sand text-ink hover:border-maroon'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {womenEdit.map((p) => <ProductCard key={p.name} product={p} />)}
        </div>
      </section>

      <section className="bg-cream/60 border-y border-sand/60">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-4">Bridal &amp; trousseau</p>
          <h2 className="font-display text-4xl md:text-5xl text-maroon">A wedding, woven in</h2>
          <p className="mt-6 text-ink/75 leading-relaxed max-w-2xl mx-auto">
            From the first sangeet sari to the bidaai dupatta — we design the trousseau in conversation with you,
            the karigars, and your family&rsquo;s palette. Four to six months from sketch to fitting.
          </p>
          <a href="/contact/" className="inline-block mt-8 bg-maroon text-ivory px-7 py-4 text-xs uppercase tracking-[0.18em] hover:bg-saffron transition-colors">
            Begin your trousseau
          </a>
        </div>
      </section>
    </>
  );
}
