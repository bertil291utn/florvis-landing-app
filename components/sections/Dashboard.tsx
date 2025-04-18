"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for charts
const productionData = [
  { name: "ENE", value: 840 },
  { name: "FEB", value: 930 },
  { name: "MAR", value: 1020 },
  { name: "ABR", value: 1080 },
  { name: "MAY", value: 980 },
  { name: "JUN", value: 850 },
];

const varietyData = [
  { name: "Freedom", value: 35 },
  { name: "Explorer", value: 20 },
  { name: "Mondial", value: 25 },
  { name: "Vendela", value: 15 },
  { name: "Pink Floyd", value: 5 },
];

const COLORS = ['#dc84a4', '#1f1d3e', '#f87171', '#60a5fa', '#4ade80'];

const DashboardCard = ({ title, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`dashboard-card transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
      <div className="h-[180px]">{children}</div>
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
            Todas las métricas importantes de su finca en un solo lugar.
            <br />
            <strong>Visualice, analice y decida con confianza.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="¿Cómo va mi finca?" delay={100}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#dc84a4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </DashboardCard>

          <DashboardCard title="Mejor variedad en resultados" delay={200}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={varietyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {varietyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </DashboardCard>

          <DashboardCard title="Estado del dinero" delay={300}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1f1d3e" />
              </BarChart>
            </ResponsiveContainer>
          </DashboardCard>

          <DashboardCard title="Camas y zonas con atención necesaria" delay={400}>
            <div className="flex items-center justify-center h-full">
              <div className="w-full max-w-[200px] bg-gray-100 h-[150px] rounded-lg overflow-hidden relative">
                <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-red-400 opacity-70 animate-pulse rounded"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 bg-yellow-400 opacity-70 animate-pulse rounded"></div>
                <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="border border-white/30"></div>
                  ))}
                </div>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard title="Qué se viene (pronósticos)" delay={500}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#1f1d3e" fill="#dc84a4" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </DashboardCard>

          <DashboardCard title="Informe en PDF" delay={600}>
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="w-24 h-32 bg-gray-100 rounded-md shadow flex flex-col">
                <div className="h-6 bg-secondary rounded-t-md"></div>
                <div className="flex-1 p-2">
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                </div>
              </div>
              <p className="text-sm text-gray-500">Exportar reporte mensual</p>
            </div>
          </DashboardCard>
        </div>
      </div>
    </section>
  );
}