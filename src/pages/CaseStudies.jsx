import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import casImg1 from '../assets/images/CaseStudies/ChatGPT-Image-Feb-9-2026-03_30_29-PM.png';
import casImg2 from '../assets/images/Complianceproducts/IRS/IRS1.png';
import casImg3 from '../assets/images/CaseStudies/ChatGPT-Image-Feb-9-2026-04_29_05-PM.png';
import casImg4 from '../assets/images/ivblt_2.png';
import casImg5 from '../assets/images/Complianceproducts/MEM/mem_2.jpeg';


const caseStudies = [
  {
    id: 1,
    tag: "SACS™",
    title: "Strengthening GMP Compliance with Automated Access Control System",
    teaser: "Even the most mature pharmaceutical facilities carry hidden compliance risks. Strong SOPs, trained teams, and GMP discipline often still rely on people to enforce access rules. When cleanroom entry depends on manual registers and memory, small gaps quietly build audit pressure. This case study shows how one facility eliminated that risk by making compliance automatic at the door.",
    image: casImg1,
  },
  {
    id: 2,
    tag: "IRS™",
    title: "When Manual Intervention Recording Becomes a Compliance Risk",
    teaser: "Manual intervention recording burdened operators during sterile manufacturing. Handwritten logs and delayed entries created gaps in traceability and audit readiness. Small oversights led to deviations and extended QA review cycles. This case study shows how digitization transformed a manual risk into a real-time, audit-ready GMP control system.",
    image: casImg2,
      
  },
  {
    id: 3,
    tag: "ASDS™",
    title: "The Risk of Manual Disinfectant Solution Preparation",
    teaser: "Manual disinfectant preparation depends heavily on operator accuracy. At this facility, manual weighing, calculations, and paper records introduced variability and traceability gaps. Small errors resulted in deviations, rework, and audit observations. This case study shows how automation transformed a high-risk GMP activity into a controlled, compliant process.",
    image: casImg3,
  },
  {
    id: 4,
    tag: "MEM™",
    title: "Automating Environmental Monitoring for Audit-Ready Compliance",
    teaser: "Manual environmental monitoring programs are prone to data integrity risks and delayed responses to excursions. This case study illustrates how transitioning to an automated, real-time MEM system eliminated paperwork, ensured 21 CFR Part 11 compliance, and provided immediate visibility into cleanroom conditions, significantly reducing audit vulnerabilities.",
    image: casImg5,
  },
  {
    id: 5,
    tag: "IVBLT",
    title: "Enhancing Traceability in In-Vitro Testing Workflows",
    teaser: "Managing complex testing workflows manually can lead to transcription errors and loss of traceability. By implementing a digitized IVBLT workflow, this facility streamlined their data collection, enforced standardized testing protocols, and achieved complete data integrity from sample receipt to final reporting, impressing auditors with their transparent processes.",
    image: casImg4,
  }
];

const tags = ["All", "SACS™", "IRS™", "ASDS™", "MEM™", "IVBLT"];

const CaseStudies = () => {
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    document.title = "Case Studies | Mactus Automation Pharma Compliance";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", "Real-world pharma compliance case studies from Mactus Automation — access control, intervention recording, and cleaning solution automation.");
  }, []);

  const filteredCaseStudies = activeTag === "All"
    ? caseStudies
    : caseStudies.filter(cs => cs.tag === activeTag);

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
      <section className="relative bg-[#1a1a1a] py-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[70vh] text-center border-b border-white/5">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e0006e]/10 via-transparent to-[#1a1a1a] z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}


          <h1 className="text-white font-black leading-[1.05] tracking-tighter uppercase italic" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
            <span className="block overflow-hidden px-4">
              <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>Case</span>
            </span>
            <span className="block overflow-hidden px-4">
              <span className="animate-reveal-up inline-block shimmer-text pr-10" style={{ animationDelay: '0.4s' }}>Studies</span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl font-bold tracking-wide opacity-80 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            See how leading pharmaceutical manufacturers eliminated compliance risk, closed audit gaps, and moved from manual processes to automated, traceable GMP control systems.
          </p>
        </div>
      </section>

      {/* SECTION 3 — FILTER BAR */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wider  transition-all duration-300 ${activeTag === tag
                  ? 'bg-[#e0006e] text-white shadow-lg shadow-[#e0006e]/20'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — CASE STUDY CARDS GRID */}
      <section className="py-20 px-6 bg-[#fafafa] relative overflow-hidden">
        {/* Abstract Light Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-60 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-[#e0006e]/[0.03] blur-[5rem]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-500/[0.02] blur-[5rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredCaseStudies.map(cs => (
              <div
                key={cs.id}
                className="group relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(224,0,110,0.15)] hover:border-[#e0006e]/20 flex flex-col h-full"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full h-[220px] overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Product Tag Pill on Image */}
                  <div className="absolute top-4 left-4 bg-[#e0006e] text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {cs.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-10 flex flex-col flex-grow space-y-4">
                  <h3 className="text-gray-900 font-black text-xl md:text-2xl mb-2  tracking-tight group-hover:text-[#e0006e] transition-colors duration-500">
                    <a href={cs.link}>{cs.title}</a>
                  </h3>

                  <p className="text-gray-600 leading-relaxed font-medium">
                    {cs.teaser}
                  </p>
                </div>
              </div>
            ))}


          </div>

          {/* Empty State when no studies match filter */}
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-gray-900 font-black text-2xl uppercase mb-2">No Case Studies Found</h3>
              <p className="text-gray-500 font-medium">We are currently working on case studies for this product. Check back soon!</p>
            </div>
          )}
        </div>
      </section>\
      <Footer />
    </div>
  );
};

export default CaseStudies;
