import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── Reusable design tokens ────────────────────────────────────────────────────
const ACCENT = '#e0006e';

const SectionTitle = ({ children }) => (
    <div className="flex justify-center w-full mb-6 mt-8">
        <h2 className="text-center text-[#e0006e] font-extrabold text-2xl md:text-3xl tracking-tight relative pb-3 inline-block">
            {children}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0006e] rounded-full"></span>
        </h2>
    </div>
);

// ── Field Components ──────────────────────────────────────────────────────────
const Label = ({ htmlFor, children, required }) => (
    <label htmlFor={htmlFor} className="block text-sm font-bold text-gray-800 mb-1.5">
        {children}
        {required && <span className="text-[#e0006e] ml-1">*</span>}
    </label>
);

const FieldError = ({ msg }) =>
    msg ? <p className="mt-1 text-xs text-red-500 font-semibold">{msg}</p> : null;

const inputBase =
    'w-full px-4 py-3 rounded-xl border bg-white text-gray-900 text-sm font-medium transition-all duration-200 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#e0006e]/30';
const inputNormal = `${inputBase} border-gray-200 focus:border-[#e0006e]`;
const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-200`;

// ── Spinner SVG ───────────────────────────────────────────────────────────────
const Spinner = () => (
    <svg className="animate-spin h-4 w-4 text-white inline-block mr-2" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
);

// ── Success Card ──────────────────────────────────────────────────────────────
const SuccessCard = ({ firstName, heading, body, urgent }) => (
    <div className="flex flex-col items-center justify-center text-center py-16 px-8 space-y-6 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center border-4 border-green-100">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <div className="space-y-3">
            <h3 className="text-2xl font-black text-gray-900">{heading.replace('[First Name]', firstName)}</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm">{body}</p>
            {urgent && (
                <p className="text-sm text-gray-400">
                    For urgent issues, call{' '}
                    <a href="tel:+918048909888" className="text-[#e0006e] font-bold hover:underline">+91 80 4890 9888</a>.
                </p>
            )}
        </div>
        <a
            href="/"
            className="mt-4 px-8 py-3 bg-[#1a1a1a] text-white font-extrabold rounded-xl hover:bg-[#e0006e] transition-colors duration-300 text-sm tracking-widest uppercase"
        >
            Back to Home
        </a>
    </div>
);

// ── SALES FORM ────────────────────────────────────────────────────────────────

const SalesForm = () => {
    const [data, setData] = useState({
        name: '', company: '', title: '', email: '',
        phone: '', product: '', facilityType: '', message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [apiError, setApiError] = useState('');

    const set = (field) => (e) => setData(prev => ({ ...prev, [field]: e.target.value }));

    const validate = () => {
        const e = {};
        if (!data.name.trim()) e.name = 'Full name is required.';
        if (!data.company.trim()) e.company = 'Company name is required.';
        if (!data.title.trim()) e.title = 'Job title is required.';
        if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
            e.email = 'A valid email address is required.';
        if (!data.phone.trim()) e.phone = 'Phone number is required.';
        if (!data.product || data.product === '')
            e.product = 'Please select a product or service.';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        setApiError('');
        try {
            await fetch('/api/contact-sales', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            setSubmitted(true);
        } catch {
            setApiError('Something went wrong. Please try again or call us at +91 80 4890 9888.');
        } finally {
            setSubmitting(false);
        }
    };

    const cls = (field) => errors[field] ? inputError : inputNormal;

    if (submitted) {
        return (
            <SuccessCard
                firstName={data.name.split(' ')[0]}
                heading="Thank you, [First Name]."
                body="Your enquiry has been received. A Mactus representative will be in touch within 1 business day."
            />
        );
    }

    return (
        <div className="space-y-5">
            {/* Name */}
            <div>
                <Label htmlFor="s-name" required>Full Name</Label>
                <input id="s-name" type="text" value={data.name} onChange={set('name')}
                    placeholder="Your full name" className={cls('name')} />
                <FieldError msg={errors.name} />
            </div>

            {/* Company */}
            <div>
                <Label htmlFor="s-company" required>Company Name</Label>
                <input id="s-company" type="text" value={data.company} onChange={set('company')}
                    placeholder="Your organisation" className={cls('company')} />
                <FieldError msg={errors.company} />
            </div>

            {/* Job Title */}
            <div>
                <Label htmlFor="s-title" required>Job Title</Label>
                <input id="s-title" type="text" value={data.title} onChange={set('title')}
                    placeholder="e.g. Head of Engineering, QA Manager" className={cls('title')} />
                <FieldError msg={errors.title} />
            </div>

            {/* Email */}
            <div>
                <Label htmlFor="s-email" required>Email Address</Label>
                <input id="s-email" type="email" value={data.email} onChange={set('email')}
                    placeholder="work@yourcompany.com" className={cls('email')} />
                <FieldError msg={errors.email} />
            </div>

            {/* Phone */}
            <div>
                <Label htmlFor="s-phone" required>Phone Number</Label>
                <input id="s-phone" type="tel" value={data.phone} onChange={set('phone')}
                    placeholder="+91 XXXXX XXXXX" className={cls('phone')} />
                <FieldError msg={errors.phone} />
            </div>

            {/* Product */}
            <div>
                <Label htmlFor="s-product" required>Product / Service of Interest</Label>
                <select id="s-product" value={data.product} onChange={set('product')} className={cls('product')}>
                    <option value="" disabled>-- Select a product or service --</option>
                    <option>Smart Access Control System (SACS™™)</option>
                    <option>Intervention Recording System (IRS™)</option>
                    <option>Automated Solution Dispensing System (ASDS™)</option>
                    <option>MEM™ – Environmental Monitoring (formerly MPATS)</option>
                    <option>Intravenous Bag Leak Tester (IVBLT)</option>
                    <option>Building Management System (BMS)</option>
                    <option>Environmental Monitoring System (EMS)</option>
                    <option>Low Voltage Systems (LVS)</option>
                    <option>IIoT Implementation</option>
                    <option>Multiple / Not sure yet</option>
                </select>
                <FieldError msg={errors.product} />
            </div>

            {/* Facility Type (optional) */}
            <div>
                <Label htmlFor="s-facility">Facility Type <span className="text-gray-400 font-normal text-xs">(optional)</span></Label>
                <select id="s-facility" value={data.facilityType} onChange={set('facilityType')} className={inputNormal}>
                    <option value="">-- Select facility type --</option>
                    <option>Sterile Injectable Manufacturing</option>
                    <option>Oral Solid Dosage</option>
                    <option>Biologics / Vaccine</option>
                    <option>API Manufacturing</option>
                    <option>Hospital / Compounding Pharmacy</option>
                    <option>Industrial / Non-Pharma</option>
                    <option>Other</option>
                </select>
            </div>

            {/* Message (optional) */}
            <div>
                <Label htmlFor="s-message">Message <span className="text-gray-400 font-normal text-xs">(optional)</span></Label>
                <textarea id="s-message" rows={4} value={data.message} onChange={set('message')}
                    placeholder="Tell us about your facility, timeline, or specific requirements..."
                    className={`${inputNormal} resize-none`} />
            </div>

            {/* API error */}
            {apiError && (
                <p className="text-sm text-red-500 font-semibold">{apiError}</p>
            )}

            {/* Submit */}
            <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest text-[11px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {submitting ? <><Spinner />Sending…</> : 'Send Enquiry →'}
            </button>
            <p className="text-center text-xs text-gray-400 font-medium">We typically respond within 1 business day.</p>
        </div>
    );
};

// ── SUPPORT FORM ──────────────────────────────────────────────────────────────
const SupportForm = () => {
    const [data, setData] = useState({
        name: '', company: '', email: '', phone: '',
        product: '', issueType: '', description: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [apiError, setApiError] = useState('');

    const set = (field) => (e) => setData(prev => ({ ...prev, [field]: e.target.value }));

    const validate = () => {
        const e = {};
        if (!data.name.trim()) e.name = 'Full name is required.';
        if (!data.company.trim()) e.company = 'Company name is required.';
        if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
            e.email = 'A valid email address is required.';
        if (!data.phone.trim()) e.phone = 'Phone number is required.';
        if (!data.product || data.product === '')
            e.product = 'Please select a product.';
        if (!data.issueType || data.issueType === '')
            e.issueType = 'Please select an issue type.';
        if (!data.description.trim())
            e.description = 'Please describe your issue.';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        setApiError('');
        try {
            await fetch('/api/contact-support', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            setSubmitted(true);
        } catch {
            setApiError('Something went wrong. Please try again or call us at +91 80 4890 9888.');
        } finally {
            setSubmitting(false);
        }
    };

    const cls = (field) => errors[field] ? inputError : inputNormal;

    if (submitted) {
        return (
            <SuccessCard
                firstName={data.name.split(' ')[0]}
                heading="Support request submitted, [First Name]."
                body="Our technical team will reach out shortly."
                urgent
            />
        );
    }

    return (
        <div className="space-y-5">
            {/* Name */}
            <div>
                <Label htmlFor="t-name" required>Full Name</Label>
                <input id="t-name" type="text" value={data.name} onChange={set('name')}
                    placeholder="Your full name" className={cls('name')} />
                <FieldError msg={errors.name} />
            </div>

            {/* Company */}
            <div>
                <Label htmlFor="t-company" required>Company Name</Label>
                <input id="t-company" type="text" value={data.company} onChange={set('company')}
                    placeholder="Your organisation" className={cls('company')} />
                <FieldError msg={errors.company} />
            </div>

            {/* Email */}
            <div>
                <Label htmlFor="t-email" required>Email Address</Label>
                <input id="t-email" type="email" value={data.email} onChange={set('email')}
                    placeholder="work@yourcompany.com" className={cls('email')} />
                <FieldError msg={errors.email} />
            </div>

            {/* Phone */}
            <div>
                <Label htmlFor="t-phone" required>Phone Number</Label>
                <input id="t-phone" type="tel" value={data.phone} onChange={set('phone')}
                    placeholder="+91 XXXXX XXXXX" className={cls('phone')} />
                <FieldError msg={errors.phone} />
            </div>

            {/* Product */}
            <div>
                <Label htmlFor="t-product" required>Product</Label>
                <select id="t-product" value={data.product} onChange={set('product')} className={cls('product')}>
                    <option value="" disabled>-- Select product --</option>
                    {['SACS™™', 'IRS™', 'ASDS™', 'MEM™ (MPATS)', 'IVBLT', 'BMS', 'EMS', 'Low Voltage Systems', 'IIoT', 'Other'].map(p => (
                        <option key={p}>{p}</option>
                    ))}
                </select>
                <FieldError msg={errors.product} />
            </div>

            {/* Issue Type */}
            <div>
                <Label htmlFor="t-issue" required>Issue Type</Label>
                <select id="t-issue" value={data.issueType} onChange={set('issueType')} className={cls('issueType')}>
                    <option value="" disabled>-- Select issue type --</option>
                    {[
                        'Software / System issue',
                        'Hardware fault',
                        'Calibration / Qualification',
                        'User access / Credentials',
                        'Report or data export',
                        'Integration issue',
                        'Training request',
                        'AMC / Service contract enquiry',
                        'Other'
                    ].map(t => <option key={t}>{t}</option>)}
                </select>
                <FieldError msg={errors.issueType} />
            </div>

            {/* Description */}
            <div>
                <Label htmlFor="t-desc" required>Description of Issue</Label>
                <textarea id="t-desc" rows={5} value={data.description} onChange={set('description')}
                    placeholder="Describe the issue, including any error messages, affected areas, and when it started..."
                    className={`${cls('description')} resize-none`} />
                <FieldError msg={errors.description} />
            </div>

            {/* API error */}
            {apiError && (
                <p className="text-sm text-red-500 font-semibold">{apiError}</p>
            )}

            {/* Submit — outlined style to differentiate */}
            <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full py-4 bg-[#e0006e] text-white font-extrabold rounded-xl shadow-[0_10px_25px_rgba(224,0,110,0.2)] hover:shadow-[0_15px_35px_rgba(224,0,110,0.3)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest text-[11px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {submitting ? <><Spinner />Submitting…</> : 'Submit Support Request →'}
            </button>
            <p className="text-center text-xs text-gray-400 font-medium">
                For urgent issues, call{' '}
                <a href="tel:+918048909888" className="text-[#e0006e] font-bold hover:underline">+91 80 4890 9888</a> directly.
            </p>
        </div>
    );
};

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
const ContactUs = () => {
    const [showSalesForm, setShowSalesForm] = useState(false);
    const [showSupportForm, setShowSupportForm] = useState(false);
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
        .animate-fade-in { animation: fade-in 0.5s ease forwards; }
      `}</style>

            {/* ── SECTION 1 — HERO ─────────────────────────────────────────────────── */}
            <section className="relative bg-[#1a1a1a] py-16 px-6 overflow-hidden min-h-[55vh] flex items-center">
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
                    <h1 className="text-white font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter mb-6 flex flex-wrap gap-x-[0.25em]">
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
                    <div className="flex flex-wrap gap-3">
                        {[
                            { icon: '📞', label: '+91 80 4890 9888', href: 'tel:+918048909888' },
                            { icon: '📱', label: '+91 9986781714', href: 'tel:+919986781714' },
                            { icon: '✉️', label: 'contact@mactus.in', href: 'mailto:contact@mactus.in' },
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
                            onClick={() => setShowSalesForm(true)}
                            className="bg-white rounded-t-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-tr-none border border-gray-100 shadow-sm p-8 md:p-12 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Card header */}
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

                            {!showSalesForm && (
                                <button className="px-6 py-3 rounded-xl bg-[#e0006e] text-white font-bold text-sm hover:bg-[#c70061] transition-colors">
                                    Open Sales Form
                                </button>
                            )}

                            <div
                                className={`transition-all duration-500 overflow-hidden ${showSalesForm
                                    ? 'max-h-[1200px] opacity-100 mt-8'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <SalesForm />
                            </div>
                        </div>



                        {/* Right — Support */}
                        {/* Right — Support */}
                        <div
                            onClick={() => setShowSupportForm(true)}
                            className="bg-white rounded-b-[2.5rem] lg:rounded-r-[2.5rem] lg:rounded-bl-none border border-gray-100 border-l-0 shadow-sm p-8 md:p-12 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

                            {!showSupportForm && (
                                <button className="px-6 py-3 rounded-xl bg-[#e0006e] text-white font-bold text-sm hover:bg-[#c70061] transition-colors">
                                    Open Support Form
                                </button>
                            )}

                            <div
                                className={`transition-all duration-500 overflow-hidden ${showSupportForm
                                    ? 'max-h-[1400px] opacity-100 mt-8'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <SupportForm />
                            </div>
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
                        <div className="bg-[#1a1a1a] rounded-[2.5rem] p-10 space-y-7 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[#e0006e] font-black text-xs tracking-[0.3em] uppercase mb-1">Registered Office</p>
                                    <h3 className="text-white font-black text-xl">Mactus Automation Pvt. Ltd.</h3>
                                </div>

                                <div className="space-y-4">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <span className="text-xl mt-0.5">📍</span>
                                        <div className="text-gray-300 text-sm leading-relaxed font-medium">
                                            #75, 1st Main, 2nd Stage,<br />
                                            Arekere-Mico Layout,<br />
                                            Bannerghatta Road,<br />
                                            Bangalore – 560076,<br />
                                            Karnataka, India
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <a href="tel:+918048909888" className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group">
                                        <span className="text-xl">📞</span>
                                        <span className="text-sm font-bold group-hover:underline">+91 80 4890 9888</span>
                                    </a>

                                    {/* Mobile */}
                                    <a href="tel:+919986781714" className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group">
                                        <span className="text-xl">📱</span>
                                        <span className="text-sm font-bold group-hover:underline">+91 9986781714</span>
                                    </a>

                                    {/* Email */}
                                    <a href="mailto:contact@mactus.in" className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group">
                                        <span className="text-xl">✉️</span>
                                        <span className="text-sm font-bold group-hover:underline">contact@mactus.in</span>
                                    </a>

                                    {/* Website */}
                                    <a href="https://www.mactus.in" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-[#e0006e] transition-colors group">
                                        <span className="text-xl">🌐</span>
                                        <span className="text-sm font-bold group-hover:underline">www.mactus.in</span>
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
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#e0006e] text-[#e0006e] font-extrabold text-sm hover:bg-[#e0006e] hover:text-white transition-all duration-300 tracking-wider"
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
            <section className="bg-[#1a1a1a] py-5 px-6">
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
                        <a href="tel:+918048909888"
                            className="flex items-center gap-2 text-[#e0006e] font-black text-xl md:text-2xl hover:opacity-80 transition-opacity tracking-tight">
                            📞 +91 80 4890 9888
                        </a>
                        <span className="text-gray-600 hidden sm:block">·</span>
                        <a href="tel:+919986781714"
                            className="flex items-center gap-2 text-[#e0006e] font-black text-xl md:text-2xl hover:opacity-80 transition-opacity tracking-tight">
                            📱 +91 9986781714
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;