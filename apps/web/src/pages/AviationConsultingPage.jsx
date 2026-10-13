import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ClipboardCheck,
  ShieldCheck,
  FileSearch,
  Users,
  Briefcase,
  AlertTriangle
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const sectionLinks = [
  { label: 'Aviation Consulting', href: '#consulting' },
  { label: 'Technical Asset Management', href: '#asset-management' },
  { label: 'Audit & Assurance', href: '#audit-assurance' },
];

const auditServices = [
  {
    icon: <ClipboardCheck className="w-6 h-6 text-[hsl(var(--audit-blue))]" />,
    title: "Aviation Quality & Safety Management System Audits",
    desc: "Comprehensive evaluations covering Safety Management Systems (SMS), Quality Assurance (QA), and Continuing Airworthiness Management Organization (CAMO) processes to ensure international standard compliance.",
    colorClass: "border-l-[hsl(var(--audit-blue))] bg-card",
    iconBg: "bg-[hsl(var(--audit-blue))]/10"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[hsl(var(--audit-teal))]" />,
    title: "Regulatory Compliance & Certification Audits",
    desc: "Rigorous assessments to verify readiness and maintain continuous compliance for Air Operator Certificate (AOC), Approved Maintenance Organization (AMO), and Approved Training Organization (ATO) requirements.",
    colorClass: "border-l-[hsl(var(--audit-teal))] bg-card",
    iconBg: "bg-[hsl(var(--audit-teal))]/10"
  },
  {
    icon: <FileSearch className="w-6 h-6 text-[hsl(var(--audit-purple))]" />,
    title: "Aircraft & Technical Records Assurance",
    desc: "Detailed, independent reviews of aircraft technical logs, historical maintenance records, and AD/SB compliance to protect asset value and ensure continuous airworthiness.",
    colorClass: "border-l-[hsl(var(--audit-purple))] bg-card",
    iconBg: "bg-[hsl(var(--audit-purple))]/10"
  },
  {
    icon: <Users className="w-6 h-6 text-[hsl(var(--audit-green))]" />,
    title: "Internal & Supplier Audits",
    desc: "Objective assessments of internal departments and third-party vendors, verifying operational integrity, service level agreement compliance, and supply chain reliability.",
    colorClass: "border-l-[hsl(var(--audit-green))] bg-card",
    iconBg: "bg-[hsl(var(--audit-green))]/10"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[hsl(var(--audit-navy))]" />,
    title: "Due Diligence & Transaction Assurance",
    desc: "In-depth operational and technical evaluations to support informed decision-making during aircraft acquisitions, leasing transitions, and significant financial transactions.",
    colorClass: "border-l-[hsl(var(--audit-navy))] bg-card",
    iconBg: "bg-[hsl(var(--audit-navy))]/10"
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))]" />,
    title: "Risk & Control Assessments",
    desc: "Strategic identification of operational and compliance risks, combined with the rigorous evaluation of your existing control mechanisms and mitigation strategies.",
    colorClass: "border-l-[hsl(var(--accent))] bg-card",
    iconBg: "bg-accent/10"
  }
];

const whyChooseReasons = [
  {
    title: "Domain Expertise",
    desc: "Deep aviation domain knowledge combined with independent, unbiased perspective.",
    color: "text-[hsl(var(--brand-blue))]",
    bg: "bg-[hsl(var(--brand-blue))]/10"
  },
  {
    title: "Regulatory Mastery",
    desc: "Experienced team familiar with Mongolian and international regulations.",
    color: "text-[hsl(var(--brand-teal))]",
    bg: "bg-[hsl(var(--brand-teal))]/10"
  },
  {
    title: "Value-Driven Approach",
    desc: "Focus on practical, value-adding findings rather than just checklists.",
    color: "text-[hsl(var(--brand-orange))]",
    bg: "bg-[hsl(var(--brand-orange))]/10"
  },
  {
    title: "Comprehensive Support",
    desc: "Support for both routine assurance and complex, high-stakes audits.",
    color: "text-[hsl(var(--audit-navy))]",
    bg: "bg-[hsl(var(--audit-navy))]/10"
  }
];

const NumberBadge = ({ children }) => (
  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm shrink-0">{children}</span>
);

