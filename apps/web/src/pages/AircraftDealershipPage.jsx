import React from 'react';
import { Helmet } from 'react-helmet';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const AircraftDealershipPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <Helmet>
        <title>Aircraft Dealership | Aeronautics LLC</title>
        <meta name="description" content="Premium aircraft sales, dealership services, and exclusive dealer for I.C.P. srl in Mongolia. High-quality ultralight aircraft and luxury business jets." />
      </Helmet>

      <main className="bg-background min-h-screen">
        
        {/* Hero Banner */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden hero-fixed-clip">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1693835195915-b30cc5ae885c"
              alt="Luxury Business Jet parked on the tarmac"
              className="hero-fixed-media object-cover object-center"
            />
            {/* Dark gradient overlay for text readability and premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 mix-blend-multiply" />
          </div>

          {/* Hero Content */}
          <motion.div 
            className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center flex-grow flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight uppercase"
            >
              EXCLUSIVE DEALER FOR ICP AIRCRAFT
            </motion.h1>
          </motion.div>
        </section>

        {/* Existing Content Container */}
        <div className="bg-background pt-16 pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

            {/* I.C.P. Logo & Intro */}
            <div className="mb-12">
              <div className="inline-block mb-8 shadow-sm rounded-xl border border-border overflow-hidden bg-card p-6">
                <img src="/images/logos/icp-logo.png" alt="I.C.P. official logo" className="h-12 w-auto object-contain" />
              </div>
              
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8 text-left">
                As per our exclusive dealer agreement with I.C.P. srl (Italy), we are proud to promote and sell their high-quality ultralight aircraft, kits, ready-to-fly models, and parts across Mongolia.
              </p>

              <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed text-left">
                <p>
                  The Company I.C.P. is located in the north of Italy, in Piedmont region. It was founded in 1980 as a family business, whose main activity was the production of wiring for the electrical appliance and electromechanical sector. Since 1984, the company specialized in design and production of wear indicators for friction materials for disc and drum brakes of cars, industrial vehicles and motorcycles, as well as wiring in the same sectors.
                </p>
                <p>
                  This activity, thanks to the curiosity and passion of the founder, was accompanied in 1988 by the importation of Chickinox ultralight aircraft and the following year I.C.P. started marketing and sales of ultralight aircraft in aluminum alloy produced by Zenair.
                </p>
                <p>
                  In 1990 I.C.P. start producing with a licence agreeement the aforementioned aircraft and starting from 1996, while continuing the collaboration with Zenair, I.C.P. begins to design and produce its own aircraft with unique characteristics of robustness and versatility, now known worldwide for their high safety standards.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <section className="bg-muted py-16 border-y border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
                I.C.P. Aviation Corporate Video
              </h2>
              <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black border border-border/50">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/g70gH4sUbDo" title="I.C.P. Aviation Corporate Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full"></iframe>
              </div>
            </div>
          </section>

          {/* Aircraft Products Section */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                
                {/* Savannah SR */}
                <div className="flex flex-col group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-lg bg-muted border border-border/50">
                    <img
                      src="/images/aircraft/savannah-sr-ultralight.jpg"
                      alt="Savannah SR Ultralight Aircraft"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>

                    <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 translate-y-4 md:group-hover:translate-y-0">
                      Savannah SR
                    </h3>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 text-left group-hover:text-primary transition-colors">
                    Savannah SR
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-left">
                    <p>
                      We have produced approximately 1000 units of Savannah S, since its first launch on the market in 2010 and it was time to take flight the project we had been working on for some time.
                    </p>
                    <p>
                      We took the opportunity of this restyling to redesign the entire aircraft and all its components in 3D in order to standardize and improve the assembly manuals, the spare parts catalog and all the technical documents.
                    </p>
                    <p>
                      The primary objective of this project was to change some imperfection of the aircraft and put into practice the suggestions reported by the sales network and users in general, in order to harmonize the technical documentation in compliance with the new 600 kg MTOW European regulations, in order to receive rapid approval by the CAA of each country.
                    </p>
                  </div>
                </div>

                {/* Ventura */}
                <div className="flex flex-col group">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-lg bg-muted border border-border/50">
                    <img
                      src="/images/aircraft/ventura-aircraft.jpg"
                      alt="Ventura Aircraft"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>

                    <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 translate-y-4 md:group-hover:translate-y-0">
                      Ventura
                    </h3>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 text-left group-hover:text-primary transition-colors">
                    Ventura
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-left">
                    <p>
                      The Ventura is the latest creation by I.C.P. in order of time, and is the result of in-depth studies aimed at satisfying the growing market demand for a larger aircraft, with more space and greater load capacity. As per tradition, it is a high-wing aircraft of entirely metallic construction, made with cutting-edge industrial technologies.
                    </p>
                    <p>
                      The large wing with Riblett GA 35-418 profile guarantees the excellent STOL qualities that are a hallmark of the I.C.P. aircraft, while the landing gear with the front steering wheel allows an easy movement at ground.
                    </p>
                    <p>
                      Once on board, it will be possible to appreciate the wide cabin space, the comfort of the adjustable seats that can satisfy pilots of all sizes and the huge rear space that allows you to load up to 90 kg of luggages.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Call to Action & Footer Link */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 border-t border-border">
            <p className="text-xl md:text-2xl italic text-foreground font-medium mb-10 leading-relaxed">
              "Contact us for pricing, demos, kit assembly, or inquiries. We can arrange flight demonstrations and full support."
            </p>
            
            <a href="https://www.icp.it/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-lg font-semibold text-primary hover:text-primary/80 underline underline-offset-4 transition-colors group">
              Visit I.C.P.'s official site
              <ExternalLink className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </section>
        </div>

      </main>
    </>
  );
};

export default AircraftDealershipPage;