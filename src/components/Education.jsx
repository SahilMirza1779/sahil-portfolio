const Education = () => {
  const educationData = [
    {
      id: "01",
      degree: "Master of Computer Applications (MCA)",
      university: "Chandigarh University",
      college: "Centre for Distance & Online Education",
      year: "2024 - 2026",
      score: "7.90 CGPA",
      image: "/MCA.jpeg",
      pdf: "/MCA.pdf",
      desc: "Specialized in advanced software engineering, backend architectures, and modern web development technologies.",
      reverse: false, // Image left, text right
    },
    {
      id: "02",
      degree: "Bachelor of Computer Application (BCA)",
      university: "Veer Narmad South Gujarat University (VNSGU)",
      college: "Smt. Z. S. Patel College of Computer Application",
      year: "2021 - 2023",
      score: "58.30%", // Yahan apna actual BCA percentage daal dijiyega
      image: "/BCA.jpeg",
      pdf: "/BCA.pdf",
      desc: "Built a strong foundation in programming logic, database management, and full-stack web development.",
      reverse: true, // Text left, image right (Zig-zag effect)
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-[#050505] py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute top-20 right-4 md:right-10 text-[80px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none text-right">
        EDUCATION
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div
          data-aos="fade-down"
          className="mb-16 md:mb-24 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Academic Journey
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            My <span className="font-extrabold">Education.</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-16 md:gap-24">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col ${edu.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16 group`}
            >
              {/* Left/Right: Image Section */}
              <div
                data-aos={edu.reverse ? "fade-left" : "fade-right"}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#e3563b]/50 transition-colors duration-500 shadow-2xl bg-[#111]">
                  <img
                    src={edu.image}
                    alt={edu.degree}
                    className="w-full h-[250px] md:h-[350px] object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Floating Year Badge */}
                  <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-10">
                    <span className="text-white text-xs font-bold tracking-widest">
                      {edu.year}
                    </span>
                  </div>

                  {/* Hover PDF Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                    <a
                      href={edu.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#e3563b] text-white text-xs font-bold tracking-[0.15em] uppercase rounded-full shadow-[0_0_20px_rgba(227,86,59,0.5)] hover:bg-[#c94930] hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      View Degree PDF
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
              </div>

              {/* Right/Left: Details Section */}
              <div
                data-aos={edu.reverse ? "fade-right" : "fade-left"}
                className="w-full lg:w-1/2 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#e3563b] text-5xl font-extrabold opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    {edu.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {edu.degree}
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">
                      University
                    </p>
                    <p className="text-lg text-white font-medium">
                      {edu.university}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">
                      College / Institute
                    </p>
                    <p className="text-base text-gray-300">{edu.college}</p>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-[#e3563b] uppercase mb-1">
                        Score / Percentage
                      </p>
                      <p className="text-xl font-extrabold text-white">
                        {edu.score}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed border-l-2 border-[#e3563b]/30 pl-4 group-hover:border-[#e3563b] transition-colors">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
