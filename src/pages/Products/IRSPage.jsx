import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ImageCarousel from '../../components/ImageCarousel';
import ZohoFormModal from '../../components/ZohoFormModal';

import irs_1 from '../../assets/images/Complianceproducts/IRS/IRS1.png';
import irs_2 from '../../assets/images/Complianceproducts/IRS/IRS2.png';
import irs_3 from '../../assets/images/Complianceproducts/IRS/IRS3.png';

import Brochure from '../../assets/Brochurs/MAPL_InterverntionRecordingSystemBrochureV1.pdf';
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

const IRSPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useState(() => {
    document.title = "Intervention Recording System (IRS) | Mactus";
  }, []);

  const features = [
    { title: "Auto Sensor Capture", desc: "Non-contact sensors automatically detect glove port access and door open/close activity without operator input.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
    { title: "Operator Binding", desc: "Syncs with access control to automatically attribute interventions to the specific operator at the line.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { title: "SOP Guidance", desc: "Displays step-by-step recovery procedures on-screen the moment an intervention is detected.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { title: "Batch Control", desc: "Enforces maximum allowable interventions per batch, triggering supervisor alerts if limits are reached.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Reporting & Trending", desc: "Automatic generation of PQR/APR ready data with trend analysis of intervention types.", icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
    { title: "APS / Media Fill Support", desc: "Specific mode for Aseptic Process Simulation to track complex intervention sequences.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  ];

  const steps = [
    {
      title: "DETECT",
      desc: "Non-contact sensors detect glove port access and door open/close events without operator input."
    },
    {
      title: "IDENTIFY",
      desc: "IRS links the intervention to the operator, active batch, area, and process stage."
    },
    {
      title: "DOCUMENT",
      desc: "Operator selects the intervention reason from a pre-approved list, such as stopper jam or vial adjustment."
    },
    {
      title: "APPROVE",
      desc: "Critical interventions are routed to the supervisor for real-time electronic review and approval."
    },
    {
      title: "RECORD",
      desc: "Operator, reason, duration, timestamp, and approval status are stored in a 21 CFR Part 11-ready audit trail."
    },
  ];

  const useCases =
    [
      {
        title: "Sterile Injectable Manufacturing",
        desc: "RABS and isolator lines where every door and glove-port intervention must be recorded.",
        icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      },
      {
        title: "Aseptic Fill-Finish Lines",
        desc: "Vial, PFS, ampoule, and cartridge lines requiring complete intervention traceability.",
        icon: "M13 10V3L4 14h7v8l9-11h-7z"
      },
      {
        title: "Biologics & Vaccine Manufacturing",
        desc: "Critical product lines where intervention control and audit-ready records are essential.",
        icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      },
      {
        title: "Lyophilized Product Lines",
        desc: "Loading, unloading, and process interventions captured with batch-wise traceability.",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      },
      {
        title: "Aseptic Process Simulation",
        desc: "Media fill campaigns requiring accurate recording of every simulated intervention.",
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      },
      {
        title: "Cell & Gene Therapy",
        desc: "High-value sterile processes where zero-miss intervention documentation is critical.",
        icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      }
    ]
    ;

  const faqs = [
    { question: "What is IRS?", answer: "IRS (Intervention Recording System) is an automated digital solution for documenting aseptic interventions in real-time, replacing manual logbooks with a 21 CFR Part 11 compliant workflow." },
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative z-10 w-full">
          <div className="space-y-8 animate-fade-in-left">
            <div className="w-full max-w-[760px]">
              <div className="flex items-center gap-6 md:gap-8 lg:gap-6">

                {/* Left Magenta Line */}

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
              IRS ensures that no critical intervention goes unnoticed. From open door events to glove-port activities, every action is captured automatically, signed electronically, and converted into a compliant digital record ready for audit review.
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
                    value: "30+", label: "Units Deployed", icon: (
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

      {/* The Problem Section */}
      <section className="py-14 md:py-16 px-6 bg-white">
        <p className="text-center text-[#e0006e] font-bold tracking-widest uppercase  ">Why IRS</p>

        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="WHY IRS">Manual intervention recording is a compliance gap</SectionTitle>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-900 text-xl font-bold leading-relaxed mb-6">
              In sterile manufacturing, every intervention must be justified, documented, and fully traceable. <span className="text-[#e0006e]">IRS replaces manual batch recording with automated, sensor-driven intervention tracking.</span>
              Every intervention is automatically detected, time-stamped, linked to the operator, and recorded in an audit-ready format—improving compliance, data integrity, and operational efficiency.
            </p>
          </div>

          <ComparisonTable
            headers={["The Risk", "Paper / Manual", "IRS"]}
            rows={[
              [
                "Data Entry Errors",
                "Prone to manual errors.",
                "Automated recording ensures accuracy.",
              ],
              [
                "Compliance Risk",
                "Incomplete or missing records.",
                "Automatic, real-time recording.",
              ],
              [
                "Uncontrolled Interventions",
                "Difficult to detect deviations.",
                "Detects and records every intervention.",
              ],
              [
                "Real-Time Visibility",
                "No live monitoring.",
                "Live monitoring with real-time visibility.",
              ],
              [
                "Batch Review & Traceability",
                "Slow review with limited traceability.",
                "Faster review with complete traceability.",
              ],
              [
                "Analytics & Trends",
                "No automated analytics or trend tracking.",
                "Built-in dashboards with intervention analytics and trend reports.",
              ],
            ]}
          />
        </div>
      </section>

      {/* What IRS Is */}
      <section className="py-14 md:py-16 px-6 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>What IRS is</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                IRS is an automated intervention recording system that uses non-contact sensors to detect glove port access and door open/close events in Aseptic filling machine . The system automatically links each intervention to the operator, active batch, and process stage.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every intervention is electronically recorded with time-stamps, electronic signatures,. The audit trail is built in real-time, eliminating paper-based compliance risks and providing instant PQR/APR insights.
              </p>
            </div>

            <div className="bg-[#0a0a1a] rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e0006e]/20 rounded-full blur-[3rem] group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <svg className="w-12 h-12 text-[#e0006e]/30 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 8.44772 1.44772 8 2 8H5C6.10457 8 7 7.10457 7 6V5C7 3.89543 6.10457 3 5 3H0C-1.10457 3 -2 3.89543 -2 5V15C-2 18.866 1.13401 22 5 22H7V21L7 18C7 16.8954 6.10457 16 5 16H2C1.44772 16 1 15.5523 1 15Z" /></svg>
              <p className="text-white font-medium text-2xl md:text-3xl leading-snug tracking-tight italic relative z-10">
                "IRS is the difference between 'the operator said they intervened' and 'the system detected it, timed it, and logged it.'"
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
      <section className="py-6 md:py-7 px-6 bg-white overflow-hidden">
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
