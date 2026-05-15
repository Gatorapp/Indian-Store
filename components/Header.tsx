'use client';
import React, { useState } from 'react';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/women/', label: 'Women' },
  { href: '/men/', label: 'Men' },
  { href: '/kids/', label: 'Kids' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/60 bg-ivory/85 backdrop-blur">
      <div className="bg-maroon text-ivory text-xs">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <span className="tracking-[0.18em] uppercase">Welcome to Bhavini Shop</span>
          <span className="hidden sm:inline tracking-[0.18em] uppercase">See our Latest Arrival Coming Soon</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-ink hover:text-saffron transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 text-ink">
          <button aria-label="Search" className="hover:text-saffron transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
          <button aria-label="Account" className="hover:text-saffron transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6" strokeLinecap="round" />
            </svg>
          </button>
          <button aria-label="Bag" className="relative hover:text-saffron transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 8h14l-1.2 11.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
            </svg>
            <span className="absolute -top-1.5 -right-2 bg-saffron text-ivory text-[10px] rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </button>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="md:hidden border-t border-sand/60 bg-ivory">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 text-sm uppercase tracking-[0.18em] text-ink hover:text-saffron"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
