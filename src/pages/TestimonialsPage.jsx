import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tesImg1 from '../assets/images/TestimonialsPage/sacs-testimonial.png';
import testImg2 from '../assets/images/TestimonialsPage/ASDS-testimaonial.png';

const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-5 mt-2">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight relative pb-3 inline-block">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

const Lightbox = ({ image, title, onClose }) => {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
        />
        <p className="text-white/60 text-xs font-bold tracking-widest uppercase">{title}</p>
      </div>
    </div>
  );
};

const ValidationCard = ({ card, onView }) => {
  const isPlaceholder = card.placeholder;

  return (
    <div className={`group relative flex flex-col rounded-[2rem] overflow-hidden transition-all duration-500
      ${isPlaceholder
        ? 'border-2 border-dashed border-gray-200 bg-gray-50'
        : 'bg-white border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] hover:-translate-y-2'
      }`}
    >
      {/* Product tag */}
      <div className="px-6 pt-6 pb-0">
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-black tracking-[0.15em] uppercase
          ${isPlaceholder
            ? 'bg-gray-100 text-gray-400 border border-gray-200'
            : 'bg-[#e0006e]/10 text-[#e0006e] border border-[#e0006e]/20'
          }`}
        >
          {card.tag}
        </span>
      </div>

      {/* Document preview */}
      {!isPlaceholder ? (
        <div
          className="mx-6 mt-5 cursor-pointer relative overflow-hidden rounded-xl"
          onClick={() => onView(card)}
          style={{ aspectRatio: '3/4' }}
        >
          <div
            className="w-full h-full transition-all duration-500"
            style={{ transform: 'rotate(-1.5deg)', transformOrigin: 'center' }}
          >
            <div className="group-hover:[transform:rotate(0deg)_scale(1.02)] transition-all duration-500 w-full h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-top rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500"
                style={{
                  transform: 'rotate(-1.5deg)',
                  transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-1.5deg)'}
              />
            </div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[#e0006e]/0 group-hover:bg-[#e0006e]/5 transition-colors duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
              <svg className="w-4 h-4 text-[#e0006e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              <span className="text-[#e0006e] font-black text-xs tracking-widest uppercase">Click to expand</span>
            </div>
          </div>
        </div>
      ) : (
        /* Placeholder document area */
        <div className="mx-6 mt-5 rounded-xl border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-4 py-16 px-8">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-300 font-black text-xs tracking-widest uppercase text-center">Documents incoming</p>
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 px-6 py-6 gap-4">
        <div>
          <h3 className={`font-black text-xl leading-snug mb-2 ${isPlaceholder ? 'text-gray-400' : 'text-gray-900'}`}>
            {card.title}
          </h3>
          <p className={`text-sm leading-relaxed font-medium ${isPlaceholder ? 'text-gray-400' : 'text-gray-500'}`}>
            {card.description}
          </p>
        </div>

        {!isPlaceholder ? (
          <div className="flex items-center gap-3 pt-2 mt-auto flex-wrap">
            <button
              onClick={() => onView(card)}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#e0006e] text-white text-xs font-black rounded-xl hover:bg-[#ff1a8c] transition-all duration-300 uppercase tracking-widest hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(224,0,110,0.25)] hover:shadow-[0_8px_25px_rgba(224,0,110,0.35)]"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Document
            </button>
            <a
              href={card.productLink}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-gray-50 text-gray-700 text-xs font-black rounded-xl hover:bg-gray-100 hover:text-[#e0006e] transition-all duration-300 uppercase tracking-widest border border-gray-100"
            >
              About {card.tag}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ) : (
          <div className="pt-2 mt-auto">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold tracking-widest uppercase">Check back soon</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const [lightboxCard, setLightboxCard] = useState(null);

  const cards = [
    {
      tag: "SACS",
      title: "Customer Validation – Smart Access Control System (SACS)",
      description: "Documented confirmation of cleanroom access control and compliance support using SACS. Formally validates Mactus SACS design, installation, and operational performance at a pharma manufacturing facility.",
      image: tesImg1,
      productLink: "/sacs/",
    },
    {
      tag: "ASDS",
      title: "Customer Validation – Automated Solution Dispensing System (ASDS)",
      description: "Confirmation of successful design, installation, qualification, and operational performance of the Automated Solution Dispensing System at a pharma manufacturing facility.",
      image: testImg2,
      productLink: "/pr",
    },
    // {
    //   tag: "More Coming",
    //   title: "IRS· MPATS · IVBLT Validations",
    //   description: "Customer validation letters for IRS™, MPATS (MPATS), and IVBLT are being prepared and will be published here.",
    //   placeholder: true,
    // },
  ];

  useEffect(() => {
    document.title = "Customer Testimonials & Validation Letters | Mactus Automation";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Documented customer validations and testimonials for Mactus Automation compliance products — SACS and ASDS validated by pharma manufacturing customers across India.');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
      <Navbar />

      <style>{`
  @keyframes reveal-up {
  0%   { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0);    opacity: 1; }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.animate-reveal-up {
  opacity: 0;
  animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s) forwards;
}

.shimmer-text {
  background: linear-gradient(90deg, #e0006e 0%, #ff4b9f 50%, #e0006e 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.animate-reveal-up.shimmer-text {
  animation:
    reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s) forwards,
    shimmer 3s linear calc(var(--delay, 0s) + 0.8s) infinite;
}
`}</style>

      {/* SECTION 1 — HERO / PAGE TITLE BANNER */}
      <section className="relative bg-[#25252B] py-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[70vh] text-center border-b border-white/5">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e0006e]/10 via-transparent to-[#25252B] z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6 flex flex-col items-center">


          <h1 className="text-white font-black leading-[1.05] tracking-tighter uppercase italic" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
            <span className="block overflow-hidden px-4">
              <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.1s' }}>Trusted By Pharma</span>
            </span>
            <span className="block overflow-hidden px-4">
              <span className="animate-reveal-up inline-block shimmer-text pr-10" style={{ animationDelay: '0.3s' }}>Manufacturers</span>
            </span>
            <span className="block overflow-hidden px-4">
              <span className="animate-reveal-up inline-block" style={{ animationDelay: '0.5s' }}>Across India</span>
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg lg:text-xl font-bold tracking-wide  opacity-80 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            Our customers don't just use Mactus products — they formally validate them. Below are documented customer confirmations of design, installation, qualification, and operational performance across our compliance product range.
          </p>
        </div>
      </section>


      {/* SECTION 3 — CUSTOMER VALIDATIONS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="FORMAL DOCUMENTATION">Customer Validation Letters</SectionTitle>
          <p className="text-center text-gray-500 font-medium text-base -mt-6 mb-12">
            Formal documented confirmations from pharma manufacturing customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
            {cards.map((card, idx) => (
              <ValidationCard
                key={idx}
                card={card}
                onView={setLightboxCard}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      {lightboxCard && (
        <Lightbox
          image={lightboxCard.image}
          title={lightboxCard.title}
          onClose={() => setLightboxCard(null)}
        />
      )}
    </div>
  );
};

export default TestimonialsPage;