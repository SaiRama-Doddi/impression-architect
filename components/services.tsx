'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    name: 'Modular Design',
    category: 'design',
    description: 'Space-efficient modular solutions that maximize functionality and aesthetic appeal.',
    features: ['Custom storage solutions', 'Space optimization', 'Modern aesthetics'],
    image: '/services/modular-design.jpg'
  },
  {
    id: 2,
    name: 'Living Spaces',
    category: 'residential',
    description: 'Luxurious living room designs that blend comfort with contemporary style.',
    features: ['Comfort-focused design', 'Premium materials', 'Personalized layouts'],
    image: '/services/living-space.jpg'
  },
  {
    id: 3,
    name: 'Kitchen Design',
    category: 'kitchen',
    description: 'State-of-the-art kitchen designs combining functionality with luxury finishes.',
    features: ['Modern appliances', 'Workflow optimization', 'Premium cabinetry'],
    image: '/services/kitchen-design.jpg'
  },
  {
    id: 4,
    name: 'Office Spaces',
    category: 'commercial',
    description: 'Professional office designs that inspire productivity and creativity.',
    features: ['Ergonomic layouts', 'Collaborative spaces', 'Modern aesthetics'],
    image: '/services/office-space.jpg'
  },
  {
    id: 5,
    name: 'Bedroom Design',
    category: 'residential',
    description: 'Serene and sophisticated bedroom designs for ultimate relaxation.',
    features: ['Luxury ambiance', 'Storage solutions', 'Comfort-first design'],
    image: '/services/bedroom-design.jpg'
  },
  {
    id: 6,
    name: 'Bathroom Design',
    category: 'design',
    description: 'Spa-like bathroom designs with premium fixtures and elegant finishes.',
    features: ['Luxury fittings', 'Waterproofing', 'Ambient lighting'],
    image: '/services/bathroom-design.jpg'
  },
];

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'design', label: 'Design Solutions' },
  { id: 'residential', label: 'Residential' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'commercial', label: 'Commercial' },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Comprehensive Design <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential to commercial spaces, we offer tailored design solutions that transform your vision into reality.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:border-primary border border-border'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-2xl transition-all duration-300 hover:border-primary"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-muted">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                {/* Title and Category */}
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-4">
                  {service.category.replace('_', ' ')}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card border border-primary/30 rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our expert team create a personalized design plan tailored to your needs and preferences.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Schedule Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
