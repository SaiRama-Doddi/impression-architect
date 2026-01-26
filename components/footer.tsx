'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Impression Architects" 
                width={40} 
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">IMPRESSION</h3>
                <p className="text-xs text-muted-foreground">ARCHITECTS</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium architectural and interior design services for residential and commercial spaces.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+919949736381" className="hover:text-primary transition-colors">
                  +91 9949736381
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:impressionarchitects01@gmail.com" className="hover:text-primary transition-colors break-all">
                  impressionarchitects01@gmail.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p>
                  Near Mangamuru Junction, <br />
                  Opposite Hanuman Statue, <br />
                  Ongole - 523001,<br/>
                  Prakasam District, Andhrapradesh  
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary">Business Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2 items-center">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p>Monday - Saturday</p>
                  <p className="text-muted-foreground">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="ml-7">
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/impressionarchitects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/impressionarchitects_27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/919949736381"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Impression Architects. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
