import React from 'react';

type Props = { className?: string; showWordmark?: boolean };

export default function Logo({ className = '', showWordmark = true }: Props) {
  return (
    <a href="/" className={`inline-flex items-center gap-3 group ${className}`} aria-label="Bhavini home">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-maroon"
      >
        {/* Lotus-petal monogram framed by a circle — geometric, works at 24px and 200px */}
        <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1" />
        <path
          d="M20 8 C 22.5 13, 22.5 17, 20 20 C 17.5 17, 17.5 13, 20 8 Z"
          fill="currentColor"
          opacity="0.92"
        />
        <path
          d="M20 32 C 17.5 27, 17.5 23, 20 20 C 22.5 23, 22.5 27, 20 32 Z"
          fill="currentColor"
          opacity="0.92"
        />
        <path
          d="M8 20 C 13 17.5, 17 17.5, 20 20 C 17 22.5, 13 22.5, 8 20 Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M32 20 C 27 17.5, 23 17.5, 20 20 C 23 22.5, 27 22.5, 32 20 Z"
          fill="currentColor"
          opacity="0.6"
        />
        <circle cx="20" cy="20" r="1.6" fill="#D98E2B" />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold text-maroon tracking-tight">Bhavini</span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted mt-1">Atelier &amp; Boutique</span>
        </span>
      )}
    </a>
  );
}
