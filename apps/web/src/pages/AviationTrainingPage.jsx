import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Plane, CheckCircle2, Save, Edit2, FileImage as ImageIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const aircraftCapabilities = [
  {
    type: "A320/A330",
    programs: [
      "Initial Type Rating",
      "Re-currency Training",
      "Upgrade Training to Captain",
      "Upgrade Training to Simulator Instructor",
      "Difference Training",
      "UPRT / RNPAR",
      "Cabin Crew Training"
    ]
  },
  {
    type: "B737",
    programs: [
      "Initial Type Rating",
      "Re-currency Training",
      "Upgrade Training to Captain",
      "Upgrade Training to Simulator Instructor",
      "Difference Training",
      "UPRT / RNPAR"
    ]
  },
  {
    type: "B747",
    programs: [
      "Initial Type Rating",
      "Re-currency Training",
      "Upgrade Training to Captain",
      "Upgrade Training to Simulator Instructor",
      "Difference Training"
    ]
  },
  {
    type: "CRJ900",
    programs: [
      "Initial Type Rating",
      "Re-currency Training",
      "Upgrade Training to Captain",
      "Upgrade Training to Simulator Instructor",
      "Difference Training",
      "Cabin Crew Training"
    ]
  },
  {
    type: "K350/B300",
    programs: [
      "Initial Type Rating",
      "Re-currency Training",
      "Upgrade Training to Captain",
      "Upgrade Training to Simulator Instructor",
      "Difference Training"
    ]
  },
  {
    type: "Mi171/Mi8",
    programs: [
      "Initial Type Rating",
      "Re-currency Training",
      "Upgrade Training to Captain",
      "Upgrade Training to Simulator Instructor",
      "Difference Training"
    ]
  }
];

const initialLocations = [
  {
    name: "Chongqing Base",
    desc: "The first CCAR-142 flight training center, there are currently 2 types of flight simulator for training, including A320 and B747. At the same time, the Chongqing base also has a set of ARJ021 cabin training equipment. In terms of aviation training capability for A320 and B747 aircraft.",
    image: "https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/3023cc0c7a9639b023f9d8521dc58ae8.png",
    features: []
  },
  {
    name: "Zhengzhou Base",
    desc: "Flight Training Center uses B737 as the main training simulator. Currently, its customers are Longhao Airlines and Zhongzhou Airlines.",
    image: "https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/c32b488e4e4920ec31f9bfdada170e82.png",
    features: []
  },
  {
    name: "Shanghai Base",
    desc: "There 2 types of flight simulator for training, including KA350 and MI-171 (Mi8).",
    image: "https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/876be1cb9a9d53fd0a17216e14611d55.png",
    features: []
  }
];

