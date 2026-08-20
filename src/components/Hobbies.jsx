const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="relative bg-[#030303] py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-20 left-4 md:left-10 text-[100px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none">
        BEYOND
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          data-aos="zoom-in"
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Off Screen
            </p>
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            My <span className="font-extrabold">Hobbies.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Cricket Card (Left se aayega) */}
          <div
            data-aos="fade-right"
            className="lg:col-span-2 group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-[#e3563b]/80 hover:shadow-[0_0_40px_rgba(227,86,59,0.2)] transition-all duration-500 overflow-hidden flex flex-col justify-end"
          >
            <div className="absolute top-8 right-8 p-3 bg-white/[0.02] rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🏏</span>
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-white mb-2 group-hover:text-[#e3563b] transition-colors">
              Cricket Enthusiast
            </h3>
            <p className="relative z-10 text-gray-400 font-light text-sm max-w-md">
              Whether I'm training hard at the academy or cheering for King
              Kohli and ABD, cricket is my ultimate passion and stress buster.
            </p>
          </div>

          {/* Road Trips (Right se aayega) */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-[#e3563b]/80 hover:shadow-[0_0_40px_rgba(227,86,59,0.2)] transition-all duration-500 overflow-hidden flex flex-col justify-end"
          >
            <div className="absolute top-8 right-8 p-3 bg-white/[0.02] rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🛣️</span>
            </div>
            <h3 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-[#e3563b] transition-colors">
              Aspiring Road Tripper
            </h3>
            <p className="relative z-10 text-gray-400 font-light text-sm">
              While I haven't taken long-distance tours yet, I love the idea of
              scenic drives and hope to explore the open roads in the future.
            </p>
          </div>

          {/* Fitness (Bottom se upar) */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-[#e3563b]/80 hover:shadow-[0_0_40px_rgba(227,86,59,0.2)] transition-all duration-500 overflow-hidden flex flex-col justify-end"
          >
            <div className="absolute top-8 right-8 p-3 bg-white/[0.02] rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🏋️</span>
            </div>
            <h3 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-[#e3563b] transition-colors">
              Strength & Fitness
            </h3>
            <p className="relative z-10 text-gray-400 font-light text-sm">
              Staying sharp, pushing limits, and maintaining discipline away
              from the screen with regular gym workouts.
            </p>
          </div>

          {/* Cinema (Right se left aayega) */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="lg:col-span-2 group relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 hover:border-[#e3563b]/80 hover:shadow-[0_0_40px_rgba(227,86,59,0.2)] transition-all duration-500 overflow-hidden flex flex-col justify-end"
          >
            <div className="absolute top-8 right-8 p-3 bg-white/[0.02] rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎬</span>
            </div>
            <h3 className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-[#e3563b] transition-colors">
              MCU & Cinema Buff
            </h3>
            <p className="relative z-10 text-gray-400 font-light text-sm max-w-md">
              Closely tracking the Marvel Cinematic Universe timelines and
              exploring hidden gems in regional cinema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
