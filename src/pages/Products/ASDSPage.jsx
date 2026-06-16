import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ZohoFormModal from '../../components/ZohoFormModal';
import ImageCarousel from '../../components/ImageCarousel';
import irs_1 from '../../assets/images/Complianceproducts/ASDS/asds_1.png';
import irs_2 from '../../assets/images/Complianceproducts/ASDS/asds_2.png';
import irs_3 from '../../assets/images/Complianceproducts/ASDS/asds_3.png';
import Brochure from '../../assets/Brochurs/MAPL_ASDS_BrochureV1-compressed.pdf';
const SectionTitle = ({ children, eyebrow }) => (
  <div className="flex flex-col items-center w-full mb-12 mt-8">
    {eyebrow && (
      <span className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className="text-center text-[#e0006e] font-black text-3xl md:text-5xl tracking-tighter relative pb-4 inline-block">
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

const ASDSPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useState(() => {
    document.title = "Automated Solution Dispensing System (ASDS) | Mactus";
  }, []);

  const features = [
    { title: "Recipe-Driven Preparation", desc: ["Up to 6 different solutions configurable per unit — disinfectant, detergent, IPA, sporicide, neutraliser, custom", "Operator selects recipe + volume on the HMI; system handles the dilution math and dispensing", "Recipes are locked under change control — no manual override without authorised credentials"], icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
    { title: "Accuracy", desc: ["Volumetric accuracy of stock + WFI / purified water ratios", "Verified delivery — no \"close enough\" tolerance", "Calibration record maintained per unit, exportable for audit"], icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "On-Demand, No Waste", desc: ["Solutions prepared only when needed — no shift-start over-preparation", "Reduced waste of expensive concentrates", "Reconciliation is automatic — every dispense logged, every discard captured"], icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
    { title: "Compliance", desc: ["21 CFR Part 11 compliant user management — electronic signatures, role-based access, audit trails", "Automated record keeping — every dispense event time-stamped and signed", "Historical data storage and export for QA review and APR/PQR", "Validation pack delivered with every install: URS, FDS, DQ, IQ, OQ, PQ"], icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Build & Usability", desc: ["Pharma-grade SS fabrication — designed for repeated cleaning and cleanroom environments", "Mobile design — castors with brakes, wheel between cleanrooms", "Industrial HMI with intuitive recipe-selection workflow", "Compact footprint — fits through standard cleanroom doors"], icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  const steps = [
    { title: "Authenticate", desc: "Operator logs in at the HMI. Electronic signature is bound to the dispense event." },
    { title: "Select", desc: "Operator picks the recipe (e.g., 0.5% sodium hypochlorite) and the required volume." },
    { title: "Dispense", desc: "ASDS calculates the dilution, opens the metered valves, mixes, and dispenses into the operator's labelled container." },
    { title: "Record", desc: "Recipe, volume, operator, time, and dispense ID are written to the audit trail and the cleaning log automatically." },
  ];

  const useCases = [
    { title: "Sterile Injectable Manufacturing", desc: "Disinfection of Grade A/B/C/D cleanroom areas", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { title: "Oral Solid Dosage", desc: "Equipment and area cleaning between batches", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "Biologics and Vaccine", desc: "Closed-system and equipment cleaning", icon: "M13 10V3L4 14h7v8l9-11h-7z" },
    { title: "API & Intermediate Manufacturing", desc: "Utility area cleaning", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { title: "Hospital Pharmacy Compounding", desc: "Cleanroom areas (USP <797> / <800>)", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "Food Processing", desc: "Sanitiser preparation for CIP / clean-out-of-place", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
  ];

  const faqs = [
    { question: "What is an Automated Solution Dispensing System (ASDS) in pharma?", answer: "An Automated Solution Dispensing System is an automated cleaning-solution preparation unit for pharma and healthcare facilities. It mixes precise dilutions of disinfectants, detergents, IPA, and other cleaning agents with purified water on demand, eliminating manual mixing errors. Each dispense is recorded electronically per 21 CFR Part 11 — recipe, volume, operator, time — for full audit traceability." },
    { question: "Why automate cleaning solution preparation? Operators have done it manually for decades.", answer: "They have, and that's exactly the audit problem. Manual preparation depends on operator attention and graduated-cylinder accuracy. Dilution strength drifts shift-to-shift, batch consistency is unprovable, reconciliation between prepared and used quantities relies on paper logbooks, and the entire process is a recurring finding in GMP audits. ASDS removes the variable: recipe is locked, dilution is metered, every event is signed." },
    { question: "How many different cleaning solutions can ASDS prepare?", answer: "Up to 6 different recipes are configurable per ASDS unit. Common configurations include sodium hypochlorite (variable strengths), 70% IPA, peracetic acid, quaternary ammonium disinfectants, detergents, and sporicides. Recipes are configured during install based on your site's cleaning SOPs and locked under change control." },
    { question: "Is ASDS 21 CFR Part 11 compliant?", answer: "Yes. ASDS includes role-based user management, electronic signatures bound to each dispense event, time-stamped audit trails, and tamper-proof historical data storage. Validation documentation (URS, FDS, DQ, IQ, OQ, PQ, traceability matrix) is delivered with every installation per GAMP 5." },
    { question: "Can ASDS move between cleanrooms?", answer: "Yes. ASDS is built on castors with brakes, designed to be wheeled between cleanrooms and through standard cleanroom doors. The SS fabrication is pharma-grade and tolerates repeated cleaning between rooms. One unit can serve multiple cleanroom suites on a shift rotation." },
    { question: "Does ASDS handle reconciliation of prepared vs. used vs. discarded?", answer: "Yes. Every prepared volume is logged. Operators record use and discard events through the same HMI. The reconciliation report — prepared, used, discarded, balance — is available for any time window and exportable for batch records or QA review." },
    { question: "What's the typical deployment timeline?", answer: "Standard ASDS deployment is 6 to 8 weeks end-to-end — including recipe finalisation, hardware delivery, on-site installation, validation testing (IQ, OQ, PQ), operator training, and go-live support. Multi-unit rollouts across multiple sites are scoped separately." },
    { question: "Does ASDS require purified water / WFI plumbing?", answer: "ASDS connects to your existing purified water supply via a standard sanitary connection. No new plumbing infrastructure is required if you already have a purified water loop accessible at the unit's deployment location. Utility requirements are confirmed during the URS / site-survey phase." }
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

  return (
    <>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
        <Navbar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
        `}</style>

        {/* Hero Section */}
        <section className="relative bg-[#1a1a1a] py-20 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
            <div className="space-y-8 animate-fade-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[18px] font-black tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
                </span>
                Automated Solution Dispensing System
              </div>

              <h1 className="text-white font-black leading-[1.05] tracking-tighter flex flex-wrap gap-x-[0.3em]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
                <span className="overflow-hidden inline-block py-1">
                  <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>Right</span>
                </span>
                <span className="overflow-hidden inline-block py-1">
                  <span className="animate-reveal-up inline-block pr-2" style={{ animationDelay: '0.2s' }}>strength.</span>
                </span>
                <span className="overflow-hidden inline-block py-1">
                  <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.3s' }}>Right</span>
                </span>
                <span className="overflow-hidden inline-block py-1">
                  <span className="animate-reveal-up inline-block pr-2" style={{ animationDelay: '0.4s' }}>volume.</span>
                </span>
                <span className="overflow-hidden inline-block py-1 w-full lg:w-auto">
                  <span className="animate-reveal-up inline-block shimmer-text font-black" style={{ animationDelay: '0.5s' }}>Right every </span>
                </span>
                <span className="overflow-hidden inline-block py-1 w-full lg:w-auto">
                  <span className="animate-reveal-up pr-1 pb-1 inline-block shimmer-text font-black" style={{ animationDelay: '0.5s' }}> single time.</span>
                </span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[550px] font-medium opacity-80">
                Automated Solution Dispensing System (ASDS) prepares and dispenses your cleaning solutions — disinfectant, detergent, IPA — to the exact strength, the exact volume, and the exact SOP your cleanroom requires. Mobile, SS-fabricated, 21 CFR Part 11 compliant, and ready to wheel into the next room.
              </p>

              <div className="flex flex-row items-center gap-4 pt-4 flex-wrap md:flex-nowrap">
                <button onClick={() => setIsModalOpen(true)} className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                  Request a Demo
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a href={Brochure} className="px-7 py-4 bg-white/5 text-white font-extrabold rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#e0006e]/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                  Download Brochure
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                  </svg>
                </a>
              </div>

            </div>

            <div className="relative animate-fade-in-right animate-float">
              <ImageCarousel images={[irs_1, irs_2, irs_3]} />
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle eyebrow="WHY ASDS">Manual cleaning solution prep is the slow leak in GMP cleaning</SectionTitle>

            <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Cleaning is the first line of defence against contamination. And in most pharma plants, the cleaning solutions themselves are still mixed by hand — an operator with a graduated cylinder, a bottle of stock disinfectant, a jug of purified water, and the patience to get it right in a busy shift.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                The reality: dilution is approximate, recipes drift between operators, batch-to-batch consistency is impossible to prove, reconciliation between prepared, used, and discarded volumes is a guess, and the cleaning logbook turns into the same audit headache as every other paper record.
              </p>
              <p className="text-2xl font-black text-[#e0006e] tracking-tight mt-8">
                ASDS replaces the graduated cylinder with a recipe.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm mx-auto max-w-5xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-8 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">The Risk</th>
                    <th className="px-8 py-6 text-gray-400 font-black text-lg tracking-widest uppercase">Manual Prep</th>
                    <th className="px-8 py-6 text-[#e0006e] font-black text-lg tracking-widest uppercase bg-[#e0006e]/5">ASDS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Wrong dilution strength", "Common (visual estimation)", "Volumetric, recipe-driven"],
                    ["Cross-shift inconsistency", "Operator-dependent", "Recipe locked, same every time"],
                    ["Wastage", "Over-prepared, discarded", "Prepared on-demand"],
                    ["Reconciliation", "Manual logbook math", "Auto-logged: prepared, used, discarded"],
                    ["Audit trail", "Paper logbook", "Electronic, 21 CFR Part 11"]
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

        {/* What ASDS Is */}
        <section className="py-24 px-6 bg-[#fafafa] border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>What ASDS Is</SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  ASDS is a mobile, SS-fabricated, automated solution preparation unit for pharma and healthcare cleaning operations. The operator selects a recipe (e.g., 0.5% sodium hypochlorite, 70% IPA, 5% detergent), keys in the required volume, and presses dispense. ASDS handles the rest — drawing the right ratio of stock concentrate and purified water, mixing to homogeneity, and dispensing into the operator's container.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every dispense is recorded electronically — recipe, volume, operator, time, batch. The dispensing log is built as the work is done. Nothing to write up later.
                </p>
              </div>

              <div className="bg-[#0a0a1a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e0006e]/20 rounded-full blur-[3rem] group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <svg className="w-12 h-12 text-[#e0006e]/30 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 8.44772 1.44772 8 2 8H5C6.10457 8 7 7.10457 7 6V5C7 3.89543 6.10457 3 5 3H0C-1.10457 3 -2 3.89543 -2 5V15C-2 18.866 1.13401 22 5 22H7V21L7 18C7 16.8954 6.10457 16 5 16H2C1.44772 16 1 15.5523 1 15Z" /></svg>
                <p className="text-white font-medium text-2xl md:text-3xl leading-snug tracking-tight italic relative z-10">
                  "ASDS is the difference between 'the operator said they mixed 0.5%' and 'the system confirmed it, signed it, and logged it.'"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>Key Features</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {features.map((f, i) => (
                <div key={i} className={`bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group relative overflow-hidden ${i === features.length - 1 && features.length % 2 !== 0 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-[#e0006e] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 ease-out"></div>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-[#e0006e] transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e]">
                      <svg className="w-8 h-8 text-[#e0006e] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-[#e0006e] transition-colors">{f.title}</h3>
                      <ul className="space-y-3">
                        {f.desc.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e0006e]/60 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600 leading-relaxed font-medium text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(#e0006e_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.02]"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <SectionTitle>System Workflow</SectionTitle>
            <p className="text-center text-gray-500 font-bold tracking-widest uppercase mb-16 -mt-8">A 4-step flow on every dispense</p>

            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative group">
                    {i !== steps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-100 group-hover:bg-[#e0006e]/20 transition-colors"></div>
                    )}
                    <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex-shrink-0 flex items-center justify-center font-black text-sm z-10 group-hover:bg-[#e0006e] transition-colors">
                      0{i + 1}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-black text-xs tracking-widest text-[#e0006e] uppercase">{step.title}</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:w-1/2 relative group flex justify-center">
                <div className="relative w-full max-w-xl bg-white rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 transition-transform duration-700 hover:scale-[1.02]">
                  {/* Clean Header */}
                  <div className="flex items-center justify-end px-4 py-2 bg-gray-50/50 rounded-t-xl border-b border-gray-100/50">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[8px] font-black tracking-[0.2em] text-gray-400 uppercase">Dispensing Active</span>
                    </div>
                  </div>

                  <div className="relative aspect-video w-full rounded-b-xl overflow-hidden bg-white">
                    <iframe
                      className="w-[101%] h-[101%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-b-xl scale-[1.02]"
                      src="https://www.youtube.com/embed/6SZQT3DSDso?rel=0&modestbranding=1&controls=1"
                      title="ASDS System Workflow"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built For */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>Built For</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc, i) => (
                <div key={i} className="bg-[#fafafa] border border-gray-100 p-8 rounded-3xl hover:border-[#e0006e]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-[#e0006e] group-hover:border-[#e0006e]/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={uc.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 group-hover:text-[#e0006e] transition-colors">{uc.title}</h4>
                    <p className="text-gray-500 text-sm font-medium">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Strip */}
        <section className="py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl tracking-tighter uppercase">What Customers See After ASDS Goes Live</h2>
              <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Reported outcomes from Mactus customers running ASDS in production</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
              {[
                { stat: "100%", label: "of prep events logged", desc: "No manual logbooks" },
                { stat: "0 variation", label: "in dilution strength", desc: "Recipe-locked" },
                { stat: "Savings", label: "on stock concentrate", desc: "On-demand prep" },
                { stat: "Less time", label: "per prep cycle", desc: "Operators move faster" },
                { stat: "Cleaner", label: "GMP audits", desc: "100% traceability" },
              ].map((outcome, i) => (
                <div key={i} className="text-center space-y-3 pt-8 md:pt-0 px-4 group">
                  <p className="text-[#e0006e] font-black text-4xl lg:text-5xl tracking-tighter transition-transform group-hover:scale-105">{outcome.stat}</p>
                  <div>
                    <p className="text-white font-bold text-sm tracking-wide">{outcome.label}</p>
                    <p className="text-gray-500 text-xs font-medium mt-1">{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* Pre-footer CTA */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] overflow-hidden relative group shadow-2xl">
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
    </>
  );
};

export default ASDSPage;


