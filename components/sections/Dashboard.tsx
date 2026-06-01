"use client";

import { useEffect, useRef } from 'react';
import { BarChart2, Cloud, DollarSign, FileText, Flower2, Map, LucideIcon } from 'lucide-react';

const DASHBOARD_ITEMS = [
  {
    icon: BarChart2,
    title: '¿Cómo va mi finca?',
    description: 'Resumen general del estado actual de su finca y producción.',
  },
  {
    icon: Flower2,
    title: 'Mejor variedad',
    description: 'Identifique cuáles son sus variedades más rentables y productivas.',
  },
  {
    icon: DollarSign,
    title: 'Estado del dinero',
    description: 'Controle ingresos, gastos y rentabilidad de manera visual.',
  },
  {
    icon: Map,
    title: 'Camas y zonas críticas',
    description: 'Visualice áreas que requieren atención especial y seguimiento.',
  },
  {
    icon: Cloud,
    title: 'Pronósticos',
    description: 'Anticipe condiciones climáticas y su impacto en la producción.',
  },
  {
    icon: FileText,
    title: 'Informe en PDF',
    description: 'Genere y comparta reportes completos con todos los datos relevantes.',
  },
];

function DashboardCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="group border border-white/8 hover:border-secondary/40 bg-white/5 hover:bg-white/8 p-7 transition-all duration-400 cursor-default">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="h-5 w-5 text-secondary flex-shrink-0" strokeWidth={1.5} />
        <h3 className="font-display text-lg font-semibold text-white leading-snug">{title}</h3>
      </div>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Dashboard() {
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
    <section id="dashboard" className="section-padding bg-primary relative overflow-hidden" ref={sectionRef}>
      {/* Subtle rose glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-16">
          <p className="eyebrow mb-4 section-reveal">Dashboard Interactivo</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg section-reveal"
              style={{ transitionDelay: '100ms' }}
            >
              Toda su finca,<br />
              <em className="text-secondary not-italic">en una pantalla.</em>
            </h2>
            <p
              className="text-white/45 max-w-xs leading-relaxed text-sm section-reveal"
              style={{ transitionDelay: '200ms' }}
            >
              Visualice información relevante con gráficos claros y datos actualizados en tiempo real.
            </p>
          </div>
          <div className="h-px bg-white/10 mt-12 section-reveal" style={{ transitionDelay: '250ms' }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {DASHBOARD_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="section-reveal"
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <DashboardCard icon={item.icon} title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
