import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import bmsImg from '../assets/images/BMSPage/bms_1.png';
import emsImg from '../assets/images/EMSPage/ems_1.png';
import lvsImg from '../assets/images/Lowvoltagesystems/img_1.png';

const SectionTitle = ({ children, eyebrow, isDark, center = true }) => (
  <div className={`flex flex-col ${center ? 'items-center' : 'items-start'} w-full mb-12 mt-8`}>
    {eyebrow && (
      <span className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase mb-4">{eyebrow}</span>
    )}
    <h2 className={`${center ? 'text-center' : ''} font-black text-3xl md:text-5xl tracking-tighter relative pb-4 inline-block ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

const integrations = [
  {
    id: 'bms',
    tag: 'BMS',
    name: 'Building Management System',
    positioning: 'Every facility system needs one reliable control layer.',
    description: 'Mactus delivers Building Management Systems that integrate HVAC, utilities, fire, access control, and energy metering into one real-time view. Designed for pharmaceutical, industrial, and commercial facilities, each deployment is scoped around uptime, visibility, and long-term maintainability.',
    capabilities: [
      'Centralized HVAC, utility, fire, access, and energy monitoring',
      'Open protocol integration with BACnet, Modbus, LON, and existing controllers',
      'Alarm handling, trends, reports, and operator dashboards',
      'Brownfield-friendly integration without unnecessary equipment replacement',
    ],
    image: bmsImg,
    link: '/system-integration/building-management-system',
  },
  {
    id: 'ems',
    tag: 'EMS',
    name: 'Environmental Monitoring System',
    positioning: 'BMS keeps the environment in control. EMS proves it stayed in control.',
    description: 'Mactus EMS continuously monitors temperature, relative humidity, and differential pressure across cleanrooms, storage rooms, and production zones. Data is logged continuously with alarms and audit-ready reports for QA review and regulatory inspection.',
    capabilities: [
      'Continuous temperature, RH, and differential pressure monitoring',
      'Local room alarms plus centralized alarm management',
      'Immutable data logging with audit-ready reporting',
      'GMP-approved devices and validation-ready documentation',
    ],
    image: emsImg,
    link: '/system-integration/environmental-monitoring-system',
  },
  {
    id: 'lvs',
    tag: 'LVS',
    name: 'Low Voltage Systems',
    positioning: 'Safety, security, and communication systems work best when they work together.',
    description: 'Mactus designs and integrates low voltage infrastructure for regulated facilities, including fire alarm, public address, access control, door interlocking, emergency talk-back, CCTV, central clock, and gas detection systems.',
    capabilities: [
      'Fire alarm, PA, access control, CCTV, and emergency communication',
      'Door interlocking and central clock systems for GMP operations',
      'Gas detection and safety alarming integrated with facility systems',
      'Single-vendor accountability from design through commissioning',
    ],
    image: lvsImg,
    link: '/system-integration/low-voltage-systems',
  },
];

const tableRows = [
  {
    system: 'BMS',
    link: '/system-integration/building-management-system',
    scope: 'HVAC, utilities, fire, access, energy, alarms',
    users: 'Facilities, Engineering, Maintenance',
    role: 'Controls and optimizes building operations',
    deploy: '12-20 weeks',
  },
  {
    system: 'EMS',
    link: '/system-integration/environmental-monitoring-system',
    scope: 'Temperature, RH, differential pressure',
    users: 'QA, Production, Engineering',
    role: 'Records audit-ready environmental evidence',
    deploy: '10-16 weeks',
  },
  {
    system: 'LVS',
    link: '/system-integration/low-voltage-systems',
    scope: 'Fire, PA, access, CCTV, interlock, clock, gas detection',
    users: 'Safety, Security, Facilities',
    role: 'Protects people, assets, and critical compliance events',
    deploy: 'Scope-based',
  },
];

const IntegrationCard = ({ integration, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div
  className={`flex flex-col ${
    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
  } items-stretch bg-white rounded-[2.5rem] overflow-hidden
  border border-gray-100
  shadow-[0_8px_40px_rgba(0,0,0,0.06)]
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
  transition-all duration-500 group`}
>
  {/* Image section */}
  <div className="w-full lg:w-7/12 relative overflow-hidden bg-gray-50 min-h-[320px] lg:min-h-[500px]">
    <img
      src={integration.image}
      alt={integration.name}
      className="
        absolute inset-0
        w-full h-full
        object-fill
        transition-transform duration-700
        group-hover:scale-[1.02]
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

    <div className="absolute top-5 left-5">
      <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#e0006e] text-white text-[11px] font-black tracking-[0.15em] uppercase shadow-lg">
        {integration.tag}
      </span>
    </div>
  </div>

  {/* Content section */}
  <div className="w-full lg:w-5/12 p-8 md:p-10 flex flex-col justify-center gap-5">
    <div>
      <p className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase mb-2">
        {integration.tag}
      </p>

      <h3 className="font-black text-2xl md:text-3xl text-gray-900 tracking-tight leading-snug mb-3 group-hover:text-[#e0006e] transition-colors duration-300">
        {integration.name}
      </h3>

      <p className="text-[#e0006e] font-medium text-sm italic leading-relaxed mb-4">
        "{integration.positioning}"
      </p>

      <p className="text-gray-500 leading-relaxed font-medium text-sm">
        {integration.description}
      </p>
    </div>

    <ul className="space-y-2.5">
      {integration.capabilities.map((capability, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-[#e0006e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              className="w-3 h-3 text-[#e0006e]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <span className="text-gray-600 text-sm font-medium leading-relaxed">
            {capability}
          </span>
        </li>
      ))}
    </ul>

    <div className="pt-2">
      <a
        href={integration.link}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#e0006e] text-[#e0006e] font-black text-xs tracking-widest uppercase hover:bg-[#e0006e] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(224,0,110,0.25)]"
      >
        Learn More

        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</div>
  );
};

const SystemIntegrationPage = () => {
  useEffect(() => {
    document.title = 'System Integration | BMS EMS Low Voltage Systems | Mactus Automation';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Mactus delivers system integration for BMS, EMS, and Low Voltage Systems for pharmaceutical, industrial, and commercial facilities with design, commissioning, documentation, and support.');
  }, []);

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
        .animate-reveal-up { animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .shimmer-text {
          background: linear-gradient(90deg, #e0006e 0%, #ff4b9f 50%, #e0006e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <section className="relative bg-[#25252B] py-20 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.15em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
              </span>
              BMS + EMS + LVS INTEGRATION
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>Integrated facility</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up text-[#e0006e] inline-block" style={{ animationDelay: '0.2s' }}>systems for regulated</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.3s' }}>manufacturing sites</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[540px] font-medium opacity-80">
              Three integration disciplines built around the same outcome: controlled facilities, visible operations, and documentation your QA and engineering teams can trust.
            </p>
          </div>

          <div className="relative animate-fade-in-right  animate-float">
            <ImageCarousel images={[bmsImg, emsImg, lvsImg]} />
          </div>
        </div>
      </section>

      <section className="py-16 px-6  border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="THE FULL RANGE">Our System Integration Range</SectionTitle>
          <p className="text-center text-gray-500 font-medium text-base -mt-6 mb-12">
            Three connected system layers. One accountable integration partner.
          </p>

          <div className="space-y-10">
            {integrations.map((integration, index) => (
              <IntegrationCard key={integration.id} integration={integration} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6  border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="DECISION AID">Which integration closes which gap?</SectionTitle>
          <p className="text-center text-gray-500 font-medium text-base -mt-6 mb-10">
            Each system integration category addresses a different facility risk, from control to proof to safety.
          </p>

          <div className="flex items-center justify-end gap-2 mb-3 text-gray-400 text-[11px] font-bold tracking-widest uppercase lg:hidden">
            <span>Scroll to see all</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <table className="w-full text-left border-collapse" style={{ minWidth: '760px' }}>
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">System</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Integrated Scope</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Primary Users</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Core Role</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Typical Deployment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableRows.map((row, i) => (
                  <tr key={row.system} className={`group transition-colors hover:bg-[#e0006e]/5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-5">
                      <a href={row.link} className="font-black text-[#e0006e] hover:underline text-sm">{row.system}</a>
                    </td>
                    <td className="px-6 py-5 text-gray-700 font-medium text-sm">{row.scope}</td>
                    <td className="px-6 py-5 text-gray-500 font-medium text-sm">{row.users}</td>
                    <td className="px-6 py-5 text-gray-500 font-medium text-xs leading-relaxed">{row.role}</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 font-black text-[10px] tracking-widest uppercase whitespace-nowrap">
                        {row.deploy}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#25252B] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                Planning a facility integration project across BMS, EMS, or Low Voltage Systems?
              </h2>
              <p className="text-gray-400 font-medium leading-relaxed">
                Our team can map your facility scope, integration points, documentation needs, and commissioning path.
              </p>
            </div>
            <a
              href="/contact-us/"
              className="bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap"
            >
              Talk to an Integration Expert
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

export default SystemIntegrationPage;
