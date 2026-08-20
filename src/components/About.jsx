const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-20 left-4 md:left-10 text-[100px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none">
        ABOUT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header (Top se aayega) */}
        <div data-aos="fade-down" className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Who Am I
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Crafting digital <br className="hidden md:block" />
            <span className="font-extrabold">experiences.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Text Content (Left se aayega, ek ek karke) */}
          <div className="flex flex-col gap-8">
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-base md:text-lg text-gray-400 font-light leading-relaxed"
            >
              Hello! I am{" "}
              <span className="text-white font-medium">Sahil Mirza</span>, a
              passionate and versatile{" "}
              <span className="text-white font-medium">
                Fullstack Developer
              </span>
              . I have built a strong foundation in software engineering
              principles and modern web technologies.
            </p>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-base md:text-lg text-gray-400 font-light leading-relaxed"
            >
              I specialize in both the{" "}
              <span className="text-white font-medium">MERN Stack</span> and{" "}
              <span className="text-white font-medium">.NET Development</span>.
              Whether it's crafting responsive and interactive front-end user
              interfaces or architecting secure, scalable back-end APIs, I
              thrive on solving complex problems with clean and optimized code.
            </p>

            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-base md:text-lg text-gray-400 font-light leading-relaxed"
            >
              My ultimate goal is to build seamless, user-friendly digital
              experiences while continuously learning and adapting to the
              ever-evolving tech landscape.
            </p>

            {/* Let's Collaborate Link */}
            <div data-aos="fade-up" data-aos-delay="400" className="mt-4">
              <a
                href="#contact"
                className="flex items-center gap-4 text-xs font-bold text-white tracking-[0.2em] uppercase hover:text-[#e3563b] transition-colors group w-fit"
              >
                LET'S COLLABORATE
                <div className="w-12 h-[1px] bg-white/30 group-hover:bg-[#e3563b] transition-colors group-hover:w-16"></div>
              </a>
            </div>
          </div>

          {/* Right Column: Cards (Right and Zoom animations) */}
          <div className="flex flex-col gap-6">
            {/* Top Right Floating Badge (Zoom in effect) */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="self-end mb-4 flex items-center gap-4 bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 pr-8 shadow-2xl hover:border-white/10 transition-colors"
            >
              <div className="p-3 bg-white/[0.03] rounded-xl text-[#e3563b]">
                {/* Graduation Cap Icon */}
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
                    d="M4.26 10.147a60.436 60.436 0 0014.476 0l3.159-1.218a.75.75 0 000-1.398L12.35 4.318a.75.75 0 00-.7 0L2.105 7.531a.75.75 0 000 1.398l3.158 1.218zM12 14.592l-8.5-3.276v4.757a.75.75 0 00.418.672c2.477 1.258 5.347 1.955 8.082 1.955s5.605-.697 8.082-1.955a.75.75 0 00.418-.672v-4.757l-8.5 3.276z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide">
                  MCA Graduate
                </h4>
                <p className="text-gray-500 text-xs mt-0.5">Surat, Gujarat</p>
              </div>
            </div>

            {/* Backend Skill Card (Right se aayega) */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="bg-[#080808] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-black border border-white/10 rounded-lg text-[#e3563b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase">
                  Backend Architecture
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  .NET MVC
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  C#
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  Web API
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  Express.js
                </span>
              </div>
            </div>

            {/* Frontend Skill Card (Right se aayega) */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="bg-[#080808] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-black border border-white/10 rounded-lg text-[#e3563b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase">
                  Frontend & UI
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  React.js
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Databases Skill Card (Right se aayega) */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="bg-[#080808] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-black border border-white/10 rounded-lg text-[#e3563b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase">
                  Databases & Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  SQL Server
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  MongoDB
                </span>
                <span className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs text-gray-300">
                  Git & GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
