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
          {/* Left Column (Left se slide hoke aayega) */}
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
              <div className="space-y-8">
                {/* Contact details... */}
                <div className="flex items-center gap-6 group cursor-default">
                  <div className="p-4 bg-white/[0.03] border border-white/10 rounded-2xl group-hover:border-[#e3563b]/50 group-hover:bg-[#e3563b]/10 transition-all duration-300">
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
                      Phone
                    </p>
                    <p className="text-lg text-white font-medium tracking-wide group-hover:text-[#e3563b] transition-colors">
                      +91 63549 61591
                    </p>
                  </div>
                </div>
                {/* ... other contact info ... */}
              </div>
            </div>
          </div>

          {/* Right Form (Right se slide hoke aayega) */}
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
