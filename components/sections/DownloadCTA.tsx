"use client";

import { useEffect, useRef } from 'react';
import { Check, Smartphone } from 'lucide-react';

const BENEFITS = [
  'Tome decisiones más inteligentes',
  'Aumente su productividad',
  'Ahorre tiempo en tareas administrativas',
  'Fácil, clara y efectiva',
];

export default function DownloadCTA() {
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
    <section id="download" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container-custom">
        <div className="bg-primary relative overflow-hidden">
          {/* Rose glow accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-2">
            {/* Left — Text */}
            <div className="p-10 md:p-16 lg:p-20">
              <p className="eyebrow mb-6 section-reveal">Pruebe Florvis</p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-10 section-reveal"
                style={{ transitionDelay: '100ms' }}
              >
                Empiece a ver su finca como una{' '}
                <em className="text-secondary not-italic">empresa.</em>
              </h2>

              <ul className="space-y-4 mb-12">
                {BENEFITS.map((benefit, index) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 section-reveal"
                    style={{ transitionDelay: `${200 + index * 80}ms` }}
                  >
                    <span className="w-5 h-5 rounded-full border border-secondary/50 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-secondary" />
                    </span>
                    <span className="text-white/70 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={process.env.NEXT_PUBLIC_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 section-reveal"
                style={{ transitionDelay: '520ms' }}
              >
                Probar sistema
              </a>
            </div>

            {/* Right — Phone mockup */}
            <div className="hidden md:flex items-center justify-center py-16 px-8 border-l border-white/8">
              <div className="relative w-[200px] h-[400px]">
                {/* Phone frame */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-sm" />
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-primary rounded-b-lg" />
                {/* Screen */}
                <div className="absolute top-10 left-3 right-3 bottom-4 rounded-[1.25rem] overflow-hidden bg-cream">
                  {/* App bar */}
                  <div className="h-9 bg-secondary/80 flex items-center justify-between px-3">
                    <span className="text-white text-[10px] font-semibold tracking-wide">Florvis</span>
                    <Smartphone className="h-3 w-3 text-white/70" />
                  </div>
                  {/* App content */}
                  <div className="p-2.5 space-y-2">
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <div className="h-1.5 bg-primary/10 rounded w-3/4 mb-1.5" />
                      <div className="h-1.5 bg-primary/10 rounded w-1/2" />
                    </div>
                    <div className="bg-white rounded-lg p-2 shadow-sm">
                      <div className="h-14 bg-secondary/15 rounded mb-2" />
                      <div className="h-1.5 bg-primary/10 rounded w-3/4 mb-1.5" />
                      <div className="h-1.5 bg-primary/10 rounded w-2/3" />
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="h-8 bg-primary/8 rounded" />
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="h-8 bg-secondary/15 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
