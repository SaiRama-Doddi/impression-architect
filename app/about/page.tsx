import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CheckCircle, Award, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-4 text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Meet <span className="text-primary">Impression Architects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium architectural and interior design services crafted with passion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Architect Profile Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ravulapalli Ramakrishna</h2>
                <p className="text-lg text-primary font-semibold mb-4">Architect & Structural Engineer</p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With over 15 years of experience in architectural design and structural engineering, Ravulapalli Ramakrishna has established himself as a leading figure in premium interior design and architectural planning across Andhra Pradesh. His innovative approach combines aesthetic excellence with functional design principles.
                </p>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Qualifications</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <Award size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">B.Tech in Architecture</p>
                      <p className="text-sm text-muted-foreground">Advanced structural design and planning</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Award size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">M.Tech in Architecture</p>
                      <p className="text-sm text-muted-foreground">Specialized in advanced design methodologies</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Award size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Diploma in Architecture</p>
                      <p className="text-sm text-muted-foreground">Foundational expertise in architectural principles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Areas of Expertise</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Interior Design & Modular Solutions</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Residential & Commercial Architecture</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Structural Engineering & Planning</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Vastu-Compliant Building Plans</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span>Building Estimates & Surveys</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Jurisdiction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Services & Jurisdiction</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Our Services Include</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg mb-2">Municipal & ONUDA Approvals</h4>
                  <p className="text-muted-foreground">Complete assistance with Panchayat Plan approvals and municipal compliance</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg mb-2">Architectural Planning</h4>
                  <p className="text-muted-foreground">Layout design, building plans, and industrial plan approvals</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg mb-2">Building Estimates & Surveys</h4>
                  <p className="text-muted-foreground">Detailed cost estimation and professional land surveys</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg mb-2">Structural Assessment</h4>
                  <p className="text-muted-foreground">Structural stability analysis and engineering consultations</p>
                </div>
              </div>
            </div>

            {/* Jurisdiction */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Operational Jurisdiction</h3>
              <div className="grid gap-4">
                <div className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
                  <div className="flex gap-3 items-start">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Ongole Urban Development Authority (ONUDA)</p>
                      <p className="text-sm text-muted-foreground">Primary jurisdiction and service area</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
                  <div className="flex gap-3 items-start">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Ongole Municipal Corporation</p>
                      <p className="text-sm text-muted-foreground">Complete municipal services</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
                  <div className="flex gap-3 items-start">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Surrounding Municipalities</p>
                      <p className="text-sm text-muted-foreground">Markapur, Kanigiri, Addanki, Chimakurthy, Chirala</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
                  <div className="flex gap-3 items-start">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Panchayat Areas</p>
                      <p className="text-sm text-muted-foreground">Giddaluru, Podili, Darsi, and neighboring villages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your architectural and interior design needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
