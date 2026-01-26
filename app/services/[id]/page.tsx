'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

const servicesDetail: Record<string, any> = {
  '1': {
    name: 'Modular Design',
    category: 'Design Solutions',
    description: 'Space-efficient modular solutions that maximize functionality and aesthetic appeal.',
    longDescription: 'Our modular design services transform your living space into an organized, efficient, and beautiful environment. Whether you need custom storage solutions, wardrobe systems, or complete modular interiors, we deliver innovative designs that adapt to your lifestyle.',
    benefits: [
      'Optimizes space utilization',
      'Customizable to your needs',
      'Cost-effective solution',
      'Easy installation and maintenance',
      'Modern aesthetic design',
      'Sustainable materials'
    ],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    testimonial: 'Impression Architects transformed our cluttered apartment into an organized, beautiful space with their modular design solutions.',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1565182999555-2142541902f1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
    ]
  },
  '2': {
    name: 'Living Spaces',
    category: 'Residential',
    description: 'Luxurious living room designs that blend comfort with contemporary style.',
    longDescription: 'Transform your living room into the heart of your home with our premium design solutions. We create spaces that reflect your personality, provide comfort, and impress your guests with sophisticated, timeless designs.',
    benefits: [
      'Personalized design concepts',
      'Premium furniture selection',
      'Lighting optimization',
      'Color coordination expertise',
      'Functional layout planning',
      'Complete interior coordination'
    ],
    image: 'https://images.unsplash.com/photo-1565182999555-2142541902f1?w=800&h=600&fit=crop',
    testimonial: 'Our living room is now our favorite space to spend time in. Impression Architects created the perfect balance of luxury and comfort.',
    gallery: [
      'https://images.unsplash.com/photo-1565182999555-2142541902f1?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1540932239986-7af3bfae6e14?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507842485943-583b6480e4d8?w=400&h=300&fit=crop'
    ]
  },
  '3': {
    name: 'Kitchen Design',
    category: 'Kitchen',
    description: 'State-of-the-art kitchen designs combining functionality with luxury finishes.',
    longDescription: 'Experience culinary excellence with our kitchen designs that combine modern appliances, smart storage, and aesthetic brilliance. We create kitchens that are not just beautiful but also highly functional for daily use.',
    benefits: [
      'Modern appliance integration',
      'Smart storage solutions',
      'Workflow optimization',
      'Premium cabinetry options',
      'Lighting design',
      'Durable finishes'
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    testimonial: 'Our new kitchen has exceeded all expectations. It\'s beautiful, functional, and the design makes cooking a pleasure.',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
    ]
  },
  '4': {
    name: 'Office Spaces',
    category: 'Commercial',
    description: 'Professional office designs that inspire productivity and creativity.',
    longDescription: 'Create a workspace that motivates your team with our professional office designs. We balance aesthetics with functionality to create an environment that enhances productivity and reflects your corporate identity.',
    benefits: [
      'Ergonomic workspace design',
      'Collaborative spaces',
      'Professional aesthetics',
      'Efficient space planning',
      'Modern amenities',
      'Brand identity integration'
    ],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    testimonial: 'Our new office space has boosted team morale and productivity. The design perfectly represents our company values.',
    gallery: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1553531088-be0bb2e58e0d?w=400&h=300&fit=crop'
    ]
  },
  '5': {
    name: 'Bedroom Design',
    category: 'Residential',
    description: 'Serene and sophisticated bedroom designs for ultimate relaxation.',
    longDescription: 'Create your personal sanctuary with our bedroom designs that emphasize comfort, tranquility, and elegance. We design spaces where you can truly relax and rejuvenate.',
    benefits: [
      'Comfort-focused design',
      'Ambient lighting setup',
      'Storage optimization',
      'Color psychology application',
      'Luxury bedding solutions',
      'Peaceful ambiance creation'
    ],
    image: 'https://images.unsplash.com/photo-1540932239986-7af3bfae6e14?w=800&h=600&fit=crop',
    testimonial: 'Our bedroom has become our sanctuary. The design creates the perfect peaceful atmosphere for rest and relaxation.',
    gallery: [
      'https://images.unsplash.com/photo-1540932239986-7af3bfae6e14?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507842485943-583b6480e4d8?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1512918728680-8a18a58556d0?w=400&h=300&fit=crop'
    ]
  },
  '6': {
    name: 'Bathroom Design',
    category: 'Design Solutions',
    description: 'Spa-like bathroom designs with premium fixtures and elegant finishes.',
    longDescription: 'Transform your bathroom into a luxurious spa-like retreat with our design expertise. We combine premium fixtures, smart storage, and elegant aesthetics to create bathrooms that feel like personal sanctuaries.',
    benefits: [
      'Premium fixture selection',
      'Spa-like ambiance',
      'Waterproofing solutions',
      'Smart lighting design',
      'Storage optimization',
      'Luxury finishes'
    ],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
    testimonial: 'Our bathroom renovation is the highlight of our home. It feels like a luxury spa every time we use it.',
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1554321588-7cfd84e626e9?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop'
    ]
  }
};

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = servicesDetail[params.id];

  if (!service) {
    return (
      <main className="bg-background text-foreground">
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold">Service not found</h1>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">{service.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{service.name}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">About This Service</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {service.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="relative h-48 rounded-lg overflow-hidden group">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Project ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-secondary rounded-lg p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl text-primary">★</span>
                    ))}
                  </div>
                  <p className="text-lg italic">"{service.testimonial}"</p>
                  <p className="font-semibold">— Our Satisfied Client</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-sm opacity-90">
                  Let's discuss how we can bring this service to your space.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity w-full justify-center"
                >
                  Book Consultation
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* Process */}
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h4 className="font-bold text-lg mb-4">Our Process</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <p className="font-semibold">Consultation</p>
                      <p className="text-sm text-muted-foreground">Understand your needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <p className="font-semibold">Design</p>
                      <p className="text-sm text-muted-foreground">Create detailed plans</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <p className="font-semibold">Approval</p>
                      <p className="text-sm text-muted-foreground">Review and refinement</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <p className="font-semibold">Execution</p>
                      <p className="text-sm text-muted-foreground">Professional implementation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-secondary rounded-lg p-6 border border-border space-y-4">
                <h4 className="font-bold text-lg">Service Stats</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Duration</span>
                    <span className="font-semibold">4-8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="font-semibold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
