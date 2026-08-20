const Services = () => {
  const services = [
    {
      id: "01",
      title: "Backend Architecture",
      description:
        "Designing robust, scalable, and secure server-side applications and APIs using the .NET and Node.js ecosystems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-[#e3563b]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      aos: "fade-right", // Left se right ki taraf aayega
      delay: "100",
    },
    {
      id: "02",
      title: "UI/UX & Frontend",
      description:
        "Crafting intuitive, dynamic, and pixel-perfect user interfaces that prioritize seamless user experiences and modern aesthetics.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-[#e3563b]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
          />
        </svg>
      ),
      aos: "fade-up", // Niche se upar aayega
      delay: "300",
    },
    {
      id: "03",
      title: "API Integration",
      description:
        "Developing and integrating robust RESTful APIs to seamlessly connect web applications with complex database systems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-[#e3563b]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
      aos: "fade-left", // Right se left ki taraf aayega
      delay: "500",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#030303] py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      {/* Background Cinematic Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e3563b] rounded-full blur-[200px] opacity-[0.04] pointer-events-none"></div>

      <div className="absolute top-20 left-4 md:left-10 text-[100px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none">
        EXPERTISE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header comes from top */}
        <div
          data-aos="fade-down"
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              What I Do
            </p>
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            My <span className="font-extrabold">Services.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.aos} // Alag alag direction
              data-aos-delay={service.delay} // Ek-ek karke aayega
              className="group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] hover:border-[#e3563b]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#e3563b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="absolute top-8 right-8 text-4xl font-black text-white/5 group-hover:text-[#e3563b]/10 transition-colors duration-500">
                {service.id}
              </div>

              <div className="w-16 h-16 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#e3563b]/10 group-hover:border-[#e3563b]/30 transition-all duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#e3563b] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
