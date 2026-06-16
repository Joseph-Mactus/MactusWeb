import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import comImg1 from '../assets/images/Complianceproducts/ChatGPT-Image-Apr-14-2025-04_27_52-PM-ra3ga84zsehh5dxfkr5dg058a1x325tlcqxvml292o.png';
import comImg2 from '../assets/images/Complianceproducts/IRS/IRS1.png';
import comImg3 from '../assets/images/Complianceproducts/ASDS/asds_1.png';
import comImg4 from '../assets/images/Complianceproducts/MPATS/mem_3.png';
import comImg5 from '../assets/images/ivblt_2.png';
import ZohoFormModal from '../components/ZohoFormModal';

// ─── Section Title ────────────────────────────────────────────────────────────

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
  {
    id: 'sacs',
    tag: 'SACS',
    name: 'Smart Access Control System',
    positioning: 'The cleanroom door is where contamination risk and compliance risk both begin.',
    description: 'Mactus SACS is an advanced, paperless entry-exit management solution designed to ensure secure, compliant, and efficient access control in sterile and restricted environments. Every entry is biometrically authenticated, SOP-sequenced, and electronically recorded — no paper entry logs, no manual reconciliation.',
    capabilities: [
      'Biometric authentication — fingerprint and face recognition',
      'SOP-enforced gowning sequence before cleanroom entry',
      '21 CFR Part 11 compliant audit trail — every entry timestamped and signed',
      'Real-time occupancy and access reports for QA review',
    ],
    image: comImg1,
    link: '/products/sacs',
    note: null,
  },
  {
    id: 'irs',
    tag: 'IRS™',
    name: 'Intervention Recording System',
    positioning: 'Every aseptic intervention is a contamination risk and a data integrity event. IRScaptures both.',
    description: 'The Intervention Recording System (IRS™) is a web-based automation solution designed to monitor, control, and record interventions occurring during batch processing in pharmaceutical filling lines. Sensor-measured duration, operator identity, intervention type, and supervisor sign-off — all captured automatically, aligned with EU GMP Annex 1.',
    capabilities: [
      'Sensor-measured intervention duration — no operator self-reporting',
      'EU GMP Annex 1 aligned intervention classification',
      'Electronic supervisor sign-off bound to each event',
      'Real-time intervention count and duration trending per batch',
    ],
    image: comImg2,
    link: '/products/irs/',
    note: null,
  },
  {
    id: 'asds',
    tag: 'ASDS',
    name: 'Automated Solution Dispensing System',
    positioning: 'Manual cleaning solution prep is the slow leak in GMP cleaning. ASDS replaces the graduated cylinder with a recipe.',
    description: 'The ASDS is a mobile, SS-fabricated, automated solution preparation unit for pharma cleaning operations. The operator selects a recipe and required volume — the system handles the dilution, mixing, and dispensing. Every dispense is electronically recorded — recipe, volume, operator, time — with full 21 CFR Part 11 audit trail.',
    capabilities: [
      'Up to 6 configurable recipes — disinfectant, IPA, detergent, sporicide',
      'Volumetric accuracy — recipe-locked, no manual estimation',
      'On-demand preparation — eliminates over-preparation and waste',
      'Mobile, SS-fabricated — wheels between cleanrooms',
    ],
    image: comImg3,
    link: '/products/asds/',
    note: null,
  },
  {
    id: 'mem',
    tag: 'MPATS',
    name: 'MPATS — Mactus Environmental Monitoring',
    positioning: 'One unaccounted-for media plate can delay batch release. MPATS makes sure that never happens.',
    description: 'MPATS digitises the complete lifecycle of every environmental monitoring media plate — issuance, exposure, incubation, reading, reconciliation, and disposal. QR-code traceability at every handover. Automatic reconciliation. Electronic signatures on every CFU count. Audit-ready records for every batch, every room, every grade.',
    capabilities: [
      'QR-code tracking — every plate scanned at every lifecycle stage',
      'Automatic batch reconciliation — all plates accounted for at release',
      'E-signed CFU readings — bound to the reading microbiologist',
      'EU GMP Annex 1 and 21 CFR Part 11 aligned',
    ],
    image: comImg4,
    link: '/products/mem/',
    note: 'Previously listed as MPATS — now MPATS',
  },
  {
    id: 'ivblt',
    tag: 'IVBLT',
    name: 'Intravenous Bag Leak Tester',
    positioning: 'A pinhole in an IV bag is invisible to the eye and critical to the patient. IVBLT finds it before it ships.',
    description: 'The IV Bag Leak Detector (IVBLT) is a precision-engineered system designed to detect even the smallest pinhole leaks in intravenous bags. It ensures product integrity, enhances patient safety, and supports compliance with stringent pharmaceutical quality standards. Every test result is electronically recorded with batch, operator, and timestamp.',
    capabilities: [
      'Detects pinhole leaks invisible to manual inspection',
      '100% in-line or at-line testing — not sampling-based',
      'Electronic test records — batch, operator, result, timestamp',
      'Reduces patient safety risk and batch rejection at distribution',
    ],
    image: comImg5,
    link: '/products/ivblt',
    note: null,
  },
];

