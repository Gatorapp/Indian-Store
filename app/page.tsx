import React from 'react';
import ProductCard, { Product } from '@/components/ProductCard';

const featured: Product[] = [
  { name: 'Mahima Banarasi Sari', craft: 'Pure silk · Banaras', price: '₹42,800', swatches: ['#5A1A1A', '#D98E2B'], art: 'zari' },
  { name: 'Vanya Bandhani Dupatta', craft: 'Tie-dye · Kutch', price: '₹6,400', swatches: ['#9C3B1B', '#FBF6EC'], art: 'bandhani' },
  { name: 'Aranya Kalamkari Kurta', craft: 'Hand-painted · Sri Kalahasti', price: '₹8,900', swatches: ['#E7DAC1', '#3F5C3A'], art: 'kalamkari' },
  { name: 'Sanjh Block-Print Anarkali', craft: 'Bagru block · Rajasthan', price: '₹14,200', swatches: ['#FBF6EC', '#C0612A'], art: 'block' },
  { name: 'Naira Chanderi Suit Set', craft: 'Silk cotton · Madhya Pradesh', price: '₹12,600', swatches: ['#F4ECDD', '#B8862B'], art: 'paisley' },
  { name: 'Ayaan Embroidered Kurta', craft: 'Cotton silk · Lucknow', price: '₹7,800', swatches: ['#FBF6EC', '#5A1A1A'], art: 'zari' },
  { name: 'Mira Printed Sharara Set', craft: 'Block print · Jaipur', price: '₹15,900', swatches: ['#C0612A', '#F4E6CC'], art: 'block' },
  { name: 'Kabir Brocade Jacket', craft: 'Banarasi brocade', price: '₹18,400', swatches: ['#1F1813', '#D98E2B'], art: 'zari' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-paisley-fade pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 grid md:grid-cols-12 gap-10 items-center relative">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.32em] text-saffron mb-6">Festive 2025 · The Heritage Edit</p>
            <h1 className="font-display text-6xl md:text-[6.5rem] leading-[0.9] text-maroon">
              BAP<br />
              <span className="italic text-saffron">in the making.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink/75 leading-relaxed">
              Bhavini is a small atelier curated by Amit Patel, working with eleven karigar families across India to
              keep handloom, block, and zari traditions in everyday wardrobes.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em]">
              <a href="/women/" className="bg-maroon text-ivory px-7 py-4 hover:bg-saffron transition-colors">Shop women</a>
              <a href="/men/" className="border border-maroon text-maroon px-7 py-4 hover:bg-maroon hover:text-ivory transition-colors">Shop men</a>
              <a href="/kids/" className="border border-maroon text-maroon px-7 py-4 hover:bg-maroon hover:text-ivory transition-colors">Shop kids</a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] shadow-card overflow-hidden">
              <svg viewBox="0 0 400 500" className="w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="heroGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#9C3B1B" />
                    <stop offset="1" stopColor="#5A1A1A" />
                  </linearGradient>
                  <radialGradient id="glow" cx="0.5" cy="0.45" r="0.5">
                    <stop offset="0" stopColor="#D98E2B" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#D98E2B" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="400" height="500" fill="url(#heroGrad)" />
                <rect width="400" height="500" fill="url(#glow)" />

                {/* zari shimmer lines */}
                {Array.from({ length: 24 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M0 ${20 + i * 22} Q 200 ${i * 22} 400 ${20 + i * 22}`}
                    stroke="#D98E2B"
                    strokeWidth="0.7"
                    opacity={0.18 + (i % 4) * 0.1}
                    fill="none"
                  />
                ))}

                {/* central paisley cluster */}
                <g transform="translate(200 250)" fill="none" stroke="#FBF6EC" strokeWidth="1.4" opacity="0.95">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <g key={i} transform={`rotate(${(i / 8) * 360})`}>
                      <path d="M0 -30 C 28 -20, 40 10, 18 40 C 0 30, -8 0, 0 -30 Z" />
                      <circle cx="0" cy="-20" r="2" fill="#D98E2B" />
                    </g>
                  ))}
                  <circle r="10" fill="#D98E2B" />
                </g>

                {/* corner stamps */}
                {[[40, 40], [360, 40], [40, 460], [360, 460]].map(([x, y], i) => (
                  <g key={i} transform={`translate(${x} ${y})`} fill="#D98E2B" opacity="0.9">
                    <path d="M0 -10 L 8 0 L 0 10 L -8 0 Z" />
                    <circle r="2" fill="#FBF6EC" />
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-5 left-5 right-5 bg-ivory/95 px-4 py-3 text-xs uppercase tracking-[0.18em] text-maroon flex justify-between">
                <span>Mahima Sari</span>
                <span>₹42,800</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-3">Shop by wardrobe</p>
            <h2 className="font-display text-4xl md:text-5xl text-maroon">A house of three closets</h2>
          </div>
          <p className="hidden md:block text-sm text-muted max-w-sm">
            Every silhouette is cut, embroidered, and finished by name — never anonymous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { href: '/women/', title: 'Women', sub: 'Saris · Lehengas · Kurta sets', motif: 'arch' as const, bg: '#5A1A1A', fg: '#FBF6EC', accent: '#D98E2B' },
            { href: '/men/', title: 'Men', sub: 'Sherwanis · Bandhgalas · Kurtas', motif: 'mandala' as const, bg: '#1F1813', fg: '#D98E2B', accent: '#B8862B' },
            { href: '/kids/', title: 'Kids', sub: 'Festival sets · Everyday cotton', motif: 'kite' as const, bg: '#F4ECDD', fg: '#9C3B1B', accent: '#3F5C3A' },
          ].map((c) => (
            <a key={c.href} href={c.href} className="group relative aspect-[4/5] overflow-hidden block">
              <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" aria-hidden>
                <rect width="400" height="500" fill={c.bg} />
                {c.motif === 'arch' && (
                  <>
                    <path d="M70 480 V 220 Q 70 90 200 90 Q 330 90 330 220 V 480 Z" fill={c.accent} opacity="0.18" />
                    <path d="M100 480 V 230 Q 100 120 200 120 Q 300 120 300 230 V 480 Z" fill={c.fg} opacity="0.06" />
                    <circle cx="200" cy="220" r="60" stroke={c.accent} strokeWidth="1.2" fill="none" />
                    <path d="M200 200 C 218 215, 218 235, 200 255 C 182 235, 182 215, 200 200 Z" fill={c.accent} />
                  </>
                )}
                {c.motif === 'mandala' && (
                  <g transform="translate(200 250)" stroke={c.accent} fill="none" strokeWidth="0.8" opacity="0.9">
                    {[60, 100, 140, 180].map((r) => <circle key={r} r={r} />)}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <g key={i} transform={`rotate(${i * 30})`}>
                        <path d="M0 -60 C 14 -90, 14 -130, 0 -160 C -14 -130, -14 -90, 0 -60 Z" />
                      </g>
                    ))}
                    <circle r="12" fill={c.accent} />
                  </g>
                )}
                {c.motif === 'kite' && (
                  <g>
                    {[[120,150,'#D98E2B'],[280,130,'#9C3B1B'],[200,260,'#3F5C3A'],[110,360,'#C0612A'],[300,380,'#5A1A1A']].map(([x,y,fill],i)=>(
                      <g key={i} transform={`translate(${x} ${y}) rotate(${i*15-20})`}>
                        <path d="M0 -36 L 32 0 L 0 36 L -32 0 Z" fill={fill as string} />
                        <path d="M0 -36 L 0 36 M -32 0 L 32 0" stroke="#FBF6EC" strokeWidth="1" />
                      </g>
                    ))}
                  </g>
                )}
              </svg>
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="font-display text-4xl" style={{ color: c.fg }}>{c.title}</h3>
                <p className="text-xs uppercase tracking-[0.18em] mt-2" style={{ color: c.fg, opacity: 0.85 }}>{c.sub}</p>
                <span className="mt-4 inline-flex items-center text-xs uppercase tracking-[0.2em]" style={{ color: c.accent }}>
                  Enter →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="bg-cream/60 border-y border-sand/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-3">Just in</p>
              <h2 className="font-display text-4xl md:text-5xl text-maroon">From this week&rsquo;s loom</h2>
            </div>
            <a href="/women/" className="hidden md:inline text-xs uppercase tracking-[0.18em] text-maroon hover:text-saffron">View all →</a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featured.map((p) => <ProductCard key={p.name} product={p} />)}
          </div>
        </div>
      </section>

      {/* Atelier note */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-6">From the atelier</p>
        <p className="font-display text-3xl md:text-5xl text-maroon leading-tight">
          &ldquo;We do not chase seasons. We listen to the cloth, and let it tell us when a piece is finished.&rdquo;
        </p>
        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted">— Amit Patel, founder</p>
        <div className="hand-divider mt-10 max-w-md mx-auto" />
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
          {[
            { k: 'Eleven', v: 'partner karigar families across four states' },
            { k: 'Six weeks', v: 'minimum time on the loom for a Banarasi sari' },
            { k: 'Lifetime', v: 'complimentary care, repair, and revival' },
          ].map((stat) => (
            <div key={stat.k}>
              <p className="font-display text-4xl text-maroon">{stat.k}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{stat.v}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
