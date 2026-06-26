import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import lowImg1 from '../../assets/images/Lowvoltagesystems/iStock-535197853-scaled-ra3ga84zsehh5dxfkr5dg058a1x325tlcqxvml292o.jpg';
import lowImg2 from '../../assets/images/Lowvoltagesystems/iStock-803960996-scaled-ra3ga84zsehh5dxfkr5dg058a1x325tlcqxvml292o.jpg';
import lowImg3 from '../../assets/images/Lowvoltagesystems/iStock-528296984-scaled-ra3ga84zsehh5dxfkr5dg058a1x325tlcqxvml292o.jpg';
import lowImg4 from '../../assets/images/Lowvoltagesystems/door-interlock-ra3ga84zseh6x39aept56g8834ozf7u0206ym3srjw.png';
import lowImg5 from '../../assets/images/Lowvoltagesystems/iStock-146878726-scaled-ra3ga84zseh9zkuxk4m0gilq57gm43mog10mx1s0eq.jpg';
import lowImg6 from '../../assets/images/Lowvoltagesystems/pharma-camera-ra3ga84zseh85aaqva4ow2s0wrefp65h0ex8c2znw8.png';
import lowImg7 from '../../assets/images/Lowvoltagesystems/centrol-clock-system-ra3ga84zsehh5dxfkr5dg058a1x325tlcqxvml292o.png';
import lowImg8 from '../../assets/images/Lowvoltagesystems/gas-detection-created-1-ra3ga84zsehh5dxfkr5dg058a1x325tlcqxvml292o.png';
import lowImg9 from '../../assets/images/Lowvoltagesystems/img_1.png';

// ── Shared design tokens (identical to SACS page) ────────────────────────────

const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-5 mt-2">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight relative pb-3 inline-block">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

// ── System data ───────────────────────────────────────────────────────────────

const systems = [
  {
    title: 'Fire Alarm System',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
    image: lowImg1,
    desc: 'Mactus designs and integrates addressable fire alarm systems compliant with NBC and local fire safety codes, engineered for the unique demands of pharmaceutical manufacturing and cleanroom environments. Each zone is mapped to your facility layout, enabling precise identification of alarm origins and rapid response protocols. Our systems integrate seamlessly with BMS and emergency response infrastructure, ensuring that every second counts when it matters most.',
  },
  {
    title: 'Public Addressing System',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    image: lowImg2,
    desc: 'Our PA systems are engineered to deliver intelligible, high-clarity voice communication across large and acoustically challenging facilities — including noisy manufacturing floors, warehouse areas, and multi-floor office complexes. Pre-recorded evacuation messages, live broadcast zones, and zonal paging ensure that the right message reaches the right area instantly. This is a critical life-safety layer that Mactus integrates with fire alarm and BMS systems for coordinated emergency response.',
  },
  {
    title: 'Access Controlling System',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    image: lowImg3,
    desc: 'Mactus deploys enterprise-grade access control systems using RFID, biometrics, and smart card technology to enforce entry restrictions across regulated zones, server rooms, and restricted production areas. All access events are time-stamped, logged, and exportable — providing the audit-ready records essential for CGMP, FDA, and ISO compliance. Integration with HRMS and training databases ensures only currently certified personnel can access designated areas.',
  },
  {
    title: 'Door Interlocking System',
    icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z',
    image: lowImg4,
    desc: 'Cleanroom integrity depends on maintaining precise pressure differentials, and our door interlocking systems ensure that only one door in an airlock can open at any given time — preventing cross-contamination and uncontrolled airflow between classified zones. Mactus systems support both mechanical and electronic interlocking with configurable logic for Grade A/B/C/D environments. Every interlock event is logged, making these systems a core component of your 21 CFR Part 11 and EU GMP compliance stack.',
  },
  {
    title: 'Emergency Talk Back System',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    image: lowImg5,
    desc: 'In a facility emergency, clear two-way communication between control rooms, floor personnel, and security is not optional — it is life-critical. Mactus installs dedicated emergency talk-back stations at strategic locations, enabling hands-free, noise-cancelling intercom communication that functions independently of the main telephony infrastructure. These systems are designed to remain operational during power failures via UPS backup, and can be integrated with fire alarm and CCTV systems for unified incident management.',
  },
  {
    title: 'Closed Circuit Television (CCTV)',
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.867v6.266a1 1 0 01-1.447.902L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    image: lowImg6,
    desc: 'Mactus designs and installs IP-based CCTV surveillance systems with high-resolution cameras, intelligent video analytics, and centralised NVR/DVR recording infrastructure suitable for both indoor cleanroom corridors and outdoor perimeter security. Camera placements are mapped to your facility\'s risk zones — including entry points, server rooms, production floors, and material airlocks — ensuring comprehensive coverage with no blind spots. Footage is retained and stored in compliance with regulatory and internal audit requirements.',
  },
  {
    title: 'Central Clock System',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    image: lowImg7,
    desc: 'Accurate, synchronised timekeeping is a fundamental GMP requirement — every batch record, audit trail, and electronic signature depends on a consistent, traceable time source. Mactus installs NTP-based master clock systems that synchronise all facility clocks, SCADA timestamps, access control logs, and BMS events to a single authoritative time reference. This eliminates discrepancies between system logs and ensures that your data integrity posture is unassailable during regulatory inspections.',
  },
  {
    title: 'Gas Detection System',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1M9 9h6',
    image: lowImg8,
    desc: 'Pharmaceutical and industrial facilities routinely work with flammable solvents, toxic gases, and oxygen-displacing agents — making a reliable gas detection system a non-negotiable safety investment. Mactus integrates fixed-point and addressable gas detectors calibrated for your specific hazardous substances, with real-time alarming, automatic ventilation activation, and BMS integration to isolate affected zones before a hazard escalates. Our systems comply with ATEX, IEC, and relevant Indian safety standards, providing documented evidence of safety compliance for insurance and regulatory audits.',
  },
];

