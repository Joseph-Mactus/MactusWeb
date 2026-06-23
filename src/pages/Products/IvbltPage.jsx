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

const SectionTitle = ({ children, eyebrow, isDark, center = true }) => (
  <div className={`flex flex-col ${center ? 'items-center' : 'items-start'} w-full mb-12 mt-8`}>
    {eyebrow && (
      <span className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase mb-4">{eyebrow}</span>
    )}
    <h2 className={`${center ? 'text-center' : ''} font-black text-3xl md:text-5xl tracking-tighter relative pb-4 inline-block ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#e0006e] rounded-full"></span>
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
    items: [
      "Detects pinholes and sealing defects invisible to visual inspection",
      "Pressure-based detection — not dependent on operator squeeze force",
      "Sensitivity configurable to your product specification",
      "Non-destructive testing — passing bags proceed directly to next step",
    ],
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Smart Control & Audit Trail",
    items: [
      "21 CFR Part 11 compliant electronic records for every test event",
      "Test result — bag ID, pressure, result, operator — logged automatically",
      "Role-based access control and electronic signatures",
      "Tamper-proof audit trail exportable for batch records and QA review",
    ],
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Size-Adjusted Pressure Testing",
    items: [
      "Pressure automatically adjusted per bag size (50 mL, 100 mL, 250 mL, 500 mL, 1000 mL)",
      "Eliminates manual pressure setting errors between bag sizes",
      "Consistent test conditions across every shift and every operator",
    ],
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    title: "Bag Status Reconciliation",
    items: [
      "Real-time reconciliation: tested, passed, failed, quarantined counts per batch",
      "Eliminates manual count discrepancies at batch closure",
      "Reconciliation report available for QA review and batch record inclusion",
    ],
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    title: "Minimal Manpower Requirement",
    items: [
      "Automated load, test, and classify cycle reduces operator intervention",
      "One operator can manage multiple units simultaneously",
      "Reduces shift labour cost on high-volume LVP lines",
    ],
  },
  {
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Regulatory Compliance",
    items: [
      "cGMP and GDP guideline compliant",
      "Validation pack delivered with every install: URS, FDS, DQ, IQ, OQ, PQ",
      "Supports 100% testing requirement for sterile LVP products",
      "Audit-ready records for USFDA, EU GMP, MHRA, WHO-GMP inspections",
    ],
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

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
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — THE PROBLEM WE SOLVE ────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <SectionTitle s eyebrow="WHY IVBLT">Manual leak inspection misses what the eye can't see.</SectionTitle>

          <div className="max-w-3xl mx-auto mb-10 space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Intravenous bags are sterile, pressurised primary containers. A pinhole — too small to see under normal light, impossible to detect by squeeze-test alone — allows microbial ingress, oxygen ingress, and loss of sterility assurance. In large volume parenteral manufacturing, where hundreds or thousands of bags are produced per shift, manual inspection cannot provide the sensitivity or consistency that patient safety demands.
            </p>
            <p className="font-black text-xl text-[#e0006e]">
              IVBLT replaces the squeeze test with precision pressure measurement — every bag, every time.
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
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <SectionTitle eyebrow="THE SOLUTION">What IVBLT Is</SectionTitle>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium mb-10">
            <p>
              IVBLT is a precision-engineered IV bag integrity testing system that applies constant, controlled pressure — automatically adjusted according to bag size — to detect sealing defects, pinholes, and port leaks that cannot be identified by manual visual inspection. The system operates non-destructively: bags that pass the test proceed directly to labelling and packaging.
            </p>
            <p>
              Every test is electronically recorded — bag ID, size, pressure applied, test duration, result, and operator. The test record is written to a 21 CFR Part 11 compliant audit trail the moment the test completes. Batch-level bag status reconciliation — tested, passed, failed, and quarantined counts — is available on demand.
            </p>
          </div>

          {/* Callout block */}
          <div className="relative bg-gray-900 rounded-2xl p-8 md:p-10 overflow-hidden border border-white/5">
            <div className="absolute top-4 left-6 text-[#e0006e] font-black leading-none select-none" style={{ fontSize: '80px', opacity: 0.12 }}>"</div>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium italic relative z-10">
              "IVBLT is the difference between 'we inspected every bag' and 'every bag was pressure-tested to specification — and the system has the record.'"
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — HOW IVBLT WORKS ─────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-b border-gray-100 overflow-hidden">
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
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="CAPABILITIES">Key Features</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#e0006e]/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#e0006e]/10 text-[#e0006e] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#e0006e] group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-4 group-hover:text-[#e0006e] transition-colors">{f.title}</h3>
                <ul className="space-y-2.5">
                  {f.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600 font-medium text-sm">
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

      {/* ── SECTION 6 — BUILT FOR ────────────────────────────────────────────── */}
      <section className="py-0 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="TARGET ENVIRONMENTS">Built For</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {builtFor.map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#e0006e]/30 hover:shadow-lg transition-all duration-300 group flex items-center gap-4">
                <div className="w-12 text-[#e0006e] h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-[#e0006e]/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-sm mb-1 group-hover:text-[#e0006e] transition-colors">{item.label}</h4>
                  <p className="text-gray-500 text-xs font-medium">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — FAQ ──────────────────────────────────────────────────── */}
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
      {/* ── SECTION 9 — PRE-FOOTER CTA ───────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
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
