import React, { useState, useEffect } from 'react';
import { FaPills, FaDna, FaUtensils, FaHospital, FaIndustry, FaSnowflake } from "react-icons/fa";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import iiotArchitectureImg from '../assets/images/IIoT/IIOT_Architecture.png';

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

const IIoT = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What's the difference between IIoT and our existing BMS or SCADA?",
      answer: "BMS and SCADA control equipment and capture data within their own scope. IIoT is the layer above them — it reads from BMS, SCADA, PLCs, smart meters, and standalone sensors, brings the data into one platform, and applies analytics across systems that don't otherwise talk to each other. BMS tells you the chiller is running. IIoT tells you the chiller is running 12% less efficiently than it was six months ago and will need maintenance in the next 30 days."
    },
    {
      question: "Will an IIoT layer affect our validated systems?",
      answer: "No. Mactus IIoT implementations are read-only against validated systems by default. We connect through industry-standard interfaces (OPC-UA, Modbus, REST), apply edge gateways as a network boundary, and never write back into validated systems unless that integration is explicitly scoped, validated, and approved by your QA. The validated systems continue to operate as before."
    },
    {
      question: "Is the IIoT platform cloud or on-premise?",
      answer: "Either, or a hybrid. Many pharma customers prefer on-premise for the platform itself, with optional secure cloud connectivity for multi-site analytics or remote monitoring. We architect the deployment to your IT, security, and data classification policies — not the other way around."
    },
    {
      question: "How do you handle GxP data in an IIoT context?",
      answer: "GxP data captured by validated source systems (EMS, BMS, compliance products) stays in those validated systems as the authoritative record. The IIoT layer can carry a copy of that data for operational dashboards and trending — but the IIoT copy is explicitly not a regulatory record. Retention, access control, and audit trail are treated differently for GxP vs. non-GxP data. Your QA team reviews and approves this data classification during URS."
    },
    {
      question: "What about OT cybersecurity? The CIO is going to ask.",
      answer: "OT cybersecurity is part of the IIoT design from the first sketch. We work to the IEC 62443 zone-and-conduit model — network segmentation between OT and IT, certificate-based device identity, encryption in transit and at rest, role-based access with multi-factor authentication, and audited administrative actions. Edge gateways are hardened with minimal services and signed firmware. We hand over an incident response playbook to your IT and security teams as part of project closure."
    },
    {
      question: "Do we need new sensors and equipment, or can you use what we have?",
      answer: "Most of what's needed is already in your plant. Existing PLCs, BMS controllers, EMS sensors, smart meters, and process instruments can all be read into the IIoT layer. New sensors are added only where there's a specific data gap — typically vibration on motors, current on pumps, or specific utility flow points. Brownfield-friendly is the default; rip-and-replace is the exception."
    },
    {
      question: "How is an IIoT implementation typically scoped?",
      answer: "We start with a discovery and assessment phase — typically 2 to 3 weeks on-site — that surveys your existing systems, identifies high-value use cases for your plant specifically, defines the architecture, and produces a phased implementation plan. Customers often start with one use case (energy analytics, or condition-based maintenance on critical equipment) and expand from there."
    },
    {
      question: "How long does a first IIoT phase take to deploy?",
      answer: "A focused first phase — single plant, one or two use cases — typically deploys in 12 to 20 weeks end-to-end, including assessment, architecture, hardware installation, platform configuration, integration with existing systems, and user training. Multi-site rollouts and broader scopes are scoped separately."
    },
    {
      question: "Will Mactus support the IIoT system after go-live?",
      answer: "Yes. AMC covers edge gateways, platform updates, security patching, configuration changes, dashboard extensions, and on-call engineering support. We design the system so your own engineering team can run day-to-day operations independently — Mactus is on call for what your team chooses not to handle in-house."
    }
  ];

  const components = [
    {
      number: "01",
      title: "Edge Gateways",
      desc: "Industrial-grade edge devices that aggregate data at the line or area level, run protocol translation (OPC-UA, Modbus, BACnet, MQTT, REST), buffer through network outages, and apply edge-level alarm and filter logic. Edge gateways isolate the validated OT network from the data analytics layer above — a critical architectural boundary in GxP environments."
    },
    {
      number: "02",
      title: "Sensor Layer",
      desc: "Smart sensors on the equipment, lines, or utilities that aren't yet instrumented — vibration on motors, current on pumps, flow on utilities, temperature on bearings. We use industry-standard hardware and avoid proprietary lock-in. Existing PLC data is read directly, no new sensors required."
    },
    {
      number: "02",
      title: "Edge Gateways",
      desc: "Industrial-grade edge devices that aggregate data at the line or area level, run protocol translation (OPC-UA, Modbus, BACnet, MQTT, REST), buffer through network outages, and apply edge-level alarm and filter logic. Edge gateways isolate the validated OT network from the data analytics layer above — a critical architectural boundary in GxP environments."
    },
    {
      number: "03",
      title: "Secure Data Pipeline",
      desc: "Encrypted, authenticated transport from edge to platform. TLS in flight, segmented network architecture, certificate-based device identity, and role-based access for users. Designed to satisfy IEC 62443 expectations for OT cybersecurity and your QMS expectations for data integrity."
    },
    {
      number: "04",
      title: "Analytics & Visualisation Platform",
      desc: "Real-time dashboards for engineering, maintenance, OpEx, and leadership — configured to the questions each function actually asks. Historical trending. Threshold and anomaly alerting. Equipment-level and area-level views. Export to PDF, Excel, BI tools."
    },
    {
      number: "05",
      title: "Integration with Systems Above",
      desc: "IIoT data pushed to existing MES, EBR, LIMS, ERP, and CMMS where it adds value. Operational events surfaced into the same analytics platforms your business already uses — not yet another login for your team."
    }
  ];

  const useCases = [
    {
      title: "Energy and Utility Analytics",
      desc: "Consumption by equipment, area, shift, and product. Identify standby loads, equipment drift, and recovery-time anomalies. Typical first-year cost reduction in HVAC and utility consumption: 8 to 18 percent, depending on baseline.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v8l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Equipment Health and Maintenance",
      desc: "Vibration, current, temperature, and runtime data continuously analysed against equipment-specific baselines. Maintenance teams move from time-based to condition-based servicing, with measurable reductions in unplanned downtime and over-servicing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Production Performance and OEE",
      desc: "Line-level visibility into availability, performance, and quality losses. Shift-level reporting. Pareto analysis of downtime causes. The data your continuous-improvement team needs without a manual spreadsheet exercise.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Utility and Infrastructure Monitoring",
      desc: "Centralised view of chillers, compressed air, purified water, WFI, clean steam, and process gases — across multiple plants if you have them. Cross-plant benchmarking and standardisation become possible.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Sustainability and ESG Reporting",
      desc: "Auditable, automated energy and resource consumption data for sustainability reporting. Scope 1 and 2 emissions tracking aligned to GHG Protocol. No more manual data collection across plants at year-end.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      )
    },
    {
      title: "Cold-Chain and Validated Storage Monitoring",
      desc: "Continuous monitoring of validated storage (2-8°C, -20°C, -80°C) with audit-ready alarms and reports. Integration with EMS for unified environmental data.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const principles = [
    {
      title: "Don't Disturb What's Validated",
      desc: "The BMS, EMS, and process control systems below the IIoT layer continue to operate exactly as they did before. We read; we don't write back into validated systems unless explicitly scoped."
    },
    {
      title: "Keep OT and IT Separated",
      desc: "Edge gateways enforce the boundary. Cybersecurity zones are defined per IEC 62443. The IIoT platform doesn't bridge networks that shouldn't be bridged."
    },
    {
      title: "Respect GxP Data Classification",
      desc: "We treat GxP data and non-GxP data differently — different retention, different access, different storage architectures. Operational dashboards don't accidentally become an unvalidated copy of validated records."
    },
    {
      title: "Build for the Team That Will Run It",
      desc: "We hand over documentation, dashboards, and admin tools that the customer's own engineering team can extend. The system should not require Mactus to be useful in year three."
    }
  ];

 const builtFor = [
  {
    label: "Pharmaceutical Manufacturing",
    subtitle: "single-site and multi-site rollouts",
    icon: <FaPills />,
  },
  {
    label: "Biologics, Vaccine & Cell Therapy",
    subtitle: "validated storage and utility monitoring",
    icon: <FaDna />,
  },
  {
    label: "Food & Beverage Processing",
    subtitle: "sanitisation and OEE analytics",
    icon: <FaUtensils />,
  },
  {
    label: "Hospitals & Healthcare",
    subtitle: "critical-utility monitoring",
    icon: <FaHospital />,
  },
  {
    label: "Industrial Manufacturing",
    subtitle: "regulatory or sustainability reporting requirements",
    icon: <FaIndustry />,
  },
  
];
  const outcomes = [
    { stat: "8–18%", label: "Energy and utility cost reduction in year one (varies by baseline)" },
    { stat: "↓ Downtime", label: "Measurable reduction through condition-based maintenance triggers" },
    { stat: "Less data gathering", label: "Engineering teams spending more time acting, less time collecting" },
    { stat: "1-day exports", label: "Sustainability reporting cycles compressed from weeks of manual work" },
    { stat: "Line & shift OEE", label: "Visibility without manual logbooks" },
    { stat: "Stronger OT posture", label: "Cybersecurity improved as a side-effect of proper IIoT architecture" }
  ];

  const cybersecurityItems = [
    "Network segmentation between OT and IT (IEC 62443 zone-and-conduit model)",
    "Certificate-based device identity and authentication",
    "TLS encryption in transit, AES at rest",
    "Role-based access control with multi-factor authentication for human users",
    "Edge gateway hardening — minimal services, regular patching, signed firmware",
    "Audit logging of every administrative action",
    "Incident response playbook handed to the customer's IT and security teams"
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial IoT (IIoT) Implementation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Mactus Automation Pvt. Ltd.",
      "url": "https://mactus.in"
    },
    "description": "GxP-aware IIoT implementations layered onto existing BMS, EMS, and process equipment. Edge gateways, secure data pipelines, predictive analytics."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mactus.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "IIoT Implementations",
        "item": "https://mactus.in/iiot-implementations"
      }
    ]
  };

  useEffect(() => {
    document.title = "Industrial IoT (IIoT) for Pharma & Industrial Facilities | OT-IT Convergence | Mactus Automation";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'IIoT implementations that layer onto your existing BMS, EMS, and process equipment. Edge gateways, secure data pipelines, predictive analytics. GxP-aware.');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20 overflow-x-hidden">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
      <section className="relative bg-[#25252B] py-20 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
              </span>
              INDUSTRIAL INTERNET OF THINGS
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>The data layer over</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>the systems you</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block shimmer-text font-black" style={{ animationDelay: '0.3s' }}>already run.</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[550px] font-medium opacity-80">
              Mactus IIoT implementations turn the data your BMS, EMS, and process equipment already generates into a real-time view of equipment health, utility consumption, and operational performance — without disturbing the validated systems underneath.
            </p>

            <div className="flex flex-row items-center gap-4 pt-4 flex-wrap sm:flex-nowrap">
              <a href="/contact-us/" className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Request an IIoT Assessment &rarr;
              </a>
              {/* <a href="#" className="px-7 py-4 bg-white/5 text-white font-extrabold rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#e0006e]/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Download IIoT Capability Deck
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-float lg:justify-self-end w-full flex justify-end z-20 mt-12 lg:mt-0">
           
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <img 
                src={iiotArchitectureImg} 
                alt="Mactus IIoT architecture diagram" 
                className="w-full min-h-[340px] md:min-h-[430px] lg:min-h-[420px] max-h-[640px] rounded-[1.5rem] object-contain relative z-10 shadow-inner bg-white"
              />
            
          </div>
        </div>
      </section>

      {/* SECTION 1.5 — DEMO VIDEO */}
     

      {/* SECTION 2 — THE PROBLEM WE SOLVE */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="WHY MACTUS IIOT">Your plant already generates the data. Most of it goes nowhere.</SectionTitle>
          
          <div className="max-w-4xl mx-auto space-y-8 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
            <p>
              A modern pharma plant produces an enormous amount of operational data every day. The BMS records HVAC and utility metrics every few seconds. The EMS captures cleanroom parameters continuously. PLCs log equipment state. Smart meters track energy use by zone. Most of this data lives in the system that created it — and dies there. By the time anyone asks the right question, the data has already aged out of the local buffer.
            </p>
            <p>
              Mactus IIoT solves the activation problem. We layer edge gateways and a unified data pipeline over the systems you already run, secure the path from sensor to dashboard, and surface the operational view your engineering, maintenance, and OpEx teams have been asking for. The validated systems underneath are not touched. The data above them becomes useful.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT AN IIOT IMPLEMENTATION LOOKS LIKE */}
      <section className="py-24 px-6 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="THE ARCHITECTURE">What an IIoT Implementation Looks Like</SectionTitle>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              A Mactus IIoT implementation has five components. We deliver them as one project, or in phases — depending on what you have today and what you need first.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 relative">
            {components.map((comp, idx) => (
              <div key={idx} className="flex gap-6 relative group">
                {idx !== components.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-100 group-hover:bg-[#e0006e]/20 transition-colors"></div>
                )}
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex-shrink-0 flex items-center justify-center font-black text-sm z-10 group-hover:bg-[#e0006e] transition-colors duration-300">
                  {comp.number}
                </div>
                <div className="space-y-2 pb-6 pl-2 border-b border-gray-100 w-full group-hover:border-[#e0006e]/20 transition-colors">
                  <h4 className="font-black text-xl text-gray-900 group-hover:text-[#e0006e] transition-colors duration-300">{comp.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-medium">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[#e0006e] font-black text-sm tracking-[0.2em] uppercase mb-3">Live Telemetry</h2>
            <h3 className="text-gray-900 font-black text-3xl md:text-4xl tracking-tight">See the IIoT Platform in Action</h3>
          </div>
          <div className="relative w-full rounded-3xl p-2 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-transform duration-500 hover:scale-[1.01]">
            <div className="flex items-center justify-between px-5 py-3 bg-gray-50 rounded-t-2xl border-b border-gray-100">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[9px] font-black tracking-[0.25em] text-gray-500 uppercase">System Active</span>
              </div>
            </div>
            <div className="relative aspect-video w-full rounded-b-2xl overflow-hidden bg-black">
              <iframe 
                className="w-[101%] h-[101%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-b-2xl scale-[1.01]"
                src="https://www.youtube.com/embed/0kozktJpyII?rel=0&modestbranding=1&controls=1&start=7" 
                title="IIoT Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="APPLICATIONS">What Customers Actually Use It For</SectionTitle>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              IIoT is a category. These are the specific applications we deliver — drawn from work with pharma and industrial customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 group relative overflow-hidden flex flex-col gap-6">
                <div className="absolute left-0 top-0 w-1.5 h-full bg-[#e0006e] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 ease-out"></div>
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:bg-[#e0006e] transition-colors duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e] text-[#e0006e] group-hover:text-white">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="font-black text-xl text-gray-900 mb-3 group-hover:text-[#e0006e] transition-colors">{uc.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW WE DELIVER */}
      <section className="py-24 px-6 bg-[#25252B] relative border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle eyebrow="THE MACTUS DIFFERENCE" isDark={true}>IIoT in a Pharma Plant Is Not IIoT in a Steel Mill.</SectionTitle>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Generic IIoT vendors approach pharma the same way they approach any factory — bolt on sensors, push everything to the cloud, run analytics. In a regulated environment this approach creates more problems than it solves: validated systems are disturbed, OT cybersecurity boundaries are crossed, GxP data leaks into non-compliant infrastructure. Mactus delivers IIoT with the regulatory and operational reality of pharma in view from the start.
            </p>
            <h3 className="text-white font-black text-2xl mt-12 mb-4 tracking-tight uppercase italic">Four principles we work to:</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {principles.map((pr, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#e0006e]/30 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] flex items-center justify-center font-black flex-shrink-0 group-hover:bg-[#e0006e] group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#e0006e] transition-colors">{pr.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">{pr.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — OT CYBERSECURITY */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="COMPLIANCE & SECURITY">OT Cybersecurity Is Part of the Design, Not a Bolt-On at the End.</SectionTitle>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                Recent ransomware attacks on pharma manufacturing have made OT cybersecurity an executive-level concern. The IIoT layer — by definition connecting OT systems to broader networks — is where new attack surface is created. Mactus designs that surface to be defended.
              </p>
              
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest">Architectural Principles</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  We approach OT security with robust network isolation, encrypted end-to-end device transport, and compliance boundaries tailored to satisfy strict GMP regulations.
                </p>
              </div>
            </div>

            {/* Right Card Treatment */}
            <div className="bg-[#111827] rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden border border-white/5 group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#e0006e]/20 rounded-full blur-[4rem] group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#e0006e]/20 flex items-center justify-center text-[#e0006e] border border-[#e0006e]/30 shadow-inner group-hover:bg-[#e0006e] group-hover:text-white transition-colors duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-black uppercase text-xs tracking-[0.25em]">What we deliver as part of</h3>
                  <p className="text-white font-extrabold text-lg">Every IIoT Project</p>
                </div>
              </div>

              <div className="space-y-4">
                {cybersecurityItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e0006e]/20 border border-[#e0006e]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#e0006e] transition-colors">
                      <svg className="w-3 h-3 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — BUILT FOR */}
      <section className="py-24 px-6 bg-[#fafafa] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="TARGET FACILITIES">Built For</SectionTitle>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Mactus IIoT implementations are designed for facilities where data has to earn its place — and where validated systems can't be disturbed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {builtFor.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#e0006e]/30 hover:shadow-xl transition-all duration-300 group flex flex-col gap-4">
                <div className="w-12 text-[#e0006e] h-12 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-2xl group-hover:bg-[#e0006e]/10 group-hover:border-[#e0006e]/30 transition-colors">
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

      {/* SECTION 8 — OUTCOMES / RESULTS */}
      <section className="py-24 px-6 bg-[#25252B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tighter uppercase">What Customers See After Deployment</h2>
            <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Reported outcomes from Mactus customers running IIoT in production</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 divide-y md:divide-y-0 divide-gray-800">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="text-center space-y-3 pt-8 md:pt-0 px-6 group flex flex-col justify-center">
                <p className="text-[#e0006e] font-black text-4xl lg:text-5xl tracking-tighter transition-transform duration-300 group-hover:scale-105">{outcome.stat}</p>
                <div>
                  <p className="text-white font-bold text-base tracking-wide max-w-[280px] mx-auto leading-snug">{outcome.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 pt-8 border-t border-white/5">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
              NOTE: When real customer numbers become available (e.g. "reduced HVAC consumption by 14% at Customer X"), we will update the statistics above.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ ACCORDION */}
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
                  <span className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-[#e0006e] text-white' : 'text-[#e0006e]'} flex-shrink-0`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6 text-gray-500 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — PRE-FOOTER CTA STRIP & CROSS LINKS */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col items-center text-center gap-8">
            <h2 className="text-white font-black text-3xl md:text-5xl leading-tight tracking-tighter max-w-4xl">
              Talk to the engineers who'll architect the IIoT layer over your existing plant, <span className="text-[#e0006e]">not propose a rip-and-replace.</span>
            </h2>
            
            <a href="/contact-us/" className="mt-4 bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl flex items-center gap-3 whitespace-nowrap">
              Request an IIoT Assessment &rarr;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IIoT;
