import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bhavini — BAP Indian Clothing by Amit Patel',
  description:
    'Slow-made saris, sherwanis, lehengas, and childrenswear from family ateliers across Gujarat, Banaras, and Kanchipuram.',
};

export const viewport: Viewport = {
  themeColor: '#FBF6EC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
