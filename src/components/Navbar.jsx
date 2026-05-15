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
                    if (sub === "Careers") path = "/careers";
                    
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white/95 backdrop-blur-2xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-gray-100 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Top Decorative Gradient */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#e0006e] via-[#ff4d9e] to-[#e0006e]"></div>
          
          <div className="p-8 pt-24 overflow-y-auto h-full scrollbar-hide">
            <div className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.title} className="border-b border-gray-100 last:border-0 pb-4">
                  <div
                    onClick={() => item.subItems ? toggleMobileSub(item.title) : setIsMenuOpen(false)}
                    className="flex items-center justify-between py-2 cursor-pointer group"
                  >
                    <span className="text-gray-900 font-black text-xl tracking-tight group-hover:text-[#e0006e] transition-colors duration-300">
                      {item.title}
                    </span>
                    {item.subItems && (
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeMobileSub === item.title ? 'bg-[#e0006e] text-white shadow-[0_0_15px_rgba(224,0,110,0.4)]' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-900'}`}>
                        <svg className={`w-4 h-4 transition-transform duration-300 ${activeMobileSub === item.title ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {item.subItems && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileSub === item.title ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-2 pl-4 relative">
                        {/* Custom animated border line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 rounded-full"></div>
                        <div className={`absolute left-0 top-0 w-[2px] bg-[#e0006e] rounded-full transition-all duration-700 ${activeMobileSub === item.title ? 'h-full' : 'h-0'}`}></div>

                        {item.subItems.map((sub, i) => {
                          let path = "#";
                          if (sub === "Smart Access Control System") path = "/sacs";
                          if (sub === "Intervention Recording System") path = "/irs";
                          if (sub === "Automated Solution Dispensing System") path = "/asds";
                          if (sub === "Company Overview") path = "/company-overview";
                          if (sub === "Leadership") path = "/leadership";
                          if (sub === "Promoters") path = "/promoters";
                          if (sub === "Quality Policy") path = "/quality-policy";
                          if (sub === "Careers") path = "/careers";
                          
                          return (
                            <a
                              key={i}
                              href={path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-3 px-4 text-gray-500 text-sm font-bold hover:text-[#e0006e] hover:bg-gray-50 rounded-xl transition-all duration-300"
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
            
            <div className="mt-5 pt-12 border-t border-gray-100 text-center flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-200">
                <img src={MactusLogo} alt="Mactus Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="text-[9px] font-black tracking-[0.3em] text-[#e0006e] uppercase">
                Mactus Automation
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
