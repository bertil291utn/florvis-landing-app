"use client";

import { useEffect, useRef } from 'react';
import { Bug, Receipt, CloudRain, BarChart3, BellRing, FileText } from 'lucide-react';

const SERVICE_POINTS = [
  {
    num: '01',
    title: 'Registre por WhatsApp',
    description: 'Envíe datos de su finca directamente por WhatsApp y el sistema los organiza automáticamente.',
  },
  {
    num: '02',
    title: 'Reciba análisis al instante',
    description: 'Obtenga reportes claros sobre rendimiento, gastos y plagas sin abrir ninguna aplicación.',
  },
  {
    num: '03',
    title: 'Tome mejores decisiones',
    description: 'Con datos precisos y actualizados, decida qué variedad sembrar y dónde invertir.',
  },
  {
    num: '04',
    title: 'Sin instalaciones ni complicaciones',
    description: 'Solo necesita WhatsApp. Nada más que descargar, configurar o aprender.',
  },
];

const FEATURES = [
  {
    title: 'Manejo de plagas y fertilización',
    description: 'Registre y controle los ciclos de fumigación y fertilización para optimizar sus cultivos.',
    icon: Bug,
  },
  {
    title: 'Facturación y notas de envío',
    description: 'Genere y administre sus facturas y notas de envío directamente desde el servicio.',
    icon: Receipt,
  },
  {
    title: 'Pronósticos climáticos',
    description: 'Acceda a pronósticos precisos para planificar y proteger sus cultivos con anticipación.',
    icon: CloudRain,
  },
  {
    title: 'Análisis por variedad',
    description: 'Identifique cuáles son sus variedades más rentables y productivas en cada temporada.',
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
    <div ref={sectionRef}>
      {/* Service overview — dark split */}
      <section id="features" className="bg-primary section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[520px]">
              <img
                src="https://images.pexels.com/photos/26524176/pexels-photo-26524176.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Invernadero de flores coloridas"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="eyebrow mb-4 section-reveal">Cómo funciona</p>
                <h2
                  className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4 section-reveal"
                  style={{ transitionDelay: '100ms' }}
                >
                  El servicio que llega directo a su WhatsApp.
                </h2>
                <p
                  className="text-white/70 leading-relaxed text-sm section-reveal"
                  style={{ transitionDelay: '200ms' }}
                >
                  Florvis no es una aplicación. Es un servicio completo de gestión agrícola
                  entregado por WhatsApp. Usted envía, nosotros analizamos y le respondemos
                  con información clara para tomar mejores decisiones sobre su finca.
                </p>
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {SERVICE_POINTS.map((point, index) => (
                <div
                  key={point.num}
                  className="px-7 py-4 section-reveal"
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-secondary font-mono text-sm font-semibold flex-shrink-0 mt-0.5">
                      {point.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-base">{point.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features grid — white */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="mb-16">
            <p className="eyebrow mb-4 section-reveal">Funcionalidades</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2
                className="font-display text-4xl md:text-5xl font-bold text-primary leading-tight max-w-lg section-reveal"
                style={{ transitionDelay: '100ms' }}
              >
                Todo lo que necesita,<br />por un solo canal.
              </h2>
              <p
                className="text-gray-500 max-w-xs leading-relaxed text-sm section-reveal"
                style={{ transitionDelay: '200ms' }}
              >
                Lo que antes anotaba en papel, ahora lo gestiona por WhatsApp.
                Tome decisiones con datos reales, no con suposiciones.
              </p>
            </div>
            <div
              className="h-px bg-primary/10 mt-12 section-reveal"
              style={{ transitionDelay: '250ms' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 shadow-md border border-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl section-reveal"
                style={{ transitionDelay: `${300 + index * 80}ms` }}
              >
                <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/10">
                  <feature.icon className="h-5 w-5 text-secondary" strokeWidth={1.5} />
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
    </div>
  );
}
