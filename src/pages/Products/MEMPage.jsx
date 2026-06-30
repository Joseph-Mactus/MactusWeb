import React, { useState, useEffect } from 'react';
import { FaSyringe, FaDna, FaMicroscope, FaFlask, FaHospital, } from "react-icons/fa";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';
import ZohoFormModal from '../../components/ZohoFormModal';

import img_1 from '../../assets/images/Complianceproducts/MPATS/mem_1.jpeg';
import img_2 from '../../assets/images/Complianceproducts/MPATS/mem_2.jpeg';
import img_3 from '../../assets/images/Complianceproducts/MPATS/mem_3.png';

import Brochure from '../../assets/Brochurs/MAPL_MEM_BrochureV11.pdf';

const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-5 mt-2">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight relative pb-3 inline-block">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
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
      name: "inventory",
      detail: "Each plate receives a unique QR code label. Plate ID, media type, batch, and expiry are recorded. Operator identity captured at inventory."
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
      detail: "CFU count entered through software, e-signed by the reading microbiologist. Automatic comparison against alert and action limits for that location and grade."
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      name: "destruction",
      detail: "Plate disposed or archived. Final status locked. Batch-level reconciliation report auto-generated — all plates accounted for."
    }
  ];
const features = [
  {
    title: "QR Plate Identity",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
    desc: "Every media plate is assigned a unique QR identity for complete tracking from inventory to final disposition."
  },
  {
    title: "Lifecycle Traceability",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    desc: "Track each plate across inventory, exposure, incubation, reading, reconciliation, and disposal."
  },
  {
    title: "Smart Reconciliation",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    desc: "Automatically reconcile issued, exposed, incubated, read, and discarded plates with missing-plate alerts."
  },
  {
    title: "Guided CFU Reading",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>,
    desc: "Capture CFU results through guided entry with microbiologist-linked review and electronic signature."
  },
  {
    title: "EM Trend Intelligence",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3v18m4-14v14m4-10v10M7 13v8M3 17v4" /></svg>,
    desc: "View location-wise, batch-wise, and grade-wise EM trends for faster investigation, APR, and PQR review."
  },
  {
    title: "Audit-Ready Compliance",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    desc: "Generate filtered audit reports with plate history, timestamps, user actions, e-signatures, and traceability."
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
      answer: "MPATS is a digital system that manages the complete lifecycle of media plates used in pharmaceutical Media Plate Tracking and  Management System — from inventory through exposure, incubation, reading, and destruction. Each plate carries a QR code that is scanned at every handover, binding the plate to the operator, location, batch, and incubator. The result is end-to-end traceability, automatic reconciliation, and 21 CFR Part 11 compliant electronic records of every event in the plate's life."
    },
    {
      question: "What types of environmental monitoring does MPATS support?",
      answer: "MPATS supports the full range of environmental monitoring sampling methods used in pharmaceutical and biotech facilities: active air sampling, passive air sampling (settle plates), surface swabs, contact plates, and personnel monitoring (gowning checks and finger dab plates). Each sampling type can be configured with its own SOP workflow, location library, and alert/action limit set."
    },
    {
      question: "How does QR-code tracking actually work on a media plate?",
      answer: "Each plate is labelled with a unique QR code at the inventory step in MPATS. From that moment on, every interaction with the plate — moving to the cleanroom for exposure, returning to the lab, placing in an incubator, reading the result, disposing — is captured by scanning the QR code at the relevant station. The scan binds the event to the operator who scanned it, the time, and the location. The plate's full history is reconstructable from its QR code alone."
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 w-full">
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
                <span className="animate-reveal-up pr-1 shimmer-text text-[#e0006e]" style={{ animationDelay: '0.3s' }}>inventory to destruction.</span>

              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[550px] font-medium opacity-80">
              MPATS digitizes the complete lifecycle of environmental monitoring media plates — inventory, exposure, incubation, reading, reconciliation, and destruction — with QR-code traceability, electronic signatures, and audit-ready records.
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

            {/* Install Base — Premium Stats Strip */}
            <div className="w-full mt-4 relative rounded-2xl overflow-hidden border border-white/10 bg-[#161622]/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              {/* Soft glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#e0006e]/20 rounded-full blur-3xl"></div>
              </div>
              {/* Header bar */}
              <div className="relative flex items-center justify-between px-5 py-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e0006e] shadow-[0_0_8px_rgba(224,0,110,0.9)]"></span>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#e0006e] font-black">Install Base</p>
                </div>
                <span className="hidden sm:inline-flex text-[9px] uppercase tracking-widest text-gray-400 font-bold">Validated</span>
              </div>
              {/* Stats row */}
              <div className="relative grid grid-cols-3 gap-2 px-2 py-2">
                {[
                  {
                    value: "Pilot",label: "Trials in Progress", icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    )
                  },
                 {
                      value: "EU GMP Annex1 ",
                      label: "Aligned",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ),
                    },
                    {
                      value: "21 CFR Part 11",
                      label: "Compliance",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      ),
                    },
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
      <section className="py-12 px-6 bg-white border-b border-gray-100">
                <p className="text-center text-[#e0006e] font-bold tracking-widest uppercase  ">Why MPATS</p>

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
                {
                  [
                    ["Sampling point mismatch", "Manual location entry", "QR-linked sampling location"],
                    ["Plate exposure timing gap", "Manual time recording", "Auto time-stamped exposure"],
                    ["Sampling schedule miss", "Checklist dependency", "Digital sampling workflow"],
                    ["Location traceability gap", "Manual area selection", "Area-wise QR traceability"],
                    ["Excursion investigation delay", "Paper-based review", "Instant deviation evidence"],
                    ["Sample reconciliation gap", "Manual plate count check", "Digital reconciliation control"]
                  ]
                    .map((row, i) => (
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
      <section className="py-14 md:py-16 px-6 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>What MPATS is</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                From plate inventory to final destruction, MPATS gives every media plate a complete digital identity by assigning a unique QR code and capturing each critical movement across the environmental monitoring process.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every exposure, incubation, reading, and reconciliation step is digitally linked to the operator, sampling location, batch, and microbiology review, helping pharma teams maintain reliable EM traceability and audit-ready compliance.
              </p>
            </div>

            <div className="bg-[#0a0a1a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e0006e]/20 rounded-full blur-[3rem] group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <svg className="w-12 h-12 text-[#e0006e]/30 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 8.44772 1.44772 8 2 8H5C6.10457 8 7 7.10457 7 6V5C7 3.89543 6.10457 3 5 3H0C-1.10457 3 -2 3.89543 -2 5V15C-2 18.866 1.13401 22 5 22H7V21L7 18C7 16.8954 6.10457 16 5 16H2C1.44772 16 1 15.5523 1 15Z" /></svg>
              <p className="text-white font-medium text-2xl md:text-3xl leading-snug tracking-tight italic relative z-10">
                "MPATS is the difference between 'the plate was recorded somewhere' and 'the system traced every plate, every handover, and every result.'"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MEDIA PLATE LIFECYCLE (Interactive Flow) */}
      <section className="py-12 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="THE WORKFLOW">The Media Plate Lifecycle, End to End</SectionTitle>
          <p className="text-center italic text-gray-500 mb-10 text-xl -mt-6">"Five stages. One QR code. Zero unaccounted-for plates."</p>

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
      <section className="py-7 md:py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Key Features</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className={`bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group relative overflow-hidden ${idx === features.length - 1 && features.length % 2 !== 0 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[#e0006e] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 ease-out"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-[#e0006e] transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e] text-[#e0006e] group-hover:text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-[#e0006e] transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUILT FOR */}
      <section className="py-7 md:py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Built For</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {builtFor.map((item, idx) => (
              <div key={idx} className="bg-[#fafafa] border text-[#e0006e] border-gray-100 p-8 rounded-3xl hover:border-[#e0006e]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#e0006e] group-hover:text-[#e0006e] group-hover:border-[#e0006e]/30 transition-colors">
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
      <section className="py-6 md:py-7 px-6 bg-white">
        <SectionTitle>Outcomes</SectionTitle>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "media plate tracking", value: "100%", sub: "Complete Traceability" },
              { label: "manual log entries", value: "Zero", sub: "Automated System" },
              { label: "audit preparation", value: "Instant", sub: "One-Click Export" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-4 p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500">
                <p className="text-[#e0006e] font-black text-6xl tracking-tighter">{stat.value}</p>
                <div className="space-y-1">
                  <p className="text-gray-900 font-black text-xs tracking-widest uppercase">{stat.label}</p>
                  <p className="text-gray-400 text-[10px] font-bold tracking-[0.2em] uppercase">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="py-14 md:py-16 px-6 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center w-full mb-5 mt-2">
            <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl tracking-tight relative pb-3 inline-block">
              Frequently Asked Questions
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION 9 — PRE-FOOTER CTA */}
      <section className="py-12 md:py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-12 px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
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
