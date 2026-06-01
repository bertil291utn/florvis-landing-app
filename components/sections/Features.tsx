"use client";

import { useEffect, useRef } from 'react';
import { Bug, Receipt, CloudRain, BarChart3, BellRing, FileText } from 'lucide-react';

const FEATURES = [
  {
    title: 'Manejo de plagas y fertilización',
    description: 'Registre y controle los ciclos de fumigación y fertilización para optimizar sus cultivos.',
    icon: Bug,
  },
  {
    title: 'Facturación y notas de envío',
    description: 'Genere y administre sus facturas y notas de envío directamente desde la aplicación.',
    icon: Receipt,
  },
  {
    title: 'Pronósticos climáticos',
    description: 'Acceda a pronósticos precisos para planificar y proteger sus cultivos con anticipación.',
    icon: CloudRain,
  },
  {
    title: 'Visualización por bloque',
    description: 'Analice y compare el rendimiento de cada bloque de su cultivo con gráficos visuales.',
    icon: BarChart3,
  },
  {
    title: 'Alertas de zonas críticas',
    description: 'Reciba notificaciones cuando alguna zona de su cultivo requiera cuidados especiales.',
    icon: BellRing,
  },
  {
    title: 'Informes en PDF',
    description: 'Descargue y comparta informes detallados sobre el desempeño de su finca.',
    icon: FileText,
  },
];

export default function Features() {
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
    <section id="features" className="section-padding bg-cream" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="mb-20">
          <p className="eyebrow mb-4 section-reveal">Funcionalidades</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight max-w-lg section-reveal" style={{ transitionDelay: '100ms' }}>
              Todo lo que necesita,<br />
              <em className="text-secondary not-italic">en su celular.</em>
            </h2>
            <p className="text-gray-500 max-w-xs leading-relaxed text-sm section-reveal" style={{ transitionDelay: '200ms' }}>
              Lo que antes anotaba en papel, ahora lo ve claro y actualizado.
              Tome decisiones con datos reales, no con suposiciones.
            </p>
          </div>
          <div className="h-px bg-primary/10 mt-12 section-reveal" style={{ transitionDelay: '250ms' }} />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card section-reveal border-t border-primary/10 pt-8 pb-10"
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <span className="eyebrow text-primary/30 mb-5 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="mb-5">
                <feature.icon className="h-6 w-6 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
