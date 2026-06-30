import React, { useEffect } from "react";

const ZohoFormModal = ({
  title = "Request Demo",
  formUrl = "https://forms.zohopublic.in/mactus1/form/ContactUs1/formperma/RudU9kD9cf9xHJ0kV-09fcEho3hfYURS8kYyYU9IWIs",
  height = "1000px",
  onClose,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" style={{ zIndex: 9999 }}>
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h1 className="text-xl font-bold text-[#e0006e]">{title}</h1>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-2 text-gray-400 hover:text-[#e0006e] hover:bg-[#e0006e]/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Iframe content – single scrollbar on the modal wrapper */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <iframe
            aria-label={title}
            frameBorder="0"
            scrolling="no"
            style={{
              height,
              width: "100%",
              border: "none",
              overflow: "hidden",
            }}
            src={formUrl}
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default ZohoFormModal;