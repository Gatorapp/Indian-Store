'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="border-b border-sand/60 bg-paisley-fade">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-saffron mb-5">Visit, write, or call</p>
            <h1 className="font-display text-5xl md:text-7xl text-maroon leading-[0.95]">Come sit with the cloth.</h1>
            <p className="mt-6 max-w-xl text-ivory-foreground text-lg leading-relaxed text-ink/75">
              Our ateliers in Ahmedabad and Mumbai welcome a handful of guests each day. Tea is on us; the conversation is
              with Amit and the tailors.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[5/6] overflow-hidden shadow-card">
              <svg viewBox="0 0 400 480" className="w-full h-full" aria-hidden="true">
                <rect width="400" height="480" fill="#5A1A1A" />
                <g transform="translate(200 240)" stroke="#D98E2B" fill="none" strokeWidth="0.9">
                  {[40, 80, 120, 160, 200].map((r) => <circle key={r} r={r} opacity={0.55} />)}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line key={i} x1="0" y1="0" x2={210 * Math.cos((i / 24) * Math.PI * 2)} y2={210 * Math.sin((i / 24) * Math.PI * 2)} opacity="0.3" />
                  ))}
                  <circle r="14" fill="#D98E2B" />
                </g>
                <text x="200" y="430" textAnchor="middle" fill="#D98E2B" fontFamily="Cormorant Garamond, serif" fontSize="22" letterSpacing="6">Bhavinii</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-saffron mb-3">Ahmedabad atelier</p>
            <h3 className="font-display text-2xl text-maroon mb-2">Studio Bhavini, Navrangpura</h3>
            <p className="text-sm text-ink/75 leading-relaxed">
              14, Sharda House, Off C. G. Road<br />
              Navrangpura, Ahmedabad 380 009<br />
              Tuesday – Saturday, 11:00 – 19:00
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-saffron mb-3">Mumbai trunk show</p>
            <h3 className="font-display text-2xl text-maroon mb-2">Bandra West (by appointment)</h3>
            <p className="text-sm text-ink/75 leading-relaxed">
              Hosted at Aaramgah, Linking Road<br />
              Two trunk weeks each season — write to be added to the guest list.
            </p>
          </div>

          <div className="hand-divider" />

          <div className="space-y-3 text-sm">
            <p><span className="uppercase tracking-[0.18em] text-saffron text-xs">Write to us</span><br /><a href="mailto:hello@Bhavini.in" className="text-ink hover:text-saffron">hello@Bhavini.in</a></p>
            <p><span className="uppercase tracking-[0.18em] text-saffron text-xs">Call</span><br /><a href="tel:+919876543210" className="text-ink hover:text-saffron">+91 98765 43210</a></p>
            <p><span className="uppercase tracking-[0.18em] text-saffron text-xs">Bespoke &amp; bridal</span><br /><a href="mailto:bespoke@Bhavini.in" className="text-ink hover:text-saffron">bespoke@Bhavini.in</a></p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="bg-cream/60 border border-sand p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-saffron mb-3">Book an appointment</p>
            <h2 className="font-display text-3xl md:text-4xl text-maroon mb-8">Tell us a little about the occasion.</h2>

            {submitted ? (
              <div className="border border-maroon/20 bg-ivory p-8 text-center">
                <h3 className="font-display text-2xl text-maroon mb-3">Thank you</h3>
                <p className="text-sm text-ink/75">
                  We&rsquo;ve received your note and will write back within a working day. Until then — chai is brewing.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid gap-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Phone (optional)" name="phone" type="tel" />
                  <Select label="Atelier" name="atelier" options={['Ahmedabad', 'Mumbai trunk show', 'Virtual styling']} />
                </div>
                <Select
                  label="What brings you?"
                  name="reason"
                  options={['Bridal trousseau', 'Groom’s wardrobe', "A specific piece", 'Childrenswear', 'Just browsing']}
                />
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">A note to Amit</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full bg-ivory border border-sand px-4 py-3 text-sm text-ink focus:outline-none focus:border-maroon"
                    placeholder="Date of the occasion, colours you love, anything we should know…"
                  />
                </div>
                <button
                  type="submit"
                  className="justify-self-start bg-maroon text-ivory px-8 py-4 text-xs uppercase tracking-[0.18em] hover:bg-saffron transition-colors"
                >
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-ivory border border-sand px-4 py-3 text-sm text-ink focus:outline-none focus:border-maroon"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-muted mb-2">{label}</label>
      <select
        id={name}
        name={name}
        className="w-full bg-ivory border border-sand px-4 py-3 text-sm text-ink focus:outline-none focus:border-maroon"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
