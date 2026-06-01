"use client";

import { useEffect, useRef } from 'react';
import { X, Check, MessageCircle } from 'lucide-react';

const BEFORE_ITEMS = [
  'Anotaciones en papel que se pierden o dañan',
  'Cálculos manuales propensos a errores',
  'Decisiones basadas en memoria o intuición',
  'Tiempo perdido en tareas administrativas',
  'Difícil seguimiento del rendimiento por zona',
];

const AFTER_ITEMS = [
  'Toda la información organizada y accesible por WhatsApp',
  'Cálculos precisos y automáticos',
  'Decisiones basadas en datos reales y tendencias',
  'Automatización que libera tiempo para su cultivo',
  'Seguimiento detallado de cada área de su finca',
];

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll('.section-reveal') ?? [];
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div id="transformation" ref={sectionRef}>
      {/* Before / After */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <p className="eyebrow mb-4 section-reveal">Transformación</p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight section-reveal"
              style={{ transitionDelay: '100ms' }}
            >
              Antes y{' '}
              <em className="text-secondary not-italic">después de Florvis.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Before */}
            <div
              className="p-10 border border-gray-200 bg-white section-reveal"
              style={{ transitionDelay: '250ms' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 border border-gray-300 flex items-center justify-center flex-shrink-0">
                  <X className="h-3.5 w-3.5 text-gray-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-400 tracking-wide">
                  Sin Florvis
                </h3>
              </div>
              <ul className="space-y-5">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="h-4 w-4 text-gray-300 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div
              className="bg-primary p-10 section-reveal"
              style={{ transitionDelay: '350ms' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 border border-secondary/50 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white tracking-wide">
                  Con Florvis
                </h3>
              </div>
              <ul className="space-y-5">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6 section-reveal">Empiece hoy</p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6 section-reveal"
              style={{ transitionDelay: '100ms' }}
            >
              Empiece a gestionar su finca{' '}
              <em className="text-secondary not-italic">desde WhatsApp.</em>
            </h2>
            <p
              className="text-white text-lg leading-relaxed mb-10 section-reveal"
              style={{ transitionDelay: '200ms' }}
            >
              Sin descargas, sin configuraciones. Solo envíe un mensaje y comience a recibir
              información clara sobre su finca directamente en su celular.
            </p>
            <div className="section-reveal" style={{ transitionDelay: '300ms' }}>
              <a
                href="https://wa.me/593979626724?text=Quiero información del servicio Florvis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2.5"
              >
                <MessageCircle className="h-4 w-4" />
                Unirse por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
