import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const QualityPolicy = () => {
  useState(() => {
    document.title = "Quality Policy | Mactus";
  }, []);

  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      heading: "Excellence in Execution",
      body: "We follow a structured approach — starting with the voice of the customer, followed by requirement capture, design, procurement, implementation, testing, and commissioning. Each project is backed by comprehensive documentation, ensuring long-term system maintainability."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      heading: "Regulatory Compliance & Industry Standards",
      body: "We adhere to global GMP, FDA 21 CFR Part 11, ISO, and other industry regulations to ensure our solutions meet the highest standards of quality and safety."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      heading: "Innovation & Continuous Improvement",
      body: "We believe the market demands continual improvement, and we strive to refine our services to meet evolving client needs. We take pride in delivering automation solutions that are not only reliable but also constantly evolving to incorporate the latest advancements."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      heading: "Expertise & Collaboration",
      body: "Founded by former directors of reputed international organizations, Mactus brings global expertise and best practices to every project. We work closely with Indian and international companies to provide cutting-edge automation solutions that drive technological innovation."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      heading: "Sustainable & Future-Ready Solutions",
      body: "We focus on delivering energy-efficient and sustainable automation systems that help businesses optimize operations while minimizing environmental impact."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20 overflow-x-hidden">
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
      <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center text-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          <h1 className="text-white font-black text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tighter uppercase italic flex flex-col items-center">
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>Quality</span>
            </span>
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block shimmer-text pr-10" style={{ animationDelay: '0.4s' }}>Policy</span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium opacity-80 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            At Mactus Automation Pvt. Ltd., we are committed to delivering high-quality automation solutions that enhance efficiency, compliance, and reliability. Our approach integrates best practices in product design and project execution, ensuring excellence from requirement analysis to commissioning.
          </p>
        </div>
      </section>

      {/* SECTION 2 — QUALITY PILLARS (PREMIUM LIGHT DESIGN) */}
      <section className="py-32 px-6 bg-[#fafafa] relative overflow-hidden border-b border-gray-100">
        {/* Abstract Light Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[50rem] h-[50rem] rounded-full bg-[#e0006e]/[0.03] blur-[5rem]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[50rem] h-[50rem] rounded-full bg-blue-500/[0.02] blur-[5rem]"></div>
        </div>

        {/* Subtle background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none overflow-hidden flex items-center justify-center">
          <span className="text-[12rem] md:text-[24rem] font-black text-gray-900 leading-none absolute whitespace-nowrap">QUALITY</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className={`animate-reveal-up group relative bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-700 hover:-translate-y-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(224,0,110,0.15)] hover:border-[#e0006e]/20 ${i % 3 === 1 ? 'lg:mt-12' : i % 3 === 2 ? 'lg:mt-24' : ''}`}
                style={{ animationDelay: `${0.2 + (i * 0.1)}s` }}
              >
                {/* Background accent on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#e0006e]/5 to-transparent rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#e0006e] to-[#ff4b9f] group-hover:w-full transition-all duration-700 ease-out"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#e0006e] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-[#e0006e]">
                    <div className="text-[#e0006e] group-hover:text-white transition-colors duration-500">
                      {pillar.icon}
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <h3 className="text-gray-900 font-black text-2xl md:text-3xl uppercase tracking-tighter leading-tight group-hover:text-[#e0006e] transition-colors duration-500">
                      {pillar.heading}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium transition-colors duration-500 group-hover:text-gray-800">
                      {pillar.body}
                    </p>
                  </div>
                </div>

                {/* Index number with outline effect */}
                <div className="absolute bottom-4 right-6 pointer-events-none">
                  <span className="text-7xl font-black text-transparent opacity-10 group-hover:opacity-30 transition-all duration-700 transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2 select-none inline-block" style={{ WebkitTextStroke: '2px #e0006e' }}>
                    0{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CLOSING STATEMENT BLOCK */}
      <section className="py-32 px-6 bg-[#1a1a1a] text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#e0006e_1.5px,transparent_1.5px)] bg-[size:40px_40px] opacity-[0.05]"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <div className="space-y-8">
            <svg className="w-20 h-20 text-[#e0006e] mx-auto opacity-20 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 8.44772 1.44772 8 2 8H5C6.10457 8 7 7.10457 7 6V5C7 3.89543 6.10457 3 5 3H0C-1.10457 3 -2 3.89543 -2 5V15C-2 18.866 1.13401 22 5 22H7V21L7 18C7 16.8954 6.10457 16 5 16H2C1.44772 16 1 15.5523 1 15Z" />
            </svg>
            <h2 className="text-white font-black text-4xl md:text-6xl leading-[1.1] tracking-tighter italic">
              "At Mactus Automation, quality is our priority, and we are dedicated to <span className="text-[#e0006e]">exceeding customer expectations.</span>"
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <div className="h-1 w-24 bg-[#e0006e] rounded-full"></div>
              <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs md:text-sm">
                Let's build a smarter, automated future together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityPolicy;
