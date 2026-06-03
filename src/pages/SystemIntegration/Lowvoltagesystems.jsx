import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// ── Shared design tokens (identical to SACS™ page) ────────────────────────────

const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-6 mt-8">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl tracking-tight relative pb-3 inline-block">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full" />
    </h2>
  </div>
);

// ── System data ───────────────────────────────────────────────────────────────

const systems = [
  {
    title: 'Fire Alarm System',
    icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
    desc: 'Mactus designs and integrates addressable fire alarm systems compliant with NBC and local fire safety codes, engineered for the unique demands of pharmaceutical manufacturing and cleanroom environments. Each zone is mapped to your facility layout, enabling precise identification of alarm origins and rapid response protocols. Our systems integrate seamlessly with BMS and emergency response infrastructure, ensuring that every second counts when it matters most.',
  },
  {
    title: 'Public Addressing System',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    desc: 'Our PA systems are engineered to deliver intelligible, high-clarity voice communication across large and acoustically challenging facilities — including noisy manufacturing floors, warehouse areas, and multi-floor office complexes. Pre-recorded evacuation messages, live broadcast zones, and zonal paging ensure that the right message reaches the right area instantly. This is a critical life-safety layer that Mactus integrates with fire alarm and BMS systems for coordinated emergency response.',
  },
  {
    title: 'Access Controlling System',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    desc: 'Mactus deploys enterprise-grade access control systems using RFID, biometrics, and smart card technology to enforce entry restrictions across regulated zones, server rooms, and restricted production areas. All access events are time-stamped, logged, and exportable — providing the audit-ready records essential for CGMP, FDA, and ISO compliance. Integration with HRMS and training databases ensures only currently certified personnel can access designated areas.',
  },
  {
    title: 'Door Interlocking System',
    icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z',
    desc: 'Cleanroom integrity depends on maintaining precise pressure differentials, and our door interlocking systems ensure that only one door in an airlock can open at any given time — preventing cross-contamination and uncontrolled airflow between classified zones. Mactus systems support both mechanical and electronic interlocking with configurable logic for Grade A/B/C/D environments. Every interlock event is logged, making these systems a core component of your 21 CFR Part 11 and EU GMP compliance stack.',
  },
  {
    title: 'Emergency Talk Back System',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    desc: 'In a facility emergency, clear two-way communication between control rooms, floor personnel, and security is not optional — it is life-critical. Mactus installs dedicated emergency talk-back stations at strategic locations, enabling hands-free, noise-cancelling intercom communication that functions independently of the main telephony infrastructure. These systems are designed to remain operational during power failures via UPS backup, and can be integrated with fire alarm and CCTV systems for unified incident management.',
  },
  {
    title: 'Closed Circuit Television (CCTV)',
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.867v6.266a1 1 0 01-1.447.902L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    desc: 'Mactus designs and installs IP-based CCTV surveillance systems with high-resolution cameras, intelligent video analytics, and centralised NVR/DVR recording infrastructure suitable for both indoor cleanroom corridors and outdoor perimeter security. Camera placements are mapped to your facility\'s risk zones — including entry points, server rooms, production floors, and material airlocks — ensuring comprehensive coverage with no blind spots. Footage is retained and stored in compliance with regulatory and internal audit requirements.',
  },
  {
    title: 'Central Clock System',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    desc: 'Accurate, synchronised timekeeping is a fundamental GMP requirement — every batch record, audit trail, and electronic signature depends on a consistent, traceable time source. Mactus installs NTP-based master clock systems that synchronise all facility clocks, SCADA timestamps, access control logs, and BMS events to a single authoritative time reference. This eliminates discrepancies between system logs and ensures that your data integrity posture is unassailable during regulatory inspections.',
  },
  {
    title: 'Gas Detection System',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1M9 9h6',
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
  useState(() => {
    document.title = 'Low Voltage Systems (LVS) | Safety & Security Infrastructure | Mactus';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
      <Navbar />

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
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#1a1a1a] py-16 px-6 overflow-hidden min-h-[72vh] flex items-center">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0" />

        {/* Decorative vertical line accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#e0006e]/40 to-transparent z-10" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]" />
                </span>
                LOW VOLTAGE SYSTEMS
              </div>

              {/* Heading */}
               <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl leading-none tracking-tighter">

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

              {/* CTAs */}
              <div className="flex flex-row items-center gap-4 pt-2 flex-wrap">
                <a
                  href="/contact-us/"
                  className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap"
                >
                  Request a Consultation
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#systems"
                  className="px-7 py-4 bg-white/5 text-white font-extrabold rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#e0006e]/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap"
                >
                  Explore Systems
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: stat pills */}
            <div className="hidden lg:flex flex-col gap-5 items-end">
              {[
                { value: '8', label: 'Integrated Safety & Security Systems' },
                { value: 'CGMP', label: 'Compliant Deployments' },
                { value: '1', label: 'Vendor — Full Project Accountability' },
                { value: 'AMC', label: 'Long-Term Support Contracts Available' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 hover:border-[#e0006e]/30 hover:bg-white/8 transition-all duration-300 w-full max-w-sm"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="text-[#e0006e] font-black text-3xl tracking-tight">{s.value}</span>
                  <span className="text-gray-400 text-sm font-bold leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS GRID ─────────────────────────────────────────────────────── */}
      <section id="systems" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Our Low Voltage Systems</SectionTitle>
          <p className="text-center text-gray-500 text-base max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Eight integrated safety and security disciplines, deployed as a cohesive infrastructure suite for regulated manufacturing and industrial environments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {systems.map((sys, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 card-hover group flex gap-6"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY MACTUS ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
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

      {/* ── COMPLIANCE STRIP ─────────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-8">
            Designed for Compliance With
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['CGMP', 'USFDA 21 CFR Part 11', 'WHO-GMP', 'EU GMP Annex 11', 'NBC Fire Safety', 'ATEX / IEC Gas Safety', 'ISO 14644 Cleanroom'].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-black tracking-wider hover:border-[#e0006e]/30 hover:text-[#e0006e] transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRE-FOOTER CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          {/* Dot grid inside CTA card */}
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <span className="text-[#e0006e] font-extrabold text-xs tracking-[0.4em] uppercase block">
                Ready to Get Started?
              </span>
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                Plan your facility's safety infrastructure with Mactus.{' '}
                <span className="text-[#e0006e]">Let's build it right, the first time.</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Our engineering team will assess your facility requirements and recommend an integrated Low Voltage Systems solution tailored to your compliance obligations and operational needs.
              </p>
            </div>
            <a
              href="/contact-us/"
              className="bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl flex items-center gap-3 whitespace-nowrap hover:-translate-y-1 duration-300"
            >
              Request a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LowVoltageSystems;