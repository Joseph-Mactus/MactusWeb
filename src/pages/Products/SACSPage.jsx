import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';
import ZohoFormModal from '../../components/ZohoFormModal';

import sacs_1 from '../../assets/images/Complianceproducts/SACS/sacs_2.png';
import sacs_2 from '../../assets/images/Complianceproducts/SACS/sacs_1.png';
import sacs_3 from '../../assets/images/Complianceproducts/SACS/sacs_3.png';

import Brochure from '../../assets/Brochurs/MAPL_SmartAccessControlSystemBrochureV1.pdf';
import ComparisonTable from '../../components/ComparisonTable';
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
            <span className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-8 pb-6 text-gray-500 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SACSPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useState(() => {
    document.title = "Smart Access Control System (SACS) | Mactus";
  }, []);

  const features = [
    { title: "21 CFR Compliance", desc: "Full adherence to Part 11 electronic records and signatures requirements.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Access Enforcement", desc: "Hard interlocking that prevents door opening unless all SOP conditions are met.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
    { title: "Training Verification", desc: "Syncs with Master data to ensure only currently certified staff can enter specific areas.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { title: "Tailgate Detection", desc: "Advanced AI sensors detect and alert if any tailgate happens.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "Real-time Monitoring", desc: "Live dashboard showing every entry and exit across the facility.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { title: "Audit Readiness", desc: "Instant export of signed, tamper-proof audit trails for Regulatory/Customer inspections.", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  ];

  const steps = [
    { title: "IDENTIFY", desc: "Operator uses biometric authentication at the cleanroom entrance." },
    { title: "VALIDATE", desc: "SACS verifies identity, training status, and gowning qualification status in real-time." },
    { title: "PERMIT / BLOCK", desc: "Door lock releases only if all criteria are met; otherwise, entry is denied." },
    { title: "RECORD", desc: "The entry event is digitally record and added to the 21 CFR Part 11 audit trail." },
  ];

  const useCases = [
    { title: "Sterile Injectables", desc: "Grade A/B cleanroom entry management for vials, PFS, and ampoule lines", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { title: "Biologics & Vaccine Fill-Finish", desc: "Enforced SOP-based access for high-value biologics manufacturing", icon: "M13 10V3L4 14h7v8l9-11h-7z" },
    { title: "Oral Solid Dosage", desc: "Controlled zone access with training verification for OSD facilities", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "API Manufacturing Grade B/C", desc: "Role-based access enforcement across multi-grade API facilities", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { title: "Hospital Pharmacy (USP 797/800)", desc: "Compounding cleanroom access control with complete electronic audit trail", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "Food Processing (FSMA/FSSAI)", desc: "Hygienic zone entry monitoring for food safety compliance", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  ];

  const faqs = [
    { question: "What is SACS?", answer: "SACS (Smart Access Control System) is a specialized electronic entry-exit management system designed for pharmaceutical cleanrooms and regulated environments. It replaces manual entry and exit logbooks with a digital, 21 CFR Part 11 compliant workflow." },
    { question: "Is it 21 CFR Part 11 compliant?", answer: "Yes, SACS is built from the ground up to meet the requirements of 21 CFR Part 11, including electronic signatures, audit trails, and data integrity controls." },
    { question: "Does it replace door interlocking?", answer: "SACS enhances existing interlocking systems. It can interface with your current door controllers to provide an additional layer of compliance-based logic before a door is permitted to unlock." },
    { question: "How does it prevent tailgating?", answer: "We use high-precision overhead IR to count the number of individuals passing through a door. If the count exceeds the number of authorized badge-ins, an alarm is triggered." },
    { question: "Can it enforce gowning qualification?", answer: "Absolutely. SACS  can be configured to connect to your gowning qualification master list, and only qualified operators will be permitted to enter the aseptic area." },
    { question: "Does it verify training?", answer: "Yes, SACS integrates with your training master list to ensure that an operator's certifications for that specific area are current before allowing entry." },
    { question: "What does deployment look like?", answer: "Deployment is a turnkey process including hardware installation, software configuration, and full IQ/OQ/PQ validation to ensure compliance with your site requirements." },
    { question: "Which customers use SACS?", answer: "SACS is trusted by leading sterile injectable plants, vaccine manufacturers." },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
      <Navbar />

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
      <section className="relative bg-[#25252B] py-10 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
        {/* Decorative Grid Background (from Home.jsx) */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative z-10 w-full">
          <div className="space-y-6 animate-fade-in-left">
            <div className="w-full max-w-[760px]">
              <div className="flex items-center gap-6 md:gap-8 lg:gap-6">

                {/* Left Magenta Line */}

                {/* Product Name */}
                <h2 className="text-white font-extrabold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] leading-relaxed whitespace-nowrap animate-text-reveal-right">
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">S</span>mart{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">A</span>ccess{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">C</span>ontrol{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">S</span>ystem
                </h2>

              </div>
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter flex flex-wrap gap-x-[0.3em]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              {["The", "cleanroom", "Entry", "that"].map((word, i) => (
                <span key={i} className="overflow-hidden pr-2 inline-block py-1">
                  <span className="animate-reveal-up inline-block" style={{ animationDelay: `${i * 0.1}s` }}>{word}</span>
                </span>
              ))}
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block shimmer-text font-black pr-1" style={{ animationDelay: '0.4s' }}>remembers</span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block pr-10" style={{ animationDelay: '0.5s' }}>everything.</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[520px] font-medium opacity-80">
              SACS replaces the entry & exit logbook with a paperless, 21 CFR Part 11 compliant entry-exit system — enforcing every SOP and maintaining a tamper-proof audit trail.
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
            <ImageCarousel images={[sacs_1, sacs_2, sacs_3]} />

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
                  { value: "45+", label: "Units Deployed", icon: (
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

      {/* The Problem Section */}
      <section className="py-14 md:py-16 px-6 bg-white">
        <p className="text-center text-[#e0006e] font-bold tracking-widest uppercase  ">Why SACS</p>
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="WHY SACS">Manual entry-exit logbooks are a compliance risk</SectionTitle>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-900 text-xl font-bold leading-relaxed mb-6">
              In aseptic areas, every entry must be controlled and recorded.

 <span className="text-[#e0006e]">SACS replaces paper logbooks with SOP-based digital access control.</span>
 
Each entry is verified, time-stamped, and audit-ready.
            </p>
          </div>

          <ComparisonTable
  headers={["The Risk", "Paper Logbook", "SACS"]}
  rows={[
    [
      "Unqualified operator enters controlled area",
      "Manual verification is difficult and often missed",
      "Role-based qualified access lock",
    ],
    [
      "Gowning / training not verified",
      "Depends on operator declaration or supervisor check",
      "Digital qualification verification before entry",
    ],
    [
      "Tailgate entry into cleanroom",
      "Cannot be captured in paper records",
      "Sensor-based tailgate detection and alert",
    ],
    [
      "Audit trail not compliant",
      "Paper records may be incomplete, illegible, or delayed",
      "Time-stamped 21 CFR Part 11-ready audit report",
    ],
    [
      "Area occupancy limit exceeded",
      "Real-time headcount is hard to monitor",
      "Live occupancy monitoring with access restriction",
    ],
    [
      "Operator stays beyond allowed duration",
      "Entry and exit duration is manually calculated",
      "Zone-wise duration tracking with alerts",
    ],
  ]}
/>
        </div>
      </section>

      {/* What SACS Is */}
      <section className="py-14 md:py-16 px-6 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>What SACS is</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                SACS is a smart access control system that replaces paper entry-exit logbooks with automated, 21 CFR Part 11 compliant digital access management. The system verifies operator identity, training status, and gowning qualification before granting cleanroom entry.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every entry event is electronically recorded with biometric authentication, time-stamps, and electronic signatures. The audit trail is built in real-time, eliminating paper-based compliance risks and providing instant export for regulatory inspections.
              </p>
            </div>

            <div className="bg-[#0a0a1a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e0006e]/20 rounded-full blur-[3rem] group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <svg className="w-12 h-12 text-[#e0006e]/30 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 8.44772 1.44772 8 2 8H5C6.10457 8 7 7.10457 7 6V5C7 3.89543 6.10457 3 5 3H0C-1.10457 3 -2 3.89543 -2 5V15C-2 18.866 1.13401 22 5 22H7V21L7 18C7 16.8954 6.10457 16 5 16H2C1.44772 16 1 15.5523 1 15Z" /></svg>
              <p className="text-white font-medium text-2xl md:text-3xl leading-snug tracking-tight italic relative z-10">
                "SACS is the difference between 'the operator signed the logbook' and 'the system verified the operator, enforced the SOP, and logged the entry.'"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-14 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Key Features</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[#e0006e] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 ease-out"></div>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-[#e0006e] transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e]">
                    <svg className="w-8 h-8 text-[#e0006e] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                    </svg>
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

      {/* How It Works */}
      <section className="py-12 md:py-7 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>System Workflow</SectionTitle>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <div className="lg:w-1/2 space-y-8">
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
                    <span className="text-[8px] font-black tracking-[0.2em] text-gray-400 uppercase">System Active</span>
                  </div>
                </div>

                <div className="w-full max-w-4xl mx-auto px-4">
  {/* Desktop iframe */}
  <div className="hidden sm:block relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube-nocookie.com/embed/3Xj6dzZFoqQ?rel=0&playsinline=1"
      title="SACS System Workflow"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>

  {/* Mobile fallback */}
  <a
    href="https://www.youtube.com/watch?v=3Xj6dzZFoqQ"
    target="_blank"
    rel="noopener noreferrer"
    className="sm:hidden relative block w-full h-[260px] bg-black rounded-2xl overflow-hidden"
  >
    <img
      src="https://img.youtube.com/vi/3Xj6dzZFoqQ/hqdefault.jpg"
      alt="SACS System Workflow"
      className="w-full h-full object-cover opacity-80"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-[#e0006e] flex items-center justify-center shadow-[0_0_30px_rgba(224,0,110,0.6)]">
        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>

    <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold">
      Tap to watch video
    </p>
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="py-7 md:py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Built For</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-[#fafafa] border text-[#e0006e] border-gray-100 p-8 rounded-3xl hover:border-[#e0006e]/30 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#e0006e] group-hover:text-[#e0006e] group-hover:border-[#e0006e]/30 transition-colors">
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

      {/* Outcomes */}
      <section className="py-6 md:py-2 px-6 bg-white">
         <SectionTitle>Outcomes</SectionTitle>
        <div className="max-w-7xl mx-auto">
          <h1></h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "entries captured", value: "100%", sub: "Total Traceability" },
              { label: "inspection observations", value: "Zero", sub: "Since Deployment" },
              { label: "audit export", value: "1-click", sub: "Anytime, Anywhere" },
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

      {/* FAQ Section */}
      <section className="py-14 md:py-16 px-6 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-12 md:py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-12 px-6 md:px-14 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                Your auditor will read every entry. <span className="text-[#e0006e]">Make sure they are all there.</span>
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

export default SACSPage;
