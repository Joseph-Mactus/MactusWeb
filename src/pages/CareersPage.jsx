import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SectionTitle = ({ children }) => (
  <div className="flex flex-col items-center w-full mb-12 mt-8">
    <h2 className="text-center text-[#e0006e] font-black text-3xl md:text-5xl tracking-tighter relative pb-4 inline-block uppercase">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

const CareersPage = () => {
  const benefits = [
    { label: "Exciting Automation Projects", icon: "🚀" },
    { label: "Career Growth & Learning Opportunities", icon: "📈" },
    { label: "Collaborative & Supportive Team", icon: "🤝" },
    { label: "Competitive Salary & Benefits", icon: "💰" }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Regional Sales Manager",
      location: "Gujarat (Ahmedabad)",
      experience: "8+ years",
      tag: "Sales",
      qualification: [
        "Graduate in any engineering discipline with MBA in Marketing",
        "Basic software knowledge — PC Based, Web and Cloud Applications",
        "Exposure to automation & control as applied in Pharma will be an added advantage"
      ],
      description: [
        "Develop a sound understanding of the Pharma market where Mactus compliance products can be sold",
        "Develop a deep understanding of the Mactus compliance product in terms of technology, features, edge/differentiation with respect to competition",
        "Work with customer top-level management and decision makers to generate leads and convert them to firm orders",
        "Support demos and customer relationships",
        "Plans, organizes and develops the full sales effort to ensure that the company achieves objectives for sales performance, profit margin, customer and market penetration and growth",
        "Develop and execute regional sales strategies focused on key pharmaceutical hubs",
        "Drive order closures and consistently meet annual sales and order targets",
        "Prepare sales forecasts and budgets in coordination with management",
        "Coordinate internally to ensure smooth and successful execution of orders",
        "Provide strong post-sales support to ensure customer satisfaction",
        "Develop effective marketing communication materials for products and solutions",
        "Identify service opportunities and convert them into business orders"
      ],
      positionDescription: "Mactus is looking for a Regional Sales Manager to drive growth in pharma compliance solutions.",
      keyResponsibilities: [
        "Understand pharma market",
        "Develop product knowledge",
        "Engage decision-makers",
        "Achieve sales targets",
        "Support execution & after-sales"
      ],
      applyLink: "mailto:careers@mactus.in?subject=Application for Regional Sales Manager"
    },
    {
      id: 2,
      title: "Sales Manager – Compliance Software Solutions",
      location: "India",
      experience: "7+ years",
      tag: "Sales",
      qualification: [
        "Bachelor's degree in Life Sciences, Business, or a related field"
      ],
      description: [
        "Drive B2B software sales in pharma",
        "Engage QC & Microbiology teams",
        "Conduct product demos",
        "Build client relationships",
        "Understand microbiology & QC needs",
        "Deliver demos and presentations",
        "Work with product teams",
        "Stay updated on regulations",
        "Drive revenue growth"
      ],
      skills: [
        "B2B SaaS/pharma sales experience",
        "Knowledge of 21 CFR, GMP, GxP",
        "Strong communication skills"
      ],
      applyLink: "mailto:careers@mactus.in?subject=Application for Sales Manager"
    }
  ];

  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 selection:bg-[#e0006e]/20">
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

      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[50vh] text-center border-b border-white/5">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', 
          backgroundSize: '32px 32px' 
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e0006e]/10 via-transparent to-[#1a1a1a] z-0"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <h1 className="text-white font-black text-5xl md:text-7xl lg:text-9xl leading-tight tracking-tighter uppercase italic">
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.2s' }}>Join Us at</span>
            </span>
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block shimmer-text pr-10" style={{ animationDelay: '0.4s' }}>Mactus!</span>
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium opacity-80 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            At Mactus Automation, we specialize in Pharma Industry Automation. We are looking for passionate individuals who want to drive innovation and transform industries with cutting-edge automation solutions.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>Why Work With Us</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100 hover:border-[#e0006e]/30 hover:shadow-lg transition-all duration-300 group">
                <span className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{benefit.icon}</span>
                <span className="font-bold text-gray-800 text-lg group-hover:text-[#e0006e] transition-colors">{benefit.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 font-medium text-lg">
              <span className="mr-2">📩</span> Interested? Contact <a href="mailto:careers@mactus.in" className="text-[#e0006e] font-bold hover:underline transition-all">careers@mactus.in</a> for current openings.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Current Openings</SectionTitle>
          
          <div className="space-y-6 mt-12">
            {jobOpenings.map(job => (
              <div key={job.id} className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all overflow-hidden">
                {/* Job Header (Always visible) */}
                <div 
                  className="p-8 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#e0006e]/10 text-[#e0006e] text-xs font-black tracking-widest uppercase rounded-full">
                        {job.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">{job.title}</h3>
                    <div className="flex items-center gap-6 text-sm font-bold text-gray-500 tracking-wide uppercase">
                      <span className="flex items-center gap-1.5"><span className="text-lg">📍</span> {job.location}</span>
                      <span className="flex items-center gap-1.5"><span className="text-lg">🕐</span> {job.experience}</span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="px-6 py-3 bg-gray-50 text-gray-600 font-bold rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors uppercase tracking-widest text-xs flex items-center gap-2">
                      {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                      <svg className={`w-4 h-4 transition-transform duration-300 ${expandedJob === job.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                  </div>
                </div>

                {/* Job Details (Expandable) */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedJob === job.id ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 border-t border-gray-50 bg-gray-50/50 space-y-8 mt-2">
                    
                    {job.positionDescription && (
                      <div>
                        <h4 className="text-[#e0006e] font-black mb-3 text-lg uppercase tracking-widest">Position Overview</h4>
                        <p className="text-gray-600 leading-relaxed font-medium">{job.positionDescription}</p>
                      </div>
                    )}

                    {job.qualification && job.qualification.length > 0 && (
                      <div>
                        <h4 className="text-[#e0006e] font-black mb-4 text-lg uppercase tracking-widest">Qualifications</h4>
                        <ul className="space-y-2">
                          {job.qualification.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e0006e] mt-2 flex-shrink-0"></span>
                              <span className="text-gray-600 leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.description && job.description.length > 0 && (
                      <div>
                        <h4 className="text-[#e0006e] font-black mb-4 text-lg uppercase tracking-widest">Job Description</h4>
                        <ul className="space-y-2">
                          {job.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                              <span className="text-gray-600 leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.keyResponsibilities && job.keyResponsibilities.length > 0 && (
                      <div>
                        <h4 className="text-[#e0006e] font-black mb-4 text-lg uppercase tracking-widest">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.keyResponsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e0006e]/50 mt-2 flex-shrink-0"></span>
                              <span className="text-gray-600 leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.skills && job.skills.length > 0 && (
                      <div>
                        <h4 className="text-[#e0006e] font-black mb-4 text-lg uppercase tracking-widest">Skills Required</h4>
                        <ul className="space-y-2">
                          {job.skills.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e0006e]/50 mt-2 flex-shrink-0"></span>
                              <span className="text-gray-600 leading-relaxed font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <a href={job.applyLink} className="inline-flex items-center gap-2 px-10 py-4 bg-[#e0006e] text-white font-black rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm">
                        Apply Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Application CTA */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto bg-[#1a1a1a] rounded-[3rem] overflow-hidden relative group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0006e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10 py-20 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl space-y-4">
              <h2 className="text-[#e0006e] font-black text-3xl md:text-4xl leading-tight tracking-tighter">
                Don't see a role that fits?
              </h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                We're always looking for talented people. Send your resume to <a href="mailto:careers@mactus.in" className="text-white hover:text-[#e0006e] font-bold underline transition-colors">careers@mactus.in</a> and we'll reach out when the right opportunity comes up.
              </p>
            </div>
            <a href="mailto:careers@mactus.in?subject=Open Application" className="bg-[#e0006e] hover:bg-[#ff1a8c] text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase transition-all shadow-xl flex items-center gap-3 whitespace-nowrap text-sm">
              Send Your Resume
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
