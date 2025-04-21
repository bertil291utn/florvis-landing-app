"use client";

import { Download, Check, Smartphone, Play, ArrowDownToLine } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="section-padding bg-secondary/10">
      <div className="container-custom">
        <div className="bg-primary rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Text content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pruebe Florvis y empiece a ver su finca como una empresa
              </h2>

              <div className="mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">Tome decisiones más inteligentes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">Aumente su productividad</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">Ahorre tiempo en tareas administrativas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white/90">Fácil, clara, efectiva</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                {/* <a
                  href={process.env.NEXT_PUBLIC_APP_URL}
                  download
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  >

                  <ArrowDownToLine className="w-8 h-8" />
                  <span>Descargar para Android</span>
                </a>
                <p className="text-white/60 text-sm">
                  Versión actual: {process.env.NEXT_PUBLIC_APK_URL_VERSION}
                </p> */}
                <a
                  href={process.env.NEXT_PUBLIC_APP_URL}
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Probar sistema</span>
                </a>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="relative hidden md:flex items-center justify-center bg-secondary/30 p-8">
              <div className="relative w-[240px] h-[480px] bg-primary rounded-[32px] border-4 border-white/10 shadow-lg overflow-hidden">
                {/* Phone frame */}
                <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center">
                  <div className="w-20 h-4 bg-black rounded-b-lg"></div>
                </div>

                {/* Sample app screen */}
                <div className="bg-white h-full pt-10 px-3">
                  <div className="h-10 bg-secondary flex items-center justify-between px-3 rounded-t-lg">
                    <span className="text-white text-xs font-medium">Florvis</span>
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-100 p-3 flex-1 h-[calc(100%-40px)] rounded-b-lg">
                    {/* Sample app content */}
                    <div className="bg-white rounded-lg shadow-sm p-2 mb-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-2 mb-2">
                      <div className="h-20 bg-secondary/20 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="flex space-x-2 mb-2">
                      <div className="bg-white rounded-lg shadow-sm p-2 flex-1">
                        <div className="h-10 bg-primary/10 rounded"></div>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm p-2 flex-1">
                        <div className="h-10 bg-secondary/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}