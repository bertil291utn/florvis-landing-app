"use client";

import Link from 'next/link';
import { Leaf, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-white">
      <div className="h-px bg-secondary/30" />

      <div className="container-custom pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Leaf className="h-5 w-5 text-secondary" strokeWidth={1.5} />
              <span className="font-display text-xl font-semibold tracking-wide">Florvis</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-7 max-w-[200px]">
              Gestión agrícola profesional entregada directamente por WhatsApp.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/30 hover:text-secondary transition-colors duration-200"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Navegación
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'El servicio', href: '#features' },
                { label: 'Beneficios', href: '#transformation' },
                { label: 'Testimonios', href: '#testimonials' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/45 hover:text-white transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {['Términos de Servicio', 'Política de Privacidad', 'Cookies'].map((label) => (
                <li key={label}>
                  <Link href="#" className="text-white/45 hover:text-white transition-colors duration-200 text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Contacto
            </h3>
            <a
              href="https://wa.me/593979626724?text=Quiero información del servicio Florvis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/55 hover:text-secondary transition-colors duration-200 text-sm"
            >
              <MessageCircle className="h-4 w-4 flex-shrink-0" strokeWidth={1.5} />
              +593 979 626 724
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="text-white/30 text-xs tracking-wide">
            &copy; {CURRENT_YEAR} Florvis. Todos los derechos reservados.
          </p>
          <a
            href="https://www.bertiltandayamo.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 text-xs tracking-wide hover:text-white/50 transition-colors duration-200"
          >
            Ingeniería desarrollada por Garage Design
          </a>
        </div>
      </div>
    </footer>
  );
}
