import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF6EC',
        cream: '#F4ECDD',
        sand: '#E7DAC1',
        marigold: '#D98E2B',
        saffron: '#C0612A',
        terracotta: '#9C3B1B',
        maroon: '#5A1A1A',
        ink: '#1F1813',
        muted: '#6B5E4E',
        gold: '#B8862B',
        leaf: '#3F5C3A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 32px -16px rgba(90, 26, 26, 0.25)',
      },
      backgroundImage: {
        'paisley-fade': 'radial-gradient(circle at 20% 20%, rgba(217,142,43,0.12), transparent 55%), radial-gradient(circle at 80% 80%, rgba(156,59,27,0.10), transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;