const AviationTrainingPage = () => {
  // Editable State for Training Bases Section
  const [isEditing, setIsEditing] = useState(false);
  const [basesTitle, setBasesTitle] = useState("TRAINING CENTER LOCATION");
  const [basesDesc, setBasesDesc] = useState("Strategically located across China, our state-of-the-art facilities provide accessible, world-class environments for aviation professionals.");
  const [basesList, setBasesList] = useState(initialLocations);

  const handleBaseChange = (index, field, value) => {
    const newList = [...basesList];
    newList[index][field] = value;
    setBasesList(newList);
  };

  const handleFeatureChange = (baseIndex, featIndex, value) => {
    const newList = [...basesList];
    newList[baseIndex].features[featIndex] = value;
    setBasesList(newList);
  };

  const handleImageChange = (index) => {
    const newUrl = window.prompt("Enter new direct image URL:", basesList[index].image);
    if (newUrl !== null && newUrl.trim() !== "") {
      handleBaseChange(index, 'image', newUrl.trim());
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <>
      <Helmet>
        <title>Aviation Training - China Sky-Wings Training Center</title>
        <meta name="description" content="Professional aviation training programs provided by China Sky-Wings Training Center. Approved by CAAC and MCAA for multiple aircraft types including A320, B737, and more." />
      </Helmet>

      <main className="bg-background min-h-screen">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-20 border-b-8 border-secondary overflow-hidden hero-fixed-clip">
          <img 
            src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/2319a00238e7c1fdbdf8471446c18c5a.webp" 
            alt="Cessna aircraft on runway with mountains" 
            className="hero-fixed-media object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase text-shadow-hero" style={{ letterSpacing: '0.02em' }}>
                Aviation Training
              </h1>
              <div className="w-24 h-1.5 bg-accent rounded-full mx-auto mt-8 mb-6 shadow-sm"></div>
              <p className="text-xl md:text-2xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed text-shadow-hero">
                Elevating operational readiness through world-class instruction and state-of-the-art simulation technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CHINA SKY-WINGS TRAINING CENTER SECTION */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                {...fadeInUp}
                className="flex justify-center lg:justify-start"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-border">
                  <img 
                    src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/30cf30147226e78c8a20714f3778b7ee.png" 
                    alt="China Sky-Wings logo with blue wings design" 
                    className="w-full max-w-sm h-auto object-contain"
                  />
                </div>
              </motion.div>
              
              <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.6 }}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline">
                  China Sky-Wings Training Center
                </h2>
                <div className="space-y-6 mt-10">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Aeronautics LLC represents China Sky-Wings Training Center in Mongolia. China Sky-Wings International Education Technology Co., Ltd is a wholly-owned subsidiary of China Express Airlines Co., Ltd. Training center is the first qualification training base authorized by CAAC in Chongqing. In 2023 China Sky-Wings was certified by aviation training approval from the Civil Aviation Authority of Mongolia.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The area of the training center base is 98,000㎡. The first phase of the project has been put into production at the end of 2019. The training center is a comprehensive training center for aviation personnel with the most complete training qualifications in China, which can provide One-stop training for pilots, flight attendants, maintenance personnel, and In-flight security staff.
                  </p>
                  
                  <div className="bg-[hsl(var(--audit-light-blue))] border border-[hsl(var(--audit-blue))]/20 rounded-xl p-6 flex items-start gap-4 mt-8">
                    <ShieldCheck className="w-8 h-8 text-[hsl(var(--audit-blue))] shrink-0" />
                    <div>
                      <h4 className="text-foreground font-bold text-lg">Fully Authorized Institution</h4>
                      <p className="text-muted-foreground">Certified to provide comprehensive flight and ground training for diverse international operators.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRAINING CAPABILITY SECTION */}
        <section className="py-20 lg:py-28 bg-[hsl(var(--audit-light-blue))] border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline-center">
                Training Capabilities
              </h2>
              <p className="text-lg text-muted-foreground mt-8">
                Comprehensive certification programs tailored for specific aircraft types, ensuring absolute proficiency from initial type rating to captain upgrades.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {aircraftCapabilities.map((aircraft, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className="h-full border-t-4 border-t-primary shadow-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="bg-muted/30 border-b border-border pb-6">
                      <div className="flex items-center gap-3">
                        <Plane className="w-6 h-6 text-secondary" />
                        <CardTitle className="text-2xl font-bold text-foreground">{aircraft.type}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        {aircraft.programs.map((program, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground font-medium">{program}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* YOUTUBE VIDEO EMBED */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="mt-20 max-w-5xl mx-auto"
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Experience Our Facilities
                </h3>
                <p className="text-lg text-muted-foreground mt-4">
                  Take a closer look at our state-of-the-art simulators and professional training environments.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted aspect-video relative">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ENwEsDPacgs?rel=0" 
                  title="China Sky-Wings Aviation Training Facility Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TRAINING CENTER LOCATION SECTION (Fully Editable) */}
        <section className="py-20 lg:py-28 bg-background relative group/section transition-colors">
          
          {/* Edit Mode Toggle Overlay */}
        

          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isEditing ? 'ring-2 ring-primary/20 rounded-2xl p-6 bg-muted/20' : ''}`}>
            <div className="mb-16">
              <h2 
                className={`text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline ${isEditing ? 'border-b-2 border-primary/50 border-dashed outline-none min-h-[40px] inline-block' : ''}`}
                contentEditable={isEditing}
                suppressContentEditableWarning
                onBlur={(e) => setBasesTitle(e.target.innerText)}
              >
                {basesTitle}
              </h2>
              <p 
                className={`text-lg text-muted-foreground mt-8 max-w-2xl ${isEditing ? 'border border-primary/30 border-dashed rounded-md p-2 outline-none min-h-[60px]' : ''}`}
                contentEditable={isEditing}
                suppressContentEditableWarning
                onBlur={(e) => setBasesDesc(e.target.innerText)}
              >
                {basesDesc}
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {basesList.map((loc, idx) => (
                <motion.div key={idx} variants={fadeInUp} className={`group cursor-pointer flex flex-col ${isEditing ? 'ring-1 ring-primary/20 rounded-xl p-4 bg-background shadow-sm' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-md border border-border">
                    <img 
                      src={loc.image} 
                      alt={loc.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--audit-navy))]/80 to-transparent"></div>
                    
                    {/* Image Edit Overlay */}
                    {isEditing && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20">
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          onClick={(e) => { e.stopPropagation(); handleImageChange(idx); }} 
                          className="gap-2"
                        >
                          <ImageIcon className="w-4 h-4" />
                          Change Image URL
                        </Button>
                      </div>
                    )}

                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <MapPin className="w-5 h-5 text-accent shrink-0" />
                        <h3 
                          className={`text-2xl font-bold w-full ${isEditing ? 'border-b border-white/50 border-dashed outline-none' : ''}`}
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                          onBlur={(e) => handleBaseChange(idx, 'name', e.target.innerText)}
                          onClick={(e) => isEditing && e.preventDefault()}
                        >
                          {loc.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <p 
                      className={`text-muted-foreground leading-relaxed mb-4 flex-grow ${isEditing ? 'border border-primary/30 border-dashed rounded-md p-2 outline-none min-h-[80px]' : ''}`}
                      contentEditable={isEditing}
                      suppressContentEditableWarning
                      onBlur={(e) => handleBaseChange(idx, 'desc', e.target.innerText)}
                    >
                      {loc.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {loc.features.map((feat, fIdx) => (
                        <span 
                          key={fIdx} 
                          className={`text-xs font-bold uppercase tracking-wider bg-muted text-foreground px-3 py-1 rounded-md ${isEditing ? 'border border-primary/50 border-dashed outline-none bg-primary/5' : ''}`}
                          contentEditable={isEditing}
                          suppressContentEditableWarning
                          onBlur={(e) => handleFeatureChange(idx, fIdx, e.target.innerText)}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* APPROVAL SECTION */}
        <section className="py-20 lg:py-28 bg-muted/50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-underline-center">
                Approval
              </h2>
              <p className="text-lg text-muted-foreground mt-8">
                Operating under rigorous international standards, fully certified by the Civil Aviation Authority of Mongolia (MCAA.ATO.141.39) alongside CAAC credentials.
              </p>
            </div>

            <motion.div 
              {...fadeInUp}
              className="max-w-5xl mx-auto flex justify-center"
            >
              <div className="relative p-2 rounded-2xl bg-white shadow-xl border border-border inline-block">
                <img 
                  src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/f2f0eee0bc23f3fb3728e338ac6eba01.png" 
                  alt="Aviation Authority Certifications" 
                  className="w-full h-auto max-h-[600px] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AviationTrainingPage;