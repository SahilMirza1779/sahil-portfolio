import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen || isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen, isOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-40 p-6 md:p-10 flex justify-between items-center">
        {/* Logo Box */}
        <a
          href="#home"
          className="bg-[#e3563b] text-white text-[12px] md:text-[14px] font-extrabold tracking-[0.25em] px-5 py-3 shadow-lg hover:shadow-[#e3563b]/20 hover:scale-105 transition-all duration-300"
        >
          SAHIL MIRZA
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <a
              href="#projects"
              className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white/50 group-hover:text-[#e3563b] transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              PROJECTS
            </a>

            <a
              href="#hobbies"
              className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white/50 group-hover:text-[#e3563b] transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-3.161.631l-.528-.355a1.125 1.125 0 01-.442-1.24l.209-.827a1.125 1.125 0 00-.542-1.268l-.352-.176a3.07 3.07 0 00-1.39-.364H3.75V3h6.126c.527 0 1.041.139 1.491.402l1.383.829z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7.06h.008v.008H9V7.06zM15 11.25h.008v.008H15v-.008zM18.75 18.75h.008v.008h-.008v-.008zM9.75 15.75h.008v.008h-.008v-.008z"
                />
              </svg>
              HOBBIES
            </a>

            <a
              href="#about"
              className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white/50 group-hover:text-[#e3563b] transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              ABOUT
            </a>

            <a
              href="#journey"
              className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white/50 group-hover:text-[#e3563b] transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
                />
              </svg>
              JOURNEY
            </a>

            {/* NAYA CREDENTIALS LINK */}
            <a
              href="#certifications"
              className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white/50 group-hover:text-[#e3563b] transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 0014.476 0l3.159-1.218a.75.75 0 000-1.398L12.35 4.318a.75.75 0 00-.7 0L2.105 7.531a.75.75 0 000 1.398l3.158 1.218zM12 14.592l-8.5-3.276v4.757a.75.75 0 00.418.672c2.477 1.258 5.347 1.955 8.082 1.955s5.605-.697 8.082-1.955a.75.75 0 00.418-.672v-4.757l-8.5 3.276z"
                />
              </svg>
              CREDENTIALS
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white/50 group-hover:text-[#e3563b] transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              RESUME
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.15em] text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white/50 group-hover:text-[#e3563b] transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              CONTACT
            </a>
          </div>

          {/* Drawer Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-10 h-10 bg-white/5 hover:bg-[#e3563b]/10 rounded-full flex items-center justify-center text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white/10 hover:border-[#e3563b]/50 hover:shadow-[0_0_15px_rgba(227,86,59,0.3)] ml-4 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-md z-[45]"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        {isOpen && (
          <div className="lg:hidden absolute top-24 right-6 bg-black/20 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black flex flex-col text-xs font-bold tracking-widest text-[#e3563b] z-50 border border-[#e3563b]/40 overflow-hidden w-56">
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-[#e3563b]/20 hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              PROJECTS
            </a>
            <a
              href="#hobbies"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-[#e3563b]/20 hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-3.161.631l-.528-.355a1.125 1.125 0 01-.442-1.24l.209-.827a1.125 1.125 0 00-.542-1.268l-.352-.176a3.07 3.07 0 00-1.39-.364H3.75V3h6.126c.527 0 1.041.139 1.491.402l1.383.829z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7.06h.008v.008H9V7.06zM15 11.25h.008v.008H15v-.008zM18.75 18.75h.008v.008h-.008v-.008zM9.75 15.75h.008v.008h-.008v-.008z"
                />
              </svg>
              HOBBIES
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-[#e3563b]/20 hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              ABOUT
            </a>
            <a
              href="#journey"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-[#e3563b]/20 hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25"
                />
              </svg>
              JOURNEY
            </a>

            {/* NAYA CREDENTIALS MOBILE LINK */}
            <a
              href="#certifications"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-[#e3563b]/20 hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 0014.476 0l3.159-1.218a.75.75 0 000-1.398L12.35 4.318a.75.75 0 00-.7 0L2.105 7.531a.75.75 0 000 1.398l3.158 1.218zM12 14.592l-8.5-3.276v4.757a.75.75 0 00.418.672c2.477 1.258 5.347 1.955 8.082 1.955s5.605-.697 8.082-1.955a.75.75 0 00.418-.672v-4.757l-8.5 3.276z"
                />
              </svg>
              CREDENTIALS
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-[#e3563b]/20 hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              RESUME
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-6 py-4 hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              CONTACT
            </a>
          </div>
        )}
      </nav>

      {/* Side Contact Drawer */}
      <div
        className={`fixed inset-0 bg-black/60 z-[100] backdrop-blur-none transition-all duration-300 ease-in-out ${isDrawerOpen ? "opacity-100 backdrop-blur-sm" : "opacity-0 backdrop-blur-none pointer-events-none"}`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[450px] bg-[#141414] z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b border-white/5 flex justify-end">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-white/50 hover:text-white transition-colors focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-grow p-10 overflow-y-auto">
          <h2 className="text-4xl font-light text-white mb-2">Let's talk.</h2>
          <p className="text-sm text-gray-400 font-light mb-10">
            Drop your details, I'll set up a walkthrough call within 24 hours.
          </p>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 tracking-wider uppercase">
                Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#1c1c1c] border border-white/5 rounded-md p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#e3563b]/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 tracking-wider uppercase">
                Contact *
              </label>
              <input
                type="text"
                placeholder="Email or phone"
                className="w-full bg-[#1c1c1c] border border-white/5 rounded-md p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#e3563b]/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/60 tracking-wider uppercase">
                Notes
              </label>
              <textarea
                placeholder="Anything you'd like me to know before the call."
                rows="4"
                className="w-full bg-[#1c1c1c] border border-white/5 rounded-md p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#e3563b]/50 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#e3563b] text-white font-bold tracking-[0.2em] py-4 rounded-full mt-10 hover:bg-[#c94a32] transition-all"
            >
              Book the walkthrough
            </button>
          </form>
          <div className="mt-16 text-xs text-white/40 uppercase tracking-widest">
            Or reach out directly
            <div className="flex gap-4 mt-2 text-white/70 normal-case tracking-normal">
              <a
                href="https://wa.me/916354961591"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e3563b] cursor-pointer transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:sahilmirza01779@gmail.com"
                className="hover:text-[#e3563b] cursor-pointer transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
