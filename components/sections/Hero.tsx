"use client";

import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/37240013/pexels-photo-37240013.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container-custom py-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-8">Servicio de Gestión Florícola</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Gestione su finca directamente{' '}
            <em className="text-secondary not-italic">desde WhatsApp.</em>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            No es una aplicación. Es un servicio completo de gestión agrícola que llega a su
            celular a través de WhatsApp — sin instalaciones, sin complicaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/593979626724?text=Quiero información del servicio Florvis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2.5"
            >
              <MessageCircle className="h-4 w-4" />
              Contactar por WhatsApp
            </a>
            <a href="#features" className="btn-outline text-center">
              Ver cómo funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

