import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import Features from '@/components/sections/Features';
import Dashboard from '@/components/sections/Dashboard';
import BeforeAfter from '@/components/sections/BeforeAfter';
import DownloadCTA from '@/components/sections/DownloadCTA';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <Dashboard />
        <BeforeAfter />
        <DownloadCTA />
        <Testimonials />
        <Footer />
      </main>
    </ThemeProvider>
  );
}