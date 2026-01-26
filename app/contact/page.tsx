'use client';

import React from "react"

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-4 text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out to us and let's discuss how we can help transform your space.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+919949736381" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9949736381
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Available during business hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:impressionarchitects01@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    impressionarchitects01@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Near Mangamuru Junction<br />
                    Opposite Hanuman Statue<br />
                    Ongole - 523001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Contact Section */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-secondary rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="+91 9999999999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="interior-design">Interior Design</option>
                        <option value="architectural-planning">Architectural Planning</option>
                        <option value="construction">Construction Contracts</option>
                        <option value="approvals">Municipal Approvals</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {submitMessage && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <Clock size={24} className="text-primary flex-shrink-0" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Connect */}
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919949736381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
                  >
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919949736381"
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Ongole Urban Development Authority
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Markapur, Kanigiri, Addanki
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Chimakurthy, Chirala
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Giddaluru, Podili, Darsi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="w-full h-96 bg-card rounded-lg border border-border overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.2719893876476!2d79.6465567!3d14.4356066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b2b8f5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sOngole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