const standards = [
  { acronym: '21 CFR Part 11', full: 'US FDA electronic records and signatures' },
  { acronym: 'EU GMP Annex 1', full: 'Manufacture of sterile medicinal products' },
  { acronym: 'ALCOA+', full: 'Attributable, Legible, Contemporaneous, Original, Accurate' },
  { acronym: 'GAMP 5', full: 'Good Automated Manufacturing Practice' },
  { acronym: 'WHO-GMP', full: 'World Health Organization GMP' },
  { acronym: 'USFDA', full: 'US Food and Drug Administration' },
  { acronym: 'MHRA', full: 'Medicines and Healthcare products Regulatory Agency' },
  { acronym: 'CDSCO', full: 'Central Drugs Standard Control Organisation (India)' },
];

const tableRows = [
  { product: 'SACS', link: '/products/sacs', gap: 'Cleanroom entry & gowning records', users: 'Operators, QA, Security', standard: '21 CFR Part 11, EU GMP Annex 1', deploy: '6–8 weeks' },
  { product: 'IRS™', link: '/products/irs', gap: 'Aseptic intervention recording', users: 'Operators, Production, QA', standard: 'EU GMP Annex 1, 21 CFR Part 11', deploy: '6–8 weeks' },
  { product: 'ASDS', link: '/products/asds', gap: 'Cleaning solution preparation records', users: 'Operators, QA', standard: '21 CFR Part 11', deploy: '6–8 weeks' },
  { product: 'MPATS', link: '/products/mem/', gap: 'Media plate lifecycle & reconciliation', users: 'QC Microbiology, QA', standard: '21 CFR Part 11, EU GMP Annex 1', deploy: '10–14 weeks' },
  { product: 'IVBLT', link: '/products/ivblt', gap: 'IV bag integrity testing records', users: 'QC, Production', standard: '21 CFR Part 11', deploy: '6–8 weeks' },
];

const validationDocs = [
  'User Requirements Specification (URS)',
  'Functional Design Specification (FDS)',
  'Design Qualification (DQ)',
  'Installation Qualification (IQ)',
  'Operational Qualification (OQ)',
  'Performance Qualification (PQ)',
  'Traceability Matrix',
  'Risk Assessment (GAMP 5 Category 4/5)',
];

// ─── Product Card ─────────────────────────────────────────────────────────────

