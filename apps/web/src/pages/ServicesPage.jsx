import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';

const servicesList = [
  {
    title: 'Aviation Consulting',
    description: 'Strategic guidance, technical asset management, and independent audit & assurance for operators and infrastructure developers in Mongolia, encompassing rigorous regulatory compliance and structural efficiency.',
    icon: 'BarChart3',
    path: '/services/aviation-consulting',
    features: ['Regulatory compliance', 'Certification support', 'Strategic planning', 'Audit & assurance'],
    colorTheme: 'purple'
  },
  {
    title: 'Ground Handling',
    description: 'Professional ground handling services ensuring rapid, safe, and efficient turnaround times for all aircraft types across major Mongolian airports.',
    icon: 'PlaneTakeoff',
    path: '/services/ground-handling',
    features: ['Aircraft servicing', 'Passenger handling', 'Cargo operations', 'Airport transfers'],
    colorTheme: 'blue'
  },
  {
    title: 'Aircraft Dealership',
    description: 'Aircraft sales, acquisition, and dealership services. We simplify complex transactions and source aircraft globally to meet your exact operational requirements.',
    icon: 'Plane',
    path: '/services/aircraft-dealership',
    features: ['Aircraft sourcing', 'Sales transactions', 'Professional support'],
    colorTheme: 'teal'
  },
  {
    title: 'Aviation Training',
    description: 'Industry-standard training programs for aviation personnel to ensure the highest levels of safety, proficiency, and operational readiness via Aeroskill LLC.',
    icon: 'GraduationCap',
    path: '/services/aviation-training',
    features: ['Pilot & Recurrent training', 'Ground ops training', 'Specialized programs'],
    colorTheme: 'green'
  }
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Aeronautics LLC Mongolia</title>
        <meta name="description" content="Detailed overview of our core aviation services including Aviation Consulting (including Audit & Assurance), Ground Handling (including Pick-up Service), Aircraft Dealership, and Aviation Training." />
      </Helmet>

      <main className="bg-background min-h-screen">
        {/* HERO SECTION */}
        <section className="py-20 lg:py-32 bg-gradient-navy-teal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Our Services
              </h1>
              <div className="w-20 h-1.5 bg-secondary rounded-full mb-8"></div>
              <p className="text-xl text-white/90 leading-relaxed mb-8 font-medium">
                Aeronautics LLC provides a comprehensive suite of professional aviation services tailored to meet the strict demands of international operators traversing Mongolia.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID SECTION */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service, index) => (
                <Link key={index} to={service.path} className="block group h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-2xl">
                  <div className="pointer-events-none h-full">
                    <ServiceCard service={service} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;