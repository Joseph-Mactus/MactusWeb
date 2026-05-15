import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Reuse the same SectionTitle component for consistency
const SectionTitle = ({ children }) => (
  <div className="mb-12">
    <div className="w-12 h-1 bg-[#e0006e] mb-4"></div>
    <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight leading-none">
      {children}
    </h2>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-5 text-left flex justify-between items-center gap-4"
      >
        <span className="font-bold text-gray-900 text-base">{question}</span>
        <span className={`w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-3 h-3 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-5 text-gray-500 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function ASDSPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] py-16 px-6 overflow-hidden min-h-[75vh] flex items-center">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[10px] font-black tracking-widest uppercase animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
              </span>
              Automated Solution Dispensing System
            </div>
            
            <h1 className="text-white font-black text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter">
              Every litre precise. <span className="text-[#e0006e]">Every</span> batch compliant.
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[520px] font-medium opacity-80">
              ASDS automates the preparation and dispensing of disinfectants, detergents, IPA, and cleaning solutions with validated concentration control, electronic records, and zero manual calculation dependency.
            </p>

            <div className="flex flex-wrap gap-3">
              {['21 CFR Part 11', 'GMP Compliant', 'Auto Concentration Control', 'Audit Trail Enabled'].map((chip, i) => (
                <div key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/60 text-[9px] font-bold tracking-wider uppercase">
                  {chip}
                </div>
              ))}
            </div>
            
            <div className="flex flex-row items-center gap-4 pt-4 flex-wrap md:flex-nowrap">
              <button className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Request a Demo
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-7 py-4 bg-white/5 text-white font-extrabold rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#e0006e]/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Download Brochure
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hero Right Panel - Dispensing Dashboard Mockup */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#e0006e]/20 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-[#222] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#e0006e]/20 flex items-center justify-center border border-[#e0006e]/30">
                    <svg className="w-4 h-4 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-sm uppercase tracking-wider">Dispensing Dashboard</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Live System Status</p>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[9px] font-black uppercase tracking-widest rounded flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Concentration Verified
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Solution Selected</p>
                  <p className="text-white font-black text-base">IPA 70% v/v</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">Batch ID</p>
                  <p className="text-white font-black text-base">BATCH-240511-A</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Dispensing Progress</p>
                  <div className="text-right">
                    <span className="text-white font-black text-xl">18.4 L</span>
                    <span className="text-gray-500 font-bold text-xs ml-1">/ 25 L</span>
                  </div>
                </div>
                <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-[#e0006e] to-[#ff4d9e] w-[73.6%] rounded-full shadow-[0_0_15px_rgba(224,0,110,0.5)]"></div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                {[
                  { time: '08:42', event: 'Dispensing Started', status: 'primary' },
                  { time: '08:43', event: 'Conductivity Validation Passed', status: 'success' },
                  { time: '08:45', event: 'Operator Signature Applied', status: 'success' },
                  { time: '08:46', event: 'Batch Record Saved', status: 'success' }
                ].map((log, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-[10px] font-bold tracking-tight">
                    <span className="text-gray-500 w-10">{log.time}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${log.status === 'success' ? 'bg-green-500' : 'bg-[#e0006e]'}`}></div>
                    <span className="text-gray-400">{log.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>The Preparedness Gap</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Manual solution preparation creates <span className="text-[#e0006e]">invisible</span> compliance risks
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                In regulated pharmaceutical environments, every cleaning and disinfectant solution must be prepared accurately, documented completely, and traceable instantly. Yet many facilities still rely on handwritten calculations, manual mixing, paper logbooks, and operator-dependent concentration checks — introducing avoidable compliance gaps, wastage, and audit exposure.
              </p>
              <div className="p-8 bg-gray-50 border-l-4 border-[#e0006e] rounded-r-2xl italic text-lg font-bold text-gray-800">
                "The moment dispensing ends, the batch record already exists."
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white uppercase text-[10px] font-black tracking-widest">
                    <th className="p-5 border-r border-white/10">The Challenge</th>
                    <th className="p-5 border-r border-white/10 opacity-60">Manual Preparation</th>
                    <th className="p-5 text-[#e0006e]">With ASDS</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-gray-600">
                  {[
                    ['Concentration accuracy', 'Variable / Manual', 'Validated / Automatic'],
                    ['Batch traceability', 'Paper Logbooks', 'Instant / Digital'],
                    ['Manual calculations', 'High Risk / Frequent', 'Zero Dependency'],
                    ['Operator dependency', 'Critical Factor', 'Process Controlled'],
                    ['Solution wastage', 'Common / Uncontrolled', 'Minimised / Tracked'],
                    ['Audit readiness', 'Days of Retrieval', 'Real-time'],
                    ['Electronic records', 'Non-existent', 'Part 11 Compliant'],
                    ['Disinfectant rotation', 'Manual Management', 'System Managed']
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-5 border-r border-gray-100 text-gray-900">{row[0]}</td>
                      <td className="p-5 border-r border-gray-100 bg-gray-50/50">{row[1]}</td>
                      <td className="p-5 text-[#e0006e] bg-[#e0006e]/5">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Core Capabilities</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Solution Preparation',
                desc: 'Precision mixing of disinfectants and detergents with validated concentration sensors and automated valve control.',
                icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
              },
              {
                title: 'Precision Dispensing Control',
                desc: 'Flow-meter based volume control ensuring exact quantity dispensing for every batch, reducing chemical wastage.',
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              },
              {
                title: 'Electronic Batch Records',
                desc: 'Automatically generated reports for each dispensing cycle, including operator IDs, volumes, and time-stamps.',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              },
              {
                title: 'Audit Trail & Traceability',
                desc: 'Full forensic trail of all user interactions, alarms, and system events, ensuring total data integrity.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Multi-Solution Configuration',
                desc: 'Flexible system recipes to manage various concentrations and solution types (IPA, Detergents, Hydrogen Peroxide).',
                icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
              },
              {
                title: '21 CFR Part 11 Compliance',
                desc: 'Designed with pharma regulatory compliance at its core, featuring digital signatures and secure login controls.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              }
            ].map((f, i) => (
              <div key={i} className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#e0006e]/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e0006e]/10 transition-colors">
                  <svg className="w-6 h-6 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#e0006e] transition-colors">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{f.desc}</p>
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
            <div className="flex-1 space-y-12">
              {[
                { n: '01', t: 'SELECT', d: 'Operator chooses the solution recipe and batch volume from the HMI.' },
                { n: '02', t: 'VALIDATE', d: 'System validates raw materials and ensures concentration sensors are ready.' },
                { n: '03', t: 'DISPENSE', d: 'Automated pumps dispense solution with precise flow control.' },
                { n: '04', t: 'VERIFY', d: 'Real-time conductivity/concentration verification of the dispensed batch.' },
                { n: '05', t: 'RECORD', d: 'Digital signature applied and electronic batch record (EBR) generated.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-4xl font-black text-gray-100 group-hover:text-[#e0006e]/10 transition-colors leading-none">{step.n}</div>
                  <div className="space-y-1">
                    <h5 className="font-black text-gray-900 text-lg tracking-tight uppercase">{step.t}</h5>
                    <p className="text-gray-500 text-sm font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-20 bg-[#e0006e]/5 blur-full rounded-full"></div>
              <div className="relative bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-inner">
                {/* Visual Representation of Workflow */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-[#e0006e] font-black text-xs mb-2">VALIDATION</div>
                    <div className="h-2 w-full bg-green-500/20 rounded-full mb-3"><div className="h-full bg-green-500 w-full rounded-full"></div></div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Concentration: OK</div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-gray-400 font-black text-xs mb-2 uppercase">Dispensing</div>
                    <div className="h-2 w-full bg-gray-100 rounded-full mb-3"><div className="h-full bg-[#e0006e] w-2/3 rounded-full animate-pulse"></div></div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Volume: 18.4L / 25L</div>
                  </div>
                  <div className="col-span-2 p-6 bg-gray-900 rounded-2xl shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white font-black text-xs uppercase tracking-widest">Audit Trail</div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2 opacity-60">
                      <div className="h-1.5 bg-white/10 rounded w-3/4"></div>
                      <div className="h-1.5 bg-white/10 rounded w-1/2"></div>
                      <div className="h-1.5 bg-white/10 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionTitle><span className="text-white">Industry Impact</span></SectionTitle>
              <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
                Validated solution control for <span className="text-[#e0006e]">high-stakes</span> pharma operations
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                From sterile fill-finish lines to vaccine manufacturing, the accuracy of cleaning and sanitization solutions is non-negotiable. ASDS provides the validated bridge between manual preparation and digital compliance.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  'Sterile injectable manufacturing',
                  'Cleanroom sanitization',
                  'Biologics & vaccine production',
                  'Equipment cleaning (CIP/COP)',
                  'GMP manufacturing facilities',
                  'Cell & gene therapy production',
                  'API manufacturing plants',
                  'Pharma R&D facilities'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-300">
                    <svg className="w-4 h-4 text-[#e0006e] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e0006e]/20 to-transparent rounded-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1579165466511-70e21ad10b05?auto=format&fit=crop&q=80&w=1000" 
                alt="Pharma Manufacturing" 
                className="rounded-3xl shadow-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '100%', label: 'Electronic Records', desc: 'Complete removal of paper-based logbooks for dispensing.' },
              { stat: 'Zero', label: 'Manual Dependency', desc: 'No more handwritten calculations for concentration.' },
              { stat: '80%', label: 'Wastage Reduction', desc: 'Optimized solution prep with precision flow control.' }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center space-y-3">
                <div className="text-5xl font-black text-[#e0006e] tracking-tighter">{s.stat}</div>
                <div className="text-gray-900 font-black text-sm uppercase tracking-widest">{s.label}</div>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Common Questions</SectionTitle>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What is ASDS?', a: 'ASDS is an Automated Solution Dispensing System specifically designed for pharmaceutical environments to automate the preparation, validation, and dispensing of cleaning and disinfectant solutions.' },
              { q: 'Which solutions can ASDS prepare?', a: 'The system is configurable for various pharmaceutical solutions including IPA, disinfectant concentrates, detergents, hydrogen peroxide, and other cleaning agents used in GMP environments.' },
              { q: 'Is ASDS compliant with 21 CFR Part 11?', a: 'Yes, ASDS is built with full 21 CFR Part 11 compliance, featuring secure user authentication, electronic signatures, and a comprehensive, tamper-proof audit trail.' },
              { q: 'Can ASDS manage multiple solution strengths?', a: 'Absolutely. The recipe-driven system allows for multiple solution configurations, managing different concentration levels with validated conductivity and flow sensors.' },
              { q: 'Does it eliminate manual calculations?', a: 'Yes. The system automatically calculates the required concentrate and diluent ratios based on pre-validated recipes, removing operator error risk.' },
              { q: 'Can ASDS integrate with existing GMP facilities?', a: 'Yes, ASDS is designed as a modular solution that can be integrated into existing cleanroom workflows or connected to centralized BMS systems.' },
              { q: 'How does ASDS improve audit readiness?', a: 'By generating real-time, digital batch records and forensic audit trails, ASDS makes audit retrieval instantaneous and eliminates the gaps common in paper-based systems.' },
              { q: 'How long does implementation take?', a: 'Typical implementation, including IQ/OQ validation support, ranges from 8-12 weeks depending on specific configuration and facility requirements.' }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0006e]/20 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none uppercase">
              The next cleaning cycle <br className="hidden md:block" /> should not depend on handwritten calculations.
            </h2>
            <button className="px-10 py-5 bg-[#e0006e] text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(224,0,110,0.3)] hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm flex items-center gap-3 mx-auto">
              Request an ASDS Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
