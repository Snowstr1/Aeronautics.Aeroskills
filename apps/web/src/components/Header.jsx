import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from '@/components/Logo.jsx';

const servicesLinks = [
  { label: 'Aviation Consulting', path: '/services/aviation-consulting' },
  { label: 'Ground Handling', path: '/services/ground-handling' },
  { label: 'Aircraft Dealership', path: '/services/aircraft-dealership' },
  { label: 'Audit & Assurance', path: '/services/audit-assurance' },
  { label: 'Aviation Training', path: '/services/aviation-training' },
  { label: 'Pickup Service', path: '/services/pick-up-service' },
];

const mainLinks = [
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const navItemBase =
  'relative inline-flex items-center gap-1.5 py-2 text-base font-semibold tracking-wide outline-none transition-colors ' +
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
    <header className="sticky top-0 w-full z-50 bg-gradient-navy-teal shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Link
            to="/"
            aria-label="Aeronautics LLC home"
            className="flex items-center shrink-0 mr-8 group"
          >
            <Logo className="group-hover:scale-105 filter drop-shadow-md" />
          </Link>

          <nav className="hidden md:flex items-center gap-10 ml-auto">

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${navItemClass(isActive('/services'))} [&[data-state=open]>svg]:rotate-180`}
              >
                Services
                <ChevronDown
                  aria-hidden="true"
                  className="w-4 h-4 opacity-80 transition-transform duration-200"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={12}
                className="w-60 p-2 rounded-xl border-border shadow-xl bg-background"
              >
                {servicesLinks.map((service) => (
                  <DropdownMenuItem
                    key={service.path}
                    asChild
                    className="rounded-lg cursor-pointer focus:bg-muted focus:text-primary"
                  >
                    <Link
                      to={service.path}
                      className={`w-full text-[15px] font-medium py-2.5 transition-colors ${
                        isActive(service.path) ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="h-px bg-border my-1 mx-2"></div>
                <DropdownMenuItem
                  asChild
                  className="rounded-lg cursor-pointer focus:bg-primary focus:text-white"
                >
                  <Link
                    to="/services"
                    className="w-full text-[15px] font-bold py-2.5 text-primary hover:text-white transition-colors"
                  >
                    View All Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={navItemClass(isActive(link.path))}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl max-h-[80vh] overflow-y-auto">
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
