import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import leaImg1 from '../../assets/images/Leadership/boby-joseph-image.png';
import leaImg2 from '../../assets/images/Leadership/amar-sir-image-5-1024x1020.jpg';
import leaImg3 from '../../assets/images/Leadership/Tomzee-Photo.jpg';
import leaImg4 from '../../assets/images/Leadership/WhatsApp-Image-2025-08-07-at-1.09.27-PM-785x1024.jpeg';
import leaImg5 from '../../assets/images/Leadership/sethu-sir-photo-2-902x1024.jpg';
import leaImg6 from '../../assets/images/Leadership/athul-image-682x1024.png';
import leaImg7 from '../../assets/images/Leadership/manikandan-image.png';

const Leadership = () => {
  useState(() => {
    document.title = "Leadership | Mactus";
  }, []);

  const leaders = [
    {
      name: "Boby K Joseph",
      title: "MD & CEO",
      photo: leaImg1,
      bio: "Boby brings extensive experience across organizations such as Mactus Automation Pvt Ltd, Sol-Ark, Honeywell Technology Solutions Lab Private Limited, and Tata Consulting Engineers. His professional journey reflects deep expertise in automation, engineering excellence, compliance solutions, and industrial technology leadership. Having been closely associated with Mactus Automation over the years as Director and CEO, and later as Founder Director, his elevation to MD and CEO underscores both continuity and strong leadership depth. His strategic vision and domain expertise are expected to further strengthen the company's position in regulated industry automation.",
      linkedin: "https://www.linkedin.com/in/bobykjoseph/"
    },
    {
      name: "Amarnath Ravisankar",
      title: "COO",
      photo: leaImg2,
      bio: "Amar has over 2 decades of experience in design, engineering, leadership, people and project management of Industrial automation and building automation projects encompassing system integration design, development and implementation of building services and systems. Before taking up executive leadership, Amar has led a vibrant team of automation engineers in delivering control and compliance management solutions for Indian Pharmaceutical industry. He has proven track record of driving operational excellence, quality assurance, cost control and customer delight. Amar has domain specialist experience in design, planning, development and implementation of overall building automation and industrial automation solutions for large scale projects. Amar has expertise in providing leadership in master system integration between various building systems, services and third-party integration that includes HVAC, FAS, Fire suppression system, plumbing, lighting and other ELV systems. Amar holds a Bachelor of Engineering in Electronics and Instrumentation Engineering from Anna University, Chennai, India. He has undergone several training programs and has acquired automation certifications from OEMs like Honeywell, Schneider, Tridium Niagara, American Auto-matrix, Bosch and many more.",
      linkedin: "http://linkedin.com/in/amarnath-ravisankar-969b04121"
    },
    {
      name: "Tomzee P Varghese",
      title: "CFO",
      photo: leaImg3,
      bio: "Tomzee brings close to three decades of expertise and has established himself as a seasoned professional in the fields of finance, accounts, administration, and team management. Tomzee's expertise spans various industries, making him a versatile asset to any organization. His strategic approach and comprehensive understanding of finance, direct and indirect taxation and general accounting have enabled him to manage complex financial systems effectively, optimizing working capital arrangements, budgetary control and streamlining processes. Tomzee holds a bachelor's degree in commerce from Mahatma Gandhi University, Kottayam, Kerala, India. His commitment to excellence and strong leadership skills allow him to successfully lead and manage teams, playing a pivotal role in supporting the financial stability and growth of the organizations he serves.",
      linkedin: "https://www.linkedin.com/in/tomzee-p-varghese-b12560379/"
    },
    {
      name: "Ramesh  Selvaraj",
      title: "Director-Enterprise Sales Leader",
      photo: leaImg4,
      bio: "Ramesh Selvaraj is the Associate Director in Sales and Business Development at Mactus Automation, bringing over 14 years of diverse experience in programming, project management, product development, and sales. Before his leadership role at Mactus, he successfully led a team of automation engineers in delivering compliance products and solutions to the Indian pharmaceutical industry. Ramesh is skilled in product development and enhancement, utilizing customer voice-of-the-customer (VOC) insights to address pain points and meet client needs. His expertise in 21 CFR Part 11 requirements is crucial for compliance in the pharmaceutical sector. He holds a Bachelor of Engineering in Electrical and Electronics from Visvesvaraya Technological University, Belgaum, Karnataka, and has completed various training programs with certifications in project management, program management, and business development and sales.",
      linkedin: "https://www.linkedin.com/in/ramesh-selvaraj-22626a8a/"
    },
    {
      name: "Sethurajan S",
      title: "Project Engineering Leader",
      photo: leaImg5,
      bio: "Mr. Sethurajan S is a seasoned BMS specialist with over 13 years of experience in the design, execution, and documentation of intelligent building solutions. He is proficient across the full project lifecycle, including system integration and commissioning. His expertise extends to EMS and ELV systems such as FAPA, ACS, DIS, CCTV, and networking infrastructure. Currently, he oversees end-to-end project engineering, focusing on the design and execution of compliance-driven systems such as SACS, IRS™, ASDS, and MPATS, and leads system integration projects for the pharmaceutical industry. He holds a B.E. in Electronics and Communication Engineering from Anna University, Chennai, and is certified in Fire Alarm System Design (Bosch), Honeywell WEBs-4 Commissioning, and Schneider Electric Building Automation.",
      linkedin: "https://www.linkedin.com/in/sethu-rajan-558329b9/"
    },
    {
      name: "Athul Mohan",
      title: "Head of Marketing",
      photo: leaImg6,
      bio: "With 12+ years of experience spanning SaaS sales, demand generation, and account management, Athul brings deep commercial expertise to Mactus Automation's marketing function. His career has been rooted in the pharmaceutical and life sciences industry, working closely with quality leaders, compliance teams, and senior decision-makers across India's manufacturing ecosystem. Having spent the better part of his career on the sales side, Athul understands what it takes to build trust in a highly regulated, relationship-driven industry. At Mactus, he is leading a full-scale marketing transformation — a new brand identity, website relaunch, SEO and content strategy, and an active LinkedIn presence — all aimed at establishing Mactus as the go-to name for pharma compliance automation in India and beyond.",
      linkedin: "https://www.linkedin.com/in/athulmohan/"
    },
    {
      name: "Manikandan P",
      title: "Customer Support Leader",
      photo: leaImg7,
      bio: "Manikandan P is a seasoned Building Automation Engineer with over 12 years of hands-on experience in BMS, HVAC, and ELV systems across commercial and industrial environments. He has extensive expertise in system commissioning, integration, and troubleshooting, working with leading platforms including Honeywell Trend, Schneider EBO, KMC, and Sauter. He plays a pivotal role in supporting clients throughout the entire project lifecycle, specializing in the design and implementation of compliance-driven systems such as SACS, IRS™, ASDS, and MPATS. He holds a B.E. in Electrical and Electronics Engineering from Anna University, Chennai.",
      linkedin: "https://www.linkedin.com/in/manikandan-p-81748719a/"
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-reveal-up {
          animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
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
      <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden min-h-[50vh] flex flex-col items-center justify-center text-center border-b border-white/5">
        {/* Decorative elements from SACS/IRS*/}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tighter uppercase italic flex flex-wrap justify-center">
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block shimmer-text pr-10" style={{ animationDelay: '0.2s' }}>Leadership</span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto font-medium opacity-80 animate-reveal-up" style={{ animationDelay: '0.4s' }}>
            Behind every successful project at Mactus is a leadership team that listens, understands, and leads with purpose. With decades of combined experience in pharma automation and GMP compliance, our leaders prioritize quality, innovation, and client success at every step.
          </p>
        </div>
      </section>

      {/* SECTION 2 — LEADERSHIP TEAM CARDS (REFINED) */}
      <section className="py-24 px-6 bg-gray-50 relative">
        <div className="max-w-5xl mx-auto space-y-8">
          {leaders.map((leader, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col md:flex-row items-center gap-10 bg-[#fffdfd] p-6 lg:p-10 rounded-[2.5rem] border border-gray-100 transition-all duration-500 hover:shadow-[0_40px_100px_rgba(224,0,110,0.06)] overflow-hidden"
            >
              {/* Photo Container - Portrait */}
              <div className="w-full md:w-[32%] flex-shrink-0 relative z-10 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gray-100 group-hover:border-[#e0006e]/30 transition-all duration-700 shadow-xl relative">
                  <img 
                    src={leader.photo} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* LinkedIn Badge - Brand Matching Color */}
                <a 
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-3 -right-3 w-14 h-14 bg-[#2c3e50] rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-xl z-20 hover:bg-[#e0006e]"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-[68%] flex flex-col justify-start space-y-4 relative z-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2.5px] bg-[#e0006e] rounded-full"></div>
                    <p className="text-[#e0006e] font-black text-[10px] tracking-[0.3em] uppercase">{leader.title}</p>
                  </div>
                  <h3 className="text-gray-900 font-black text-3xl lg:text-5xl uppercase tracking-tighter leading-none transition-colors duration-500">
                    {leader.name}
                  </h3>
                </div>
                
                {/* Biography - Reveals on Hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                  <p className="text-gray-600 text-base leading-relaxed font-medium pb-2">
                    {leader.bio}
                  </p>
                </div>

                <div className="absolute top-0 right-0">
                  <span className="text-5xl font-black text-gray-100/50 select-none group-hover:text-[#e0006e]/5 transition-colors duration-500 italic">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Leadership;
