import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import proImg1 from '../../assets/images/Promoters/boby-joseph-image.png';
import proImg2 from '../../assets/images/Promoters/Untitled-design-22-1024x1024.png';
import proImg3 from '../../assets/images/Promoters/RaghuPortrait.jpg';
import proImg4 from '../../assets/images/Promoters/WhatsApp-Image-2025-06-12-at-10.55.22-AM.jpeg';
import proImg5 from '../../assets/images/Promoters/Javed-photo.png';
const Promoters = () => {
  useState(() => {
    document.title = "Promoters | Mactus";
  }, []);

  const promoters = [
    {
      name: "Boby K Joseph",
      title: "Founder Director",
      photo: proImg1,
      bio: "Boby spent over 35+ years in the industry working for Tatas (Tata Consulting Engineers), Honeywell International and Sol-Ark LLC. At Honeywell, till Aug 2014 Boby was the Senior Director of Engineering for its Automation & Control Solutions division, responsible for a group of 2500+ engineers involved in multi-disciplinary product engineering for applications in industrial, commercial and residential market segments. Boby has decades of experience in wall-to-wall product engineering, GCC leadership, business leadership and management development. He was one among 11 leaders chosen globally in 2007 for the premier achievement award at Honeywell, in recognition of his effort in establishing Honeywell Sensing and Control global design centre in Bengaluru, India. Prior to Honeywell, Boby worked with Tata Consulting Engineers in various capacities for piping engineering design for nuclear power plants from 1991 to 1996. Boby was the Vice President of Engineering for Sol-Ark LLC based out of Allen, Texas from 2023 to May 2025. He holds a Bachelor of Technology in Mechanical Engineering from NIT Calicut, India, and has completed the Management Development Program at IIM Bangalore as well as multiple Honeywell Corporate executive leadership programs. Boby is a certified Six Sigma Black Belt.",
      linkedin: "https://www.linkedin.com/in/boby-joseph-19241288/"
    },
    {
      name: "Sridhar S Rao",
      title: "Director",
      photo: proImg2,
      bio: "Sridhar S Rao is a technical specialist and holds a Master's degree in Pharmaceutical Sciences and Technology from BITS, Pilani. In his nearly 40 years of work experience in the Pharmaceutical Industry, he has gained significant experience in Manufacturing and Quality Assurance of Oral Solids & Liquids, Topical and Sterile Dosage forms. As a consultant, he continues to support a number of clients in enhancing their Quality and Compliance related activities. He was Quality Head of Injectables, India at the time of his departure from Mylan in Dec 2014. Prior to Mylan's acquisition of Agila facilities in Dec 2013, he was President — Quality and Regulatory Affairs at Strides/Agila for about 15 years. He has also worked in various reputed organisations and held key positions in Quality and Regulatory functions. As a Director at Mactus, he guides and supports a dynamic team which develops and delivers cost-effective and innovative technology-based solutions for the Pharma Industry, significantly enhancing continued compliance and supporting Manufacturing and Quality Operations at manufacturing sites.",
      linkedin: "https://www.linkedin.com/in/sridhar-rao-517310111/"
    },
    {
      name: "Raghurami Reddy Vennam",
      title: "Founder Director",
      photo: proImg3,
      bio: "Raghu spent over 22+ years in the industry working for Tata Consulting Engineers (2 years) and Honeywell Technology Solutions (20 years). Before leaving Honeywell in June 2016, Raghu was the Director of Engineering for Transportation Systems, responsible for improving product development cycle time (time to market) as well as improving productivity through cross-functional and cross-location collaboration by applying lean engineering principles. He has many years of experience in wall-to-wall product engineering, leadership and management development. Prior to Honeywell, Raghu worked with Tata Consulting Engineers in R&D Division from 1994 to 1996. He holds a Master of Technology in Mechanical Engineering from IIT Chennai and a Bachelor of Technology in Mechanical Engineering from Osmania University. He has also completed the Management Development Program at IIM Bangalore and Honeywell Corporate executive leadership training.",
      linkedin: "https://www.linkedin.com/in/raghurami-reddy-7445437/"
    },
    {
      name: "Kumaraswamy M S",
      title: "Founder Director",
      photo: proImg4,
      bio: "Kumar has about 21 years of experience in the pharmaceutical industry and worked with Strides Arcolab Ltd for about 16 years, where he was responsible for plant engineering services and EHS as Associate Vice President. He has hands-on experience in maintaining pharmaceutical manufacturing facilities, ensuring regulatory and statutory compliance, and leading teams during regulatory inspections. He has expertise in defining and implementing process and building automation systems. He was part of the core project team at Strides and played a key role in setting up more than 15 facilities — the majority of which are sterile manufacturing facilities, including oral solid dosage manufacturing facilities, R&D facilities and corporate offices. All manufacturing facilities were USFDA and MHRA approved. Kumar is the co-founder and director of Green Leap Projects Pvt Ltd, which is involved in engineering design consultancy and project execution on a turnkey basis with a special focus on pharma.",
      linkedin: "https://www.linkedin.com/in/kumaraswamy-m-s-75401024/"
    },
    {
      name: "Javed Husain",
      title: "Director",
      photo: proImg5,
      bio: "Javed has more than 25 years of experience directly in software development. He is the co-founder and CEO of Streamline Healthcare Solutions, LLC — a private equity exit. He is also the co-founder of multiple technology companies. He holds an MS from the University of Florida and a B.Tech from the National Institute of Technology, India.",
      linkedin: "https://www.linkedin.com/in/javedhusain1/"
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
        .bio-container {
          max-height: 155px; /* height of ~5 lines */
          overflow: hidden;
          transition: max-height 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .bio-container {
          max-height: 1000px;
        }
        .bio-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, #ffffff 20%, transparent);
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .group:hover .bio-fade {
          opacity: 0;
        }
      `}</style>

      {/* SECTION 1 — HERO / PAGE TITLE BANNER */}
      <section className="relative bg-[#1a1a1a] py-24 px-6 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center text-center border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e0006e]/10 via-transparent to-[#1a1a1a] z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
       

          <h1 className="text-white font-black text-3xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tighter uppercase italic">
            <span className="block overflow-visible px-4">
              <span className="animate-reveal-up inline-block shimmer-text pr-10" style={{ animationDelay: '0.2s' }}>Promoters</span>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-medium opacity-80 animate-reveal-up" style={{ animationDelay: '0.4s' }}>
            Mactus board of directors (Ex Strides and Ex Honeywell) bring decades of extensive experience in pharmaceutical engineering, quality/compliance management, automation & control. Their collective expertise drives Mactus towards continuous product innovation, project delivery excellence thus helping pharmaceutical companies to be on top of compliance.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROMOTERS / BOARD OF DIRECTORS CARDS */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-32">
          {promoters.map((p, i) => (
            <div 
              key={i} 
              className={`group flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-8 lg:gap-16`}
            >
              {/* Photo Side */}
              <div className="w-48 sm:w-64 lg:w-72 flex-shrink-0 relative mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-gray-50 rounded-[3rem] -z-10 group-hover:bg-[#e0006e]/5 transition-colors duration-700"></div>
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img 
                    src={p.photo} 
                    alt={p.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  />
                </div>
              </div>

              {/* Info Side */}
              <div className="flex-1 space-y-6 w-full">
                <div className="space-y-2">
                  <p className="text-[#e0006e] font-black text-xs tracking-[0.3em] uppercase">{p.title}</p>
                  <h3 className="text-gray-900 font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none italic group-hover:text-[#e0006e] transition-colors duration-500">{p.name}</h3>
                </div>
                
                <div className="relative pl-6 border-l-2 border-gray-100 group-hover:border-[#e0006e] transition-colors duration-500">
                  <div className="bio-container relative">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                      {p.bio}
                    </p>
                    <div className="bio-fade" />
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-900 font-black uppercase tracking-widest text-[10px] hover:border-[#0077b5] hover:text-[#0077b5] hover:-translate-y-1 transition-all group"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
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

export default Promoters;
