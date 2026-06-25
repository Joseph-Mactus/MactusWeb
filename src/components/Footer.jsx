import React from "react";

const FOOTER_COLS = [
  {
    title: "COMPLIANCE PRODUCTS",
    links: [
      {
        name: "SACS (Smart Access Control System)",
        path: "/products/sacs",
      },
      {
        name: "IRS (Intervention Recording System)",
        path: "/products/irs",
      },
      {
        name: "ASDS (Automated Solution Dispensing System)",
        path: "/products/asds",
      },
      {
        name: "MPATS (Environmental Monitoring)",
        path: "/products/mpats",
      },
      {
        name: "IVBLT (Intravenous Bag Leak Tester)",
        path: "/products/ivblt",
      },
    ],
  },
  {
    title: "SYSTEM INTEGRATION",
    links: [
      {
        name: "Building Management System",
        path: "/system-integration/building-management-system",
      },
      {
        name: "Environmental Monitoring System",
        path: "/system-integration/environmental-monitoring-system",
      },
      {
        name: "Low Voltage Systems",
        path: "/system-integration/low-voltage-systems",
      },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      {
        name: "Company Overview",
        path: "/company-overview",
      },
      {
        name: "Leadership",
        path: "/leadership",
      },
      {
        name: "Promoters",
        path: "/promoters",
      },
      {
        name: "Careers",
        path: "/careers",
      },
      {
        name: "Quality Policy",
        path: "/quality-policy",
      },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      {
        name: "Case Studies",
        path: "/case-studies",
      },
      {
        name: "Testimonials",
        path: "/testimonial",
      },
    ],
  },
  {
    title: "IIOT IMPLEMENTATION",
    links: [
      {
        name: "IIOT Implementations",
        path: "/iiot-implementations",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#262626] border-t border-white/5">
      <div className="bg-[#262626] pt-8 pb-6 px-6 sm:px-8">

        {/* Footer Top */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1150px]:grid-cols-[1.6fr_1.2fr_0.9fr_0.8fr_0.9fr_1.5fr] gap-x-10 gap-y-12 items-start">

          {FOOTER_COLS.map((col, idx) => (
            <div key={idx} className="min-w-0">
              <h4 className="text-white font-bold text-xs tracking-[0.2em] mb-7 uppercase opacity-80">
                {col.title}
              </h4>

              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.path}
                      className="text-gray-400 text-sm hover:text-[#e0006e] transition-colors duration-200 block leading-relaxed"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="min-w-0">
            <h4 className="text-white font-bold text-xs tracking-[0.2em] mb-7 uppercase opacity-80">
              OUR CONTACT
            </h4>

            <div className="text-gray-400 text-sm space-y-4 leading-relaxed">
              <a
                href="/contact-us"
                className="text-gray-400 text-sm hover:text-[#e0006e] transition-colors duration-200 block"
              >
                Contact Us
              </a>

              <p className="border-l-2 border-[#e0006e] pl-4">
                <strong className="text-white block mb-2">
                  Mactus Automation Pvt. Ltd.
                </strong>
                #75, 1st Main, 2nd Stage, Arekere-Mico Layout,
                <br />
                Bannerghatta Road, Bangalore – 560076
              </p>

              <div className="flex flex-col space-y-1">
                <span>
                  Phone:{" "}
                  <a
                    href="tel:+918048909888"
                    className="text-white hover:text-[#e0006e] transition-colors"
                  >
                    +91 80 4890 9888
                  </a>
                </span>

                <span>
                  Email:{" "}
                  <a
                    href="mailto:contact@mactus.in"
                    className="text-[#e0006e] font-bold hover:underline"
                  >
                    contact@mactus.in
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-8 pt-5 border-t border-white/5 flex flex-col items-center justify-center gap-5">
          <p className="text-gray-500 font-medium text-xs text-center">
            Copyright © 2025 Mactus Automation Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://in.linkedin.com/company/mactus"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#e0006e] transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@mactusautomation2548"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#e0006e] transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}