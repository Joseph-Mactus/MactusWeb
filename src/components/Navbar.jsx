import React, { useState } from 'react';
import MactusLogo from "../assets/images/Mactus_sm.png";

const NAV_ITEMS = [
  {
    title: "ABOUT US",
    subItems: ["Company Overview", "Leadership", "Promoters", "Careers", "Quality Policy"]
  },
  {
    title: "COMPLIANCE PRODUCTS",
    subItems: [
      "Smart Access Control System",
      "Intervention Recording System",
      "Automated Solution Dispensing System",
      "MEM™ (Environmental Monitoring)",
      "Intravenous Bag Leak Tester"
    ]
  },
  {
    title: "SYSTEM INTEGRATION",
    subItems: ["Building Management System", "Environmental Monitoring System", "Low Voltage Systems"]
  },
  {
    title: "RESOURCES",
    subItems: ["Case Studies", "Testimonials"]
  },
  {
    title: "IIOT IMPLEMENTATION",
    subItems: null
  },
  {
    title: "CONTACT US",
    subItems: null
  }
];

const ICON_MAP = {
  "ABOUT US": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  ),
  "COMPLIANCE PRODUCTS": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
  ),
  "SYSTEM INTEGRATION": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  ),
  "RESOURCES": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
  "IIOT IMPLEMENTATION": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  ),
  "CONTACT US": (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
};

const SUB_PATHS = {
  "Smart Access Control System": "/products/sacs",
  "Intervention Recording System": "/products/irs",
  "Automated Solution Dispensing System": "/products/asds",
  "MEM™ (Environmental Monitoring)": "/products/mem",
  "Company Overview": "/company-overview",
  "Leadership": "/leadership",
  "Promoters": "/promoters",
  "Quality Policy": "/quality-policy",
  "Careers": "/careers",
  "Case Studies": "/case-studies",
  "Building Management System": "/system-integration/building-management-system",
  "Environmental Monitoring System": "/system-integration/environmental-monitoring-system",
  "Testimonials": "/testimonial",
  "Low Voltage Systems": "/system-integration/low-voltage-systems",
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const toggleMobileSub = (title) => {
    setActiveMobileSub(activeMobileSub === title ? null : title);
  };

  return (
    <nav className="bg-gray-100 px-6 py-8 flex items-center justify-between sticky top-0 z-50 shadow-md transition-all duration-300">

      {/* Logo */}
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-4">
          <img src={MactusLogo} alt="Mactus Logo" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <span className="text-[#e0006e] font-black text-2xl tracking-wider leading-none">MACTUS</span>
            <span className="text-[9.5px] font-semibold text-gray-500 uppercase tracking-widest leading-tight">Automation Pvt. Ltd.</span>
            <span className="text-[7.5px] font-bold text-[#e0006e] uppercase tracking-[0.16em] leading-tight mt-[3px]">An ISO 9001:2015 Certified Organization</span>
          </div>
        </a>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden xl:flex items-center gap-6">
        {NAV_ITEMS.map((item) => {
          let topPath = null;
          if (item.title === "IIOT IMPLEMENTATION") topPath = "/iiot-implementations";
          if (item.title === "CONTACT US") topPath = "/contact-us/";

          const content = (
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-[#e0006e] text-[15px] font-extrabold whitespace-nowrap group-hover:text-black transition-colors duration-300">
                {item.title}
              </span>
              {item.subItems && (
                <svg className="w-3.5 h-3.5 text-[#e0006e] transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          );

          return (
            <div key={item.title} className="relative group/nav py-2">
              {topPath ? <a href={topPath}>{content}</a> : content}

              {item.subItems && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 translate-y-4 transition-all duration-500 ease-out z-[60] border border-white/40">
                  <div className="h-1 w-full bg-gradient-to-r from-[#e0006e] via-[#ff4d9e] to-[#e0006e]" />
                  <div className="py-3 px-2">
                    {item.subItems.map((sub, idx) => (
                      <a
                        key={idx}
                        href={SUB_PATHS[sub] || "#"}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                        className="block px-4 py-3 text-gray-700 text-[13.5px] font-bold rounded-lg hover:bg-[#e0006e]/5 hover:text-[#e0006e] transition-all duration-300 group/item relative overflow-hidden opacity-0 translate-x-2 group-hover/nav:opacity-100 group-hover/nav:translate-x-0"
                      >
                        <div className="flex items-center justify-between">
                          <span className="relative z-10">{sub}</span>
                          <svg className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#e0006e] transition-all duration-300 group-hover/item:h-2/3 rounded-r-full" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Hamburger Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="xl:hidden p-2 text-[#e0006e] hover:bg-gray-100 rounded-lg transition-colors z-[70] relative"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Mobile Bottom Sheet */}
      <div
        className={`fixed inset-0 z-[65] xl:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sheet */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{ maxHeight: '85vh' }}
        >
          {/* Drag Handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-gray-200" />
          </div>

          {/* Sheet Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Navigation</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav List */}
          <div className="overflow-y-auto flex-1 px-4 py-2 scrollbar-hide">
            {NAV_ITEMS.map((item) => {
              let topPath = null;
              if (item.title === "IIOT IMPLEMENTATION") topPath = "/iiot-implementations";
              if (item.title === "CONTACT US") topPath = "/contact-us/";

              const isExpanded = activeMobileSub === item.title;

              const rowContent = (
                <div
                  onClick={() => item.subItems ? toggleMobileSub(item.title) : setIsMenuOpen(false)}
                  className="flex items-center justify-between py-2 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isExpanded ? 'bg-[#e0006e]' : 'bg-[#fdf0f6]'
                      }`}
                    >
                      <svg
                        className={`w-[18px] h-[18px] transition-colors duration-300 ${
                          isExpanded ? 'text-white' : 'text-[#e0006e]'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {ICON_MAP[item.title]}
                      </svg>
                    </div>
                    <span className="text-[14px] font-bold text-gray-900">{item.title}</span>
                  </div>

                  {item.subItems && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              );

              return (
                <div key={item.title} className="border-b border-gray-50 last:border-0">
                  {topPath ? (
                    <a href={topPath} onClick={() => setIsMenuOpen(false)}>{rowContent}</a>
                  ) : (
                    rowContent
                  )}

                  {item.subItems && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[400px] opacity-100 mb-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-12 flex flex-col">
                        {item.subItems.map((sub, i) => (
                          <a
                            key={i}
                            href={SUB_PATHS[sub] || "#"}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 py-[11px] px-2 text-[13px] font-semibold text-gray-500 hover:text-[#e0006e] hover:bg-[#fdf0f6] rounded-xl transition-all duration-200 border-b border-gray-50 last:border-0"
                          >
                            <span className="w-[5px] h-[5px] rounded-full bg-[#e0006e] opacity-50 flex-shrink-0" />
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </nav>
  );
}