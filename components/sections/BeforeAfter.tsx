"use client";

import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';

const BEFORE_ITEMS = [
  'Anotaciones en papel que se pierden o dañan',
  'Cálculos manuales propensos a errores',
  'Decisiones basadas en memoria o intuición',
  'Tiempo perdido en tareas administrativas',
  'Difícil seguimiento del rendimiento por zona',
];

const AFTER_ITEMS = [
  'Toda la información digital y accesible en su celular',
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
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="eyebrow mb-4 section-reveal">Transformación</p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight section-reveal"
            style={{ transitionDelay: '100ms' }}
          >
            Antes y{' '}
            <em className="text-secondary not-italic">después de Florvis.</em>
          </h2>
          <div className="h-px bg-primary/10 mt-12 max-w-xs mx-auto section-reveal" style={{ transitionDelay: '200ms' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto">
          {/* Before */}
          <div
            className="p-10 border border-gray-100 section-reveal"
            style={{ transitionDelay: '250ms' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
                <X className="h-3.5 w-3.5 text-gray-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-400 tracking-wide">
                Sin Florvis
              </h3>
            </div>
            <ul className="space-y-5">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="h-4 w-4 text-red-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="bg-primary p-10 relative overflow-hidden section-reveal"
            style={{ transitionDelay: '350ms' }}
          >
            {/* Decorative */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-secondary/20 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-secondary/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full border border-secondary/50 flex items-center justify-center flex-shrink-0">
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
      </div>
    </section>
  );
}
