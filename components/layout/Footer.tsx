"use client";

import Link from 'next/link';
import { Flower, Send, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flower className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">Florvis</span>
            </div>
            <p className="text-white/70 mb-6">
              Transformando la gestión de fincas florales con datos claros y herramientas efectivas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-white/70 hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/70 hover:text-secondary transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="text-white/70 hover:text-secondary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-white/70 hover:text-secondary transition-colors">
                  Descargas
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Licencias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@florvis.com" className="text-white/70 hover:text-secondary transition-colors">
                  info@florvis.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+001234567890" className="text-white/70 hover:text-secondary transition-colors">
                  +00 123 456 7890
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Suscríbase a nuestro boletín</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Su email" 
                  className="bg-white/10 rounded-l-lg p-2 text-white placeholder:text-white/50 flex-1 focus:outline-none focus:ring-1 focus:ring-secondary border border-transparent"
                />
                <button className="bg-secondary hover:bg-secondary/90 p-2 rounded-r-lg">
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/60 text-sm">
            &copy; {CURRENT_YEAR} Florvis. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/60 text-sm">
              Desarrollado con 🌹 para los productores de flores
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}