const whyPoints = [
  {
    title: 'End-to-End Integration Expertise',
    desc: 'Mactus designs all Low Voltage Systems to work as a unified, interoperable infrastructure — not as isolated point solutions. Fire, access, CCTV, and BMS are integrated at the control layer, eliminating data silos and reducing operational complexity.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Regulatory Compliance by Design',
    desc: 'Every system we deploy is engineered to meet the audit requirements of CGMP, USFDA 21 CFR Part 11, WHO-GMP, and EU GMP Annex 11. Documentation packages — including IQ/OQ/PQ protocols — are provided as standard deliverables.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Single-Vendor Accountability',
    desc: 'Working with multiple contractors across safety and security systems creates coordination gaps and accountability voids. Mactus serves as the single point of responsibility — from design and supply through to installation, commissioning, and validation.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
  },
  {
    title: 'Long-Term Support & AMC',
    desc: 'Our commitment extends well beyond project handover. Mactus offers structured Annual Maintenance Contracts (AMC), preventive maintenance schedules, and a dedicated support team to keep your safety infrastructure performing reliably — year after year.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

// ── Page Component ────────────────────────────────────────────────────────────

const LowVoltageSystems = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What are Low Voltage Systems (LVS) in industrial facilities?",
      answer: "Low Voltage Systems (LVS), also known as Extra-Low Voltage (ELV) systems, refer to safety, security, and communication infrastructure operating at lower voltages (typically under 50V AC or 120V DC ripple-free). These include fire alarm systems, public addressing systems, access control, door interlocking, CCTV surveillance, emergency talkback, central clock, and gas detection systems."
    },
    {
      question: "Why is integration between different Low Voltage Systems important?",
      answer: "Integrating LVS systems eliminates operational silos and enables automated emergency protocols. For example, when a fire alarm is triggered, the integration can automatically activate public announcements, release access-controlled exit doors, display corresponding CCTV camera feeds on security consoles, and adjust HVAC airflow via the BMS to contain smoke."
    },
    {
      question: "Are Mactus Low Voltage Systems compliant with pharmaceutical regulations?",
      answer: "Yes. For pharmaceutical and biotech environments, compliance is built in. Our access control and door interlocking systems are designed to comply with USFDA 21 CFR Part 11 and EU GMP Annex 11. We maintain detailed audit logs for all security and access events, and provide validation documentation including IQ, OQ, and PQ protocols."
    },
    {
      question: "What standard protocols do you support for system integration?",
      answer: "We support industry-standard communication protocols like Modbus, BACnet, TCP/IP, and standard dry-contact relays. This allows us to interface LVS components directly with your existing Building Management System (BMS), SCADA, PLCs, or centralized security dashboard."
    },
    {
      question: "Do we need to replace our existing alarm or safety systems to work with Mactus?",
      answer: "Not necessarily. Mactus specializes in brownfield integration. We can interface your legacy systems (e.g., existing fire alarm panels or CCTV networks) to a modern control layer, adding new components only where required to meet compliance or safety guidelines."
    },
    {
      question: "What support and maintenance options do you offer for LVS?",
      answer: "Mactus offers comprehensive post-installation support, including customized Annual Maintenance Contracts (AMCs), periodic calibration (especially for gas detection systems), software updates, and preventive maintenance checks to ensure your life-safety and security infrastructure is fully operational 24/7."
    }
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
      { "@type": "ListItem", "position": 2, "name": "Low Voltage Systems", "item": "https://mactus.in/low-voltage-systems/" }
    ]
  };

  useEffect(() => {
    document.title = 'Low Voltage Systems (LVS) | Safety & Security Infrastructure | Mactus';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Mactus Automation designs, integrates, and commissions Low Voltage Systems (LVS) for pharma and industrial facilities — fire alarms, access control, door interlocks, CCTV, and gas detection.');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        @keyframes reveal-up {
          0%   { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0);     }
          50%       { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .animate-reveal-up { animation: reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .shimmer-text {
          background: linear-gradient(90deg,#e0006e 0%,#ff4b9f 50%,#e0006e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .animate-fade-in { animation: fade-in 0.5s ease forwards; }
        .card-hover {
          transition: box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.07);
          border-color: rgba(224,0,110,0.15);
        }
        .hero-image-frame {
          position: relative;
        }
        .hero-image-frame::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 2rem;
          background: linear-gradient(135deg, rgba(224,0,110,0.4) 0%, rgba(224,0,110,0.05) 60%, transparent 100%);
          z-index: 0;
        }
        .hero-image-frame img {
          position: relative;
          z-index: 1;
        }
        .sys-card-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 1.25rem 1.25rem 0 0;
          display: block;
          flex-shrink: 0;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#25252B] py-12 md:py-14 px-6 ml-[-5px] overflow-hidden min-h-[72vh] flex items-center">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0" />

        {/* Decorative vertical line accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#e0006e]/40 to-transparent z-10" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left: text */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]" />
                </span>
                SYSTEM INTEGRATION · LOW VOLTAGE SYSTEMS
              </div>

              {/* Heading */}
              <h1 className="text-white font-black leading-[1.05] tracking-tighter" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
                <div className="overflow-hidden">
                  <span
                    className="animate-reveal-up block"
                    style={{ animationDelay: '0.1s' }}
                  >
                    Safety Security
                  </span>
                </div>
                <div className="overflow-hidden -mt-2">
                  <span
                    className="animate-reveal-up block text-[#e0006e]"
                    style={{ animationDelay: '0.2s' }}
                  >
                    Smart Infrastructure.
                  </span>
                </div>
              </h1>

              {/* Intro */}
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[540px] font-medium opacity-90">
                Mactus Automation is a trusted integrator of Low Voltage Systems for pharmaceutical, biotech, and industrial facilities — designing, installing, and commissioning safety and security infrastructure that meets the highest regulatory and operational standards. From fire detection and access control to gas monitoring and emergency communication, our systems are engineered to protect people, assets, and compliance records with equal rigour. Every LVS deployment is backed by full documentation and post-installation support, so your facility remains audit-ready from day one.
              </p>
            </div>

            {/* Right: hero image */}
            <div className="flex items-center justify-center mt-12 lg:mt-0">
              <div className="hero-image-frame w-full max-w-[520px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60">
                <img
                  src={lowImg9}
                  alt="Low Voltage Systems – Mactus Automation"
                  className="w-full h-auto object-cover rounded-[2rem]"
                  style={{ display: 'block' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SYSTEMS GRID ─────────────────────────────────────────────────────── */}
      <section id="systems" className="py-12 md:py-14 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Our Low Voltage Systems</SectionTitle>
          <p className="text-center text-gray-500 text-base max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Eight integrated safety and security disciplines, deployed as a cohesive infrastructure suite for regulated manufacturing and industrial environments.
          </p>

          <div className="grid px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
            {systems.map((sys, i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] border border-gray-100 card-hover group overflow-hidden flex flex-col"
              >
                {/* System image */}
                <div className="w-50% h-50 overflow-hidden flex-shrink-0">
                  <img
                    src={sys.image}
                    alt={sys.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card body */}
                <div className="flex gap-6 p-8 flex-1">
                  {/* Icon block */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#e0006e]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#e0006e] transition-all duration-500">
                      <svg className="w-7 h-7 text-[#e0006e] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={sys.icon} />
                      </svg>
                    </div>
                    {/* System number */}
                    <p className="text-center text-[10px] font-black text-gray-300 tracking-widest mt-2">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-lg text-gray-900 mb-3 group-hover:text-[#e0006e] transition-colors duration-300 leading-tight">
                      {sys.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {sys.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MACTUS ───────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Why Choose Mactus for Low Voltage Systems</SectionTitle>
          <p className="text-center text-gray-500 text-base max-w-xl mx-auto mb-14 leading-relaxed font-medium">
            Regulated-industry clients choose Mactus because we understand that safety infrastructure is not just an engineering requirement — it is a compliance and business continuity imperative.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPoints.map((pt, i) => (
              <div
                key={i}
                className="flex gap-6 p-8 rounded-[2.5rem] border border-gray-100 bg-gray-50 card-hover group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#e0006e]/10 flex items-center justify-center group-hover:bg-[#e0006e] transition-all duration-500">
                  <svg className="w-7 h-7 text-[#e0006e] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={pt.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-lg text-gray-900 mb-2 group-hover:text-[#e0006e] transition-colors duration-300">
                    {pt.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-14 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="space-y-4 mt-4">
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

      <Footer />
    </div>
  );
};

export default LowVoltageSystems;