import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sand/60 bg-[#1F1813] text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="text-ivory">
            <Logo />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ivory/70 max-w-xs">
            Slow-made BAP clothing from family ateliers across Gujarat, Banaras, and Kanchipuram.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-marigold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li><a href="/women/" className="hover:text-marigold">Women</a></li>
            <li><a href="/men/" className="hover:text-marigold">Men</a></li>
            <li><a href="/kids/" className="hover:text-marigold">Kids</a></li>
            <li><a href="/women/" className="hover:text-marigold">Bridal &amp; Trousseau</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-marigold mb-4">Atelier</h4>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li><a href="/contact/" className="hover:text-marigold">Book an appointment</a></li>
            <li><a href="/contact/" className="hover:text-marigold">Bespoke &amp; alterations</a></li>
            <li><a href="/contact/" className="hover:text-marigold">Care &amp; revival</a></li>
            <li><a href="/contact/" className="hover:text-marigold">Our karigars</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-marigold mb-4">Letters from Bhavini</h4>
          <p className="text-sm text-ivory/70 mb-4">
            Monthly notes on weaves, festivals, and trunk shows. No clutter.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email"
              className="flex-1 bg-transparent border border-ivory/30 rounded-none px-3 py-2 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-marigold"
            />
            <button type="submit" className="bg-marigold text-ink px-4 py-2 text-xs uppercase tracking-[0.18em] hover:bg-saffron hover:text-ivory transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} Bhavini Atelier — curated by Amit Patel. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/contact/" className="hover:text-marigold">Shipping</a>
            <a href="/contact/" className="hover:text-marigold">Returns</a>
            <a href="/contact/" className="hover:text-marigold">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
