"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Clock, Shield, HeartHandshake } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Desde que uso el servicio de Florvis, he podido identificar qué variedades me dan mejor rendimiento y cuáles consumen más recursos, todo por WhatsApp.',
    name: 'Carlos Martínez',
    role: 'Productor de rosas, Valle de Bravo',
    imageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    quote:
      'Gracias a las alertas que recibo por WhatsApp, detectamos a tiempo una plaga que podría haber arruinado toda la producción del mes.',
    name: 'María González',
    role: 'Gerente de finca, Medellín',
    imageUrl:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    quote:
      'Los informes que recibo me han ayudado a conseguir financiamiento para expandir mi finca. Los bancos aprecian los datos claros y organizados.',
    name: 'Roberto Sánchez',
    role: 'Empresario floricultor, Cuenca',
    imageUrl:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const BENEFITS = [
  { title: 'Atención continua', description: 'Soporte disponible cuando lo necesite', icon: Clock },
  { title: 'Datos seguros', description: 'Su información siempre protegida', icon: Shield },
  { title: 'Equipo especializado', description: 'Expertos en floricultura a su disposición', icon: HeartHandshake },
];

export default function Testimonials() {
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
    <section id="testimonials" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4 section-reveal">Testimonios</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight max-w-lg section-reveal"
              style={{ transitionDelay: '100ms' }}
            >
              Lo que dicen{' '}
              <em className="text-secondary not-italic">nuestros clientes.</em>
            </h2>
            <p
              className="text-gray-400 max-w-xs leading-relaxed text-sm section-reveal"
              style={{ transitionDelay: '200ms' }}
            >
              Florvis está transformando la gestión de fincas de flores en Ecuador y Colombia.
            </p>
          </div>
          <div className="h-px bg-primary/10 mt-12 section-reveal" style={{ transitionDelay: '250ms' }} />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={index}
              className="p-8 border border-gray-100 flex flex-col section-reveal"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <span className="font-display text-6xl text-secondary/25 leading-none mb-4 select-none">&ldquo;</span>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-8">{t.quote}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.imageUrl} alt={t.name} width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-5 section-reveal"
              style={{ transitionDelay: `${600 + index * 80}ms` }}
            >
              <div className="w-10 h-10 border border-secondary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <benefit.icon className="h-4 w-4 text-secondary" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-primary mb-1">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
