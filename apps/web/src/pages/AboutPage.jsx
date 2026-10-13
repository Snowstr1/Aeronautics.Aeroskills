import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Plane, Briefcase, Wrench, GraduationCap, Truck, Building, 
  Globe2, ShieldCheck, BadgeDollarSign, Lightbulb, HeartHandshake,
  CheckCircle2, Milestone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      title: "Asset Management",
      icon: <BadgeDollarSign className="w-8 h-8 text-primary" />,
      description: "Expert guidance on aircraft/rotorcraft purchases, financing, appraisals, lease inspections, and operational support.",
    },
    {
      title: "Consulting",
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      description: "AOC/AMO certification support, SMS/QMS implementation (ISO 9001), quality assurance, and UAOC consulting.",
    },
    {
      title: "Maintenance & Engineering",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      description: "Comprehensive Fixed-wing and Helicopter Continuing Airworthiness Management Organization (CAMO) services.",
    },
    {
      title: "Training (Aeroskill LLC)",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      description: "Initial/recurrent pilot and engineer training, cabin crew training, type-specific courses, workshops, and ATM/UTM management training aligned with MCAA requirements.",
    },
    {
      title: "Ground Handling (AGS LLC)",
      icon: <Truck className="w-8 h-8 text-primary" />,
      description: "Flight support, refueling, ground handling, flight planning, catering, and aircraft pickup at all Mongolian airports.",
    },
    {
      title: "Airport Management",
      icon: <Building className="w-8 h-8 text-primary" />,
      description: "Feasibility studies, strategic planning, and operational setup for domestic aerodromes and Heliport projects.",
    }
  ];

  const features = [
    {
      title: "Expertise",
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      description: "Globally experienced team of engineers, pilots, and aviation managers.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      title: "Strategic Reach",
      icon: <Globe2 className="w-6 h-6 text-accent" />,
      description: "Worldwide services with deep expertise at ZMUB and ZMCK airports.",
      colSpan: "col-span-1"
    },
    {
      title: "Cost-Effective Quality",
      icon: <BadgeDollarSign className="w-6 h-6 text-accent" />,
      description: "Superior ground handling and refueling at competitive rates.",
      colSpan: "col-span-1"
    },
    {
      title: "Innovative Subsidiaries",
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      description: "Aeroskill LLC (launched 2024) drastically enhances our training offerings.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
    },
    {
      title: "Trusted Partnerships",
      icon: <HeartHandshake className="w-6 h-6 text-accent" />,
      description: "Collaborations with NUBIA, China Sky-Wings, DT aviation, Spring Airline, My freighter airline, Juneayo Air, United Airline, China United.",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Foundation",
      description: "Aeronautics LLC founded, setting the stage for aviation excellence in Mongolia."
    },
    {
      year: "2022",
      title: "Expansion into Ground Services",
      description: "Aeronautics Ground Service LLC launched, providing premium ground handling at ZMUB and ZMCK."
    },
    {
      year: "2023",
      title: "Major Certifications & Partnerships",
      description: "Consulting services to Alpha Aurora Aviation LLC (MCAR-119, MCAR-135, MCAR-145 certifications) and China Sky-Wings (MCAR-141 certification, began representing in Mongolia)."
    },
    {
      year: "2024",
      title: "Training & Global Reach",
      description: "Introduced Aeroskill LLC expanding training. Provided consulting to DT Aviation (MCAR-145), My Freighter Airlines (MCAR-129), Juneyao Air (MCAR-129), Spring Air (MCAR-129 consulting), and China United (MCAR-129)."
    },
    {
      year: "2025",
      title: "Future Milestones",
      description: "Aeroskill LLC preparations for MCAR-141 flight school. Signed contract with NUBIA as Airport Station Manager for United Airlines."
    }
  ];

  const agsServices = [
    "Obtaining Foreign AOC",
    "Coordination with CAA of Mongolia and other authorities",
    "Station management and representative service",
    "Overflight and landing permission",
    "Flight planning and consulting",
    "Ramp side support and supervision",
    "Refueling support",
    "Local transportation, hotel booking, visa arrangement, catering"
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Aeronautics LLC</title>
        <meta name="description" content="Discover Aeronautics LLC, Mongolia's premier aviation service and consulting firm. Learn about our mission, vision, subsidiaries, and comprehensive aviation solutions." />
      </Helmet>

      <main className="bg-background min-h-screen">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center border-b-8 border-accent">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/2e5665663916302844d9e0080661774a.jpg" 
              alt="Commercial aircraft on tarmac at night with ground handling operations, personnel in safety vests, and airport lighting" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <motion.div {...fadeInUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/50 text-accent font-bold text-sm uppercase tracking-widest mb-6">
                  <Plane className="w-4 h-4" />
                  YOU FLY, WE SUPPORT
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8" style={{ letterSpacing: '-0.02em' }}>
                  Aeronautics LLC
                </h1>
                
                <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                  <p>
                    Founded in 2021, Aeronautics LLC is a premier aviation service and consulting firm based at Buyant-Ukhaa International Airport, Ulaanbaatar, Mongolia. We empower corporate and individual clients across the aviation industry through our dedicated subsidiaries.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-white/20">
                    <div>
                      <h3 className="text-accent font-bold mb-2 text-xl">Our Mission</h3>
                      <p className="text-base text-white/80">
                        Provide exceptional services prioritizing safety, efficiency, and international standards.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-accent font-bold mb-2 text-xl">Our Vision</h3>
                      <p className="text-base text-white/80">
                        Promote safe, reliable, and sustainable aviation practices globally.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="text-base text-white/80 uppercase tracking-wider font-bold mb-3">Our Dedicated Subsidiaries:</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 text-sm">Aeronautics LLC (Consulting)</span>
                      <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 text-sm">AGS LLC (Ground Handling)</span>
                      <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 text-sm">Aero Skill LLC (Training)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 heading-underline-center">
                  Comprehensive Aviation Services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
                  Delivering end-to-end solutions for flight operators, from consulting and training to on-the-ground management.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION (Bento Grid) */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-underline text-white">
                Why Choose Us
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mt-8">
                We combine deep local knowledge with international standards to offer unparalleled support across all facets of aviation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors ${feature.colSpan}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-primary-foreground/80 leading-relaxed mt-auto">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR ACHIEVEMENTS SECTION (Timeline) */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline-center">
                Our Achievements
              </h2>
              <p className="text-lg text-muted-foreground mt-8">
                A track record of rapid growth, key certifications, and strategic global partnerships.
              </p>
            </motion.div>

            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:border-none space-y-12">
              {/* Central line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
              
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent"></div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="bg-muted rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AGS LLC SERVICES SECTION */}
        <section className="py-24 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline">
                  AGS LLC Services
                </h2>
                <p className="text-lg text-muted-foreground mt-8 mb-8">
                  Aeronautics Ground Service (AGS) provides specialized on-the-ground support ensuring seamless physical execution of your flight operations.
                </p>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Globe2 className="w-5 h-5 text-accent" />
                    Represented Companies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Proudly partnering with and representing: NUBIA, China Sky-Wings, DT aviation, Spring Airline, My freighter airline, Juneayo Air, United Airline, and China United.
                  </p>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {agsServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium text-sm leading-relaxed">{service}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AboutPage;