const AviationConsultingPage = () => {
  const location = useLocation();

  // Support deep links such as /services/aviation-consulting#audit-assurance
  useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Aviation Consulting | Aeronautics LLC</title>
        <meta name="description" content="Professional aviation consulting, technical asset management, and audit & assurance services, including regulatory compliance, certification support, SMS, QA, and CAMO audits." />
      </Helmet>

      <main className="bg-background min-h-screen">
        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
          <div className="absolute inset-0 z-0">
            <img
              src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/70bdd990698593c3be80349e546ba6bf.jpg"
              alt="Aviation professionals discussing strategies near an aircraft inside a hangar"
              className="w-full h-full object-cover object-center"
            />
            <div className="hero-overlay-dark"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-shadow-hero">
                Aviation Consulting
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium text-shadow-hero">
              Strategic guidance, technical asset management, and independent audit & assurance for operators and infrastructure developers in Mongolia. We provide rigorous regulatory compliance and structural efficiency insights.
            </p>

            <nav aria-label="Page sections" className="mt-10 flex flex-wrap justify-center gap-3">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* CONSULTING & ASSET MANAGEMENT SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center heading-underline-center">Comprehensive Expertise</h2>
              <div className="text-muted-foreground leading-relaxed mb-10 space-y-6 text-center text-lg">
                <p>Our experienced team of aeronautical engineers, pilots, aerodrome engineers, dispatchers, inspectors, certified auditors, and airline managers provides high-quality consulting services to clients in the aviation industry. We divide our offerings into three main areas:</p>

                <div id="consulting" className="bg-card border border-border rounded-2xl p-8 shadow-sm text-left scroll-mt-24">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <NumberBadge>1</NumberBadge>
                    Aviation Consulting
                  </h3>
                  <p className="mb-4">We offer strategic advisory, project implementation, and regulatory compliance support to help launch and operate aviation businesses successfully.</p>
                  <ul className="space-y-3">
                    {[
                      "Turn-key / AOC (Air Operator Certificate), AMO (Aircraft Maintenance Organization), ATO (Aviation Training Organization) start-ups – Full project support from planning to certification",
                      "MOE (Maintenance Organisation Exposition), SOP (Standard Operating Procedures) development, manual review, and project management",
                      "Aerodrome Management and Planning: Master planning, feasibility studies, operating manuals, airstrip/helipad selection, construction, and operational management",
                      "Due diligence, market analysis, fleet expansion advisory",
                      "SMS (Safety Management System), QA (Quality Assurance), CAMO (Continuing Airworthiness Management) system establishment and development"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="asset-management" className="bg-card border border-border rounded-2xl p-8 shadow-sm text-left scroll-mt-24">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <NumberBadge>2</NumberBadge>
                    Aircraft Technical Asset Management
                  </h3>
                  <p className="mb-4">We help preserve and enhance the value and marketability of aircraft assets for lessors, operators, and investors through precise technical inspections and documentation management.</p>
                  <ul className="space-y-3">
                    {[
                      "Aircraft Transition Management: Ensure the aircraft and technical records fully comply with lease return and delivery conditions",
                      "Aircraft Pre/Redelivery & Mid-term Inspections: Physical inspections and records review to verify compliance with lease terms",
                      "Aircraft Pre-purchase Inspections: Detailed assessments and reports on current and historical maintenance/technical status",
                      "Aircraft Tear-down / Part-out Management: Complete support including planning, vendor selection, component removal, documentation build-up, shop visit management, import/export, sales, and administrative assistance",
                      "Long-term Storage / Parking: Aircraft and engine storage in accordance with manufacturer requirements and environmental conditions",
                      "Major Maintenance Event Planning and Representation: Planning, review, monitoring, and representation for major checks, shop visits, AOG recovery, etc."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center">
                From initial market entry strategic planning to ongoing operational efficiency assessments, our consultants act as an extension of your team. We work closely with the Civil Aviation Authority of Mongolia (MCAA) and other relevant bodies to streamline your operational approvals.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Focus Areas</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Regulatory Compliance & Approvals",
                  "Certification Support (AOC, AMO)",
                  "Strategic Route Planning",
                  "Market Entry Feasibility",
                  "Infrastructure Advisory",
                  "Efficiency Optimization"
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-card p-6 rounded-xl border border-border text-center shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4 shrink-0" />
                    <span className="font-bold text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AUDIT & ASSURANCE SECTION */}
        <section id="audit-assurance" className="py-16 md:py-24 bg-[hsl(var(--audit-light-blue))] border-y border-border scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5 text-center lg:text-left"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center justify-center lg:justify-start gap-3">
                  <NumberBadge>3</NumberBadge>
                  Audit & Assurance
                </h2>
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  Comprehensive compliance and quality assurance solutions, tailored to the complex regulatory and operational demands of the modern aviation industry.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Leveraging our team of experienced aeronautical engineers and certified auditors, we provide independent, unbiased evaluations. Our meticulous approach uncovers vulnerabilities, ensures strict compliance, and drives continuous improvement across your organization.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full"
              >
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                  <img
                    src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/59858bd63a82b494a35e621f2b1c9f58.jpg"
                    alt="Aircraft on runway at sunset with golden sky"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Audit Services</h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {auditServices.map((service, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className={`h-full border-y-0 border-r-0 border-l-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group ${service.colorClass}`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${service.iconBg}`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl leading-snug text-foreground">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-underline-center">
                Why Choose Aeronautics?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
              {whyChooseReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-4 sm:p-5 card-premium border border-border/50 flex flex-col items-center text-center gap-3 group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${reason.bg} ${reason.color}`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-snug">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 md:p-8 bg-muted rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <p className="font-medium text-foreground text-lg">
                Our team is ready to protect your aircraft asset value and reduce risks. For more details or to start a project, please contact us!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-sm shrink-0"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AviationConsultingPage;
