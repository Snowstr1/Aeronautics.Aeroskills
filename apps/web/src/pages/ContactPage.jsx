import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Mail, Phone, MessageCircle, Navigation, Facebook, Linkedin, Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const ContactPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Aeronautics LLC Mongolia</title>
        <meta name="description" content="Get in touch with Aeronautics LLC. Find our addresses at Buyant-Ukhaa and Chinggis Khaan International Airports, and reach out via email, phone, or WhatsApp." />
      </Helmet>

      <main className="bg-background min-h-screen pt-28 pb-24 relative overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_top_right,_hsl(var(--brand-blue))_0%,_transparent_40%)]" />

        {/* HEADER SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-blue))] mb-6 tracking-tight">
              OUR ADDRESSES
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Visit us at our Main Base or Operational Base. Our dedicated teams across both locations are ready to assist you with comprehensive aviation services.
            </p>
          </motion.div>
        </section>

        {/* LOCATIONS SECTION (Cards + Maps Combined) */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              
              {/* Location Card 1: Buyant-Ukhaa */}
              <motion.div variants={fadeInUp} className="h-full">
                <Card className="h-full flex flex-col card-premium border-border/40 overflow-hidden bg-card">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Header Info */}
                    <div className="p-8 pb-6 flex-grow-0">
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 bg-[hsl(var(--brand-blue))]/10 rounded-2xl flex items-center justify-center shrink-0 text-[hsl(var(--brand-blue))] shadow-sm">
                          <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-2 text-foreground">Main Base</h2>
                          <p className="text-muted-foreground leading-relaxed font-medium">
                            Buyant-Ukhaa International Airport (ZMUB/ULN),<br />
                            21st Khoroo, Khan-Uul district,<br />
                            Ulaanbaatar 17121, Mongolia
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Map Embed */}
                    <div className="w-full h-64 md:h-80 bg-muted relative border-y border-border/50 flex-grow">
                      <iframe
                        title="Buyant-Ukhaa Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.354603157277!2d106.76014307635562!3d47.85288607093806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96eba339519a95%3A0x34eb0c5206a9ed7c!2z0J3QuNGB0Y3RhSDQvdGN0LMg0YbRjdCz0LjQudC9INKv0LnQu9GH0LjQu9Cz0Y3RjQ!5e1!3m2!1sen!2smn!4v1781840390281!5m2!1sen!2smn"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* Action Button */}
                    <div className="p-6 bg-card flex-grow-0 mt-auto">
                      <a
                        href="https://maps.app.goo.gl/rft1ZrZejzfjYYTZ6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[hsl(var(--brand-blue))] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[hsl(var(--brand-blue))]/90 hover:shadow-lg transition-all duration-300 active:scale-[0.98] w-full group"
                      >
                        <Navigation className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        Get Directions
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Location Card 2: Chinggis Khaan */}
              <motion.div variants={fadeInUp} className="h-full">
                <Card className="h-full flex flex-col card-premium border-border/40 overflow-hidden bg-card">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Header Info */}
                    <div className="p-8 pb-6 flex-grow-0">
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 bg-[hsl(var(--brand-blue))]/10 rounded-2xl flex items-center justify-center shrink-0 text-[hsl(var(--brand-blue))] shadow-sm">
                          <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-2 text-foreground">Operational Base</h2>
                          <p className="text-muted-foreground leading-relaxed font-medium">
                            Chinggis Khaan International Airport (ZMCK/UBN),<br />
                            Sergelen Sum, Tuv province 41091,<br />
                            Mongolia
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Map Embed */}
                    <div className="w-full h-64 md:h-80 bg-muted relative border-y border-border/50 flex-grow">
                      <iframe 
                        title="Chinggis Khaan International Airport Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.1869510122547!2d106.8190344763453!3d47.65139928488282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96ba829ac7f471%3A0x832c94f726f1a30e!2sChinggis%20Khaan%20International%20Airport!5e1!3m2!1sen!2smn!4v1781840484800!5m2!1sen!2smn"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* Action Button */}
                    <div className="p-6 bg-card flex-grow-0 mt-auto">
                      <a 
                        href="https://maps.google.com/?q=Chinggis+Khaan+International+Airport"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[hsl(var(--brand-blue))] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[hsl(var(--brand-blue))]/90 hover:shadow-lg transition-all duration-300 active:scale-[0.98] w-full group"
                      >
                        <Navigation className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        Get Directions
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* CONTACT DETAILS SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              
              {/* Email */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full card-premium border-border/40 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-blue))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-10 flex flex-col items-center relative z-10 h-full">
                    <div className="w-20 h-20 bg-muted group-hover:bg-[hsl(var(--brand-blue))]/10 transition-colors duration-300 rounded-full flex items-center justify-center mb-8 text-[hsl(var(--brand-blue))] shadow-sm">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Email Us</h3>
                    <div className="space-y-3 mb-8 flex-grow">
                      <a href="mailto:sales@aeronautics.mn" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-[hsl(var(--brand-blue))] font-medium transition-colors text-lg">
                        sales@aeronautics.mn <ExternalLink className="w-4 h-4 opacity-50" />
                      </a>
                      <a href="mailto:ground@aeronautics.mn" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-[hsl(var(--brand-blue))] font-medium transition-colors text-lg">
                        ground@aeronautics.mn <ExternalLink className="w-4 h-4 opacity-50" />
                      </a>
                    </div>
                    <a 
                      href="mailto:sales@aeronautics.mn" 
                      className="inline-flex items-center text-[hsl(var(--brand-blue))] font-bold hover:gap-3 gap-2 transition-all duration-300 mt-auto"
                    >
                      Send an Email <ArrowRight className="w-5 h-5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full card-premium border-border/40 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-blue))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-10 flex flex-col items-center relative z-10 h-full">
                    <div className="w-20 h-20 bg-muted group-hover:bg-[hsl(var(--brand-blue))]/10 transition-colors duration-300 rounded-full flex items-center justify-center mb-8 text-[hsl(var(--brand-blue))] shadow-sm">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Call Us</h3>
                    <div className="space-y-3 mb-8 flex-grow">
                      <a href="tel:+97688083066" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-[hsl(var(--brand-blue))] font-medium transition-colors text-lg">
                        +976 88083066
                      </a>
                    </div>
                    <a 
                      href="tel:+97688083066" 
                      className="inline-flex items-center text-[hsl(var(--brand-blue))] font-bold hover:gap-3 gap-2 transition-all duration-300 mt-auto"
                    >
                      Call Now <ArrowRight className="w-5 h-5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* WhatsApp */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full card-premium border-border/40 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-blue))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-10 flex flex-col items-center relative z-10 h-full">
                    <div className="w-20 h-20 bg-muted group-hover:bg-[hsl(var(--brand-blue))]/10 transition-colors duration-300 rounded-full flex items-center justify-center mb-8 text-[hsl(var(--brand-blue))] shadow-sm">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">WhatsApp</h3>
                    <div className="space-y-3 mb-8 flex-grow">
                      <a href="https://wa.me/97688083066" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-[hsl(var(--brand-blue))] font-medium transition-colors text-lg">
                        +976 88083066 <ExternalLink className="w-4 h-4 opacity-50" />
                      </a>
                    </div>
                    <a 
                      href="https://wa.me/97688083066" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[hsl(var(--brand-blue))] font-bold hover:gap-3 gap-2 transition-all duration-300 mt-auto"
                    >
                      Chat on WhatsApp <ArrowRight className="w-5 h-5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* FOLLOW US SECTION */}
        <section className="px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="card-premium border-border/40 bg-[hsl(var(--brand-blue))]/[0.02] border-[hsl(var(--brand-blue))]/10">
              <CardContent className="p-10 md:p-14 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--brand-blue))] mb-8">
                  Connect With Us Online
                </h2>
                
                <div className="flex items-center justify-center gap-6 sm:gap-8">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100082910873874" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
                  >
                    <Facebook className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-active:scale-95" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/aeronautics-llc" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
                  >
                    <Linkedin className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-active:scale-95" />
                  </a>
                  <a 
                    href="https://www.instagram.com/aeronautics.llc" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center text-foreground hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
                  >
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-active:scale-95" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

      </main>
    </>
  );
};

export default ContactPage;