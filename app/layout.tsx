import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Florvis | Gestione su finca como un verdadero empresario',
  description: 'Descubra qué variedad de rosa le da mejores resultados, dónde está gastando más y cómo puede producir mejor. Toda la información clara, sin complicaciones.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}