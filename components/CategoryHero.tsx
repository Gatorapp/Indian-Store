import React from 'react';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  motif: 'arch' | 'mandala' | 'kite';
};

function Motif({ motif }: { motif: Props['motif'] }) {
  if (motif === 'arch') {
    return (
      <svg viewBox="0 0 400 480" className="w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="archGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#9C3B1B" />
            <stop offset="1" stopColor="#5A1A1A" />
          </linearGradient>
        </defs>
        <rect width="400" height="480" fill="#F4ECDD" />
        <path d="M80 460 V 200 Q 80 80 200 80 Q 320 80 320 200 V 460 Z" fill="url(#archGrad)" />
        <path d="M110 460 V 210 Q 110 110 200 110 Q 290 110 290 210 V 460 Z" fill="#F4ECDD" />
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx={200 + Math.cos((i / 14) * Math.PI) * 70} cy={210 - Math.sin((i / 14) * Math.PI) * 70} r="2.5" fill="#D98E2B" />
        ))}
        <path d="M200 200 C 218 210, 218 230, 200 250 C 182 230, 182 210, 200 200 Z" fill="#D98E2B" />
        <path d="M200 250 C 212 260, 212 278, 200 290 C 188 278, 188 260, 200 250 Z" fill="#B8862B" />
        <line x1="200" y1="290" x2="200" y2="460" stroke="#D98E2B" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
    );
  }
  if (motif === 'mandala') {
    return (
      <svg viewBox="0 0 400 480" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="480" fill="#5A1A1A" />
        <g transform="translate(200 240)" stroke="#D98E2B" fill="none" strokeWidth="0.9" opacity="0.95">
          {[40, 70, 100, 130, 160, 190].map((r, i) => (
            <circle key={i} r={r} opacity={0.4 + i * 0.08} />
          ))}
          {Array.from({ length: 16 }).map((_, i) => {
            const a = (i / 16) * Math.PI * 2;
            return (
              <g key={i} transform={`rotate(${(i / 16) * 360})`}>
                <path d="M0 -40 C 12 -70, 12 -110, 0 -140 C -12 -110, -12 -70, 0 -40 Z" />
                <circle cx="0" cy="-160" r="3" fill="#D98E2B" />
              </g>
            );
          })}
          <circle r="14" fill="#D98E2B" />
        </g>
      </svg>
    );
  }
  // kite
  return (
    <svg viewBox="0 0 400 480" className="w-full h-full" aria-hidden="true">
      <rect width="400" height="480" fill="#FBF6EC" />
      {[
        { x: 90, y: 110, c: '#D98E2B', r: -12 },
        { x: 260, y: 70, c: '#9C3B1B', r: 18 },
        { x: 150, y: 240, c: '#3F5C3A', r: 8 },
        { x: 300, y: 220, c: '#C0612A', r: -22 },
        { x: 110, y: 360, c: '#B8862B', r: 14 },
        { x: 270, y: 360, c: '#5A1A1A', r: -6 },
      ].map((k, i) => (
        <g key={i} transform={`translate(${k.x} ${k.y}) rotate(${k.r})`}>
          <path d="M0 -40 L 40 0 L 0 40 L -40 0 Z" fill={k.c} />
          <path d="M0 -40 L 0 40 M -40 0 L 40 0" stroke="#FBF6EC" strokeWidth="1.2" />
          <path d={`M0 40 Q ${(i % 2 ? -1 : 1) * 10} 70 0 90 Q ${(i % 2 ? 1 : -1) * 8} 110 0 130`} stroke={k.c} strokeWidth="1" fill="none" />
        </g>
      ))}
    </svg>
  );
}

export default function CategoryHero({ eyebrow, title, description, motif }: Props) {
  return (
    <section className="border-b border-sand/60 bg-paisley-fade">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-5">{eyebrow}</p>
          <h1 className="font-display text-5xl md:text-7xl text-maroon leading-[0.95]">{title}</h1>
          <p className="mt-6 max-w-xl text-ink/75 text-lg leading-relaxed">{description}</p>
          <div className="mt-8 flex gap-3 text-xs uppercase tracking-[0.18em]">
            <a href="#edit" className="bg-maroon text-ivory px-6 py-3 hover:bg-saffron transition-colors">Shop the edit</a>
            <a href="/contact/" className="border border-maroon text-maroon px-6 py-3 hover:bg-maroon hover:text-ivory transition-colors">Book a fitting</a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="aspect-[5/6] overflow-hidden shadow-card">
            <Motif motif={motif} />
          </div>
        </div>
      </div>
    </section>
  );
}
