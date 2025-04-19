"use client";

import { ArrowRight, Check, X } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Antes y Después
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Vea cómo Florvis transforma la gestión de su finca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <X className="h-5 w-5 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Antes de Florvis</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Anotaciones en papel que se pierden o dañan</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Cálculos manuales propensos a errores</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Decisiones basadas en memoria o intuición</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Tiempo perdido en tareas administrativas</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Difícil seguimiento del rendimiento de cada zona</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-primary p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Con Florvis</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/90">Toda la información digital y accesible en su celular</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/90">Cálculos precisos y automáticos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/90">Decisiones basadas en datos reales y tendencias</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/90">Automatización que libera tiempo para centrarse en su cultivo</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white/90">Seguimiento detallado de cada área de su finca</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}