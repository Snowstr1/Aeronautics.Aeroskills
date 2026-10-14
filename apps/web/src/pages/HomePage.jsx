import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, FileCheck, BarChart3, GraduationCap, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
const services = [{
  title: 'Ground Handling',
  desc: 'Comprehensive turnaround services, fueling coordination, and standard catering support.',
  icon: Plane,
  color: 'text-[hsl(var(--audit-blue))]',
  bg: 'bg-[hsl(var(--audit-blue))]/10'
}, {
  title: 'Flight Permits',
  desc: 'Rapid acquisition of overflight, landing, and diplomatic clearances.',
  icon: FileCheck,
  color: 'text-[hsl(var(--audit-teal))]',
  bg: 'bg-[hsl(var(--audit-teal))]/10'
}, {
  title: 'Aviation Consulting',
  desc: 'Strategic planning, efficiency optimization, and compliance guidance.',
  icon: BarChart3,
  color: 'text-[hsl(var(--audit-primary))]',
  bg: 'bg-[hsl(var(--audit-primary))]/10'
}, {
  title: 'Aviation Training',
  desc: 'Professional development for crew and ground staff to safety protocols.',
  icon: GraduationCap,
  color: 'text-[hsl(var(--audit-teal))]',
  bg: 'bg-[hsl(var(--audit-teal))]/10'
}, {
  title: 'Audit & Assurance',
  desc: 'Safety assessments, compliance auditing, and quality assurance.',
  icon: ShieldCheck,
  color: 'text-[hsl(var(--audit-navy))]',
  bg: 'bg-[hsl(var(--audit-navy))]/10'
}, {
  title: 'Technical Asset Management',
  desc: 'Maintenance tracking and technical documentation review.',
  icon: Wrench,
  color: 'text-secondary',
  bg: 'bg-secondary/10'
}];
const HomePage = () => {
  return <>
      <Helmet>
        <title>Aviation Services Across Mongolia | Aeronautics LLC</title>
        <meta name="description" content="Ground Handling, Aviation Consulting, Training and Audit Services in Mongolia." />
      </Helmet>

      <main className="bg-background">
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden hero-fixed-clip bg-gradient-navy-sky min-h-[90vh] flex items-center">
          <div className="hero-fixed-media bg-[url('https://images.unsplash.com/photo-1685031021737-685e83724d26?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                  Aviation Services Across Mongolia
                </h1>
                
                <p className="text-2xl md:text-3xl font-semibold text-accent italic mb-6">
                  You fly, we support
                </p>
                
                <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-xl font-medium">
                  Ground Handling, Aviation Consulting, Training and Audit Services tailored for international operators and regulatory compliance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services" className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-xl hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center text-lg">
                    Explore Services
                  </Link>
                  <Link to="/contact" className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm text-center text-lg">
                    Contact Operations
                  </Link>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="relative w-full flex justify-center lg:justify-end">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 w-full max-w-md lg:max-w-full aspect-[4/3] lg:aspect-auto">
                  <img src="/images/home/aircraft-on-tarmac.webp" alt="Professional aircraft on tarmac" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--audit-navy))]/60 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-muted/50 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline-center">Core Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mt-6">Comprehensive operational support enabling seamless aviation activities within Mongolian airspace.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => <div key={i} className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.bg} ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{service.desc}</p>
                </div>)}
            </div>
          </div>
        </section>

        

      </main>
    </>;
};
export default HomePage;
