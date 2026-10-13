import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo.jsx';

// Labels are shortened for the header only; page names stay unchanged elsewhere.
const servicesLinks = [
  { label: 'Consulting', path: '/services/aviation-consulting' },
  { label: 'Ground Handling', path: '/services/ground-handling' },
  { label: 'Dealership', path: '/services/aircraft-dealership' },
  { label: 'Training', path: '/services/aviation-training' },
];

const mainLinks = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const navItemBase =
  'relative inline-flex items-center gap-1.5 py-2 text-base font-semibold tracking-wide whitespace-nowrap outline-none transition-colors ' +
  'after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:rounded-full ' +
  'after:bg-accent after:transition-transform after:duration-300 focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm';

const navItemClass = (active) =>
  `${navItemBase} ${
    active
      ? 'text-accent after:scale-x-100'
      : 'text-white/90 hover:text-white after:scale-x-0 hover:after:scale-x-100'
  }`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="sticky top-0 w-full z-50 bg-primary shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link
            to="/"
            aria-label="Aeronautics LLC home"
            className="flex items-center shrink-0 mr-8 group"
          >
            <Logo className="group-hover:scale-105 filter drop-shadow-md" />
          </Link>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-7 xl:gap-10 ml-auto">
            {[...servicesLinks, ...mainLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={navItemClass(isActive(link.path))}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <div className="space-y-2">
              <div className="px-4 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                Services
              </div>
              {servicesLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary border-l-4 border-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/services"
                className="block px-4 py-3 rounded-lg text-base font-bold text-white bg-primary hover:bg-primary/90 mt-2 text-center"
              >
                View All Services
              </Link>
            </div>

            <div className="h-px bg-border my-2"></div>

            <div className="space-y-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-muted text-primary border-l-4 border-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
