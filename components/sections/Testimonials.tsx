"use client";

import Image from 'next/image';
import { User, Star, Clock, Shield, HeartHandshake } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Desde que uso Florvis, he podido identificar qué variedades me dan mejor rendimiento y cuáles consumen más recursos.",
    name: "Carlos Martínez",
    role: "Productor de rosas, Valle de Bravo",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Gracias a las alertas de Florvis, detectamos a tiempo una plaga que podría haber arruinado toda la producción del mes.",
    name: "María González",
    role: "Gerente de finca, Medellín",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    quote: "Los informes en PDF me han ayudado a conseguir financiamiento para expandir mi finca. Los bancos aprecian los datos claros.",
    name: "Roberto Sánchez",
    role: "Empresario floricultor, Cuenca",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const BENEFITS = [
  {
    title: "Soporte 24/7",
    description: "Atención al cliente en cualquier momento que lo necesite",
    icon: Clock
  },
  {
    title: "Datos Seguros",
    description: "Información de su finca protegida con cifrado de alto nivel",
    icon: Shield
  },
  {
    title: "Soporte Dedicado",
    description: "Equipo especializado en el sector floricultor",
    icon: HeartHandshake
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubra cómo Florvis está transformando las fincas de flores en verdaderos negocios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center space-x-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  {testimonial.imageUrl ? (
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <Image 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-secondary" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-primary/5 p-8 rounded-xl text-center max-w-3xl mx-auto mb-16">
          <p className="text-xl md:text-2xl text-primary italic font-light mb-4">
            "Florvis es el arte de vivir como una flor - abierta, hermosa y resistente"
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}