const Certifications = () => {
  const certificates = [
    {
      id: "01",
      title: "Master of Computer Applications",
      issuer: "Chandigarh University",
      year: "2026",
      image: "/MCA.jpeg",
      link: "/MCA.pdf", // Yahan link PDF par update kar diya
      aos: "fade-up",
      delay: "100",
    },
    {
      id: "02",
      title: "Bachelor of Computer Application",
      issuer: "VNSGU",
      year: "2024",
      image: "/BCA.jpeg",
      link: "/BCA.pdf",
      aos: "fade-up",
      delay: "200",
    },
    {
      id: "03",
      title: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2024",
      image: "/Udemy.jpeg",
      link: "/Udemy.pdf",
      aos: "fade-up",
      delay: "300",
    },
    {
      id: "04",
      title: ".NET / C# Development",
      issuer: "Intellect Computers",
      year: "2024",
      image: "/.net.jpeg",
      link: "/.net.pdf",
      aos: "fade-up",
      delay: "400",
    },
    {
      id: "05",
      title: "Claude Code 101",
      issuer: "Anthropic",
      year: "2024",
      image: "/claude.jpeg",
      link: "/claude.pdf",
      aos: "fade-up",
      delay: "500",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative bg-[#030303] py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-20 left-4 md:left-10 text-[80px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none">
        CREDENTIALS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header (Top se aayega) */}
        <div
          data-aos="fade-down"
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              My Qualifications
            </p>
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Degrees & <span className="font-extrabold">Certificates.</span>
          </h2>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              data-aos={cert.aos}
              data-aos-delay={cert.delay}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-[#e3563b]/30 transition-all duration-500 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden bg-[#111]">
                {/* Background me image dikhegi */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-[3px] transition-all duration-700 opacity-60 group-hover:opacity-30"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop";
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>

                {/* Hover Par Button Aayega (Click karne par PDF khulegi) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#e3563b] text-white text-xs font-bold tracking-[0.15em] uppercase rounded-full shadow-[0_0_20px_rgba(227,86,59,0.4)] hover:bg-[#c94930] hover:scale-105 transition-all duration-300"
                  >
                    View PDF
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
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Text Content Area */}
              <div className="relative p-8 -mt-6 z-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[#e3563b] text-[10px] font-bold tracking-[0.2em] uppercase">
                    {cert.issuer}
                  </span>
                  <span className="text-white/40 text-xs font-bold">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#e3563b] transition-colors duration-300 leading-snug">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
