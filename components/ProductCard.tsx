import React from 'react';

export type Product = {
  name: string;
  craft: string;
  price: string;
  swatches: string[];
  art: 'paisley' | 'bandhani' | 'kalamkari' | 'block' | 'zari' | 'leheriya';
};

const palettes: Record<Product['art'], { bg: string; ink: string; accent: string }> = {
  paisley:   { bg: '#F4E6CC', ink: '#5A1A1A', accent: '#D98E2B' },
  bandhani:  { bg: '#9C3B1B', ink: '#FBF6EC', accent: '#FBF6EC' },
  kalamkari: { bg: '#E7DAC1', ink: '#3F5C3A', accent: '#9C3B1B' },
  block:     { bg: '#FBF6EC', ink: '#5A1A1A', accent: '#C0612A' },
  zari:      { bg: '#1F1813', ink: '#D98E2B', accent: '#B8862B' },
  leheriya:  { bg: '#F4ECDD', ink: '#9C3B1B', accent: '#3F5C3A' },
};

function Artwork({ art }: { art: Product['art'] }) {
  const p = palettes[art];
  return (
    <svg viewBox="0 0 400 500" className="product-thumb w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="500" fill={p.bg} />

      {art === 'paisley' && (
        <g fill="none" stroke={p.ink} strokeWidth="1.2" opacity="0.85">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 4 }).map((__, c) => {
              const x = 60 + c * 90;
              const y = 60 + r * 80;
              return (
                <g key={`${r}-${c}`} transform={`translate(${x} ${y}) rotate(${(r + c) * 8})`}>
                  <path d="M0 0 C 16 -10, 28 8, 18 24 C 8 32, -6 22, 0 8 Z" fill={p.accent} fillOpacity="0.15" />
                  <path d="M0 0 C 16 -10, 28 8, 18 24 C 8 32, -6 22, 0 8 Z" />
                  <circle cx="10" cy="14" r="2.5" fill={p.accent} />
                </g>
              );
            })
          )}
        </g>
      )}

      {art === 'bandhani' && (
        <g fill={p.ink} opacity="0.95">
          {Array.from({ length: 16 }).map((_, r) =>
            Array.from({ length: 10 }).map((__, c) => {
              const x = 25 + c * 38 + (r % 2 ? 19 : 0);
              const y = 30 + r * 30;
              return <circle key={`${r}-${c}`} cx={x} cy={y} r={(r + c) % 5 === 0 ? 4 : 2.5} />;
            })
          )}
          <rect x="0" y="220" width="400" height="60" fill={p.accent} opacity="0.18" />
        </g>
      )}

      {art === 'kalamkari' && (
        <g fill="none" stroke={p.ink} strokeWidth="1.4">
          <path d="M50 450 C 80 350, 140 320, 200 340 C 260 360, 320 320, 360 380" />
          <path d="M50 380 C 100 300, 160 280, 220 300 C 290 320, 340 270, 380 320" opacity="0.55" />
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`translate(${40 + i * 30} ${320 + (i % 3) * 18}) rotate(${i * 12})`}>
              <path d="M0 0 C 8 -8, 18 -2, 14 10 C 10 18, -2 14, 0 0 Z" fill={p.accent} fillOpacity="0.25" />
              <path d="M0 0 C 8 -8, 18 -2, 14 10 C 10 18, -2 14, 0 0 Z" />
            </g>
          ))}
          <circle cx="200" cy="160" r="42" stroke={p.accent} strokeWidth="1.6" />
          <circle cx="200" cy="160" r="14" fill={p.accent} opacity="0.6" />
        </g>
      )}

      {art === 'block' && (
        <g>
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 5 }).map((__, c) => {
              const x = 40 + c * 70;
              const y = 50 + r * 60;
              return (
                <g key={`${r}-${c}`} transform={`translate(${x} ${y})`}>
                  <rect x="-22" y="-22" width="44" height="44" fill="none" stroke={p.ink} strokeWidth="0.8" opacity="0.4" />
                  <path d="M0 -16 L 12 0 L 0 16 L -12 0 Z" fill={p.accent} opacity="0.85" />
                  <circle cx="0" cy="0" r="3" fill={p.ink} />
                </g>
              );
            })
          )}
        </g>
      )}

      {art === 'zari' && (
        <g>
          <defs>
            <linearGradient id="zariGrad" x1="0" x2="1">
              <stop offset="0" stopColor="#B8862B" />
              <stop offset="0.5" stopColor="#F4D27A" />
              <stop offset="1" stopColor="#B8862B" />
            </linearGradient>
          </defs>
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${30 + i * 32} Q 200 ${10 + i * 32} 400 ${30 + i * 32}`}
              stroke="url(#zariGrad)"
              strokeWidth="1.2"
              fill="none"
              opacity={0.4 + (i % 3) * 0.2}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <g key={i} transform={`translate(${80 + i * 60} 250)`}>
              <path d="M0 -18 L 6 -6 L 18 -6 L 8 2 L 12 14 L 0 7 L -12 14 L -8 2 L -18 -6 L -6 -6 Z" fill="#D98E2B" opacity="0.9" />
            </g>
          ))}
        </g>
      )}

      {art === 'leheriya' && (
        <g fill="none" strokeWidth="6">
          {Array.from({ length: 18 }).map((_, i) => (
            <path
              key={i}
              d={`M${-50 + i * 30} -20 Q ${50 + i * 30} 250 ${-50 + i * 30} 520`}
              stroke={i % 2 ? p.ink : p.accent}
              opacity="0.7"
            />
          ))}
        </g>
      )}
    </svg>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card group">
      <div className="aspect-[4/5] overflow-hidden bg-sand">
        <Artwork art={product.art} />
      </div>
      <div className="pt-4 flex justify-between items-start gap-4">
        <div>
          <h3 className="font-display text-xl text-ink leading-tight">{product.name}</h3>
          <p className="text-xs uppercase tracking-[0.15em] text-muted mt-1">{product.craft}</p>
        </div>
        <p className="text-sm text-ink whitespace-nowrap">{product.price}</p>
      </div>
      <div className="flex gap-1.5 mt-3">
        {product.swatches.map((c, i) => (
          <span
            key={i}
            className="h-3.5 w-3.5 rounded-full border border-ink/15"
            style={{ background: c }}
            aria-hidden
          />
        ))}
      </div>
    </article>
  );
}
