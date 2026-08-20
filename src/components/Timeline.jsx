const Timeline = () => {
  const milestones = [
    {
      year: "2026",
      title: "Master of Computer Applications (MCA)",
      desc: "Graduated with a strong foundation in software engineering, database management, and advanced computing principles.",
    },
    {
      year: "Present",
      title: "Fullstack Developer",
      desc: "Specializing in the .NET and MERN ecosystems, building scalable backend architectures and dynamic user interfaces in Surat, Gujarat.",
    },
  ];

  return (
    <section
      id="journey"
      className="relative bg-black py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-20 right-4 md:right-10 text-[100px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none text-right">
        JOURNEY
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div
          data-aos="fade-down"
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              My Path
            </p>
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            The <span className="font-extrabold">Journey.</span>
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 md:space-y-16">
          {milestones.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="relative pl-10 md:pl-16 group"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-black border-2 border-[#e3563b] rounded-full group-hover:bg-[#e3563b] group-hover:shadow-[0_0_15px_rgba(227,86,59,0.6)] transition-all duration-300"></div>
              <p className="text-[#e3563b] font-bold text-sm tracking-widest mb-2">
                {item.year}
              </p>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#e3563b] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
