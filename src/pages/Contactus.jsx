import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, } from "react-icons/fa";
import { Phone } from 'lucide-react';

// ── Reusable design tokens ────────────────────────────────────────────────────
const ACCENT = '#e0006e';

const SectionTitle = ({ children }) => (
  <div className="flex justify-center w-full mb-5 mt-2">
    <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight relative pb-3 inline-block">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
    </h2>
  </div>
);

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
const ContactUs = () => {
    const [openForm, setOpenForm] = useState(null);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#e0006e]/20">
            <Navbar />

            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Mactus Automation Pvt. Ltd.",
                    "telephone": "+918048909888",
                    "email": "contact@mactus.in",
                    "url": "https://www.mactus.in",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "#75, 1st Main, 2nd Stage, Arekere-Mico Layout, Bannerghatta Road",
                        "addressLocality": "Bangalore",
                        "addressRegion": "Karnataka",
                        "postalCode": "560076",
                        "addressCountry": "IN"
                    }
                })
            }} />

            <style>{`
        @keyframes reveal-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-up { animation: reveal-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .shimmer-text {
          background: linear-gradient(90deg,#e0006e 0%,#ff4b9f 50%,#e0006e 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .animate-fade-in { animation: fade-in 0.3s ease forwards; }
      `}</style>

            {/* ── SECTION 1 — HERO ─────────────────────────────────────────────────── */}
            <section className="relative bg-[#25252B] py-20 px-6 overflow-hidden min-h-[70vh] flex items-center border-b border-white/5">
                {/* Dot grid */}
                <div className="absolute inset-0 z-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(#e0006e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e0006e]/10 to-transparent z-0" />

                <div className="max-w-5xl mx-auto relative z-10 w-full">


                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0006e]/10 border border-[#e0006e]/20 text-[#e0006e] text-[11px] font-black tracking-[0.2em] uppercase mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0006e] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0006e]" />
                        </span>
                        GET IN TOUCH
                    </div>

                    {/* Heading */}
                    <h1 className="text-white font-black leading-[1.05] tracking-tighter mb-6 flex flex-wrap gap-x-[0.25em]" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>
                        {["Let's"].map((w, i) => (
                            <span key={i} className="overflow-hidden inline-block py-1 px-2">
                                <span className="animate-reveal-up inline-block" style={{ animationDelay: `${i * 0.1}s` }}>{w}</span>
                            </span>
                        ))}
                        <span className="overflow-hidden inline-block py-1">
                            <span className="animate-reveal-up shimmer-text inline-block  pr-2 font-black" style={{ animationDelay: '0.1s' }}>Talk.</span>
                        </span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl font-medium mb-10 opacity-80">
                        Whether you're evaluating a compliance product, planning a system integration project, or need technical support — the right person at Mactus is one message away.
                    </p>

                    {/* Quick-contact chips */}
                    <div className="flex flex-wrap gap-2">
                        {[
                            {
                                icon: <FaPhoneAlt />,
                                label: "+91 80 4890 9888",
                                href: "tel:+918048909888",
                            },
                            {
                                icon: <FaMobileAlt />,
                                label: "+91 9986781714",
                                href: "tel:+919986781714",
                            },
                            {
                                icon: <FaEnvelope />,
                                label: "contact@mactus.in",
                                href: "mailto:contact@mactus.in",
                            },
                        ].map((chip) => (
                            <a
                                key={chip.href}
                                href={chip.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-[#e0006e]/20 hover:border-[#e0006e]/40 transition-all duration-200"
                            >
                                <span>{chip.icon}</span>
                                <span>{chip.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 2 — TWO-FORM LAYOUT ──────────────────────────────────────── */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle>Send Us a Message</SectionTitle>

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
                        {/* Left — Sales */}
                        <div
                            className={`bg-white rounded-t-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-tr-none border border-gray-100 shadow-sm p-8 md:p-12 transition-all duration-300 ${openForm === 'sales' ? 'shadow-xl' : 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'}`}
                            onClick={() => { if (openForm !== 'sales') setOpenForm('sales'); }}
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-2xl bg-[#e0006e]/10 flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-[#e0006e]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="font-black text-xl text-gray-900">
                                        Sales &amp; Demo Request
                                    </h2>

                                    <span className="text-[10px] font-black text-[#e0006e] tracking-widest uppercase">
                                        Primary enquiry
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Interested in our solutions? Submit your enquiry and a Mactus representative
                                will connect with you to discuss your needs in detail.
                            </p>

                            {openForm === 'sales' ? (
                                <div className="mt-8 animate-fade-in relative">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setOpenForm(null); }}
                                        className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#e0006e] transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Close Form
                                    </button>
                                    <iframe
                                        aria-label="Contact Us"
                                        frameBorder="0"
                                        style={{ height: "1000px", width: "100%", border: "none" }}
                                        src="https://forms.zohopublic.in/mactus1/form/ContactUs1/formperma/RudU9kD9cf9xHJ0kV-09fcEho3hfYURS8kYyYU9IWIs"
                                        title="Contact Us"
                                    />
                                </div>
                            ) : (
                                <button className="mt-4 px-6 py-2.5 bg-[#e0006e] text-white font-bold rounded-xl text-sm hover:bg-[#ff4b9f] transition-colors shadow-md pointer-events-none">
                                    Open Sales Form
                                </button>
                            )}
                        </div>

                        {/* Right — Support */}
                        <div
                            className={`bg-white rounded-b-[2.5rem] lg:rounded-r-[2.5rem] lg:rounded-bl-none border border-gray-100 border-l-0 shadow-sm p-8 md:p-12 transition-all duration-300 ${openForm === 'support' ? 'shadow-xl' : 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'}`}
                            onClick={() => { if (openForm !== 'support') setOpenForm('support'); }}
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-2xl bg-[#e0006e]/10 flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6 text-[#e0006e]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="font-black text-xl text-gray-900">
                                        Technical Support
                                    </h2>

                                    <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">
                                        Existing customers
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Need technical or service support? Complete the form and our experts
                                will reach out to assist you.
                            </p>

                            {openForm === 'support' ? (
                                <div className="mt-8 animate-fade-in relative">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setOpenForm(null); }}
                                        className="mb-4 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#e0006e] transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Close Form
                                    </button>
                                    <iframe
                                        aria-label="Technical Support Request"
                                        frameBorder="0"
                                        style={{ height: "1100px", width: "100%", border: "none" }}
                                        src="https://forms.zohopublic.in/mactus1/form/TechnicalSupportRequest/formperma/M_QXRl9J2AB5-TNp92O0wRqr93xVXTVzBO7mO3mhfd8"
                                        title="Technical Support Request"
                                    />
                                </div>
                            ) : (
                                <button className="mt-4 px-6 py-2.5 bg-[#e0006e] text-white font-bold rounded-xl text-sm hover:bg-[#ff4b9f] transition-colors shadow-md pointer-events-none">
                                    Open Support Form
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3 — OFFICE & MAP ──────────────────────────────────────────── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle>Find Our Office</SectionTitle>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-stretch">
                        {/* Address card */}
<div className="relative overflow-hidden bg-gradient-to-br from-[#25252B] via-[#3a1830] to-[#6b1245] rounded-[2.5rem] p-10 space-y-7 flex flex-col justify-between">                            <div className="space-y-6">
                                <div>
                                    <p className="text-[#e0006e] font-black text-xs tracking-[0.3em] uppercase mb-1">Registered Office</p>
                                    <h3 className="text-white font-black text-xl">Mactus Automation Pvt. Ltd.</h3>
                                </div>

                                <div className="space-y-4">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <FaMapMarkerAlt className="text-xl mt-0.5 shrink-0 text-gray-300" />

                                        <div className="text-gray-300 text-sm leading-relaxed font-medium">
                                            #75, 1st Main, 2nd Stage,
                                            <br />
                                            Arekere-Mico Layout,
                                            <br />
                                            Bannerghatta Road,
                                            <br />
                                            Bangalore – 560076,
                                            <br />
                                            Karnataka, India
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <a
                                        href="tel:+918048909888"
                                        className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group"
                                    >
                                        <FaPhoneAlt className="text-xl shrink-0 " />

                                        <span className="text-sm font-bold group-hover:underline">
                                            +91 80 4890 9888
                                        </span>
                                    </a>

                                    {/* Mobile */}
                                    <a
                                        href="tel:+919986781714"
                                        className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group"
                                    >
                                        <FaMobileAlt className="text-xl shrink-0 " />

                                        <span className="text-sm font-bold group-hover:underline">
                                            +91 9986781714
                                        </span>
                                    </a>

                                    {/* Email */}
                                    <a
                                        href="mailto:contact@mactus.in"
                                        className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group"
                                    >
                                        <FaEnvelope className="text-xl shrink-0 " />

                                        <span className="text-sm font-bold group-hover:underline">
                                            contact@mactus.in
                                        </span>
                                    </a>

                                    {/* Website */}
                                    <a
                                        href="https://www.mactus.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group"
                                    >
                                        <FaGlobe className="text-xl shrink-0 " />

                                        <span className="text-sm font-bold group-hover:underline">
                                            www.mactus.in
                                        </span>
                                    </a>
                                </div>

                                {/* Social icons */}
                                <div className="flex items-center gap-3 pt-2">
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/company/33209730" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e0006e]/20 hover:border-[#e0006e]/40 transition-all">
                                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                    {/* YouTube */}
                                    <a
                                        href="https://www.youtube.com/@mactusautomation2548" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#e0006e]/20 hover:border-[#e0006e]/40 transition-all"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Directions button */}
                            <a
                                href="https://maps.google.com/maps?q=Mactus+Automation+Pvt+Ltd,+75,+I+Main+Rd,+Arekere+MICO+Layout+2nd+stage,+Bengaluru,+Karnataka+560076"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#e0006e] text-white font-extrabold text-sm hover:bg-[#e0006e] hover:text-white transition-all duration-300 tracking-wider"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Get Directions
                            </a>
                        </div>

                        {/* Map */}
                        <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm min-h-[420px]">
                            <iframe
                                title="Mactus Automation Office Location"
                                src="https://maps.google.com/maps?q=Mactus%20Automation%20Pvt%20Ltd%2C%2075%2C%20I%20Main%20Rd%2C%20Arekere%20MICO%20Layout%202nd%20stage%2C%202nd%20Stage%2C%20Arekere%2C%20Bengaluru%2C%20Karnataka%20560076&t=m&z=19&output=embed&iwloc=near"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '420px', display: 'block' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 4 — QUICK CONTACT STRIP ──────────────────────────────────── */}
            <section className="bg-[#25252B] py-5 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-white font-black text-base md:text-lg">
                            Prefer to call? Reach our sales team directly.
                        </p>
                        <a href="mailto:careers@mactus.in"
                            className="text-xs text-gray-500 hover:text-gray-400 transition-colors font-medium mt-1 inline-block">
                            For hiring enquiries: careers@mactus.in
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="tel:+918048909888"
                            className="flex items-center gap-2 text-white font-black text-xl md:text-2xl hover:text-[#e0006e] transition-colors tracking-tight"
                        >
                            <FaPhoneAlt className="text-white text-lg md:text-xl shrink-0" />
                            +91 80 4890 9888
                        </a>

                        <span className="text-gray-600 hidden sm:block">·</span>

                        <a
                            href="tel:+919986781714"
                            className="flex items-center gap-2 text-white font-black text-xl md:text-2xl hover:text-[#e0006e] transition-colors tracking-tight"
                        >
                            <FaMobileAlt className="text-white text-lg md:text-xl shrink-0" />
                            +91 9986781714
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;