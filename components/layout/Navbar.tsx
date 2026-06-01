"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'El servicio', href: '#features' },
  { name: 'Beneficios', href: '#transformation' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Contacto', href: '#footer' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Florvis Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-display font-semibold text-white tracking-wide">Florvis</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-secondary transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/593979626724?text=Quiero información del servicio Florvis"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 py-2 px-5 text-xs"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Contactar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="container-custom py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/75 hover:text-white transition-colors text-sm font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/593979626724?text=Quiero información del servicio Florvis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-2 inline-flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
