import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ZohoFormModal from '../../components/ZohoFormModal';
import ImageCarousel from '../../components/ImageCarousel';
import ivblt_1 from '../../assets/images/ivblt_1.png';
import ivblt_2 from '../../assets/images/ivblt_2.png';
import ivblt_3 from '../../assets/images/ivblt_3.png';
import {FaSyringe,FaPills,FaDna,FaHospital,FaGlobe,FaMicroscope,} from "react-icons/fa";

// ─── Section Title ────────────────────────────────────────────────────────────

const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-5 mt-2">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight relative pb-3 inline-block">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

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
const steps = [
  {
    id: 1,
    title: "LOAD",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    detail: "IV bag is placed in the IVBLT chamber. The system reads the bag size configuration and sets the appropriate test pressure automatically.",
  },
  {
    id: 2,
    title: "PRESSURISE",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    detail: "Controlled pressure is applied to the bag. The system monitors pressure stability over the configured test duration — any pressure drop indicates a leak.",
  },
  {
    id: 3,
    title: "DETECT & CLASSIFY",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    detail: "Bags that maintain pressure within specification: PASS. Bags that show pressure drop beyond threshold: FAIL — automatically flagged and segregated. No operator judgement involved.",
  },
  {
    id: 4,
    title: "RECORD",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    detail: "Test result — bag ID, size, pressure profile, result, operator, timestamp — written to the electronic audit trail. Batch reconciliation updated automatically.",
  },
];

const features = [
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    title: "High-Sensitivity Leak Detection",
    desc: "Detects pinholes and sealing defects invisible to visual inspection with pressure-based detection configurable to your product specification for non-destructive testing.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Smart Control & Audit Trail",
    desc: "21 CFR Part 11 compliant electronic records for every test event with automatic logging of bag ID, pressure, result, and operator for tamper-proof audit trail exportable for batch records.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Size-Adjusted Pressure Testing",
    desc: "Pressure automatically adjusted per bag size to eliminate manual pressure setting errors and ensure consistent test conditions across every shift and operator.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    title: "Bag Status Reconciliation",
    desc: "Real-time reconciliation of tested, passed, failed, and quarantined counts per batch eliminates manual count discrepancies with reconciliation reports available for QA review.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    title: "Minimal Manpower Requirement",
    desc: "Automated load, test, and classify cycle reduces operator intervention allowing one operator to manage multiple units simultaneously and reduce shift labour costs on high-volume LVP lines.",
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Regulatory Compliance",
    desc: "cGMP and GDP guideline compliant with validation pack delivered for every install, supporting 100% testing requirement for sterile LVP products with audit-ready records for regulatory inspections.",
  },
];


const builtFor = [
  {
    icon: <FaSyringe />,
    label: "Large Volume Parenterals (LVP)",
    subtitle: "500 mL, 1000 mL IV bags",
  },
  {
    icon: <FaPills />,
    label: "Small Volume Parenterals (SVP)",
    subtitle: "50 mL, 100 mL, 250 mL bags",
  },
  {
    icon: <FaDna />,
    label: "Biologics & Biosimilars",
    subtitle: "IV formulation integrity testing",
  },
  {
    icon: <FaHospital />,
    label: "Hospital Pharmacy Compounding",
    subtitle: "USP <797> compliant facilities",
  },
  {
    icon: <FaGlobe />,
    label: "Contract Manufacturing Organisations",
    subtitle: "Multi-product LVP lines",
  },
  {
    icon: <FaMicroscope />,
    label: "QC / In-Process Testing Labs",
    subtitle: "Development and validation batches",
  },
];



