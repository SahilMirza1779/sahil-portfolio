const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-10 left-4 md:left-10 text-[100px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none">
        CONTACT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div data-aos="fade-down" className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Get In Touch
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Let's build something <br className="hidden md:block" />
            <span className="font-extrabold">together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column (Contact Details) */}
          <div
            data-aos="fade-right"
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-12 max-w-md">
                Currently looking for new opportunities. Whether you have a
                question, a project proposal, or just want to say hi, my inbox
                is always open!
              </p>

              <div className="space-y-6">
                {/* 1. WhatsApp Link - UPDATED */}
                <a
                  href="https://wa.me/916354961591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer w-fit"
                >
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl group-hover:border-[#e3563b]/50 group-hover:bg-[#e3563b]/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(227,86,59,0.2)]">
                    {/* Standard outline phone icon, keeping visual consistency with Email icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white group-hover:text-[#e3563b] transition-colors"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.974-6.869-6.869l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">
                      WhatsApp
                    </p>
                    <p className="text-lg text-white font-medium tracking-wide group-hover:text-[#e3563b] transition-colors">
                      +91 63549 61591
                    </p>
                  </div>
                </a>

                {/* 2. Email Link */}
                <a
                  href="mailto:sahilmirza01779@gmail.com"
                  className="flex items-center gap-6 group cursor-pointer w-fit"
                >
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl group-hover:border-[#e3563b]/50 group-hover:bg-[#e3563b]/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(227,86,59,0.2)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white group-hover:text-[#e3563b] transition-colors"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">
                      Email
                    </p>
                    <p className="text-lg text-white font-medium tracking-wide group-hover:text-[#e3563b] transition-colors">
                      sahilmirza01779@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Profiles Row */}
              <div className="mt-12">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
                  Social Profiles
                </p>
                <div className="flex items-center gap-4">
                  {/* GitHub */}
                  <a
                    href="https://github.com/SahilMirza1779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#e3563b]/50 hover:bg-[#e3563b]/10 text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/sahil-mirza-sahil-mirzadev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#e3563b]/50 hover:bg-[#e3563b]/10 text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/sahil_mirza_779/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/[0.03] border border-white/10 rounded-full hover:border-[#e3563b]/50 hover:bg-[#e3563b]/10 text-white/70 hover:text-[#e3563b] hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="lg:col-span-7"
          >
            <form className="p-8 md:p-12 bg-[#080808] border border-white/5 rounded-[2.5rem] flex flex-col gap-8 hover:border-white/10 transition-colors duration-500 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-3 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sahil Mirza"
                    className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-[#e3563b]/50 focus:bg-[#111] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-3 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-[#e3563b]/50 focus:bg-[#111] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-3 ml-1">
                  Your Message
                </label>
                <textarea
                  placeholder="Let's talk about..."
                  rows="5"
                  className="w-full bg-black border border-white/10 rounded-2xl p-5 text-white text-sm focus:outline-none focus:border-[#e3563b]/50 focus:bg-[#111] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full mt-4 bg-[#e3563b] hover:bg-[#c94930] text-white font-bold tracking-[0.2em] uppercase text-xs py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-[#e3563b]/30 flex items-center justify-center gap-3 group"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
