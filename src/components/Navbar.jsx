import React, { useState } from 'react';
import MactusLogo from "../assets/Mactus_sm.png";

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
      "Media Plates Tracking & Management System",
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);

  const toggleMobileSub = (title) => {
    setActiveMobileSub(activeMobileSub === title ? null : title);
  };

  return (
    <nav className="bg-gray-100 px-6 py-8 flex items-center justify-between sticky top-0 z-50 shadow-md transition-all duration-300">
      {/* Logo Area */}
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
        {NAV_ITEMS.map((item) => (
          <div key={item.title} className="relative group/nav py-2">
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

            {/* Dropdown Menu */}
            {item.subItems && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-xl overflow-hidden opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 translate-y-4 transition-all duration-500 ease-out z-[60] border border-white/40">
                <div className="h-1 w-full bg-gradient-to-r from-[#e0006e] via-[#ff4d9e] to-[#e0006e]"></div>
                <div className="py-3 px-2">
                  {item.subItems.map((sub, idx) => {
                    let path = "#";
                    if (sub === "Smart Access Control System") path = "/sacs";
                    if (sub === "Intervention Recording System") path = "/irs";
                    if (sub === "Automated Solution Dispensing System") path = "/asds";
                    if (sub === "Company Overview") path = "/company-overview";
                    if (sub === "Leadership") path = "/leadership";
                    if (sub === "Promoters") path = "/promoters";
                    if (sub === "Quality Policy") path = "/quality-policy";
                    
                    return (
                      <a
                        key={idx}
                        href={path}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                        className="block px-4 py-3 text-gray-700 text-[13.5px] font-bold rounded-lg hover:bg-[#e0006e]/5 hover:text-[#e0006e] transition-all duration-300 group/item relative overflow-hidden opacity-0 translate-x-2 group-hover/nav:opacity-100 group-hover/nav:translate-x-0"
                      >
                        <div className="flex items-center justify-between">
                          <span className="relative z-10">{sub}</span>
                          <svg className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#e0006e] transition-all duration-300 group-hover/item:h-2/3 rounded-r-full"></div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
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

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[65] xl:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out border-l border-gray-100 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 pt-24 overflow-y-auto h-full">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.title} className="border-b border-gray-50 last:border-0 pb-2">
                  <div
                    onClick={() => item.subItems ? toggleMobileSub(item.title) : setIsMenuOpen(false)}
                    className="flex items-center justify-between py-4 cursor-pointer group"
                  >
                    <span className="text-[#e0006e] font-black text-lg tracking-tight group-hover:pl-2 transition-all duration-300">{item.title}</span>
                    {item.subItems && (
                      <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeMobileSub === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>

                  {item.subItems && (
                    <div className={`overflow-hidden transition-all duration-300 ${activeMobileSub === item.title ? 'max-h-96 opacity-100 mt-2 pb-4' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-1 pl-4 border-l-2 border-[#e0006e]/20">
                        {item.subItems.map((sub, i) => {
                          let path = "#";
                          if (sub === "Smart Access Control System") path = "/sacs";
                          if (sub === "Intervention Recording System") path = "/irs";
                          if (sub === "Automated Solution Dispensing System") path = "/asds";
                          if (sub === "Company Overview") path = "/company-overview";
                          if (sub === "Leadership") path = "/leadership";
                          if (sub === "Promoters") path = "/promoters";
                          if (sub === "Quality Policy") path = "/quality-policy";
                          
                          return (
                            <a
                              key={i}
                              href={path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-3 px-4 text-gray-600 text-sm font-bold hover:text-[#e0006e] hover:bg-gray-50 rounded-lg transition-all"
                            >
                              {sub}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-gray-100 opacity-30 text-center">
              <span className="text-[10px] font-black tracking-widest text-[#e0006e] uppercase">Mactus Automation Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
