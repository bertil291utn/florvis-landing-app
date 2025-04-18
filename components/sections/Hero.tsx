"use client";

import { useEffect, useState } from 'react';
import { ArrowDown, Download, Clock } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center pt-16"
    >
      <div className="container-custom text-center">
        <div className={`space-y-8 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Maneje su finca como un{" "}
            <span className="text-secondary">verdadero empresario.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Descubra qué variedad de rosa le da mejores resultados, dónde está gastando más y cómo puede producir mejor.
            <br className="hidden md:block" />
            <strong>Toda la información clara, sin complicaciones.</strong>
          </p>
          
          {/* Video placeholder */}
          <div className="relative w-full max-w-3xl mx-auto mt-8 rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-primary bg-opacity-60 flex items-center justify-center border border-white/20 backdrop-blur-sm">
              <div className="text-white text-center">
                <div className="animate-pulse bg-secondary/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-medium">Video explicativo</p>
                <p className="text-white/70 text-sm">(Haga clic para reproducir)</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a 
              href="#download" 
              className="btn-primary flex items-center gap-2 w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              <span>Descargar para Android</span>
            </a>
            <button 
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto opacity-80"
              disabled
            >
              <Clock className="w-5 h-5" />
              <span>Muy pronto en App Store</span>
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-white/80 hover:text-white">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}