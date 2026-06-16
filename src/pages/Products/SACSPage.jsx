import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';
import ZohoFormModal from '../../components/ZohoFormModal';

import sacs_1 from '../../assets/images/Complianceproducts/SACS/sacs_2.png';
import sacs_2 from '../../assets/images/Complianceproducts/SACS/sacs_1.png';
import sacs_3 from '../../assets/images/Complianceproducts/SACS/sacs_3.png';

import Brochure from '../../assets/Brochurs/MAPL_SmartAccessControlSystemBrochureV1.pdf';
const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-6 mt-8">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl tracking-tight relative pb-3 inline-block">
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
    { title: "Training Verification", desc: "Syncs with HRMS to ensure only currently certified staff can enter specific areas.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { title: "Tailgate Detection", desc: "Advanced AI sensors detect and alert if multiple people enter on a single badge-in.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "Real-time Monitoring", desc: "Live dashboard showing every entry, exit, and violation across the facility.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { title: "Audit Readiness", desc: "Instant export of signed, tamper-proof audit trails for USFDA/MHRA inspections.", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  ];

  const steps = [
    { title: "IDENTIFY", desc: "Operator swipes RFID or uses biometric authentication at the cleanroom entrance." },
    { title: "VALIDATE", desc: "SACS verifies identity, training status, and gowning sequence compliance in real-time." },
    { title: "PERMIT / BLOCK", desc: "Door lock releases only if all criteria are met; otherwise, entry is denied and logged." },
    { title: "RECORD", desc: "The entry event is digitally signed and added to the 21 CFR Part 11 audit trail." },
  ];

  const faqs = [
    { question: "What is SACS?", answer: "SACS (Smart Access Control System) is a specialized electronic entry-exit management system designed for pharmaceutical cleanrooms and regulated environments. It replaces manual gowning logbooks with a digital, 21 CFR Part 11 compliant workflow." },
    { question: "Is it 21 CFR Part 11 compliant?", answer: "Yes, SACS is built from the ground up to meet the requirements of 21 CFR Part 11, including electronic signatures, audit trails, and data integrity controls." },
    { question: "Does it replace door interlocking?", answer: "SACS enhances existing interlocking systems. It can interface with your current door controllers to provide an additional layer of compliance-based logic before a door is permitted to unlock." },
    { question: "How does it prevent tailgating?", answer: "We use high-precision overhead IR or AI-based vision sensors to count the number of individuals passing through a door. If the count exceeds the number of authorized badge-ins, an alarm is triggered." },
    { question: "Can it enforce gowning sequence?", answer: "Absolutely. SACS can be configured to require confirmation of specific SOP steps (e.g., hand sanitization, gowning, glove change) before granting access to the next grade area." },
    { question: "Does it verify training?", answer: "Yes, SACS integrates with your Learning Management System (LMS) or HRMS to ensure that an operator's certifications for that specific area are current before allowing entry." },
    { question: "What does deployment look like?", answer: "Deployment is a turnkey process including hardware installation, software configuration, and full IQ/OQ/PQ validation to ensure compliance with your site requirements." },
    { question: "Which customers use SACS?", answer: "SACS is trusted by leading sterile injectable plants, vaccine manufacturers, and API facilities across India and globally to maintain audit readiness." },
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
        {/* Decorative Grid Background (from Home.jsx) */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.2em] uppercase mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
              </span>
              SMART ACCESS CONTROL SYSTEM
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter flex flex-wrap gap-x-[0.3em]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              {["The", "cleanroom", "door", "that"].map((word, i) => (
                <span key={i} className="overflow-hidden pr-2 inline-block py-1">
                  <span className="animate-reveal-up inline-block" style={{ animationDelay: `${i * 0.1}s` }}>{word}</span>
                </span>
              ))}
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block shimmer-text font-black pr-10" style={{ animationDelay: '0.4s' }}>remembers</span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block pr-10" style={{ animationDelay: '0.5s' }}>everything.</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[520px] font-medium opacity-80">
              SACS replaces the gowning logbook with a paperless, 21 CFR Part 11 compliant entry-exit system — enforcing every SOP and writing a tamper-proof audit trail.
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
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>The Audit Challenge</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-6">
              <h2 className="font-black text-4xl md:text-5xl text-gray-900 leading-tight tracking-tighter">
                Why a paper gowning logbook is your <span className="text-[#e0006e]">weakest</span> link
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-500 text-lg leading-relaxed">
                In an aseptic area, every entry is a regulated event. Most pharma plants still capture all of this on a logbook taped to the door.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-bold text-gray-900">
                Form 483 observations on access control are among the most common USFDA findings in sterile facilities.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-8 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">The Risk</th>
                  <th className="px-8 py-6 text-gray-400 font-black text-lg tracking-widest uppercase">Paper Logbook</th>
                  <th className="px-8 py-6 text-[#e0006e] font-black text-lg tracking-widest uppercase bg-[#e0006e]/5">With SACS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Untrained operator enters", "Manual check by security", "System-level training lock"],
                  ["Gowning SOP skipped", "Relies on honesty", "Digital verification required"],
                  ["Tailgate entry", "Impossible to track", "Sensor-based AI detection"],
                  ["Audit trail", "Illegible, paper-based", "Instant 21 CFR PDF export"],
                  ["Capacity exceeded", "Hard to monitor", "Real-time headcount lock"],
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

      {/* Features Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Compliance Features</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-[#e0006e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#e0006e] transition-all duration-500">
                  <svg className="w-7 h-7 text-[#e0006e] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-3 group-hover:text-[#e0006e] transition-colors">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>System Workflow</SectionTitle>
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
                    <span className="text-[8px] font-black tracking-[0.2em] text-gray-400 uppercase">System Active</span>
                  </div>
                </div>

                <div className="relative aspect-video w-full rounded-b-xl overflow-hidden bg-white">
                  <iframe
                    className="w-[101%] h-[101%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-b-xl scale-[1.02]"
                    src="https://www.youtube.com/embed/3Xj6dzZFoqQ?rel=0&modestbranding=1&controls=1"
                    title="SACS System Workflow"
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
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#e0006e] font-extrabold text-xs tracking-[0.4em] uppercase block">Industry Targets</span>
              <h2 className="font-black text-4xl md:text-5xl tracking-tighter">Built for high-stakes manufacturing</h2>
              <p className="text-gray-400 text-lg">Every facility type has unique compliance challenges. SACS is flexible enough for all of them.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Sterile injectables",
                "Biologics & vaccine fill-finish",
                "Oral solid dosage",
                "API manufacturing Grade B/C",
                "Hospital pharmacy USP 797/800",
                "Food processing FSMA/FSSAI"
              ].map(item => (
                <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#e0006e]/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e0006e] group-hover:scale-150 transition-transform"></div>
                    <span className="font-bold text-sm tracking-wide text-gray-200">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
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
      <section className="py-24 px-6 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Common Questions</SectionTitle>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
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
