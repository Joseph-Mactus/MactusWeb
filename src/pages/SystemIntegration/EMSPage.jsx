import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import emsImg1 from '../../assets/images/EMSPage/iStock-2166193783.jpg';
import emsImg2 from '../../assets/images/EMSPage/iStock-1714501746-1024x683.jpg';

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

const EMSPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);

  const parameters = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 14.76V3.5a2.5 2.5 0 10-5 0v11.26a4 4 0 105 0zM12 6v8" />
        </svg>
      ),
      name: "Temperature",
      monitoring: "Continuous real-time temperature monitoring for every room or area requiring environmental control.",
      alarmNote: "Visual and audible alarm on excursion — local room display + centralized dashboard",
      dataNote: "Data stored in immutable database format — tamper-proof, audit-ready"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
      name: "Relative Humidity",
      monitoring: "Continuous relative humidity monitoring to maintain validated RH ranges in production, storage, and cleanroom areas.",
      alarmNote: "Visual and audible alarm on excursion — local room display + centralized dashboard",
      dataNote: "Data stored in immutable database format — tamper-proof, audit-ready"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
      name: "Differential Pressure",
      monitoring: "Differential pressure monitoring between adjacent areas — critical for maintaining cleanroom cascades that prevent cross-contamination.",
      alarmNote: "Visual and audible alarm on excursion — local room display + centralized dashboard",
      dataNote: "Data stored in immutable database format — tamper-proof, audit-ready"
    },
  ];

  const features = [
    { icon: "🔔", title: "Local Alarming with Room Displays", desc: "On-site visual and audible alarms at room level — operators know immediately when a parameter drifts." },
    { icon: "🖥️", title: "Centralized Alarm Management", desc: "All alarms consolidated in the central dashboard — nothing slips past the team on shift." },
    { icon: "📡", title: "Remote Access & Control", desc: "Authorized users can monitor parameters and acknowledge alarms remotely — from the QA office or off-site." },
    { icon: "🛡️", title: "Compliant Monitoring Software", desc: "21 CFR Part 11 compliant — electronic signatures, role-based access, tamper-evident audit trails." },
    { icon: "✅", title: "GMP-Approved Devices", desc: "Sensors and transmitters qualified for GMP pharmaceutical environments. Calibration records maintained per installation." },
    { icon: "📄", title: "Customer-Customized Reporting", desc: "Reports configured to your facility's needs — by room, area, date range, parameter, or batch. Formatted for APR/PQR." },
    { icon: "⚡", title: "Real-Time Data Collection", desc: "Every parameter sampled continuously. No polling gaps. No manual entries. Live data for every monitored room." },
    { icon: "🗄️", title: "Data Logging & Immutable Storage", desc: "All readings stored in a tamper-proof, immutable database. Data cannot be altered after capture — ALCOA+ aligned." },
  ];

  const steps = [
    {
      id: 1,
      title: "SENSE",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      detail: "GMP-approved sensors continuously measure temperature, RH, and differential pressure at every monitored point. Sampling rates are configured per your site's validated requirements."
    },
    {
      id: 2,
      title: "TRANSMIT",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      detail: "Readings are transmitted to the central EMS server via a secure, wired or wireless network. Every data point is time-stamped at the sensor level."
    },
    {
      id: 3,
      title: "ALARM",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      detail: "Any parameter that crosses a configured alert or action limit triggers a local room display alarm and a centralized system alarm simultaneously. Alarm events are logged with time, parameter, value, and acknowledging operator."
    },
    {
      id: 4,
      title: "RECORD & REPORT",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      detail: "All data is stored in an immutable, 21 CFR Part 11 compliant database. Reports — excursion summaries, trending charts, room histories — are available on demand, pre-formatted for QA review, APR/PQR, and regulatory inspection."
    },
  ];

  const builtFor = [
    { icon: "💉", label: "Sterile Injectable Manufacturing", subtitle: "Grade A/B/C/D cleanroom cascades" },
    { icon: "💊", label: "Oral Solid Dosage", subtitle: "Production and packaging areas" },
    { icon: "🧬", label: "Biologics, Vaccines & Cell Therapy", subtitle: "Controlled environment suites" },
    { icon: "❄️", label: "Cold-Chain & Validated Storage", subtitle: "2–8°C, -20°C, -80°C chambers" },
    { icon: "🔬", label: "QC and Stability Laboratories", subtitle: "Temperature and RH controlled rooms" },
    { icon: "🏭", label: "API Manufacturing", subtitle: "Controlled utility and production areas" },
  ];

  const faqs = [
    {
      question: "What is an Environmental Monitoring System (EMS) in pharma?",
      answer: "A pharmaceutical Environmental Monitoring System is a continuous, automated system that measures and records critical environmental parameters — temperature, relative humidity, and differential pressure — across cleanrooms, storage areas, and production zones. It provides real-time alarms when parameters drift outside validated limits and maintains an immutable, audit-ready data record for GMP compliance."
    },
    {
      question: "What parameters does Mactus EMS monitor?",
      answer: "Mactus EMS monitors temperature, relative humidity (RH), and differential pressure as standard. Additional parameters — particle counts, CO2, airflow velocity — can be integrated depending on facility requirements. Each parameter is monitored continuously at configured sampling intervals, with independent alert and action limits per room and per cleanroom grade."
    },
    {
      question: "What is the difference between an alert limit and an action limit in EMS?",
      answer: "An alert limit is an early warning threshold — the parameter is approaching the validated operating range boundary. An action limit is a breach of the validated range that requires immediate investigation and documented response. EMS is configured with both limits per room; exceeding an alert triggers an alarm, exceeding an action limit triggers an alarm and initiates a deviation workflow. Both events are logged to the immutable audit trail."
    },
    {
      question: "Is EMS data 21 CFR Part 11 compliant?",
      answer: "Yes. Mactus EMS software is 21 CFR Part 11 compliant — all environmental data is stored in a tamper-proof, immutable database. Alarms are acknowledged with electronic signatures. Role-based access controls who can view, acknowledge, and report on data. The full audit trail of every data point, alarm, acknowledgment, and user action is retained and exportable for inspection."
    },
    {
      question: "How does EMS integrate with BMS?",
      answer: "Mactus delivers BMS and EMS as an integrated pair. The BMS actively controls HVAC and utility systems that maintain cleanroom conditions. The EMS independently monitors and records those conditions. Integration means that a BMS HVAC alarm and the corresponding EMS parameter trend are visible in a unified view — operators understand cause and effect without switching between systems."
    },
    {
      question: "Can EMS integrate with our LIMS or batch record system?",
      answer: "Yes. EMS data can be pushed to LIMS, MES, or electronic batch records via standard interfaces. Environmental parameters for a production batch — including any excursions and their resolutions — can be automatically included in the batch record, reducing manual data entry and the risk of transcription errors."
    },
    {
      question: "What happens during a network outage — is data lost?",
      answer: "No. Mactus EMS uses local data buffering at the sensor or gateway level. If network connectivity is lost, data continues to be recorded locally and is synchronized to the central server when connectivity is restored. No data gaps from network interruptions."
    },
    {
      question: "How long does an EMS deployment take?",
      answer: "A standard EMS deployment for a single pharmaceutical facility typically takes 10 to 16 weeks — covering site survey, sensor placement design, hardware installation and cabling, software configuration, alarm limit setup per room and grade, validation testing (IQ, OQ, PQ), operator and QA training, and go-live support. Multi-building or multi-site rollouts are phased and scoped separately."
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mactus.in/" },
      { "@type": "ListItem", "position": 2, "name": "Environmental Monitoring System", "item": "https://mactus.in/environmental-monitoring-system/" }
    ]
  };

  useEffect(() => {
    document.title = "Environmental Monitoring System (EMS) | GMP Cleanroom Monitoring | Mactus Automation";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Mactus EMS continuously monitors temperature, humidity, and differential pressure in pharma cleanrooms — with local and centralized alarms, immutable data logging, 21 CFR Part 11 compliant software, and GMP-approved devices.');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20 overflow-x-hidden">
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
        .animate-reveal-up {
          animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
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
      <section className="relative bg-[#1a1a1a] py-16 px-6 overflow-hidden min-h-[85vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
              </span>
              SYSTEM INTEGRATION · ENVIRONMENTAL MONITORING
            </div>

            <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl leading-none tracking-tighter">

              <div className="overflow-hidden">
                <span
                  className="animate-reveal-up block"
                  style={{ animationDelay: '0.1s' }}
                >
                  Proof that your
                </span>
              </div>

              <div className="overflow-hidden -mt-2">
                <span
                  className="animate-reveal-up block text-[#e0006e]"
                  style={{ animationDelay: '0.2s' }}
                >
                  cleanroom was in spec.
                </span>
              </div>

              <div className="overflow-hidden -mt-2">
                <span
                  className="animate-reveal-up block  font-black"
                  style={{ animationDelay: '0.3s' }}
                >
                  Every minute. Every room.
                </span>
              </div>

            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[540px] font-medium opacity-80">
              Mactus EMS continuously monitors temperature, relative humidity, and differential pressure across your pharmaceutical facility — with GMP-approved sensors, immutable data logging, local and centralized alarms, and audit-ready reports that stand up to USFDA and MHRA inspection.
            </p>

            <div className="flex flex-row items-center gap-4 pt-2 flex-wrap sm:flex-nowrap">
              <a href="/contact-us/" className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Request an EMS Assessment
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>

            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative animate-float lg:justify-self-end w-full max-w-xl mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/10">
              <img
                src={emsImg1}
                alt="Environmental Monitoring System"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 3 — WHAT EMS MONITORS */}
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="MONITORED PARAMETERS">What EMS Monitors</SectionTitle>
          <p className="text-center text-gray-500 font-bold tracking-widest uppercase text-xs mb-12 -mt-6">
            Three parameters. Continuous. Every room.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {parameters.map((param, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 group flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#e0006e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#e0006e] transition-all duration-500 text-[#e0006e] group-hover:text-white">
                  {param.icon}
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-[#e0006e] transition-colors">{param.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">{param.monitoring}</p>
                <div className="w-full space-y-3 border-t border-gray-100 pt-6">
                  <div className="flex items-start gap-2 text-left">
                    <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    </div>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed">{param.alarmNote}</p>
                  </div>
                  <div className="flex items-start gap-2 text-left">
                    <div className="w-4 h-4 rounded-full bg-[#e0006e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e0006e]"></div>
                    </div>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed">{param.dataNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — KEY FEATURES */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">

          <SectionTitle eyebrow="CAPABILITIES">
            Key Features of EMS
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left Side - Simple Feature List */}
            <div className="space-y-5">

              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-b border-gray-100 pb-4"
                >
                  <span className="text-2xl">
                    {f.icon}
                  </span>

                  <h4 className="text-lg font-semibold text-gray-900">
                    {f.title}
                  </h4>
                </div>
              ))}

            </div>

            {/* Right Side - Image */}
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
              <img
                src={emsImg2}
                alt="EMS Features"
                className="w-full h-[550px] object-cover"
              />
            </div>

          </div>

        </div>
      </section>
      {/* SECTION 5 — HOW EMS WORKS */}
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="THE WORKFLOW">How EMS Works</SectionTitle>
          <p className="text-center text-gray-500 font-medium text-lg -mt-6 mb-14">From sensor to audit-ready record — automatically.</p>

          {/* Stepper */}
          <div className="relative mb-10">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-[48px] left-16 right-16 h-1 bg-gray-200 rounded-full z-0">
              <div
                className="h-full bg-[#e0006e] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6 pt-4 md:pb-4 -mx-6 px-6 md:mx-0 md:px-0 relative z-10">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                const isPast = activeStep > step.id;
                return (
                  <div
                    key={step.id}
                    className="flex-shrink-0 w-[240px] md:w-auto snap-center flex flex-col items-center cursor-pointer group"
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 relative bg-white
                      ${isActive ? 'border-4 border-[#e0006e] text-[#e0006e] shadow-[0_0_30px_rgba(224,0,110,0.2)] scale-110' :
                        isPast ? 'border-2 border-[#e0006e]/50 text-[#e0006e]/50 bg-gray-100' :
                          'border-2 border-gray-200 text-gray-400 group-hover:border-[#e0006e]/30 group-hover:text-[#e0006e]'}`}
                    >
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-xs border-4 border-white">
                        {step.id}
                      </div>
                      {step.icon}
                    </div>
                    <h3 className={`mt-5 font-black text-xs tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-[#e0006e]' : 'text-gray-600'}`}>
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Detail */}
          <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden min-h-[140px] flex items-center justify-center text-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`absolute inset-0 p-8 md:p-12 flex items-center justify-center transition-all duration-500 ease-in-out
                  ${activeStep === step.id ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-6 pointer-events-none absolute'}`}
              >
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BUILT FOR */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="TARGET ENVIRONMENTS">Built For</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {builtFor.map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-[#e0006e]/30 hover:shadow-lg transition-all duration-300 group flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-[#e0006e]/30 transition-colors">
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




      {/* SECTION 9 — FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle eyebrow="COMMON QUESTIONS">Frequently Asked Questions</SectionTitle>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180 bg-[#e0006e] text-white' : 'bg-gray-50 text-[#e0006e]'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6 text-gray-500 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — PRE-FOOTER CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                Every batch needs a cleanroom that was in spec.{' '}
                <span className="text-[#e0006e]">EMS makes sure you can prove it.</span>
              </h2>
            </div>
            <a href="/contact-us/" className="bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap">
              Request a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EMSPage;