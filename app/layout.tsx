import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Florvis | Gestione su finca como un verdadero empresario',
  description: 'Descubra qué variedad de rosa le da mejores resultados, dónde está gastando más y cómo puede producir mejor. Toda la información clara, sin complicaciones.',
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    // Location-specific keywords (Spanish)
    'floricolas Cayambe',
    'flores Cayambe',
    'rosas Cayambe',
    'producción de rosas Cayambe',
    'cultivo de rosas Ecuador',

    // Business-specific keywords (Spanish)
    'gestión de florícolas',
    'software florícola',
    'manejo de rosas Ecuador',
    'producción de flores Ecuador',
    'sistema gestión florícola',

    // Technical/Professional terms (Spanish)
    'control de producción flores',
    'administración florícola',
    'software para floricultura',
    'app para floricultores',

    // English keywords for international reach
    'Ecuador roses',
    'Cayambe rose farms',
    'Ecuador flower production',
    'rose farm management',
    'flower farm software Ecuador',

    // Industry-specific terms
    'floricultura Ecuador',
    'exportación de rosas',
    'rose export Ecuador',
    'flower farm management system'
  ],
  creator: 'Garage Designs',
  authors: [
    { name: 'Bertil Tandayamo', url: 'https://www.bertiltandayamo.dev/' },
    { name: 'Garage Designs', url: 'https://www.bertiltandayamo.dev/' }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${playfair.variable} ${dmSans.variable}`}>
      <body
        className={dmSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}