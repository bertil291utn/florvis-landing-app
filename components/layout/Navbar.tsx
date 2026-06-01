"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Inicio', href: '#home' },
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Descargas', href: '#download' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Florvis Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-display font-semibold text-white tracking-wide">
            Florvis
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={process.env.NEXT_PUBLIC_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-6"
          >
            Probar sistema
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
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10">
          <div className="container-custom py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm tracking-widest uppercase font-medium py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Probar sistema
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
