import React from 'react';
import CategoryHero from '@/components/CategoryHero';
import ProductCard, { Product } from '@/components/ProductCard';

export const metadata = {
  title: 'Kids — Festival Sets & Everyday Cotton | Bhavini',
  description: 'Hand-block cottons, tiny sherwanis, and lehengas built for running, dancing, and growing into.',
};

const kidsEdit: Product[] = [
  { name: 'Chinu Block-Print Frock', craft: 'Soft mul · Jaipur', price: '₹3,200', swatches: ['#F4E6CC', '#9C3B1B'], art: 'block' },
  { name: 'Pari Mini Lehenga', craft: 'Raw silk · Jaipur', price: '₹6,400', swatches: ['#D98E2B', '#5A1A1A'], art: 'zari' },
  { name: 'Veer Mini Sherwani', craft: 'Cotton silk · Delhi', price: '₹5,800', swatches: ['#F4ECDD', '#B8862B'], art: 'zari' },
  { name: 'Nimi Bandhani Frock', craft: 'Tie-dye · Kutch', price: '₹2,900', swatches: ['#9C3B1B', '#FBF6EC'], art: 'bandhani' },
  { name: 'Aarav Kurta-Pyjama', craft: 'Khadi cotton · Pondicherry', price: '₹2,400', swatches: ['#FBF6EC', '#3F5C3A'], art: 'paisley' },
  { name: 'Roohi Leheriya Lehenga', craft: 'Wave dye · Jaipur', price: '₹4,800', swatches: ['#F4ECDD', '#9C3B1B'], art: 'leheriya' },
  { name: 'Toonu Kalamkari Dress', craft: 'Hand-painted · Andhra', price: '₹3,500', swatches: ['#E7DAC1', '#3F5C3A'], art: 'kalamkari' },
  { name: 'Mishti Paisley Anarkali', craft: 'Mul cotton · Lucknow', price: '₹3,900', swatches: ['#F4E6CC', '#5A1A1A'], art: 'paisley' },
  { name: 'Ira Mirrorwork Choli Set', craft: 'Cotton mirrorwork · Kutch', price: '₹4,600', swatches: ['#9C3B1B', '#D98E2B'], art: 'bandhani' },
  { name: 'Rishi Nehru Jacket Set', craft: 'Cotton silk · Ahmedabad', price: '₹4,200', swatches: ['#1F1813', '#B8862B'], art: 'zari' },
  { name: 'Anaya Tiered Dress', craft: 'Hand-block mul · Jaipur', price: '₹3,800', swatches: ['#F4E6CC', '#C0612A'], art: 'block' },
  { name: 'Vihaan Dhoti-Kurta', craft: 'Soft khadi · Pondicherry', price: '₹3,400', swatches: ['#FBF6EC', '#3F5C3A'], art: 'paisley' },
];

export default function KidsPage() {
  return (
    <>
      <CategoryHero
        eyebrow="The little atelier"
        title="Small hands, soft cloth."
        description="Pure cotton you can wash on a Sunday morning. Festival sets cut with growing room. Buttons hand-stitched so a four-year-old can do them up themselves."
        motif="kite"
      />

      <section id="edit" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-3">The edit</p>
            <h2 className="font-display text-4xl text-maroon">For Diwali, Eid, weddings, and Tuesday</h2>
          </div>
          <p className="text-sm text-muted max-w-sm">Sizes 0–14 years. Free re-hemming as they grow.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {kidsEdit.map((p) => <ProductCard key={p.name} product={p} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[5/4] overflow-hidden bg-cream">
            <svg viewBox="0 0 500 400" className="w-full h-full" aria-hidden="true">
              <rect width="500" height="400" fill="#F4ECDD" />
              {/* a sky of kites */}
              <g>
                {Array.from({ length: 9 }).map((_, i) => {
                  const x = 50 + (i % 3) * 160;
                  const y = 60 + Math.floor(i / 3) * 110;
                  const colors = ['#D98E2B', '#9C3B1B', '#3F5C3A', '#5A1A1A', '#C0612A', '#B8862B'];
                  const c = colors[i % colors.length];
                  return (
                    <g key={i} transform={`translate(${x} ${y}) rotate(${(i % 2 ? -1 : 1) * 12})`}>
                      <path d="M0 -28 L 28 0 L 0 28 L -28 0 Z" fill={c} />
                      <path d="M0 -28 L 0 28 M -28 0 L 28 0" stroke="#FBF6EC" strokeWidth="0.9" />
                      <path d="M0 28 Q 6 50 -2 70 Q 6 90 0 110" stroke={c} fill="none" strokeWidth="1" />
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-4">Grown into, never out of</p>
            <h2 className="font-display text-4xl md:text-5xl text-maroon leading-tight">A tailoring promise</h2>
            <p className="mt-5 text-ink/75 leading-relaxed">
              Children grow in jumps. Every Bhavini piece comes with two complimentary re-hems and one resize within
              the first eighteen months. We tuck extra fabric into hems and seams so a Diwali lehenga can be lengthened
              for the next.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              <li className="flex gap-3"><span className="text-saffron">✦</span> Hypoallergenic dyes on all under-three pieces</li>
              <li className="flex gap-3"><span className="text-saffron">✦</span> No metallic zari near the neck or wrists</li>
              <li className="flex gap-3"><span className="text-saffron">✦</span> Hidden adjustable elastics, drawstrings, hook eyes</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
