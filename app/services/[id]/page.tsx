  'use client';

  import Image from 'next/image';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { ArrowRight, CheckCircle } from 'lucide-react';
  import { useParams } from 'next/navigation';

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
      image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769529647/WhatsApp_Image_2026-01-14_at_8.04.12_AM_gxrnx3.jpg',
      testimonial: 'Impression Architects transformed our cluttered apartment into an organized, beautiful space with their modular design solutions.',
      gallery: [
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529723/IMG-20240715-WA0032_-_Copy_vo8cbe.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769530462/IMG-20231026-WA0006_-_Copy_zrm4yx.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529723/IMG-20240715-WA0039_vqnezj.jpg'
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
      image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769529743/IMG-20240214-WA0049_gsnlel.jpg',
      testimonial: 'Our living room is now our favorite space to spend time in. Impression Architects created the perfect balance of luxury and comfort.',
      gallery: [
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529744/IMG-20240214-WA0056_buou9r.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529728/IMG-20240214-WA0053_-_Copy_vmxbgn.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529729/IMG-20240214-WA0007_jlwfen.jpg'
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
      image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769529649/FB_IMG_1704540701621_utrgtd.jpg',
      testimonial: 'Our new kitchen has exceeded all expectations. It\'s beautiful, functional, and the design makes cooking a pleasure.',
      gallery: [
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769530420/IMG-20240214-WA0012_bb1gwh.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529732/IMG-20240214-WA0047_pcbztu.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769530511/IMG-20231019-WA0011_anrgh0.jpg'
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
      image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769564471/off1_uw7mev.jpg',
      testimonial: 'Our new office space has boosted team morale and productivity. The design perfectly represents our company values.',
      gallery: [
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769564472/off4_pvdq0i.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769564471/off2_w9ltal.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769564471/off3_hwbgu7.jpg'
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
      image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769529645/WhatsApp_Image_2026-01-14_at_8.04.14_AM_4_uczqy3.jpg',
      testimonial: 'Our bedroom has become our sanctuary. The design creates the perfect peaceful atmosphere for rest and relaxation.',
      gallery: [
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529646/WhatsApp_Image_2026-01-14_at_8.04.14_AM_2_ptczbi.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529648/WhatsApp_Image_2026-01-14_at_8.04.12_AM_2_c4vvzu.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769529712/IMG-20240714-WA0034_-_Copy_-_Copy_htvluv.jpg'
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
      image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769564775/ba2_gqjmly.jpg',
      testimonial: 'Our bathroom renovation is the highlight of our home. It feels like a luxury spa every time we use it.',
      gallery: [
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769564775/ba4_arvjjh.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769564775/ba1_aod1ds.jpg',
        'https://res.cloudinary.com/dreanewsg/image/upload/v1769564775/ba3_rohojr.jpg'
      ]
    },
    '7': {
  name: 'Architectural Interior Design',
  category: 'Architecture & Interiors',
  description: 'Complete architectural and interior design solutions blending creativity with structural precision.',
  longDescription: 'We provide end-to-end architectural interior design services that combine structural planning with aesthetic excellence. From concept development to 3D visualization and execution drawings, we design spaces that are functional, elegant, and built to last.',
  benefits: [
    'Complete architectural planning',
    '3D visualization & layouts',
    'Interior space optimization',
    'Material & finish selection',
    'Modern and sustainable designs',
    'End-to-end project coordination'
  ],
  image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769530486/IMG-20231019-WA0004_ahq4g8.jpg',
  testimonial: 'Their architectural interior design completely transformed our vision into reality with perfect detailing.',
  gallery: [
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769529741/IMG-20240214-WA0052_-_Copy_kfjapq.jpg',
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769529749/IMG-20240612-WA0002_-_Copy_v5ipx6.jpg',
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769530421/IMG-20240214-WA0022_qdva9u.jpg'
  ]
},

'8': {
  name: 'Construction Contracts',
  category: 'Construction Services',
  description: 'Professional construction execution with quality assurance and contract management.',
  longDescription: 'We handle construction projects through structured contracts ensuring transparency, timelines, and quality standards. Our team manages site execution, materials, labor coordination, and safety compliance for stress-free construction.',
  benefits: [
    'Turnkey construction solutions',
    'Quality material assurance',
    'Timeline management',
    'Cost transparency',
    'Skilled workforce supervision',
    'Safety compliance'
  ],
  image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
  testimonial: 'The construction was completed on time with excellent quality and professionalism.',
  gallery: [
    'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg',
    'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg'
  ]
},

'9': {
  name: 'Municipal & Onuda Approvals',
  category: 'Government Approvals',
  description: 'Hassle-free building approvals and legal documentation handling.',
  longDescription: 'We assist clients in obtaining municipal and ONUDA approvals by managing drawings, documentation, and compliance procedures. Our experience ensures faster processing and error-free submissions.',
  benefits: [
    'Municipal plan approvals',
    'ONUDA documentation support',
    'Legal compliance assistance',
    'Faster approval processing',
    'Drawing submission handling',
    'Consultation with authorities'
  ],
  image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769748313/2_page-0001_udgvqe.jpg',
  testimonial: 'They made the approval process smooth and stress-free. Highly professional service.',
  gallery: [
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769748324/3_page-0001_adlltz.jpg',
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769748400/CHEKURPADU__page-0001_tvj7lw.jpg',
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769748402/LAYOUT_PLAN_page-0001_v8cmol.jpg'
  ]
},

'10': {
  name: 'Vastu-Compliant Building Plans',
  category: 'Planning & Design',
  description: 'Scientifically planned building designs aligned with Vastu principles.',
  longDescription: 'We design building plans as per Vastu Shastra while maintaining modern architectural standards. Our planning ensures proper energy flow, spatial balance, and structural efficiency for homes and commercial spaces.',
  benefits: [
    'Vastu-compliant layouts',
    'Scientific space planning',
    'Energy flow optimization',
    'Residential & commercial planning',
    'Structural + Vastu balance',
    'Customized floor plans'
  ],
  image: 'https://res.cloudinary.com/dreanewsg/image/upload/v1769829722/Narasimha_Proposed_Plan_page-0001_wildi5.jpg',
  testimonial: 'Our Vastu-based plan brought both positivity and smart space utilization.',
  gallery: [
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769829722/First_One_Model-1_page-0001_hkdylw.jpg',
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769829722/RAJU_ANNA_FST_FLOOR_PLAN_page-0001_ldampe.jpg',
    'https://res.cloudinary.com/dreanewsg/image/upload/v1769829722/RAJU_ANNA_FLOOR_PLAN_page-0001_djkqzx.jpg'
  ]
},

  };

  export default function ServiceDetail( ) {
    const params = useParams();
    const service = servicesDetail[params.id as string];

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
