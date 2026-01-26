import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Gallery } from '@/components/gallery';

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-4 text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-primary">Masterpieces</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of premium interior designs and architectural projects that showcase our expertise and creativity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Gallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Your Own Masterpiece?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert team transform your space into a stunning design that reflects your style and personality.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
