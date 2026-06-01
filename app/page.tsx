import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import Features from '@/components/sections/Features';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const revalidate = process.env.NEXT_PUBLIC_REVALIDATE_TIME;

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <BeforeAfter />
        <Testimonials />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
