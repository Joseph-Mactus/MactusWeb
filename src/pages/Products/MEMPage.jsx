import React, { useState, useEffect } from 'react';
import {FaSyringe,FaDna,FaMicroscope,FaFlask,FaHospital,} from "react-icons/fa";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';
import ZohoFormModal from '../../components/ZohoFormModal';

import img_1 from '../../assets/images/Complianceproducts/MPATS/mem_1.jpeg';
import img_2 from '../../assets/images/Complianceproducts/MPATS/mem_2.jpeg';
import img_3 from '../../assets/images/Complianceproducts/MPATS/mem_3.png';

import Brochure from '../../assets/Brochurs/MAPL_MEM_BrochureV11.pdf';

const SectionTitle = ({ children, eyebrow, isDark }) => (
  <div className="flex flex-col items-center w-full mb-12 mt-8">
    {eyebrow && (
      <span className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className={`text-center font-black text-3xl md:text-5xl tracking-tighter relative pb-4 inline-block ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-8 py-6 text-left flex justify-between items-center gap-4"
          >
            <span className="font-bold text-gray-900 text-lg">{item.question}</span>
            <span className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''} flex-shrink-0`}>
              <svg className="w-4 h-4 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-8 pb-6 text-gray-500 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
const MEMPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeStage, setActiveStage] = useState(1);

  const lifecycleStages = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
      ),
      name: "Issuance",
      detail: "Each plate receives a unique QR code label. Plate ID, media type, batch, and expiry are recorded. Operator identity captured at issuance."
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      ),
      name: "Exposure",
      detail: "Plate moved to cleanroom sampling location. QR scan links the plate to the exposure location, grade, operator, date, and exposure duration."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
      ),
      name: "Incubation",
      detail: "Plate placed in incubator. QR scan logs incubator ID, placement time. Temperature and duration auto-logged from incubator/EMS integration."
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      ),
      name: "Reading",
      detail: "CFU count entered through guided HMI, e-signed by the reading microbiologist. Automatic comparison against alert and action limits for that location and grade."
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      name: "Disposition",
      detail: "Plate disposed or archived. Final status locked. Batch-level reconciliation report auto-generated — all plates accounted for."
    }
  ];

  const features = [
    {
      title: "Lifecycle Automation",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
      items: [
        "Full plate lifecycle — issuance, usage, incubation, reading, disposition, reconciliation",
        "QR code on every plate, scanned at every handover point",
        "Supports air sampling (active and passive/settle), surface swabs, contact plates, personnel monitoring"
      ]
    },
    {
      title: "Compliance",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      items: [
        "21 CFR Part 11 compliant — electronic signatures, audit trails, role-based access",
        "Aligned with USFDA, MHRA, EU GMP Annex 1, and WHO-GMP EM expectations",
        "Fully customisable workflow to enforce site-specific EM SOPs"
      ]
    },
    {
      title: "Reconciliation",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
      items: [
        "Real-time reconciliation between plates issued, used, and discarded — no spreadsheet rebuilds",
        "Missing-plate alerts at every stage transition",
        "Batch-level reconciliation reports ready at batch release, not weeks later"
      ]
    },
    {
      title: "Reading & Trending",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>,
      items: [
        "CFU counts entered through guided HMI, e-signed by reading microbiologist",
        "Automatic comparison against alert and action limits, by location and grade",
        "Built-in dashboards for trending by room, grade, date, operator — ready for APR/PQR"
      ]
    },
    {
      title: "Integration",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
      items: [
        "Connects to incubator monitoring / EMS for auto-logged incubation parameters",
        "Pushes events to LIMS, MES, and BMS via standard interfaces",
        "Bi-directional integration with batch records — EM data flows into the BMR"
      ]
    }
  ];

  const builtFor = [
  {
    label: "Sterile Injectable Manufacturing",
    subtitle: "Grade A/B/C/D",
    icon: <FaSyringe />,
  },
  {
    label: "Biologics, Vaccines & Cell Therapy",
    subtitle: "Stringent EM requirements",
    icon: <FaDna />,
  },
  {
    label: "QC Microbiology Labs",
    subtitle: "High throughput reading",
    icon: <FaMicroscope />,
  },
  {
    label: "Aseptic Process Simulation (APS)",
    subtitle: "Media Fills",
    icon: <FaFlask />,
  },
  {
    label: "Compounding Pharmacies",
    subtitle: "USP <797> / <800>",
    icon: <FaHospital />,
  },
];
  const outcomes = [
    { stat: "100%", label: "Plate Reconciliation", detail: "Missing-plate investigations eliminated." },
    { stat: "↓ Admin time", label: "Administrative Efficiency", detail: "Significant reduction in QC admin time per batch." },
    { stat: "Seconds", label: "Audit Data Retrieval", detail: "Data retrieval reduced from hours to seconds." },
    { stat: "ALCOA+", label: "Full Data Integrity", detail: "Complete ALCOA+ audit trail for every single plate." }
  ];

  const faqs = [
    {
      question: "What is MPATS (Media Plate Tracking and  Management System)?",
      answer: "MPATS is a digital system that manages the complete lifecycle of media plates used in pharmaceutical Media Plate Tracking and  Management System — from issuance through exposure, incubation, reading, and disposition. Each plate carries a QR code that is scanned at every handover, binding the plate to the operator, location, batch, and incubator. The result is end-to-end traceability, automatic reconciliation, and 21 CFR Part 11 compliant electronic records of every event in the plate's life."
    },
    {
      question: "What types of environmental monitoring does MPATS support?",
      answer: "MPATS supports the full range of environmental monitoring sampling methods used in pharmaceutical and biotech facilities: active air sampling, passive air sampling (settle plates), surface swabs, contact plates, and personnel monitoring (gowning checks and finger dab plates). Each sampling type can be configured with its own SOP workflow, location library, and alert/action limit set."
    },
    {
      question: "How does QR-code tracking actually work on a media plate?",
      answer: "Each plate is labelled with a unique QR code at the issuance step in MPATS. From that moment on, every interaction with the plate — moving to the cleanroom for exposure, returning to the lab, placing in an incubator, reading the result, disposing — is captured by scanning the QR code at the relevant station. The scan binds the event to the operator who scanned it, the time, and the location. The plate's full history is reconstructable from its QR code alone."
    },
    {
      question: "Does MPATS replace our existing QC microbiology LIMS?",
      answer: "No. MPATS is designed to complement existing LIMS, not replace them. MPATS handles the operational tracking and lifecycle management of plates — the layer that LIMS typically does not do well. Final analytical results from MPATS can be pushed to LIMS via integration. Most customers run MPATS alongside their existing LIMS without disruption."
    },
    {
      question: "How does MPATS align with EU GMP Annex 1 expectations for environmental monitoring?",
      answer: "EU GMP Annex 1 (2022 revision) increased expectations for environmental monitoring rigour — particularly around continuous monitoring, contamination control strategy, and data integrity. MPATS supports these expectations directly: every sample is tied to a specific location and grade, every result is e-signed and trended, alert/action limit breaches trigger documented review workflows, and the full audit trail is ALCOA+ aligned."
    },
    
    {
      question: "Does MPATS integrate with our incubators and EMS?",
      answer: "Yes. MPATS integrates with environmental monitoring systems (EMS) and incubator monitoring to automatically log incubation parameters — temperature, duration, incubator ID — without manual operator entry. This eliminates a common source of data integrity findings and ensures incubation parameters are tamper-proof."
    },
    {
      question: "How long does MPATS deployment take?",
      answer: "Standard MPATS deployment for a single site is 10 to 14 weeks end-to-end — including URS finalisation, SOP digitisation, location and limit library configuration, QR labelling setup, integration with incubators / EMS / LIMS, validation testing (IQ, OQ, PQ), training of QC microbiology and operators, and go-live support. Multi-site rollouts are scoped separately."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mactus.in/" },
      { "@type": "ListItem", "position": 2, "name": "MPATS (Environmental Monitoring)", "item": "https://mactus.in/products/MPATS" }
    ]
  };

  useEffect(() => {
    document.title = "MPATS Environmental Monitoring Software for Pharma | 21 CFR Part 11 | Mactus Automation";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'MPATS is a pharmaceutical environmental monitoring software platform for tracking settle plates, active air, surface, and personnel monitoring with QR-code traceability, electronic signatures, automated reconciliation, and 21 CFR Part 11 compliance.');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        @keyframes reveal-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes line-extend {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes text-reveal-right {
          0% { opacity: 0; transform: translateX(-15px); }
          100% { opacity: 1; transform: translateX(0); }
        }
          .animate-line-extend {
          transform-origin: left;
          animation: line-extend 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-text-reveal-right {
          opacity: 0;
          animation: text-reveal-right 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-reveal-up {
          animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #e0006e 0%, #ff4b9f 50%, #e0006e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* SECTION 1 — HERO */}
      <section className="relative bg-[#25252B] pt-10 pb-10 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div className="space-y-8 animate-fade-in-left">
            <div className="w-full mb-12 max-w-[760px]">
              <div className="flex items-center gap-6 md:gap-8 lg:gap-6">

                {/* Left Magenta Line */}
                <span className="block w-6 md:w-13 h-[2px] bg-[#e0006e] flex-shrink-0 animate-line-extend"></span>

                {/* Product Name */}
                <h2 className="text-white font-extrabold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] leading-relaxed whitespace-nowrap animate-text-reveal-right">
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">M</span>edia{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">P</span>lates{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">T</span>racking and{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">M</span>anagement{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">S</span>ystem
                </h2>

              </div>
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter flex flex-wrap gap-x-[0.3em]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>Every environmental</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>monitoring sample fully traceable from</span>
                <span className="animate-reveal-up pr-1 shimmer-text text-[#e0006e]" style={{ animationDelay: '0.3s' }}>issuance to disposal.</span>

              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[550px] font-medium opacity-80">
              MPATS digitizes the complete lifecycle of environmental monitoring media plates — issuance, exposure, incubation, reading, reconciliation, and disposal — with QR-code traceability, electronic signatures, and audit-ready records.
            </p>

            <div className="flex flex-row items-center gap-4 pt-4 flex-wrap sm:flex-nowrap">
              <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-[#e0006e] hover:bg-[#ff1a8c] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[11px] flex items-center gap-2 whitespace-nowrap">
                Request a Demo &rarr;
              </button>
              <a href={Brochure} className="px-7 py-4 bg-white/5 text-white font-extrabold rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#e0006e]/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Download Brochure
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-right mt-16  animate-float lg:justify-self-end w-full lg:w-[110%] max-w-xl mx-auto lg:mx-0">
            <ImageCarousel images={[img_3, img_1, img_2]} />

            {/* Installed Base — Premium Stats Strip */}
            <div className="w-full mt-4 relative rounded-2xl overflow-hidden border border-white/10 bg-[#161622]/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              {/* Soft glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#e0006e]/20 rounded-full blur-3xl"></div>
              </div>
              {/* Header bar */}
              <div className="relative flex items-center justify-between px-5 py-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0006e] shadow-[0_0_8px_rgba(224,0,110,0.9)]"></span>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#e0006e] font-black">Installed Base</p>
                </div>
                <span className="hidden sm:inline-flex text-[9px] uppercase tracking-widest text-gray-400 font-bold">Validated</span>
              </div>
              {/* Stats row */}
              <div className="relative grid grid-cols-3 gap-2 px-2 py-2">
                {[
                  { value: "25+", label: "Units Deployed", icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  )},
                  { value: "100%", label: "GMP Compliant", icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  )},
                  { value: "Annex 1", label: "EU GMP Aligned", icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  )},
                ].map(({ value, label, icon }, i) => (
                  <div key={i} className="group relative flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl border border-white/[0.07] bg-white/[0.035] hover:bg-white/[0.06] hover:border-[#e0006e]/30 transition-all duration-200">
                    <span className="text-[#e0006e]/70 group-hover:text-[#e0006e] transition-colors duration-200">{icon}</span>
                    <span className="text-white text-xl font-black leading-none drop-shadow-[0_0_12px_rgba(224,0,110,0.35)]">{value}</span>
                    <span className="text-gray-500 text-[9px] uppercase tracking-widest font-bold text-center leading-tight group-hover:text-gray-400 transition-colors duration-200">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM WE SOLVE */}
      <section className="py-14 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="WHY MPATS">Lose one plate, lose the audit.</SectionTitle>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-900 text-xl font-bold leading-relaxed mb-6">
              A single unreconciled EM plate can delay batch release and trigger major inspection observations. <span className="text-[#e0006e]">MPATS makes the reconciliation problem disappear.</span>
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-8 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">The Risk</th>
                  <th className="px-8 py-6 text-gray-400 font-black text-lg tracking-widest uppercase">Spreadsheet / Paper</th>
                  <th className="px-8 py-6 text-[#e0006e] font-black text-lg tracking-widest uppercase bg-[#e0006e]/5">MPATS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Missing plate at reconciliation", "Found days later (or not)", "QR-scan visibility, every step"],
                  ["Tracking parameters", "Recorded manually, often after", "Auto-logged from EMS / incubator"],
                  ["CFU count attribution", "Logbook entry, anonymous", "E-signed by reading microbiologist"],
                  ["Trend analysis for APR/PQR", "Spreadsheet rebuild every cycle", "Live dashboards, one-click export"],
                  ["Audit pull", "Half a day of paperwork", "30 seconds, filtered any way you need"]
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900">{row[0]}</td>
                    <td className="px-8 py-6 text-gray-500">{row[1]}</td>
                    <td className="px-8 py-6 font-bold text-[#e0006e] bg-[#e0006e]/5 group-hover:bg-[#e0006e]/10 transition-colors">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT MPATS IS */}
      <section className="py-10 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <SectionTitle eyebrow="THE SOLUTION">What MPATS Is</SectionTitle>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
            <p>
              MPATS is a digital solution that manages the complete lifecycle of every media plate used in environmental monitoring. Each plate is assigned a QR code at issuance and scanned at every stage — exposure, incubation, reading, and disposition.
            </p>
            <p>
              Every scan is linked to the operator, location, batch, incubator, and microbiologist. By batch release, reconciliation is already complete. MPATS transforms environmental monitoring from manual tracking to provable compliance.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MEDIA PLATE LIFECYCLE (Interactive Flow) */}
      <section className="py-12 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="THE WORKFLOW">The Media Plate Lifecycle, End to End</SectionTitle>
          <p className="text-center italic text-gray-500 mb-16 text-xl -mt-6">"Five stages. One QR code. Zero unaccounted-for plates."</p>

          {/* Stepper Container */}
          <div className="relative mb-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[72px] left-12 right-12 h-1 bg-gray-100 rounded-full z-0">
              <div
                className="h-full bg-[#e0006e] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${((activeStage - 1) / (lifecycleStages.length - 1)) * 100}%` }}
              ></div>
            </div>

            {/* Stepper Scroll Container */}
            <div className="flex md:grid md:grid-cols-5 gap-4 md:gap-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 pt-6 md:pb-6 md:pt-6 relative z-10 -mx-6 px-6 md:mx-0 md:px-0">
              {lifecycleStages.map((stage) => {
                const isActive = activeStage === stage.id;
                const isPast = activeStage > stage.id;
                return (
                  <div
                    key={stage.id}
                    className="flex-shrink-0 w-[260px] md:w-auto snap-center flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveStage(stage.id)}
                  >
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 relative bg-white
                      ${isActive ? 'border-4 border-[#e0006e] text-[#e0006e] shadow-[0_0_30px_rgba(224,0,110,0.2)] scale-110' :
                        isPast ? 'border-2 border-[#e0006e]/50 text-[#e0006e]/50 bg-gray-50' :
                          'border-2 border-gray-100 text-gray-400 group-hover:border-[#e0006e]/30 group-hover:text-[#e0006e]'}`}
                    >
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-xs border-4 border-white">
                        {stage.id}
                      </div>
                      {stage.icon}
                    </div>
                    <h3 className={`mt-6 font-black text-lg transition-colors duration-300 ${isActive ? 'text-[#e0006e]' : 'text-gray-900'}`}>
                      {stage.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail Panel + Video — Side by Side */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            {/* Active Detail Panel */}
            <div className="lg:w-1/2 bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-inner relative overflow-hidden min-h-[300px] flex items-center justify-center text-center">
              {lifecycleStages.map((stage) => (
                <div
                  key={stage.id}
                  className={`absolute inset-0 p-8 md:p-12 flex items-center justify-center transition-all duration-500 ease-in-out
                    ${activeStage === stage.id ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}
                >
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Video */}
            <div className="lg:w-1/2 bg-white rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 transition-transform duration-700 hover:scale-[1.02] flex flex-col">
              <div className="flex items-center justify-end px-4 py-2 bg-gray-50/50 rounded-t-xl border-b border-gray-100/50">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[8px] font-black tracking-[0.2em] text-gray-400 uppercase">System Active</span>
                </div>
              </div>
              <div className="relative aspect-video w-full rounded-b-xl overflow-hidden bg-white">
                <iframe
                  className="w-[101%] h-[101%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-b-xl scale-[1.02]"
                  src="https://www.youtube.com/embed/uQPwGbxaTB4?rel=0&modestbranding=1&controls=1"
                  title="MPATS System Workflow"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — KEY FEATURES */}
      <section className="py-10 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="CAPABILITIES">Key Features</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#e0006e]/30 transition-colors shadow-sm ${idx === features.length - 1 ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''}`}>
                <div className="w-14 h-14 bg-[#e0006e]/10 text-[#e0006e] rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-6">{feature.title}</h3>
                <ul className="space-y-4">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <div className="mt-1 text-[#e0006e] flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUILT FOR */}
      <section className="py-4 px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="TARGET ENVIRONMENTS">Built For</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {builtFor.map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-[#e0006e]/30 hover:shadow-lg transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 text-[#e0006e] h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-2xl group-hover:border-[#e0006e]/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 group-hover:text-[#e0006e] transition-colors">{item.label}</h4>
                  <p className="text-gray-500 text-sm font-medium">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — OUTCOMES */}
      <section className="py-24 px-6 bg-[#25252B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tighter uppercase">What Customers See After MPATS Goes Live</h2>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Reported outcomes from Mactus customers running MPATS in production EM programmes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="text-center space-y-4 pt-8 md:pt-0 px-6 group flex flex-col justify-center">
                <p className="text-[#e0006e] font-black text-5xl tracking-tighter transition-transform duration-300 group-hover:scale-105">{outcome.stat}</p>
                <div>
                  <h4 className="text-white font-black text-lg mb-2 uppercase tracking-wide">{outcome.label}</h4>
                  <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-[200px] mx-auto">{outcome.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="py-24 px-6 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center w-full mb-6 mt-8">
            <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl tracking-tight relative pb-3 inline-block">
              Frequently Asked Questions
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION 9 — PRE-FOOTER CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                If one plate is missing, the audit isn't ready. <span className="text-[#e0006e]">MPATS makes sure that doesn't happen.</span>
              </h2>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl flex items-center gap-3 whitespace-nowrap">
              Request a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && <ZohoFormModal onClose={() => setIsModalOpen(false)} title="Request Demo" />}
      <Footer />
    </div>
  );
};

export default MEMPage;
