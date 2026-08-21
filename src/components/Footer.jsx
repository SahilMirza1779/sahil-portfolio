const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-10 px-6 md:px-16 lg:px-24 border-t border-[#e3563b]/20 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-white text-lg font-extrabold tracking-[0.25em] uppercase mb-2">
            Sahil <span className="text-[#e3563b]">Mirza</span>
          </span>
          <p className="text-white/40 text-[10px] tracking-widest uppercase">
            Engineered with passion © 2026
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#e3563b] hover:border-[#e3563b]/50 hover:bg-[#e3563b]/10 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(227,86,59,0.3)] group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