const ProductCard = ({ product, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 items-stretch bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-all duration-500 group`}>

      {/* Image side */}
      <div className="lg:w-5/12 relative overflow-hidden" style={{ minHeight: '320px' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ minHeight: '320px' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {/* Tag pill on image */}
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#e0006e] text-white text-[11px] font-black tracking-[0.15em] uppercase shadow-lg">
            {product.tag}
          </span>
        </div>
        {/* Rename note badge */}
        {product.note && (
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-xl border border-white/50 shadow">
              <svg className="w-3.5 h-3.5 text-[#e0006e] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700 text-[10px] font-bold">{product.note}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content side */}
      <div className="lg:w-7/12 p-8 md:p-10 flex flex-col justify-center gap-5">
        <div>
          <p className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase mb-2">{product.tag}</p>
          <h3 className="font-black text-2xl md:text-3xl text-gray-900 tracking-tight leading-snug mb-3 group-hover:text-[#e0006e] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-[#e0006e] font-medium text-sm italic leading-relaxed mb-4">"{product.positioning}"</p>
          <p className="text-gray-500 leading-relaxed font-medium text-sm">{product.description}</p>
        </div>

        {/* Capabilities */}
        <ul className="space-y-2.5">
          {product.capabilities.map((cap, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#e0006e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[#e0006e]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-600 text-sm font-medium leading-relaxed">{cap}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <a
            href={product.link}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#e0006e] text-[#e0006e] font-black text-xs tracking-widest uppercase hover:bg-[#e0006e] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(224,0,110,0.25)]"
          >
            Learn More
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const ComplianceProductsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    document.title = "Pharma Compliance Products | 21 CFR Part 11 GMP Systems | Mactus Automation";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', 'Five purpose-built compliance products for pharmaceutical manufacturing — SACS, IRS™, ASDS, MPATS, IVBLT. 21 CFR Part 11 compliant, GAMP 5 validated, audit-ready from day one.');
  }, []);

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
        .animate-reveal-up { animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .shimmer-text {
          background: linear-gradient(90deg, #e0006e 0%, #ff4b9f 50%, #e0006e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* ── SECTION 1 — HERO ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#1a1a1a] py-20 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

          {/* Left */}
          <div className="space-y-8">


            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.15em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
              </span>
              21 CFR PART 11 · GAMP 5 VALIDATED · AUDIT-READY
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>Secure, Digital, and</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up text-[#e0006e] inline-block" style={{ animationDelay: '0.2s' }}>Audit-Ready Solutions</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.3s' }}>for Regulatory Excellence</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[520px] font-medium opacity-80">
              Five purpose-built systems — each engineered around the GMP workflows your auditors look at first. Not generic platforms retrofitted for pharma. Built for pharma from the architecture up.
            </p>
          </div>

          {/* Right — floating product count visual */}
          <div className="relative animate-fade-in-right animate-float">
              <ImageCarousel images={[comImg3,comImg2,comImg4,comImg5,comImg1]} />
            </div>
        </div>
      </section>


      {/* ── SECTION 3 — 5 PRODUCT CARDS ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="THE FULL RANGE">Our Compliance Product Range</SectionTitle>
          <p className="text-center text-gray-500 font-medium text-base -mt-6 mb-12">Five systems. Each one closes a specific GMP paper gap.</p>

          <div className="space-y-10">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>



      {/* ── SECTION 6 — COMPARISON TABLE ─────────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="DECISION AID">Which product closes which gap?</SectionTitle>
          <p className="text-center text-gray-500 font-medium text-base -mt-6 mb-10">
            Each Mactus compliance product targets a specific paper-based GMP risk. Here's the map.
          </p>

          {/* Scroll indicator */}
          <div className="flex items-center justify-end gap-2 mb-3 text-gray-400 text-[11px] font-bold tracking-widest uppercase lg:hidden">
            <span>Scroll to see all</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <table className="w-full text-left border-collapse" style={{ minWidth: '700px' }}>
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Product</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">GMP Gap Closed</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Primary Users</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Key Standard</th>
                  <th className="px-6 py-5 text-white font-black text-xs tracking-widest uppercase">Deployment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {tableRows.map((row, i) => (
                  <tr key={i} className={`group transition-colors hover:bg-[#e0006e]/5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-5">
                      <a href={row.link} className="font-black text-[#e0006e] hover:underline text-sm">{row.product}</a>
                    </td>
                    <td className="px-6 py-5 text-gray-700 font-medium text-sm">{row.gap}</td>
                    <td className="px-6 py-5 text-gray-500 font-medium text-sm">{row.users}</td>
                    <td className="px-6 py-5 text-gray-500 font-medium text-xs leading-relaxed">{row.standard}</td>
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

      {/* ── SECTION 7 — CTA STRIP ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-white font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                Not sure which product fits your facility's biggest compliance gap?
              </h2>
              <p className="text-gray-400 font-medium leading-relaxed">
                Our team will map your GMP workflows to the right Mactus system — no sales pressure, just a straight answer.
              </p>
            </div>
            <a
              href="/contact-us/"
              className="bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 whitespace-nowrap"
            >
              Talk to a Compliance Expert
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {isModalOpen && <ZohoFormModal onClose={() => setIsModalOpen(false)} title="Request Demo" />}
      <Footer />
    </div>
  );
};

export default ComplianceProductsPage;