const faqs = [
  {
    question: "What is an Intravenous Bag Leak Tester (IVBLT)?",
    answer: "An IVBLT is a precision testing system that applies controlled pressure to intravenous bags to detect sealing defects, pinholes, and port leaks that cannot be identified by manual visual inspection. Every bag is tested individually — pressure is applied, monitored for the test duration, and the result is automatically classified as pass or fail. All test data is electronically recorded per 21 CFR Part 11.",
  },
  {
    question: "Why is pressure-based testing better than manual visual inspection for IV bags?",
    answer: "Manual visual inspection cannot detect pinholes smaller than approximately 0.2mm, and squeeze-testing applies inconsistent force between operators. Pressure-based testing applies a defined, repeatable force to every bag — regardless of operator or shift — and detects pressure drops that indicate leaks far below the threshold of visual detection. The result is objectively classified and electronically recorded, making it regulatory-defensible in a way manual inspection cannot be.",
  },
  {
    question: "Does IVBLT test destructively — do bags need to be discarded after testing?",
    answer: "No. IVBLT operates non-destructively. Bags that pass the pressure test proceed directly to the next step — labelling, secondary packaging, or release — without any modification. Only failed bags are flagged and quarantined. There is no product loss from the testing process itself.",
  },
  {
    question: "Which IV bag sizes does IVBLT support?",
    answer: "Mactus IVBLT supports standard LVP and SVP bag sizes — 50 mL, 100 mL, 250 mL, 500 mL, and 1000 mL. The system automatically adjusts test pressure based on bag size configuration. Multi-size facilities can configure all required sizes during installation and switch between them via the HMI without manual pressure adjustment.",
  },
  {
    question: "Is IVBLT 21 CFR Part 11 compliant?",
    answer: "Yes. IVBLT records every test event electronically — bag ID, size, pressure profile, test duration, result, operator, and timestamp — in a tamper-proof, 21 CFR Part 11 compliant audit trail. Role-based access controls restrict who can modify test parameters. Electronic signatures are bound to each test event. Full validation documentation (URS, FDS, DQ, IQ, OQ, PQ) is delivered with every installation.",
  },
  {
    question: "Can IVBLT be integrated with our existing MES or batch record system?",
    answer: "Yes. IVBLT test results can be pushed to MES, EBR, or LIMS via standard interfaces. Batch-level reconciliation data — total bags tested, passed, failed, and quarantined — can be automatically included in the electronic batch record, eliminating manual data entry at batch closure.",
  },
  {
    question: "What is bag status reconciliation and why does it matter?",
    answer: "Bag status reconciliation is the automatic count of bags tested, passed, failed, and quarantined per batch. In manual systems, reconciliation is done by counting physical bags and cross-referencing paper records — prone to counting errors and a common source of batch closure deviations. IVBLT tracks every bag electronically from test entry to result classification, so the reconciliation is complete and accurate the moment the batch finishes testing.",
  },
  {
    question: "How long does IVBLT deployment take?",
    answer: "Standard IVBLT deployment is 6 to 8 weeks end-to-end — including URS finalisation, hardware delivery and installation, HMI configuration, bag size setup, validation testing (IQ, OQ, PQ), operator training, and go-live support. Multi-line rollouts are scoped separately.",
  },
];

// ─── Main Page ────────────────────────────────────────────────────────────────

const IVBLTPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeStep, setActiveStep] = useState(1);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mactus.in/" },
      { "@type": "ListItem", "position": 2, "name": "Compliance Products", "item": "https://mactus.in/complians-products/" },
      { "@type": "ListItem", "position": 3, "name": "IVBLT", "item": "https://mactus.in/intravenous-bag-leak-tester/" },
    ],
  };

  useEffect(() => {
    document.title = "Intravenous Bag Leak Tester (IVBLT) | IV Bag Integrity Testing | Mactus Automation";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', 'Mactus IVBLT detects pinhole leaks in IV bags with high-sensitivity pressure testing — cGMP and GDP compliant, electronic audit trail, automated bag status reconciliation. Built for large volume parenterals manufacturing.');
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
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-reveal-up { animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .shimmer-text {
          background: linear-gradient(90deg, #e0006e 0%, #ff4b9f 50%, #e0006e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
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
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── SECTION 1 — HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#25252B] py-10 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 w-full">

          {/* Left */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="w-full mb-12 max-w-[760px]">
              <div className="flex items-center gap-6 md:gap-8 lg:gap-6">

                {/* Left Magenta Line */}
                <span className="block w-6 md:w-13 h-[2px] bg-[#e0006e] flex-shrink-0 animate-line-extend"></span>

                {/* Product Name */}
                <h2 className="text-white font-extrabold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] leading-relaxed whitespace-nowrap animate-text-reveal-right">
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">I</span>ntravenous {" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">B</span>ag{" "}
                                    <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">L</span>eak{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">T</span>ester

                </h2>

              </div>
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter flex flex-wrap gap-x-[0.3em]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>A pinhole you can't see is a patient</span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block pr-2" style={{ animationDelay: '0.2s' }}> safety failure</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full lg:w-auto">
                <span className="animate-reveal-up inline-block pb-1 shimmer-text font-black" style={{ animationDelay: '0.5s' }}>waiting to happen.</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[540px] font-medium opacity-80">
              Mactus IVBLT applies precise, size-adjusted pressure to every IV bag — detecting the smallest sealing defects before they leave your facility. cGMP and GDP compliant, electronically recorded, and built for 100% in-line testing on large volume parenteral lines.
            </p>

            <div className="flex flex-row items-center gap-4 flex-wrap sm:flex-nowrap">
              <button onClick={() => setIsModalOpen(true)} className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Request a Demo
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

          {/* Right — product image with floating overlay */}
          <div className="relative animate-fade-in-right animate-float lg:justify-self-end w-full max-w-xl mx-auto lg:mx-0">
            <ImageCarousel images={[ivblt_1, ivblt_2, ivblt_3]} />

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
                  { value: "5+", label: "Units Deployed", icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  )},
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

      {/* ── SECTION 2 — THE PROBLEM WE SOLVE ────────────────────────────────── */}
      <section className="py-12 md:py-14 px-6 bg-white border-b border-gray-100">
        <p className="text-center text-[#e0006e] font-bold tracking-widest uppercase  ">Why IVBLT</p>
        <div className="max-w-6xl mx-auto">
          <SectionTitle s eyebrow="WHY IVBLT">Manual leak inspection misses what the eye can't see.</SectionTitle>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-900 text-xl font-bold leading-relaxed mb-6">
              Intravenous bags must remain sterile and leak-free. Even a tiny pinhole can cause microbial ingress, oxygen ingress, and loss of sterility assurance.

 <span className="text-[#e0006e]">VBLT replaces manual squeeze testing with precision pressure-based leak detection — every bag, every time.</span>
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm mx-auto max-w-5xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-8 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">The Risk</th>
                  <th className="px-8 py-6 text-gray-400 font-black text-lg tracking-widest uppercase">Manual / Visual Inspection</th>
                  <th className="px-8 py-6 text-[#e0006e] font-black text-lg tracking-widest uppercase bg-[#e0006e]/5">IVBLT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Pinhole detection", "Misses defects < 0.2mm", "High-sensitivity pressure detection"],
                  ["Consistency between operators", "Operator-dependent squeeze force", "Constant, size-adjusted pressure — every bag"],
                  ["Batch reconciliation", "Manual count, prone to error", "Automated bag status reconciliation"],
                  ["Test records", "Paper logbook", "Electronic, 21 CFR Part 11 audit trail"],
                  ["Regulatory defensibility", '"We visually inspected each bag"', '"Every bag pressure-tested — result on record"'],
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-900 bg-white">{row[0]}</td>
                    <td className="px-8 py-6 text-gray-500 bg-white">{row[1]}</td>
                    <td className="px-8 py-6 font-bold text-[#e0006e] bg-[#e0006e]/5 group-hover:bg-[#e0006e]/10 transition-colors">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — WHAT IVBLT IS ────────────────────────────────────────── */}
      <section className="py-14 md:py-16 px-6 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>What IVBLT is</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                IVBLT is a precision-engineered IV bag integrity testing system that applies constant, controlled pressure — automatically adjusted according to bag size — to detect sealing defects, pinholes, and port leaks that cannot be identified by manual visual inspection. The system operates non-destructively: bags that pass the test proceed directly to labelling and packaging.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every test is electronically recorded — bag ID, size, pressure applied, test duration, result, and operator. The test record is written to a 21 CFR Part 11 compliant audit trail the moment the test completes. Batch-level bag status reconciliation — tested, passed, failed, and quarantined counts — is available on demand.
              </p>
            </div>

            <div className="bg-[#0a0a1a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e0006e]/20 rounded-full blur-[3rem] group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <svg className="w-12 h-12 text-[#e0006e]/30 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 8.44772 1.44772 8 2 8H5C6.10457 8 7 7.10457 7 6V5C7 3.89543 6.10457 3 5 3H0C-1.10457 3 -2 3.89543 -2 5V15C-2 18.866 1.13401 22 5 22H7V21L7 18C7 16.8954 6.10457 16 5 16H2C1.44772 16 1 15.5523 1 15Z" /></svg>
              <p className="text-white font-medium text-2xl md:text-3xl leading-snug tracking-tight italic relative z-10">
                "IVBLT is the difference between 'we inspected every bag' and 'every bag was pressure-tested to specification — and the system has the record.'"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — HOW IVBLT WORKS ─────────────────────────────────────── */}
      <section className="py-12 md:py-14 px-6 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="THE WORKFLOW">How IVBLT Works</SectionTitle>
          <p className="text-center text-gray-500 font-medium text-lg -mt-6 mb-14">Precision pressure testing — automated, repeatable, recorded.</p>

          {/* Stepper */}
          <div className="relative mb-10">
            <div className="hidden md:block absolute top-[48px] left-16 right-16 h-1 bg-gray-100 rounded-full z-0">
              <div className="h-full bg-[#e0006e] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}></div>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6 pt-4 md:pb-4 -mx-6 px-6 md:mx-0 md:px-0 relative z-10">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                const isPast = activeStep > step.id;
                return (
                  <div key={step.id} className="flex-shrink-0 w-[240px] md:w-auto snap-center flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveStep(step.id)}>
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 relative bg-white
                      ${isActive ? 'border-4 border-[#e0006e] text-[#e0006e] shadow-[0_0_30px_rgba(224,0,110,0.2)] scale-110'
                        : isPast ? 'border-2 border-[#e0006e]/50 text-[#e0006e]/50 bg-gray-50'
                          : 'border-2 border-gray-200 text-gray-400 group-hover:border-[#e0006e]/30 group-hover:text-[#e0006e]'}`}>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-xs border-4 border-white">
                        {step.id}
                      </div>
                      {step.icon}
                    </div>
                    <h3 className={`mt-5 font-black text-[10px] tracking-widest uppercase text-center transition-colors duration-300 ${isActive ? 'text-[#e0006e]' : 'text-gray-600'}`}>
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active detail */}
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-inner relative overflow-hidden min-h-[140px] flex items-center justify-center text-center">
            {steps.map((step) => (
              <div key={step.id}
                className={`absolute inset-0 p-8 md:p-12 flex items-center justify-center transition-all duration-500 ease-in-out
                  ${activeStep === step.id ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-6 pointer-events-none absolute'}`}>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — KEY FEATURES ─────────────────────────────────────────── */}
      <section className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Key Features</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[#e0006e] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 ease-out"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-[#e0006e] transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e] text-[#e0006e] group-hover:text-white">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-[#e0006e] transition-colors">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — BUILT FOR ────────────────────────────────────────────── */}
      <section className="py-14 md:py-16 px-6 bg-white">
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

      {/* ── SECTION 7 — OUTCOMES ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-14 px-6 bg-white">
        <SectionTitle>Outcomes</SectionTitle>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "pinhole detection", value: "100%", sub: "High-Sensitivity Testing" },
              { label: "manual squeeze tests", value: "0", sub: "Pressure-Based Verification" },
              { label: "reconciliation errors", value: "Eliminated", sub: "Automated Bag Status Tracking" },
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

      {/* ── SECTION 8 — FAQ ──────────────────────────────────────────────────── */}
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
      {/* ── SECTION 9 — PRE-FOOTER CTA ───────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-12 px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                Cleaning is your first line of defence. <span className="text-[#e0006e]">Make sure every drop is the right one.</span>
              </h2>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl flex items-center gap-3 whitespace-nowrap">
              Request Demo
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

export default IVBLTPage;
