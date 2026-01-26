'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-2 py-2">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-2 pl-0 md:pl-12">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                  Welcome to Impression Architects
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
                Transform Your <span className="text-primary">Space</span> into Art
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Premium interior design and architectural services crafted to perfection. From modular living spaces to luxury kitchens, we design experiences that elevate your lifestyle.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get a Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-4 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Completed Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
         <div className="flex relative">
  <div className="relative w-full aspect-square">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-96 h-96 rounded-3xl overflow-hidden">

        {/* 🖼 IMAGE */}
        <img
          src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay on image */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Outer ring */}
        <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl pointer-events-none" />

        {/* Inner decorative elements */}
        <div className="absolute inset-4 border border-primary/20 rounded-2xl pointer-events-none" />

        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent pointer-events-none" />
        <div className="absolute right-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent pointer-events-none" />

        {/* Accent dots */}
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/60 rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-primary/60 rounded-full pointer-events-none" />

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <p className="text-sm text-primary font-semibold uppercase tracking-widest mb-2">
              Premium Design
            </p>
            <p className="text-lg font-bold text-primary">
              Luxury Spaces
            </p>
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
