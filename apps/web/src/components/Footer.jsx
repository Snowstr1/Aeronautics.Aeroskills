import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Logo from '@/components/Logo.jsx';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=100082910873874',
      ariaLabel: 'Facebook'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/aeronautics-llc',
      ariaLabel: 'LinkedIn'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/aeronautics.llc',
      ariaLabel: 'Instagram'
    }
  ];

  return (
    <footer className="bg-[hsl(var(--audit-navy))] text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-6">
              <Logo className="h-12 sm:h-14 drop-shadow-md" />
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-md font-medium mb-6">
              Delivering uncompromising ground handling, flight permits, and operational consulting across all airports in Mongolia. Built on safety, precision, and international standards.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="inline-flex w-10 h-10 rounded-lg bg-white/10 items-center justify-center text-white hover:bg-secondary hover:text-[hsl(var(--audit-navy))] transition-all shadow-sm"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-secondary mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 text-base">
              <li><Link to="/" className="text-white/80 font-medium hover:text-secondary hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link to="/services" className="text-white/80 font-medium hover:text-secondary hover:translate-x-1 inline-block transition-all">Our Services</Link></li>
              <li><Link to="/about" className="text-white/80 font-medium hover:text-secondary hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link to="/contact" className="text-white/80 font-medium hover:text-secondary hover:translate-x-1 inline-block transition-all">Contact Operations</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-secondary mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-base text-white/80 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Chinggis Khaan International Airport<br />Ulaanbaatar 17042, Mongolia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+97699123456" className="hover:text-secondary transition-colors">+976 88083066</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:sales@aeronautics.mn" className="hover:text-secondary transition-colors">
                    sales@aeronautics.mn
                  </a>
                  <a href="mailto:ground@aeronautics.mn" className="hover:text-secondary transition-colors">
                    ground@aeronautics.mn
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left text-sm text-white/60 font-medium">
          <p>&copy; {new Date().getFullYear()} Aeronautics LLC Mongolia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;