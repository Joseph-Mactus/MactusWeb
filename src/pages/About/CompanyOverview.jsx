import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const SectionTitle = ({ children, light = false }) => (
  <div className="flex justify-center w-full mb-12 mt-8">
    <h2 className={`text-center ${light ? 'text-[#e0006e]' : 'text-gray-900'} font-black text-3xl md:text-4xl tracking-tighter relative pb-4 inline-block uppercase`}>
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

const CompanyOverview = () => {
  React.useState(() => {
    document.title = "Company Overview | Mactus";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#00d2ff]/20">
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
        .animate-reveal-up {
          animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #e0006e 0%, #ff4b9f 50%, #e0006e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* SECTION 1 — HERO / PAGE TITLE BANNER */}
      <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[50vh] text-center border-b border-white/5">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e0006e]/10 via-transparent to-[#1a1a1a] z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-7xl leading-tight tracking-tighter uppercase italic">
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>Company</span>
            </span>
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block shimmer-text pr-10" style={{ animationDelay: '0.4s' }}>Overview</span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-bold tracking-wide  opacity-80 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            Intelligent Automation for a Compliant World
          </p>
        </div>
      </section>

      {/* SECTION 2 — MISSION / VISION / VALUES (3-column card layout) */}
      <section className="py-24 px-6 bg-[#fafafa] relative overflow-hidden border-b border-gray-100">
        {/* Abstract Light Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-[#e0006e]/[0.03] blur-[5rem]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-500/[0.02] blur-[5rem]"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1 — Mission */}
            <div className="group relative bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(224,0,110,0.15)] hover:border-[#e0006e]/20">
              {/* Background accent on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#e0006e]/5 to-transparent rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#e0006e] to-[#ff4b9f] group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="relative z-10 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#e0006e] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e]">
                <svg className="w-8 h-8 text-[#e0006e] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2.5" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>

              <h3 className="relative z-10 text-gray-900 font-black text-2xl md:text-3xl mb-4 uppercase tracking-tight group-hover:text-[#e0006e] transition-colors duration-500">Mission</h3>
              <p className="relative z-10 text-gray-600 leading-relaxed font-medium transition-colors duration-500 group-hover:text-gray-800">
                "We want to be the trusted leader in intelligent automation solutions, transforming pharmaceutical and industrial processes with cutting-edge technology, compliance excellence, and sustainable innovation."
              </p>
            </div>

            {/* Card 2 — Vision */}
            <div className="group relative bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(224,0,110,0.15)] hover:border-[#e0006e]/20 mt-0 md:mt-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#e0006e]/5 to-transparent rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#e0006e] to-[#ff4b9f] group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="relative z-10 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#e0006e] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e]">
                <svg className="w-8 h-8 text-[#e0006e] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="relative z-10 text-gray-900 font-black text-2xl md:text-3xl mb-4 uppercase tracking-tight group-hover:text-[#e0006e] transition-colors duration-500">Vision</h3>
              <p className="relative z-10 text-gray-600 leading-relaxed font-medium transition-colors duration-500 group-hover:text-gray-800">
                "To empower global industries with future-ready automation that guarantees data integrity, operational efficiency, and unmatched reliability in every critical environment."
              </p>
            </div>

            {/* Card 3 — Core Values */}
            <div className="group relative bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(224,0,110,0.15)] hover:border-[#e0006e]/20 mt-0 md:mt-24">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#e0006e]/5 to-transparent rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#e0006e] to-[#ff4b9f] group-hover:w-full transition-all duration-700 ease-out"></div>

              <div className="relative z-10 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#e0006e] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e]">
                <svg className="w-8 h-8 text-[#e0006e] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="relative z-10 text-gray-900 font-black text-2xl md:text-3xl mb-4 uppercase tracking-tight group-hover:text-[#e0006e] transition-colors duration-500">Core Values</h3>
              <ul className="relative z-10 space-y-4">
                {['Innovation', 'Integrity', 'Excellence', 'Collaboration'].map((value, idx) => (
                  <li key={value} className="flex items-center space-x-4 group/item">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover/item:bg-[#e0006e] group-hover/item:border-[#e0006e] transition-colors duration-300">
                      <span className="text-[#e0006e] group-hover/item:text-white font-black text-sm transition-colors duration-300">0{idx + 1}</span>
                    </div>
                    <span className="text-gray-600 font-bold uppercase tracking-widest text-sm group-hover/item:text-gray-900 transition-colors duration-300">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE OFFER (Product/Service Highlight) */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-gray-900 font-black text-4xl md:text-5xl uppercase tracking-tighter italic">What We Offer</h2>
            <div className="h-1.5 w-20 bg-[#e0006e] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32 justify-items-center text-center">
            {/* Column 1 — Compliance Products */}
            <div className="space-y-10 w-full max-w-sm">
              <div className="text-center group">
                <h3 className="text-gray-900 font-black text-2xl mb-3 uppercase tracking-tight group-hover:text-[#e0006e] transition-colors">Compliance Products</h3>
                <div className="h-1 w-12 bg-[#e0006e] mx-auto transition-all group-hover:w-full"></div>
              </div>
              <ul className="space-y-6">
                {[
                  "Smart Access Control System",
                  "Automated Solution Dispensing System",
                  "Intervention Recording System",
                  "Media Plate Tracking and Management System",
                  "Intravenous Bag Leak Tester (IVBLT)"
                ].map((name, i) => (
                  <li key={i} className="py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-bold text-base">{name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 — System Integration */}
            <div className="space-y-10 w-full max-w-sm">
              <div className="text-center group">
                <h3 className="text-gray-900 font-black text-2xl mb-3 uppercase tracking-tight group-hover:text-[#e0006e] transition-colors">System Integration</h3>
                <div className="h-1 w-12 bg-[#e0006e] mx-auto transition-all group-hover:w-full"></div>
              </div>
              <ul className="space-y-6">
                {[
                  "Building Management System",
                  "Environmental Monitoring System",
                  "Low Voltage Systems"
                ].map((name, i) => (
                  <li key={i} className="py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-bold text-base">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyOverview;
