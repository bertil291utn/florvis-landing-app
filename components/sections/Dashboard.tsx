"use client";

import React, { useEffect, useState } from "react";
import { BarChart2, Cloud, DollarSign, FileText, Flower2, LucideIcon, Map } from 'lucide-react';
const dashboardItems = [
  {
    icon: BarChart2,
    title: '¿Cómo va mi finca?',
    description: 'Resumen general del estado actual de su finca y producción.',
    color: 'bg-blue-500'
  },
  {
    icon: Flower2,
    title: 'Mejor variedad',
    description: 'Identifique cuáles son sus variedades más rentables y productivas.',
    color: 'bg-green-500'
  },
  {
    icon: DollarSign,
    title: 'Estado del dinero',
    description: 'Controle ingresos, gastos y rentabilidad de manera visual.',
    color: 'bg-yellow-500'
  },
  {
    icon: Map,
    title: 'Camas y zonas críticas',
    description: 'Visualice áreas que requieren atención especial y seguimiento.',
    color: 'bg-red-500'
  },
  {
    icon: Cloud,
    title: 'Pronósticos',
    description: 'Anticipe condiciones climáticas y su impacto en la producción.',
    color: 'bg-purple-500'
  },
  {
    icon: FileText,
    title: 'Informe en PDF',
    description: 'Genere y comparta reportes completos con todos los datos relevantes.',
    color: 'bg-florvis-light'
  }
];
interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const DashboardCard = ({ icon: Icon, title, description, color }: DashboardCardProps) => {
  return (
    <div className="dashboard-card group">
      <div className="flex items-center mb-4">
        <div className={`text-florvis-light mr-3 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={28} />
        </div>
        <h3 className="text-lg font-bold text-florvis-dark">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};


export default function Dashboard() {
  return (
    <section id="dashboard" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dashboard Interactivo
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Visualice toda la información relevante de su finca en un solo lugar, con gráficos claros y datos actualizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
              <DashboardCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}