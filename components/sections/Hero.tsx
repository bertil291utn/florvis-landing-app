"use client";

import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-hero-pattern overflow-hidden pt-24 pb-16"
    >
      {/* Decorative rose circles */}
      <div className="absolute top-1/4 right-[8%] w-64 h-64 rounded-full border border-secondary/15 pointer-events-none" />
      <div className="absolute top-1/4 right-[8%] w-44 h-44 rounded-full border border-secondary/20 pointer-events-none" style={{ top: 'calc(25% + 40px)', right: 'calc(8% + 40px)' }} />
      <div className="absolute bottom-1/4 left-[6%] w-48 h-48 rounded-full border border-secondary/10 pointer-events-none" />

      <div className="container-custom w-full text-center">
        {/* Eyebrow */}
        <div
          className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="h-px w-12 bg-secondary/60 block" />
          <span className="eyebrow">Sistema de Gestión Florícola</span>
          <span className="h-px w-12 bg-secondary/60 block" />
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto mb-8 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Maneje su finca como un{' '}
          <em className="text-secondary not-italic">verdadero empresario.</em>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-white text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Descubra qué variedad de rosa le da mejores resultados, dónde está gastando más
          y cómo puede producir mejor. Toda la información clara, sin complicaciones.
        </p>

        {/* CTAs */}
        <div
          style={{ transitionDelay: '400ms' }}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={process.env.NEXT_PUBLIC_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Probar sistema
          </a>
          <a href="#features" className="btn-outline w-full sm:w-auto">
            Ver funcionalidades
          </a>
        </div>

        {/* Video */}
        <div
          className={`relative w-full max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Elegant frame */}
          <div className="absolute -inset-px border border-secondary/25 rounded-sm pointer-events-none z-10" />
          <div className="absolute -inset-3 border border-white/5 rounded-sm pointer-events-none" />

          {!isPlaying ? (
            <button
              onClick={handlePlayClick}
              className="aspect-video w-full bg-primary/60 border border-white/10 flex items-center justify-center group relative overflow-hidden"
              aria-label="Reproducir video"
            >
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center z-10">
                <div className="w-16 h-16 rounded-full border border-secondary/50 flex items-center justify-center mx-auto mb-5 group-hover:border-secondary transition-colors duration-300 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-secondary ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm tracking-widest uppercase font-medium">Ver beneficios</p>
              </div>
            </button>
          ) : (
            <video
              ref={videoRef}
              className="w-full aspect-video"
              controls
              playsInline
              src="/intro.webm"
            >
              <source src="/intro.webm" type="video/webm" />
            </video>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
    </section>
  );
}
