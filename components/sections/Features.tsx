"use client";

import { useEffect, useRef } from 'react';
import { Bug, Receipt, CloudRain, BarChart3, BellRing, FileText } from 'lucide-react';

const FEATURES = [
  {
    title: "Manejo de plagas y fertilización",
    description: "Registre y controle los ciclos de fumigación y fertilización para optimizar sus cultivos.",
    icon: Bug,
  },
  {
    title: "Facturación y notas de envío",
    description: "Genere y administre sus facturas y notas de envío directamente desde la aplicación.",
    icon: Receipt,
  },
  {
    title: "Pronósticos climáticos",
    description: "Acceda a pronósticos precisos para planificar y proteger sus cultivos con anticipación.",
    icon: CloudRain,
  },
  {
    title: "Visualización de producción por bloque",
    description: "Analice y compare el rendimiento de cada bloque de su cultivo con gráficos visuales.",
    icon: BarChart3,
  },
  {
    title: "Alertas de zonas que necesitan atención",
    description: "Reciba notificaciones cuando alguna zona de su cultivo requiera cuidados especiales.",
    icon: BellRing,
  },
  {
    title: "Informes en PDF",
    description: "Descargue y comparta informes detallados sobre el desempeño de su finca.",
    icon: FileText,
  },
];

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = document.querySelectorAll('.feature-card-animate');
    featureElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      featureElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-gray-50" ref={featuresRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Funcionalidades de la App
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Todo lo que antes anotaba en papel, ahora lo ve claro y en su celular.
            <br />
            <strong>Tome decisiones con datos reales, no con suposiciones.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card feature-card-animate animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-secondary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}