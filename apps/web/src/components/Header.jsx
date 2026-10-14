import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap, ClipboardCheck } from 'lucide-react';
import Logo from '@/components/Logo.jsx';

const trainingLinks = [
  { label: 'Courses', description: 'Aviation training programs', path: '/training#courses', icon: GraduationCap },
  { label: 'Exams', description: 'Assessments and examinations', path: '/training#exams', icon: ClipboardCheck },
];

// Labels are shortened for the header only; page names stay unchanged elsewhere.
const servicesLinks = [
  { label: 'Consulting', path: '/services/aviation-consulting' },
  { label: 'Ground Handling', path: '/services/ground-handling' },
  { label: 'Dealership', path: '/services/aircraft-dealership' },
  { label: 'Training', path: '/services/aviation-training', activePaths: ['/training'], children: trainingLinks },
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

// Training dropdown: opens on mouse hover, on the chevron toggle (keyboard)
// and on the first tap of "Training" on touchscreens (second tap navigates).
const NavDropdown = ({ link, active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const wrapperRef = useRef(null);
  const toggleRef = useRef(null);
  const itemRefs = useRef([]);
  const closeTimer = useRef(null);
  const pointerType = useRef('mouse');
  const menuId = `${link.label.toLowerCase()}-submenu`;

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const focusItem = (index) => {
    const items = itemRefs.current.filter(Boolean);
    if (!items.length) return;
    items[(index + items.length) % items.length].focus();
  };

  const openAndFocus = (index) => {
    setIsOpen(true);
    // Wait for the menu to become visible before moving focus into it.
    requestAnimationFrame(() => focusItem(index));
  };

  const handlePointerEnter = (event) => {
    if (event.pointerType !== 'mouse') return;
    clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType !== 'mouse') return;
    closeTimer.current = setTimeout(() => setIsOpen(false), 150);
  };

  const handleBlur = (event) => {
    if (!wrapperRef.current?.contains(event.relatedTarget)) setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    const itemIndex = itemRefs.current.indexOf(document.activeElement);
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault();
      setIsOpen(false);
      toggleRef.current?.focus();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (itemIndex === -1) openAndFocus(0);
      else focusItem(itemIndex + 1);
    } else if (event.key === 'ArrowUp' && itemIndex !== -1) {
      event.preventDefault();
      focusItem(itemIndex - 1);
    }
  };

  const handleParentClick = (event) => {
    if (pointerType.current === 'touch' && !isOpen) {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center gap-0.5"
      onPointerDown={(event) => { pointerType.current = event.pointerType; }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <Link
        to={link.path}
        onClick={handleParentClick}
        aria-current={location.pathname === link.path ? 'page' : undefined}
        className={navItemClass(active)}
      >
        {link.label}
      </Link>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`${link.label} menu`}
        onClick={() => setIsOpen((open) => !open)}
        className={`p-1 rounded-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/60 ${
          active ? 'text-accent' : 'text-white/90 hover:text-white'
        }`}
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* pt-3 bridges the gap so the menu stays open while the pointer moves into it */}
      <div
        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 w-72 transition-[opacity,transform,visibility] duration-200 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-1 invisible pointer-events-none'
        }`}
      >
        <ul
          id={menuId}
          className="rounded-xl bg-background border border-border border-t-2 border-t-accent shadow-xl p-2"
        >
          {link.children.map((child, index) => {
            const Icon = child.icon;
            return (
              <li key={child.path}>
                <Link
                  ref={(el) => { itemRefs.current[index] = el; }}
                  to={child.path}
                  className="group/item flex items-center gap-3 p-3 rounded-lg outline-none transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0 transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-base font-semibold text-foreground">{child.label}</span>
                    <span className="text-sm text-muted-foreground">{child.description}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  const isLinkActive = (link) => [link.path, ...(link.activePaths || [])].some(isActive);

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
            {[...servicesLinks, ...mainLinks].map((link) => link.children ? (
              <NavDropdown key={link.path} link={link} active={isLinkActive(link)} />
            ) : (
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
                <React.Fragment key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary border-l-4 border-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 pl-3 border-l-2 border-border space-y-1">
                      {link.children.map((child) => {
                        const Icon = child.icon;
                        const childActive = `${location.pathname}${location.hash}` === child.path;
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            aria-current={childActive ? 'location' : undefined}
                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                              childActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                            }`}
                          >
                            <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </React.Fragment>
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
