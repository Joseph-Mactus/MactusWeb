import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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

const BMSPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      title: "Centralized Control",
      icon: "🎛️",
      desc: "All building systems — HVAC, utilities, fire, access, energy — managed from a single control interface. One screen, complete visibility."
    },
    {
      title: "Real-Time Monitoring",
      icon: "📊",
      desc: "Live dashboards for equipment status, environmental parameters, energy consumption, and alarms. Instant visibility into what's running, what's tripping, and what's trending."
    },
    {
      title: "Maintenance Management",
      icon: "🔧",
      desc: "Scheduled maintenance alerts, equipment runtime tracking, and fault logging reduce unplanned downtime and keep your plant running within spec."
    },
    {
      title: "Data Analytics & Reporting",
      icon: "📈",
      desc: "Historical trends, energy reports, and performance benchmarks exportable for facilities management, compliance, or sustainability reporting."
    },
    {
      title: "User-Friendly Interface",
      icon: "🖥️",
      desc: "Operator screens designed for facility managers — not engineers. Role-based access so each user sees exactly what they need."
    },
    {
      title: "Occupancy Monitoring",
      icon: "👥",
      desc: "People-count and zone-occupancy data integrated into HVAC and access control for energy-efficient, compliant facility management."
    },
  ];

  const builtFor = [
    { icon: "💊", label: "Pharmaceutical Manufacturing", subtitle: "GMP HVAC and cleanroom utilities control" },
    { icon: "🏢", label: "Commercial Buildings", subtitle: "Office complexes, hospitals, data centers" },
    { icon: "🏭", label: "Industrial Plants", subtitle: "Process facilities, compressor farms, utility blocks" },
    { icon: "🏗️", label: "Large Infrastructure", subtitle: "Campuses, multi-building facilities" },
    { icon: "❄️", label: "Cold-Chain & Controlled Storage", subtitle: "Temperature-critical environments" },
    { icon: "🌱", label: "Sustainability-Focused Facilities", subtitle: "Energy metering and ESG reporting" },
  ];

  const faqs = [
    {
      question: "What is a Building Management System (BMS)?",
      answer: "A Building Management System is a centralized control platform that integrates and automates a facility's mechanical, electrical, and environmental systems — HVAC, lighting, utilities, fire, access control, and energy metering. A BMS gives facility managers a single interface to monitor, control, and optimize everything running in their building, reduce energy waste, and respond faster to faults and alarms."
    },
    {
      question: "What systems can a Mactus BMS integrate?",
      answer: "A Mactus BMS integrates HVAC systems (AHUs, FCUs, chillers, cooling towers, VAV boxes), exhaust systems, hot and chilled water systems, compressed air, UPS, diesel generators, energy meters, fire alarm and suppression systems, access control, video monitoring, and public address systems. The scope is configured to your facility's requirements — we don't force a fixed feature set."
    },
    {
      question: "Is BMS relevant for pharmaceutical GMP facilities specifically?",
      answer: "Yes. In pharma, BMS is critical for maintaining cleanroom conditions — temperature, humidity, differential pressure, and air changes per hour — within validated ranges. Mactus has extensive experience deploying BMS in USFDA and MHRA-inspected pharma facilities. Our BMS implementations are designed with validation requirements in mind and can be delivered with IQ/OQ documentation where required."
    },
    {
      question: "What's the difference between BMS and EMS (Environmental Monitoring System)?",
      answer: "BMS controls building systems — it actively regulates HVAC, utilities, and equipment. EMS monitors and records environmental parameters — temperature, humidity, differential pressure — for compliance and GMP purposes. In a pharma facility, both are needed: BMS keeps the environment in spec, EMS proves it was in spec for audit. Mactus delivers both and integrates them so your BMS alarms and EMS data share a common view."
    },
    {
      question: "What platform does Mactus use for BMS?",
      answer: "Mactus specializes in EcoStruxure™ BMS — Schneider Electric's open, IoT-enabled building management platform — as well as other leading platforms including Honeywell, Tridium Niagara, and American Auto-Matrix, depending on facility requirements. Platform selection is based on your existing infrastructure, integration requirements, and long-term support strategy."
    },
    {
      question: "Does a new BMS require replacing existing equipment?",
      answer: "Not necessarily. Mactus BMS implementations are brownfield-friendly — we read from existing PLCs, controllers, and sensors using standard protocols (BACnet, Modbus, LonWorks). New hardware is added only where there are specific gaps. The goal is integration and visibility over your existing plant, not a rip-and-replace exercise."
    },
    {
      question: "How long does a BMS implementation take?",
      answer: "Timeline depends on the scope and complexity of the facility. A focused single-building BMS covering HVAC and core utilities typically deploys in 12 to 20 weeks. Larger multi-system or multi-building implementations are scoped and phased during the design stage. Mactus begins every BMS project with a site survey and detailed scope definition."
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
      { "@type": "ListItem", "position": 2, "name": "Building Management System", "item": "https://mactus.in/building-management-system/" }
    ]
  };

  useEffect(() => {
    document.title = "Building Management System (BMS) | HVAC & Utilities Automation | Mactus Automation";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Mactus delivers EcoStruxure™ BMS solutions for pharma, commercial, and industrial facilities — HVAC, utilities, fire, access, and energy in one centralized control layer.');
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
              SYSTEM INTEGRATION · BUILDING MANAGEMENT
            </div>

            <h1 className="text-white font-black text-3xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tighter">
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>Every building</span>
              </span>
              <span className="animate-reveal-up block text-[#e0006e]" style={{ animationDelay: '0.15s' }}>
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>system. One</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block " style={{ animationDelay: '0.3s' }}>centralized view.</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[540px] font-medium opacity-80">
              Mactus delivers Building Management Systems that integrate HVAC, utilities, fire, access control, and energy metering into a single, real-time control layer — custom-built for pharmaceutical, industrial, and commercial facilities.
            </p>

            <div className="flex flex-row items-center gap-4 pt-2 flex-wrap sm:flex-nowrap">
              <a href="/contact-us/" className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Request a BMS Assessment
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative animate-float lg:justify-self-end w-full max-w-xl mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/10">
              <img
                src="https://mactus.in/wp-content/uploads/2025/08/iStock-2160382145-1024x576.jpg"
                alt="Building Management System"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INTRO */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="WHAT WE DELIVER">
            Comprehensive Building Automation for Facilities That Can't Afford Downtime
          </SectionTitle>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
            <p>
              In today's world, industrial, commercial, and residential facilities rely on advanced climate and environment control systems for efficiency, comfort, and sustainability. At Mactus Automation, we specialize in delivering comprehensive Building Management Systems that seamlessly integrate and control HVAC systems, exhaust systems, and critical utilities such as hot water systems, chilled water systems, compressors, and UPS.
            </p>
            <p>
              Our BMS solutions go beyond HVAC — integrating diesel generators, energy meters, and other essential building operations to provide complete visibility and centralized control. We enable full integration with Fire Alarm Systems, Fire Suppression Systems, Access Control, Video Monitoring, and Public Address Systems, ensuring a holistic approach to building automation. Every BMS solution we deliver is custom-built in collaboration with consultants, owners, and facility teams to meet specific operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY CHOOSE MACTUS BMS */}
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="OUR ADVANTAGE">Why Choose Mactus BMS?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                ),
                title: "Standards-Based & Scalable",
                desc: "Open, standards-based communication protocols ensure seamless integration with existing infrastructure and future-ready expandability as your facility grows."
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                ),
                title: "Easy to Deploy & Manage",
                desc: "Streamlined deployment and intuitive management tools reduce the burden on facility managers and technicians — from installation to daily operations."
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
                title: "User-Friendly Control",
                desc: "Intuitive interfaces give your team real-time monitoring, alarm management, and decision-making capability without specialist training."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 group text-center">
                <div className="w-16 h-16 bg-[#e0006e]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#e0006e] transition-all duration-500 text-[#e0006e] group-hover:text-white">
                  {pillar.icon}
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-3 group-hover:text-[#e0006e] transition-colors">{pillar.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — KEY FEATURES */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="CAPABILITIES">Key Features of BMS</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#e0006e]/30 hover:shadow-lg transition-all duration-300 group flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl border border-gray-200 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-[#e0006e]/30 transition-colors shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-2 group-hover:text-[#e0006e] transition-colors">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — BMS CONTROL PANEL */}
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="HARDWARE">The BMS Control Panel</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 group">
              <img
                src="https://mactus.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-04-08-at-6.03.36-PM-1-scaled-ra3ga84nbbvx5idk6b75jufccm9muxvwaj49306ccg.jpeg"
                alt="BMS Control Panel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                A BMS control panel is the centralized hub for monitoring and managing key building systems such as HVAC, lighting, utilities, and safety equipment. It integrates sensors, controllers, and user interfaces to ensure optimal performance and energy efficiency.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Through the panel, operators can visualize real-time data, set parameters, and respond to alarms or system faults. It enables automation, scheduled operations, and remote access for better control and maintenance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                BMS control panels play a crucial role in ensuring comfort, safety, and regulatory compliance in industrial and commercial facilities.
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 pt-4">
                {["Real-time data visualization", "Alarm & fault response", "Scheduled automation", "Remote access", "Regulatory compliance"].map(chip => (
                  <span key={chip} className="px-4 py-2 rounded-full bg-[#e0006e]/5 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-wide">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ECOSTRUXURE PARTNERSHIP */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="PLATFORM OF CHOICE" isDark>EcoStruxure™ BMS — Our Platform of Choice</SectionTitle>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Mactus Automation specializes in implementing EcoStruxure™ BMS solutions — Schneider Electric's open, IoT-enabled building management platform — ensuring seamless integration, configuration, and ongoing support for pharmaceutical facilities, commercial buildings, and industrial plants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { icon: "⚡", label: "Open, standards-based architecture", sub: "BACnet, Modbus, LON, KNX" },
              { icon: "🔗", label: "Native integration", sub: "Schneider energy and power management" },
              { icon: "🛡️", label: "Cybersecurity-aware design", sub: "Role-based access and audit logs" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#e0006e]/50 transition-colors group flex flex-col gap-3">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-white font-black text-sm mb-1 group-hover:text-[#e0006e] transition-colors">{item.label}</p>
                  <p className="text-gray-400 text-xs font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a href="/environmental-monitoring-system/" className="group bg-white/5 border border-white/10 hover:border-[#e0006e]/50 rounded-2xl p-6 transition-all duration-300 flex items-center justify-between gap-4">
              <div>
                <p className="text-[#e0006e] font-black text-xs tracking-widest uppercase mb-1">Related Product</p>
                <p className="text-white font-bold text-sm leading-snug">BMS controls the environment. EMS proves it.</p>
              </div>
              <svg className="w-5 h-5 text-[#e0006e] flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/iiot-implementations/" className="group bg-white/5 border border-white/10 hover:border-[#e0006e]/50 rounded-2xl p-6 transition-all duration-300 flex items-center justify-between gap-4">
              <div>
                <p className="text-[#e0006e] font-black text-xs tracking-widest uppercase mb-1">Related Product</p>
                <p className="text-white font-bold text-sm leading-snug">Layer IIoT analytics over your BMS data for energy and OEE visibility.</p>
              </div>
              <svg className="w-5 h-5 text-[#e0006e] flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — VIDEO */}
      <section id="bms-graphic" className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="LIVE DEMONSTRATION">BMS in Action</SectionTitle>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-2xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 transition-transform duration-700 hover:scale-[1.005]">
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-50/80 rounded-t-xl border-b border-gray-100/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[8px] font-black tracking-[0.2em] text-gray-400 uppercase">System Active</span>
                </div>
              </div>

              <div className="rounded-b-xl overflow-hidden bg-black">
                <video
                  controls
                  preload="metadata"
                  poster="https://mactus.in/wp-content/uploads/2025/08/iStock-2160382145-1024x576.jpg"
                  className="w-full"
                  style={{ display: 'block' }}
                >
                  <source
                    src="https://mactus.in/wp-content/uploads/2025/04/BMS-SW-Recording-Video-2025-04-01-120912.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm font-medium mt-4">
              Live BMS software walkthrough — HVAC control, alarm management, and real-time dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — BUILT FOR */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="TARGET ENVIRONMENTS" isDark>Built For</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {builtFor.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#e0006e]/50 transition-all duration-300 group flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#e0006e]/10 transition-colors border border-white/10 group-hover:border-[#e0006e]/30">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-white text-sm mb-1 group-hover:text-[#e0006e] transition-colors">{item.label}</h4>
                  <p className="text-gray-400 text-xs font-medium">{item.subtitle}</p>
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
                Your building systems shouldn't require a specialist to understand.{' '}
                <span className="text-[#e0006e]">Let's fix that.</span>
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

export default BMSPage;