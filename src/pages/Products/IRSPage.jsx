import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';
import ZohoFormModal from '../../components/ZohoFormModal';

import irs_1 from '../../assets/images/Complianceproducts/IRS/IRS1.png';
import irs_2 from '../../assets/images/Complianceproducts/IRS/IRS2.png';
import irs_3 from '../../assets/images/Complianceproducts/IRS/IRS3.png';

import Brochure from '../../assets/Brochurs/MAPL_InterverntionRecordingSystemBrochureV1.pdf';

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

const IRSPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useState(() => {
    document.title = "Intervention Recording System (IRS) | Mactus";
  }, []);

  const features = [
    { title: "Auto Sensor Capture", desc: "Non-contact sensors automatically detect port opening and hand entry without operator input.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
    { title: "Operator Binding", desc: "Syncs with access control to automatically attribute interventions to the specific operator at the line.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { title: "SOP Guidance", desc: "Displays step-by-step recovery procedures on-screen the moment an intervention is detected.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { title: "Batch Control", desc: "Enforces maximum allowable interventions per batch, triggering supervisor alerts if limits are reached.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Reporting & Trending", desc: "Automatic generation of PQR/APR ready data with trend analysis of intervention types.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
    { title: "APS / Media Fill Support", desc: "Specific mode for Aseptic Process Simulation to track complex intervention sequences.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  ];

  const steps = [
    { title: "DETECT", desc: "Sensors instantly identify a physical intervention (port open, glove entry, or door bypass)." },
    { title: "IDENTIFY", desc: "System cross-references operator identity and current batch phase automatically." },
    { title: "GUIDE", desc: "Operator is prompted to select the justification from a pre-approved list (e.g., Stopper Jam)." },
    { title: "APPROVE", desc: "For critical interventions, a supervisor is alerted for real-time electronic signature approval." },
    { title: "RECORD", desc: "The data—duration, operator, justification, and timestamp—is committed to the 21 CFR audit trail." },
  ];

  const faqs = [
    { question: "What is IRS?", answer: "IRS(Intervention Recording System) is an automated digital solution for documenting aseptic interventions in real-time, replacing manual logbooks with a 21 CFR Part 11 compliant workflow." },
    { question: "Is it Annex 1 aligned?", answer: "Yes, IRS is specifically designed to meet the EU GMP Annex 1 (2022) requirements for documenting, justifying, and trending every intervention in aseptic processing." },
    { question: "How does it detect interventions automatically?", answer: "We use a combination of magnetic sensors for doors/ports and IR curtains for glove ports to detect physical entry into the aseptic zone without any manual trigger needed." },
    { question: "Can it enforce a max per batch?", answer: "Yes, you can configure maximum limits for specific types of interventions. The system will alert supervisors if the limit is approached or reached." },
    { question: "Does it work with existing lines?", answer: "IR is designed for retrofit. Our non-invasive sensors can be mounted on almost any existing fill-finish line, RABS, or Isolator without compromising cabinet integrity." },
    { question: "How does it support APR/PQR?", answer: "Instead of manual data collation, IR provides 1-click export of trending data, making Annual Product Reviews (APR) and Periodic Quality Reviews (PQR) significantly faster." },
    { question: "Is it suitable for media fills?", answer: "It is ideal for Aseptic Process Simulations (Media Fills). It accurately tracks the duration and sequence of interventions, providing a perfect record for regulatory submission." },
    { question: "How long does deployment take?", answer: "A typical deployment, including sensor mounting and software configuration, takes 4-6 weeks, followed by site validation (IQ/OQ)." },
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
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-[#25252B] py-10 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-left">
            <div className="w-full mb-12 max-w-[760px]">
              <div className="flex items-center gap-6 md:gap-8 lg:gap-6">

                {/* Left Magenta Line */}
                <span className="block w-6 md:w-13 h-[2px] bg-[#e0006e] flex-shrink-0 animate-line-extend"></span>

                {/* Product Name */}
                <h2 className="text-white font-extrabold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] leading-relaxed whitespace-nowrap animate-text-reveal-right">
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">I</span>ntervention{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">R</span>ecording{" "}
                  <span className="text-[#e0006e] font-black drop-shadow-[0_0_12px_rgba(224,0,110,0.8)] animate-pulse">S</span>ystem
                </h2>

              </div>
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter flex flex-wrap gap-x-[0.3em]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block pr-2" style={{ animationDelay: '0.1s' }}>Every</span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block pr-2" style={{ animationDelay: '0.2s' }}>intervention.</span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block shimmer-text font-black pr-2" style={{ animationDelay: '0.4s' }}>Every</span>
              </span>
              <span className="overflow-hidden inline-block py-1">
                <span className="animate-reveal-up inline-block pr-2" style={{ animationDelay: '0.5s' }}>second.</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[520px] font-medium opacity-80">
              IRS digitises every open door and glove-port intervention, captured automatically, signed electronically, and ready the day your auditor asks for it.
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

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>The Compliance Challenge</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-6">
              <h2 className="font-black text-4xl md:text-5xl text-gray-900 leading-tight tracking-tighter">
                Aseptic interventions are where <span className="text-[#e0006e]">audits</span> are won or lost
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-500 text-lg leading-relaxed">
                EU GMP Annex 1 (2022) made it explicit: every intervention must be justified, documented, time-bound, and trended.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-bold text-gray-900">
                Yet on most facilities, recording is still an operator scribbling on a cleanroom paper — sometimes hours after the fact.              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-8 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">The Risk</th>
                  <th className="px-8 py-6 text-gray-400 font-black text-lg tracking-widest uppercase">Paper / Manual</th>
                  <th className="px-8 py-6 text-[#e0006e] font-black text-lg tracking-widest uppercase bg-[#e0006e]/5">With IRS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Intervention not recorded", "Memory dependent", "Auto-sensor capture"],
                  ["Duration accuracy", "Rough estimate", "Precision millisecond tracking"],
                  ["Excessive interventions", "Hard to track live", "Batch limit enforcement"],
                  ["Operator attribution", "Manual signing", "Digital link to SACS identity"],
                  ["Trending across batches", "Weeks of spreadsheet work", "Instant PQR/APR analytics"],
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
          <SectionTitle>Recording Features</SectionTitle>
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
                    <span className="text-[8px] font-black tracking-[0.2em] text-gray-400 uppercase">Recording Active</span>
                  </div>
                </div>

                <div className="relative aspect-video w-full rounded-b-xl overflow-hidden bg-white">
                  <iframe
                    className="w-[101%] h-[101%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-b-xl scale-[1.02]"
                    src="https://www.youtube.com/embed/q_V2sazmumQ?rel=0&modestbranding=1&controls=1"
                    title="IRS System Workflow"
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
      <section className="py-16 px-6 bg-[#25252B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#e0006e] font-extrabold text-xs tracking-[0.4em] uppercase block">Aseptic Processing</span>
              <h2 className="font-black text-4xl md:text-5xl tracking-tighter">Engineered for critical fill-finish</h2>
              <p className="text-gray-400 text-lg">Whether on an open RABS or a closed isolator, IRS provides the transparency your quality team demands.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Sterile injectables (vials/PFS/ampoules)",
                "Biologics & vaccine fill-finish",
                "Lyophilised product fill-finish",
                "RABS and isolator processing",
                "Aseptic Process Simulation campaigns",
                "Cell & gene therapy fill-finish"
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
              { label: "interventions auto-captured", value: "100%", sub: "Zero Sensor Misses" },
              { label: "retrospective entries", value: "0", sub: "Forced Real-time Logging" },
              { label: "APR/PQR export", value: "1-click", sub: "Data Integrity Guaranteed" },
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
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                The next batch starts soon. <span className="text-[#e0006e]">Will every intervention be in the record?</span>
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

export default IRSPage;
