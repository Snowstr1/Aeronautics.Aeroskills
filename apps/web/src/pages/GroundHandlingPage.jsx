import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlaneTakeoff, Car, Users, Shield, Wind, CheckCircle2, Info, PlaneLanding } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const GroundHandlingPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Ground Handling | Aeronautics LLC</title>
        <meta name="description" content="Comprehensive ground handling services covering aircraft servicing, passenger handling, cargo operations, airport and hotel transfers, and coverage across Mongolia." />
      </Helmet>

      <main className="bg-background min-h-screen pb-20">
        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/c2f742825aaf840431180795d85bc025.jpg" 
              alt="Ground handling worker in safety gear directing aircraft on tarmac" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
           
            
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl">
                <PlaneTakeoff className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-shadow-hero">
                Ground Handling
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium text-shadow-hero">
              Professional, efficient, and safe ground handling services across all major airports in Mongolia. Operated directly by our AGS LLC subsidiary to ensure uncompromising quality.
            </p>
          </div>
        </section>

        {/* GROUND HANDLING SERVICES SECTION */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Service Description */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  We guarantee the highest quality refueling and ground handling services at all airports in Mongolia. Our ground handling service includes but is not limited to the following:
                </p>
                
                <div className="flex justify-center">
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-left text-lg">
                    <li>Obtaining Foreign AOC</li>
                    <li>Coordination with CAA of Mongolia and other authorities</li>
                    <li>Station management and representative service</li>
                    <li>Overflight and landing permission</li>
                    <li>Flight planning and consulting</li>
                    <li>Ramp side support and supervision</li>
                    <li>Refueling support</li>
                    <li>Local transportation including domestic charter flights</li>
                    <li>Hotel booking</li>
                    <li>Mongolian visa arrangement</li>
                    <li>Catering order</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PICKUP SERVICE SECTION */}
        <section id="pickup-service" className="py-12 lg:py-16 bg-background border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeInUp}>
              <p className="text-sm font-bold uppercase tracking-wider text-secondary mb-3">Pickup Service</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 heading-underline-center">
                Convenient, Safe & Legal Transportation
              </h2>

              <p className="text-base md:text-lg text-muted-foreground leading-8 mt-6 max-w-4xl mx-auto">
                Aviation efficiency doesn't stop at the tarmac. Our Pick-up and Logistics service ensures seamless transfer for crew, VIP passengers, and critical personnel between the airport and their final destination. With modern vehicles and professional chauffeurs, we guarantee punctuality, comfort, and full compliance with local transportation laws.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="rounded-2xl border border-border bg-muted/40 p-6">
                  <h3 className="font-bold text-foreground mb-2">Airport Transfer</h3>
                  <p className="text-sm text-muted-foreground">Reliable pickup and drop-off service.</p>
                </div>

                <div className="rounded-2xl border border-border bg-muted/40 p-6">
                  <h3 className="font-bold text-foreground mb-2">Professional Drivers</h3>
                  <p className="text-sm text-muted-foreground">Vetted chauffeurs with local experience.</p>
                </div>

                <div className="rounded-2xl border border-border bg-muted/40 p-6">
                  <h3 className="font-bold text-foreground mb-2">Safe & Legal</h3>
                  <p className="text-sm text-muted-foreground">Compliant with transportation regulations.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICE ROUTES SECTION */}
        <section className="py-20 lg:py-28 bg-[hsl(var(--transport-primary))] text-white border-y border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dedicated Service Routes</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">Precise coordination whether you are arriving in the country or departing for your next destination.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Route 1 */}
              <motion.div {...fadeInUp}>
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                      <PlaneLanding className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">From Airport to Hotel</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      Experience a stress-free arrival. Our professional driver will be waiting for you directly at the arrival exit, holding a personalized name tag for easy identification.
                    </p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start gap-3 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Includes up to <strong>2 hours</strong> of complimentary waiting time after flight arrival.</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90">
                        <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Required Information: Flight number, arrival time, lead passenger name, and hotel destination.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Route 2 */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                      <PlaneTakeoff className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold">From Hotel to Airport</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      Ensure a punctual departure. Your driver will arrive promptly at your hotel lobby to assist with luggage and transfer you directly to the departure terminal.
                    </p>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start gap-3 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Pickup scheduled <strong>3.5 hours</strong> before international flights and <strong>2.5 hours</strong> before domestic flights.</span>
                      </li>
                      <li className="flex items-start gap-3 text-white/90">
                        <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>Required Information: Hotel name, room number (optional), flight departure time, and contact number.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VEHICLE SECTION */}
        <section className="py-20 lg:py-28 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline">
                  Our Fleet
                </h2>
                <div className="mt-10 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Experience the ultimate in travel comfort with our premium fleet. Each vehicle is rigorously maintained and specifically selected for spaciousness, safety, and a smooth ride.
                  </p>
                  
                  <div className="bg-muted rounded-2xl p-8 border border-border">
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <Car className="w-6 h-6 text-primary" />
                      Toyota Alphard
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">Capacity: Up to 5 passengers with luggage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Wind className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">Features: Fully air-conditioned, luxury seating</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">Safety: Fully insured, compliant with all transportation laws</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="relative w-full">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                  <img src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/images-1-DvjgW.jpeg" alt="Toyota Alphard luxury vehicle exterior" className="w-full h-full object-cover object-center" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="py-16 lg:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Client Logos Section */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-16">
                  We're representing the following companies in Mongolia
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-4xl mx-auto">
                  {/* China United Airlines */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-40 h-40 rounded-full bg-white shadow-sm border border-border flex items-center justify-center p-4 overflow-hidden">
                      <img 
                        src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/3021b5543409d1289e5f9c7f9eb8602c.png" 
                        alt="China United Airlines logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <a 
                      href="https://www.flycua.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary hover:underline underline-offset-4 tracking-wider transition-colors"
                    >
                      CHINA UNITED AIRLINES
                    </a>
                  </div>

                  {/* Spring Airlines */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-40 h-40 rounded-full bg-white shadow-sm border border-border flex items-center justify-center p-4 overflow-hidden">
                      <img 
                        src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/85f5fa70309de84b176d88bcaebee84b.png" 
                        alt="Spring Airlines logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <a 
                      href="https://en.ch.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary hover:underline underline-offset-4 tracking-wider transition-colors"
                    >
                      SPRING AIRLINES
                    </a>
                  </div>

                  {/* My Freighter Airlines */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-40 h-40 rounded-full bg-white shadow-sm border border-border flex items-center justify-center p-4 overflow-hidden">
                      <img 
                        src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/7d21f0b390e75d99267e5e2a0dd76ac9.png" 
                        alt="My Freighter Airlines logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <a 
                      href="https://myfreighter.uz/en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary hover:underline underline-offset-4 tracking-wider transition-colors"
                    >
                      MY FREIGHTER AIRLINES
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GroundHandlingPage;