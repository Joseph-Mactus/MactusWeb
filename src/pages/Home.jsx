import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import indiaMap from '@svg-maps/india';
import homImg1 from '../assets/images/Home/mlogo-1.png';
import homImg2 from '../assets/images/Home/Home.png';
const india = indiaMap.default || indiaMap;

// ─── Reusable Components ──────────────────────────────────────────────────────

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

// ─── Count-up Hook ────────────────────────────────────────────────────────────

const useCountUp = (target, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isNumeric = typeof target === 'number';
    if (!isNumeric) { setCount(target); return; }
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

const AnimatedStat = ({ value, suffix = '', label, detail }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const count = useCountUp(numericValue, 1800, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const display = `${visible ? count : 0}${suffix}`;

  return (
    <div ref={ref} className="group bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(224,0,110,0.10)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-start">
      {/* Count */}
      <p className="shimmer-text font-black tracking-tighter leading-none mb-3 transition-transform duration-300 group-hover:scale-105"
        style={{ fontSize: 'clamp(52px, 7vw, 80px)', lineHeight: 1 }}>
        {display}
      </p>
      {/* Label */}
      <p className="text-gray-900 font-black text-sm uppercase tracking-[0.15em] leading-snug mb-2">{label}</p>
      {/* Detail */}
      {detail && <p className="text-gray-400 font-medium text-xs leading-relaxed">{detail}</p>}
    </div>
  );
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const FAQAccordion = ({ items }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {items.map((item, idx) => (
        <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
          >
            <span className="font-bold text-gray-900 text-lg leading-snug">{item.q}</span>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${open === idx ? 'rotate-180 bg-[#e0006e] text-white' : 'bg-gray-50 text-[#e0006e]'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${open === idx ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-8 pb-6 text-gray-500 leading-relaxed font-medium text-base">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── India Map SVG ────────────────────────────────────────────────────────────

// ─── India Map SVG ────────────────────────────────────────────────────────────

const MAP_PINS = [
  { name: "HIMACHAL PRADESH", lines: "2 LINES", cx: 205.5, cy: 160.0, align: "right" },
  { name: "RAJASTHAN", lines: "2 LINES", cx: 154.0, cy: 256.8, align: "left" },
  { name: "GUJARAT", lines: "43 LINES", cx: 98.8, cy: 334.9, align: "left" },
  { name: "MADHYA PRADESH", lines: "2 LINES", cx: 234.2, cy: 338.9, align: "right" },
  { name: "GOA", lines: "9 LINES", cx: 150, cy: 488.0, align: "left" },
  { name: "TELANGANA", lines: "31 LINES", cx: 240.1, cy: 436.5, align: "right" },
  { name: "KARNATAKA", lines: "2 LINES", cx: 181.6, cy: 506.6, align: "left" },
  { name: "ANDHRA PRADESH", lines: "1 LINES", cx: 232.2, cy: 494.7, align: "right" },
  { name: "TAMIL NADU", lines: "4 LINES", cx: 245.4, cy: 547.4, align: "right" },
];

const IndiaMap = ({ activePin, setActivePin }) => {
  const viewBoxParts = india?.viewBox?.split(' ') || ['0', '0', '612', '696'];
  const svgWidth = parseFloat(viewBoxParts[2]);
  const svgHeight = parseFloat(viewBoxParts[3]);

  return (
    <div className="relative w-full max-w-[550px] aspect-[612/696] bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-[2.5rem] p-6 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/5 overflow-hidden group">
      {/* Decorative ambient glowing background circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#e0006e]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <svg viewBox={india?.viewBox || '0 0 612 696'} className="w-full h-full relative z-0" fill="none">
        {india?.locations?.map((loc) => {
          const isHighlighted = activePin && loc.name.toUpperCase() === activePin.name.toUpperCase();
          return (
            <path
              key={loc.id}
              d={loc.path}
              className={`transition-all duration-500 cursor-pointer ${isHighlighted
                ? 'fill-[#e0006e]/25 stroke-[#ff4b9f] stroke-[1.5px]'
                : 'fill-blue-300/15 stroke-blue-300/40 hover:fill-blue-400/25 hover:stroke-blue-200'
                }`}
              onMouseEnter={() => {
                const foundPin = MAP_PINS.find(p => p.name === loc.name.toUpperCase());
                if (foundPin) {
                  setActivePin(foundPin);
                } else {
                  // Fallback for other states
                  setActivePin({ name: loc.name.toUpperCase(), lines: '0 LINES' });
                }
              }}
              onMouseLeave={() => setActivePin(null)}
            />
          );
        })}
      </svg>

      {/* Render pins on top of map */}
      {MAP_PINS.map((pin, idx) => {
        const isHovered = activePin && activePin.name === pin.name;
        return (
          <div
            key={idx}
            className="absolute z-10 cursor-pointer transition-all duration-300"
            style={{
              top: `${(pin.cy / svgHeight) * 100}%`,
              left: `${(pin.cx / svgWidth) * 100}%`,
            }}
            onMouseEnter={() => setActivePin(pin)}
            onMouseLeave={() => setActivePin(null)}
          >
            <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
              {/* Outer pulsing ring */}
              <div
                className={`absolute rounded-full bg-[#e0006e]/25 animate-ping duration-[3s] transition-all ${isHovered ? 'w-10 h-10 scale-150 opacity-100' : 'w-6 h-6 opacity-0'
                  }`}
              ></div>
              {/* Inner glow */}
              <div
                className={`absolute rounded-full bg-[#e0006e] transition-all duration-500 blur-[4px] ${isHovered ? 'w-4 h-4 scale-[2.5]' : 'w-2 h-2 opacity-50'
                  }`}
              ></div>
              {/* Core dot */}
              <div
                className={`relative rounded-full shadow-[0_0_15px_rgba(224,0,110,1)] border border-white/20 transition-all duration-300 ${isHovered ? 'bg-white scale-125 w-2.5 h-2.5' : 'bg-[#e0006e] w-2 h-2'
                  }`}
              ></div>

              {/* Glassmorphic Tooltip Card */}
              {isHovered && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none">
                  <div className="bg-gray-950/90 backdrop-blur-md border border-[#e0006e]/30 px-4 py-2.5 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-200 transform origin-bottom">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-950/90"></div>
                    <div className="flex flex-col items-center whitespace-nowrap">
                      <h5 className="text-white font-extrabold text-xs tracking-wide uppercase">
                        {pin.name}
                      </h5>
                      <span className="text-[#e0006e] font-black text-[10px] tracking-wider mt-0.5">
                        {pin.lines}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activePin, setActivePin] = useState(null);

  const faqs = [
    { q: "What does 'audit-ready' actually mean in a Mactus system?", a: "Audit-ready means that at any moment — without preparation, without manual reconciliation, without a QA scramble — every regulated event in your cleanroom is captured, electronically signed, time-stamped, and exportable. When the inspector asks for last Tuesday's third-shift batch, the answer is a query, not an investigation." },
    { q: "How is Mactus different from generic SCADA or BMS vendors?", a: "Generic vendors sell horizontal platforms. Mactus builds pharma-specific applications. Our Smart Access Control System enforces aseptic SOP sequencing at the door. Our Intervention Recording System aligns with EU GMP Annex 1 expectations. Our EMS is 21 CFR Part 11 compliant from day one — not retrofitted with a custom-built overlay." },
    { q: "Is Mactus 21 CFR Part 11 compliant?", a: "Yes. Every Mactus product is built around 21 CFR Part 11 requirements from the architecture up — electronic signatures, role-based access, tamper-proof audit trails, and time-stamped event capture. Full GAMP 5 validation documentation is delivered with every install." },
    { q: "Does Mactus integrate with our existing systems?", a: "Yes. SACS integrates with existing door interlocking. EMS integrates with most BMS platforms — Honeywell, Siemens, Schneider, Johnson Controls. Our IIoT layer is protocol-agnostic — Modbus, OPC-UA, BACnet, MQTT. We connect to your environment; we don't ask you to replace it." },
    { q: "What validation support do you provide?", a: "Full V-model documentation: URS, FDS, DQ, IQ, OQ, PQ, traceability matrix, and risk assessment per GAMP 5 Category 4/5. We've supported customers through USFDA, EU GMP, MHRA, WHO-GMP, and CDSCO inspections." },
    { q: "How quickly can a Mactus system be deployed?", a: "Standard compliance products (SACS, IRS™, IVBLT) deploy in 6 to 10 weeks including validation. Custom integrations (BMS, EMS, LVS) range from 12 to 24 weeks depending on facility scope." },
    { q: "Are your products suitable for sterile injectable manufacturing?", a: "Yes. Our compliance product line was designed primarily for aseptic and sterile environments. Installed bases at sterile injectable, vaccine, and biologics facilities across India." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mactus Automation Pvt. Ltd.",
    "url": "https://www.mactus.in",
    "logo": homImg1,
    "foundingDate": "2012",
    "telephone": "+918048909888",
    "email": "contact@mactus.in",
    "address": { "@type": "PostalAddress", "streetAddress": "#75, 1st Main, 2nd Stage, Arekere-Mico Layout, Bannerghatta Road", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "postalCode": "560076", "addressCountry": "IN" },
    "sameAs": ["https://www.linkedin.com/company/33209730", "https://www.youtube.com/@mactusautomation2548"]
  };

  useEffect(() => {
    document.title = "Mactus Automation | Digital Compliance Management for Pharma, Healthcare & Food Processing";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.setAttribute('name', 'description'); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute('content', '21 CFR Part 11 compliant systems for sterile operations, contamination control, and critical GMP workflows. India\'s leading pharma manufacturers since 2012.');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20 overflow-x-hidden">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

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
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-up { animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease forwards; }
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
              TRUSTED BY INDIA'S LEADING PHARMA SINCE 2012
            </div>

            <h1 className="text-white font-black leading-[1.05] tracking-tighter" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.05s' }}>Digital Compliance</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.15s' }}>Management products</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block text-[#e0006e]" style={{ animationDelay: '0.25s' }}> and solutions for</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block text-[#e0006e]" style={{ animationDelay: '0.25s' }}>Pharma, Healthcare</span>
              </span>
              <span className="overflow-hidden inline-block py-1 w-full">
                <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.35s' }}>& Food Processing</span>
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-[560px] font-medium opacity-80">
              Inspection-ready, 21 CFR Part 11 compliant systems for sterile operations, contamination control, and the critical GMP workflows your auditors look at first. Mactus records compliance automatically — so your operators do the work, and the system attests to it.
            </p>

            <div className="flex flex-row items-center gap-4 flex-wrap sm:flex-nowrap">
              <a href="/compliance-products/" className="px-7 py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.25)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.35)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Explore Our Systems
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="/contact-us/" className="px-7 py-4 bg-white/5 text-white font-extrabold rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#e0006e]/50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center gap-2 whitespace-nowrap">
                Talk to a Compliance Expert
              </a>
            </div>
          </div>

          {/* Right — Floating UI card over cleanroom */}
          <div className="relative animate-float block mt-12 lg:mt-0">
            <div className="relative min-h-[320px] sm:min-h-[480px] rounded-2xl overflow-hidden flex shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/10">
              <img
                src={homImg2}
                alt="Pharma cleanroom"
                className="w-full object-cover"
                style={{ maxHeight: '480px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent"></div>
            </div>
            {/* Floating event card */}
            <div className="absolute bottom-6 left-4 right-4 bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#e0006e] font-black text-[10px] tracking-[0.2em] uppercase">Live Audit Trail · SACS</span>
                <span className="flex items-center gap-1.5 text-green-400 text-[10px] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>RECORDING</span>
              </div>
              {[
                { op: "OP-007", action: "Entry — Grade B Cleanroom", time: "09:42:17", status: "✓" },
                { op: "OP-012", action: "Gowning SOP verified", time: "09:42:31", status: "✓" },
                { op: "OP-007", action: "Training current — Access granted", time: "09:42:33", status: "✓" },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-[#e0006e] font-black text-[10px] w-14 flex-shrink-0">{e.op}</span>
                  <span className="text-gray-300 text-[10px] font-medium flex-1 truncate">{e.action}</span>
                  <span className="text-gray-500 text-[10px] font-mono flex-shrink-0">{e.time}</span>
                  <span className="text-green-400 text-[10px] flex-shrink-0">{e.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — THE RELIABLE WITNESS ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase block mb-4">WHY MACTUS</span>
              <h2 className="font-black text-4xl md:text-5xl tracking-tighter leading-tight text-gray-900">
                Your operators do the work.<br />
                <span className="text-[#e0006e]">Our systems do the witnessing.</span>
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
              <p>In a regulated cleanroom, every action is also a record. Every entry, every intervention, every dispense, every sample — each one must be captured, timestamped, attributed, and defensible. Most plants still ask the operator to do this capture themselves, on paper, between tasks, often from memory at the end of a shift. That is the data integrity risk hiding in plain sight.</p>
              <p>Mactus removes that risk. Our systems observe the work as it happens — and record it automatically. Operators don't sign with timestamps. Supervisors don't attest after the fact. The system already has. Every event is captured, electronically signed, and written to a tamper-proof audit trail the moment it occurs.</p>
            </div>
          </div>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100">
            {[
              { word: "Recorded", body: "Every regulated event captured at the moment it happens — not reconstructed from memory hours later." },
              { word: "Replayed", body: "Any batch, any shift, any operator, any room — reconstructable down to the second, on demand." },
              { word: "Reported", body: "End-of-shift summary with statistical context, ready for QA review — not days of manual reconciliation." },
            ].map((p, i) => (
              <div key={i} className="p-10 group hover:bg-white transition-colors duration-300">
                <p className="shimmer-text font-black text-4xl md:text-5xl tracking-tighter mb-4">{p.word}</p>
                <p className="text-gray-500 font-medium leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — THE PAPER PROBLEM ────────────────────────────────────── */}
      <section className="py-20 px-6 bg- border-b border-white/5">
        <div className="max-w-7xl mx-auto">

          {/* <div className="text-center mb-10">
            <p className="text-[#e0006e] font-black tracking-tighter leading-none" style={{ fontSize: 'clamp(100px, 18vw, 180px)' }}>47</p>
            <p className="text-white font-bold text-xl md:text-2xl tracking-tight mt-2">paper logbooks in an average sterile-fill cleanroom</p>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-white font-black text-3xl md:text-4xl tracking-tighter mb-6">Every one of them is a 483 waiting to happen.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">Entry logs. Gowning logs. Intervention logs. Cleaning logs. Dispensing logs. Sampling logs. Reconciliation logs. Each one a stack of paper that has to be filled in correctly, in real time, by an operator under shift pressure — and reviewed line by line, sometimes weeks later, by a QA reviewer who wasn't there. Mactus replaces the stack with one digital audit trail per cleanroom.</p>
          </div> */}

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-[1.5rem] border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-8 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">Scenario</th>
                  <th className="px-8 py-6 text-gray-400 font-black text-lg tracking-widest uppercase">On Paper</th>
                  <th className="px-8 py-6 text-[#e0006e] font-black text-lg tracking-widest uppercase bg-[#e0006e]/5">With Mactus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Cleanroom entry", "Did the operator sign at 09:42 or 09:48? The pen smudged.", "Timestamped to the second. Operator biometrically bound."],
                  ["Intervention", "Operator estimated 30 seconds. Sensor says 4 minutes.", "Sensor-measured, second by second."],
                  ["Reconciliation", "Out of 48 media plates, we can find 46.", "All 48. With QR scans for each."],
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-gray-500">{row[0]}</td>
                    <td className="px-8 py-6 text-gray-500 font-medium text-sm italic">{row[1]}</td>
                    <td className="px-8 py-6 font-bold text-[#e0006e] bg-[#e0006e]/5 group-hover:bg-[#e0006e]/10 transition-colors text-sm">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CORE PORTFOLIOS ──────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-black text-4xl md:text-5xl tracking-tighter text-gray-900 mb-4">Five products. One purpose.</h2>
            <p className="text-gray-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Turn the cleanroom's most paper-heavy workflows — entry, intervention, dispensing, media plates, IV bag leak testing — into a signed, time-stamped, audit-ready electronic trail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { eyebrow: "REGULATORY PRECISION", title: "Digital Compliance Solutions", body: "Five purpose-built systems — SACS, IRS™, ASDS, MPATS, IVBLT — each one engineered around the SOPs your auditors actually read. 21 CFR Part 11 compliant from the architecture up, not retrofitted with an overlay.", href: "/compliance-products/", cta: "View compliance products" },
              { eyebrow: "FACILITY AUTOMATION", title: "System Integration", body: "End-to-end BMS, EMS, and LVS integration for life-science facilities. We deliver URS through PQ, with the validation pack QA expects. Your facility goes from commissioned to qualified without a gap.", href: "/system-integration/", cta: "Explore system integration" },
              { eyebrow: "SMART MANUFACTURING", title: "Industrial IoT (IIoT)", body: "Sensors, controllers, and analytics layered onto existing infrastructure. Real-time visibility into HVAC, utilities, and equipment health — so engineering fixes problems before quality finds them.", href: "/iiot-implementations/", cta: "See IIoT implementations" },
            ].map((card, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-[2rem] p-8 hover:border-[#e0006e]/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col" style={{ borderTop: '3px solid transparent', backgroundImage: 'linear-gradient(white, white), linear-gradient(white, white)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box' }}>
                <div className="border-t-2 border-[#e0006e] -mx-8 -mt-8 mb-8 rounded-t-[2rem] pt-1"></div>
                <span className="text-[#e0006e] font-black text-[10px] tracking-[0.2em] uppercase mb-3">{card.eyebrow}</span>
                <h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-[#e0006e] transition-colors">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm flex-1 mb-6">{card.body}</p>
                <a href={card.href} className="flex items-center gap-2 text-[#e0006e] font-black text-xs tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
                  {card.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — BUILT FOR YOUR INDUSTRY ─────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Engineered for the industries that can't afford to get it wrong.</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "💊", name: "Pharmaceutical Manufacturing", body: "Sterile injectables, oral solid dosage, biologics, API. From aseptic fill-finish to QC microbiology — we know where regulators look first." },
              { icon: "🏥", name: "Healthcare & Hospitals", body: "Critical-environment monitoring for ICUs, OTs, blood banks, and pharmacy compounding units. NABH and JCI alignment built in." },
              { icon: "🍽️", name: "Food Processing", body: "FSSAI, HACCP, and FSMA-aligned monitoring for processing, cold-chain, and packaging — because food-grade is just pharma-grade with different vocabulary." },
            ].map((ind, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 group text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#e0006e]/10 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:bg-[#e0006e]/20 transition-colors">{ind.icon}</div>
                <h3 className="font-black text-xl text-gray-900 mb-3 group-hover:text-[#e0006e] transition-colors">{ind.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section  */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#f8fbff] border-b border-gray-100 overflow-hidden relative">

        {/* Background Blur Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#e0006e] font-black text-xs tracking-[0.25em] uppercase mb-4 block">
              MACTUS BY THE NUMBERS
            </span>

            <h2 className="font-black text-4xl md:text-6xl tracking-tighter text-gray-900 leading-tight mb-6">
              Thirteen years of
              <span className="text-[#e0006e]"> validated execution.</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { target: 130, suffix: '+', label: "Fill Lines Digitised", detail: "Across India's top sterile facilities" },
              { target: 50, suffix: '+', label: "Pharma Customers", detail: "From API to aseptic fill-finish" },
              { target: 9, suffix: '\u00A0', label: "States with Service Teams", detail: "On-site when deadlines demand it" },
            ].map((stat, i) => (
              <AnimatedStat key={i} value={String(stat.target)} suffix={stat.suffix} label={stat.label} detail={stat.detail} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — NATIONAL REACH ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text + coverage */}
            <div className="space-y-8 order-1">
              <div>
                <span className="text-[#e0006e] font-black text-xs tracking-[0.2em] uppercase block mb-4">LOCALLY DEPLOYED</span>
                <h2 className="font-black text-4xl md:text-5xl tracking-tighter text-gray-900 leading-tight mb-6">Strategic intelligence, locally deployed.</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">Pharma manufacturing doesn't pause for travel time. With service teams across India's major industrial corridors — from Himachal's pharma belt to Telangana's bulk-drug hub — we're on-site when validation deadlines, audits, or breakdowns demand it.</p>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  ["Himachal Pradesh", 2], ["Gujarat", 43], ["Goa", 9], ["Karnataka", 2],
                  ["Tamil Nadu", 4], ["Rajasthan", 2], ["Madhya Pradesh", 2], ["Telangana", 31], ["Andhra Pradesh", 1],
                ].map(([state, lines]) => {
                  const isHovered = activePin && activePin.name === state.toUpperCase();
                  return (
                    <div
                      key={state}
                      onMouseEnter={() => setActivePin({ name: state.toUpperCase(), lines: `${lines} LINE${lines > 1 ? 'S' : ''}` })}
                      onMouseLeave={() => setActivePin(null)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${isHovered
                        ? 'bg-gray-950 border-[#e0006e]/50 shadow-[0_4px_20px_rgba(224,0,110,0.15)] translate-x-1'
                        : 'bg-gray-50 border-gray-100 hover:border-gray-300'
                        }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHovered ? 'bg-[#e0006e] scale-125' : 'bg-gray-400'}`}></div>
                      <span className={`font-extrabold text-xs transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-700'}`}>{state}</span>
                      <span className={`ml-auto font-black text-xs transition-colors duration-300 ${isHovered ? 'text-[#e0006e]' : 'text-gray-400'}`}>{lines}</span>
                    </div>
                  );
                })}
              </div>

              {/* Quote */}
              {/* VERIFY: Replace anonymised quote with real named quote ASAP */}
              <blockquote className="bg-gray-900 rounded-2xl p-8 border border-white/5 relative overflow-hidden">
                <div className="absolute top-4 left-6 text-[#e0006e] font-black leading-none select-none" style={{ fontSize: '80px', opacity: 0.15 }}>"</div>
                <p className="text-gray-200 text-base leading-relaxed font-medium italic relative z-10 mb-4">
                  "When the FDA pre-inspection notice arrived, we had four weeks. Mactus's intervention data was the first thing my QA team pulled — and the only thing we didn't have to manually reconstruct."
                </p>
                <footer className="text-[#e0006e] font-black text-xs tracking-widest uppercase">
                  — QA Head, Top-10 Indian Pharma (anonymised, with consent)
                </footer>
              </blockquote>
            </div>

            {/* Right — India map */}
            <div className="order-2 flex justify-center w-full">
              <IndiaMap activePin={activePin} setActivePin={setActivePin} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — WHY MACTUS ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Why India's most-inspected pharma plants run on Mactus.</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Domain-built, not configured-into", body: "We didn't pivot into pharma. We started here. Every product is shaped by SOPs we've read, deviations we've investigated, and inspectors we've watched at work. When we say a system is inspector-ready, we mean we've sat across the table from one." },
              { title: "Compliance by design, not by overlay", body: "21 CFR Part 11, EU GMP Annex 1, ALCOA+, GAMP 5 — these aren't checkboxes for us. They're the architecture our products are built on, from the first sketch." },
              { title: "Validation pack included, not blank-slate", body: "URS, FDS, DQ, IQ, OQ, PQ, traceability matrix, and risk assessment per GAMP 5 — delivered with every install. Your QA team gets a binder, not a blank slate." },
              { title: "Long-term partner, not one-time vendor", body: "Annual maintenance, on-call validation support, and roadmap-aligned upgrades. Our oldest customer has been with us since 2013." },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border-l-4 border-[#e0006e] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <h3 className="font-black text-xl text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — MACTUS VERIFY (commented out until ready to ship) ─────── */}
      {/* TODO: Uncomment when Mactus Verify is ready to ship */}
      {/*
      <section className="py-20 px-6 bg-[#1a1a1a] border-b border-white/5">
        ...
      </section>
      */}

      {/* ── SECTION 10 — RESOURCES ───────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="KNOWLEDGE HUB">What we're reading, writing, and recording.</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-1 max-w-6xl mx-auto">
            {[
              { type: "WEBINAR", title: "Digitising Line Cleaning in Pharma Manufacturing" },
              { type: "CASE STUDY", title: "How a Top-5 Indian Pharma Reduced Cleanroom Deviations by 78%" },
              { type: "WHITEPAPER", title: "ALCOA+ for Aseptic Operations: A Practical Playbook" },
            ].map((r, i) => (
              <div key={i} className="group bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:border-[#e0006e]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 self-start
                  ${r.type === 'WEBINAR' ? 'bg-purple-100 text-purple-700 border border-purple-200'
                    : r.type === 'CASE STUDY' ? 'bg-[#e0006e]/10 text-[#e0006e] border border-[#e0006e]/20'
                      : 'bg-blue-50 text-blue-600 border border-blue-200'}`}>
                  {r.type}
                </span>
                <h3 className="font-black text-xl text-gray-900 mb-4 group-hover:text-[#e0006e] transition-colors leading-snug flex-1">{r.title}</h3>
                <a href={r.href} className="flex items-center gap-2 text-[#e0006e] font-black text-xs tracking-widest uppercase group-hover:gap-3 transition-all duration-300 mt-2">
                  {r.cta}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11 — FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Questions pharma teams ask us first.</SectionTitle>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ── SECTION 12 — PRE-FOOTER CTA ──────────────────────────────────────── */}


      <Footer />
    </div>
  );
};

export default HomePage;