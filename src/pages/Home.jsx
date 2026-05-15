import React, { useState, useEffect, useRef } from 'react';
import indiaMap from '@svg-maps/india';
const india = indiaMap.default || indiaMap;
import Dashboard from ".././assets/Dashboard.jpg";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Shared Components ---
const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-6 mt-8">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl tracking-tight relative pb-3 inline-block">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

const COMPLIANCE_PRODUCTS = [
  {
    name: "Smart Access Control System",
    desc: "Biometric & RFID enabled security for critical areas.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "from-blue-500/20 to-cyan-400/20",
    accent: "#00d2ff"
  },
  {
    name: "Intervention Recording System",
    desc: "21 CFR Part 11 compliant audit trail recording.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-purple-500/20 to-pink-400/20",
    accent: "#ff00e0"
  },
  {
    name: "Automated Solution Dispensing System",
    desc: "Precision volume control for laboratory accuracy.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-emerald-500/20 to-teal-400/20",
    accent: "#00ffa3"
  },
  {
    name: "Media Plates Tracking & Management",
    desc: "Complete traceability for microbiology media.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),

    color: "from-orange-500/20 to-yellow-400/20",
    accent: "#ffcc00"
  },
  {
    name: "Intravenous Bag Leak Tester",
    desc: "High sensitivity detection for pharma packaging.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "from-[#e0006e]/20 to-[#ff4d9e]/20",
    accent: "#e0006e"
  }
];

function Hero() {
  return (
    <section className="relative w-full min-h-[750px] flex items-center bg-[#1a1a1a] overflow-hidden group">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">

        {/* Left Side: Content */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.2em] uppercase mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]"></span>
            </span>
            TRUSTED BY INDIA’S TOP PHARMA SINCE 2012
          </div>

          <h1 className="text-white font-black text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tighter">
            When the Auditor arrives,<br />
            <span className="text-[#e0006e]">your data is already ready.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-[580px] font-medium opacity-90">
            We replace the paper logbooks in your cleanrooms with <span className="text-white font-bold">21 CFR Part 11</span> compliant systems — so every entry, intervention, and dispense is captured, signed, and audit-ready the moment it happens.
          </p>

          <div className="flex flex-row items-center gap-4 pt-6 flex-wrap md:flex-nowrap">
            <button className="px-8 py-5 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_15px_30px_rgba(224,0,110,0.25)] hover:shadow-[0_20px_40px_rgba(224,0,110,0.35)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-xs flex items-center gap-2 whitespace-nowrap">
              Explore our solutions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-5 bg-transparent text-white font-extrabold rounded-xl border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 uppercase tracking-widest text-xs whitespace-nowrap">
              Talk to a compliance expert
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Product List (Compact Vertical) */}
        <div className="relative flex flex-col gap-2.5 animate-fade-in-right max-w-md mx-auto lg:mx-0">
          {COMPLIANCE_PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="group relative flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#e0006e]/40 transition-all duration-500 hover:translate-x-2 cursor-pointer overflow-hidden shadow-lg hover:shadow-[#e0006e]/10"
            >
              {/* Colored Side Bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${product.color.replace('/20', '')} opacity-40 group-hover:opacity-100 transition-opacity`}></div>

              {/* Icon Container */}
              <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-500`} style={{ color: product.accent }}>
                {product.icon}
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-[14px] tracking-tight truncate group-hover:text-[#e0006e] transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-white/5 font-black text-lg group-hover:text-[#e0006e]/20 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-gray-400 text-[11px] leading-tight opacity-50 group-hover:opacity-100 transition-opacity line-clamp-1">
                  {product.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#e0006e]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>
      </div>
    </section>
  );
}


// --- 5 & 6. Combined Milestones & Map Section ---

const MILESTONES = [
  {
    end: 13,
    suffix: "",
    label: "Years of Industry Presence",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-400"
  },
  {
    end: 50,
    suffix: "+",
    label: "Clients Served",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-[#e0006e] to-[#ff4d9e]"
  },
  {
    end: 130,
    suffix: "+",
    label: "Successful Projects",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-500"
  }
];

// Custom, robust Animated Counter Hook
function AnimatedCounter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let observer;
    const currentRef = counterRef.current;

    const startAnimation = () => {
      let startTimestamp = null;
      const duration = 2000;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // ease out quad
        const easeProgress = progress * (2 - progress);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startAnimation();
        observer.disconnect(); // scrollSpyOnce
      }
    }, { threshold: 0.1 });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef && observer) observer.unobserve(currentRef);
    };
  }, [end]);

  return <span ref={counterRef}>{count}{suffix}</span>;
}

// These are exact centroid coordinates mapping 1:1 to the 612x696 India SVG ViewBox
const MAP_PINS = [
  { name: "HIMACHAL PRADESH", lines: "2 LINES", cx: 225.5, cy: 173.0, align: "right" },
  { name: "RAJASTHAN", lines: "2 LINES", cx: 154.0, cy: 256.8, align: "left" },
  { name: "GUJARAT", lines: "43 LINES", cx: 88.8, cy: 334.9, align: "left" },
  { name: "MADHYA PRADESH", lines: "2 LINES", cx: 274.2, cy: 338.9, align: "right" },
  { name: "GOA", lines: "9 LINES", cx: 165, cy: 478.0, align: "left" },
  { name: "TELANGANA", lines: "31 LINES", cx: 267.1, cy: 436.5, align: "right" },
  { name: "KARNATAKA", lines: "2 LINES", cx: 191.6, cy: 506.6, align: "left" },
  { name: "ANDHRA PRADESH", lines: "1 LINES", cx: 252.2, cy: 494.7, align: "right" },
  { name: "TAMIL NADU", lines: "4 LINES", cx: 245.4, cy: 547.4, align: "right" },
];

function MilestonesAndMap({ india }) {
  const [activePin, setActivePin] = useState(null);
  const viewBoxParts = india?.viewBox?.split(' ') || ['0', '0', '612', '696'];
  const svgWidth = parseFloat(viewBoxParts[2]);
  const svgHeight = parseFloat(viewBoxParts[3]);

  return (
    <section className="w-full font-sans">

      {/* SECTION 1: Milestones (Premium Design) */}
      <div className="bg-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#e0006e]/5 rounded-full blur-[100px] -z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 p-1 md:grid-cols-3 gap-8 lg:gap-12">
            {MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center p-5 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#e0006e]/10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-700"
              >
                {/* Icon Container with Gradient Glow */}
                <div className={`relative mb-5 p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {item.icon}
                </div>

                {/* Counter */}
                <div className="text-center">
                  <span className="block text-[#1a1a1a] font-black text-4xl lg:text-5xl tracking-tighter mb-1">
                    <AnimatedCounter end={item.end} suffix={item.suffix} />
                  </span>

                  {/* Label with Animated Underline */}
                  <div className="relative inline-block px-2">
                    <span className="text-gray-400 font-bold text-[10px] md:text-[11px] tracking-[0.15em] uppercase transition-colors group-hover:text-[#e0006e] block max-w-[140px] leading-tight">
                      {item.label}
                    </span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#e0006e] transition-all duration-500 group-hover:w-full rounded-full"></div>
                  </div>
                </div>

                {/* Decorative Background Number */}
                <span className="absolute top-6 right-8 text-gray-100/50 font-black text-6xl select-none group-hover:text-[#e0006e]/5 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: National Presence (Dark Background) */}
      <div className="bg-[#1a1a1a] py-10 px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Column 1: Details & Presence List */}
            <div className="space-y-0">
              <div className="space-y-4">
                <span className="text-[#e0006e] font-extrabold text-xs tracking-[0.4em] uppercase block">National Reach</span>
                <h4 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tighter">
                  Strategic Intelligence,<br />Locally Deployed
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl opacity-90">
                  With regional headquarters across major industrial hubs in India, we provide localized expertise and immediate response times for critical life science infrastructure and automation support.
                </p>
              </div>

              {/* Presence List integrated into the details column */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-white/10">
                {MAP_PINS.map((pin, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActivePin(pin)}
                    onMouseLeave={() => setActivePin(null)}
                    className={`flex items-start space-x-3 group cursor-pointer transition-all duration-300 ${activePin?.name === pin.name ? 'translate-x-2' : ''}`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 transition-all duration-300 ${activePin?.name === pin.name ? 'bg-white scale-150 shadow-[0_0_12px_#fff]' : 'bg-[#e0006e]'}`}></div>
                    <div className="flex flex-col">
                      <span className={`font-bold text-[15px] transition-colors duration-300 ${activePin?.name === pin.name ? 'text-[#e0006e]' : 'text-gray-200 hover:text-[#e0006e]'}`}>{pin.name}</span>
                      <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mt-0.5">{pin.lines}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Interactive Map Card */}
            <div className="relative w-full flex justify-center items-center lg:mt-16 mt-12 map-pin-container">
              <div className="relative w-full max-w-[550px] aspect-[612/696] bg-gradient-to-br from-[#222] to-[#1a1a1a] rounded-[2.5rem] p-8 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#e0006e]/5 to-transparent opacity-30"></div>

                <svg viewBox={india?.viewBox || '0 0 612 696'} className="w-full h-full relative z-0 opacity-80" fill="none">
                  {india?.locations?.map(loc => (
                    <path
                      key={loc.id}
                      d={loc.path}
                      className="fill-[#6CB4EE] stroke-white/5 stroke-[1px] transition-all duration-700 hover:fill-[#363636] hover:stroke-[#e0006e]/20"
                    />
                  ))}
                </svg>

                {MAP_PINS.map((pin, idx) => (
                  <div
                    key={idx}
                    className="absolute z-10 cursor-default"
                    style={{
                      top: `${(pin.cy / svgHeight) * 100}%`,
                      left: `${(pin.cx / svgWidth) * 100}%`
                    }}
                    onMouseEnter={() => setActivePin(pin)}
                    onMouseLeave={() => setActivePin(null)}
                  >
                    <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group/pin">
                      <div className={`absolute w-8 h-8 rounded-full bg-[#e0006e]/10 animate-ping duration-[2.5s] ${activePin?.name === pin.name ? 'scale-150 opacity-100' : 'opacity-0'}`}></div>
                      <div className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${activePin?.name === pin.name ? 'bg-[#e0006e] scale-[2.5] blur-[4px]' : 'bg-[#e0006e]/20'}`}></div>
                      <div className={`relative w-2 h-2 rounded-full shadow-[0_0_20px_rgba(224,0,110,1)] border border-white/20 transition-all duration-300 ${activePin?.name === pin.name ? 'bg-white scale-125' : 'bg-[#e0006e]'}`}></div>

                      {/* Interactive Tooltip Card - Minimized */}
                      {activePin?.name === pin.name && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50 pointer-events-none">
                          <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-[#e0006e]/30 px-5 py-3 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-in fade-in zoom-in duration-200 transform origin-bottom">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#e0006e]/30"></div>

                            <div className="flex flex-col items-center whitespace-nowrap">
                              <h5 className="text-white font-black text-[13px] tracking-tight uppercase">{pin.name}</h5>
                              <span className="text-[#e0006e] font-bold text-[10px] tracking-widest mt-0.5">{pin.lines}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// --- 4. Our Core Portfolios ---
const PORTFOLIOS = [
  {
    title: "Pharma Compliance",
    tagline: "Regulatory Precision",
    desc: "Mactus Automation offers high-standard compliance products designed to meet 21 CFR Part 11 and other stringent global regulatory standards.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
  },
  {
    title: "System Integration",
    tagline: "Facility Automation",
    desc: "Comprehensive integration solutions (BMS/EMS/LVS) meticulously engineered to streamline processes and enhance operational efficiency.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop"
  },
  {
    title: "Industrial IOT",
    tagline: "Smart Manufacturing",
    desc: "Seamlessly integrating sensors and software into intelligent ecosystems for real-time monitoring and data-driven optimization.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop"
  }
];

function Portfolios() {
  return (
    <section className="bg-white py-10 px-6 relative overflow-hidden">
      <SectionTitle>Our Core Portfolios</SectionTitle>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PORTFOLIOS.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-[#fdfdfd] rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-[0_30px_60px_rgba(224,0,110,0.12)] transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-3">
              <span className="text-[#e0006e] text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                {item.tagline}
              </span>
              <h3 className="text-[#1a1a1a] font-black text-2xl tracking-tight leading-tight group-hover:text-[#e0006e] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[14.5px] leading-relaxed font-medium">
                {item.desc}
              </p>


            </div>

            {/* Decorative Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#e0006e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Main Page Component ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <Hero />
      <Portfolios />
      <MilestonesAndMap india={india} />
      <Footer />
    </div>
  );
}
