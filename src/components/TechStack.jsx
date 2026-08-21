const TechStack = () => {
  // Aapki main skills (Ise hum 4 baar copy karenge taaki infinite loop ban jaye)
  const skills = [
    "C#",
    ".NET CORE MVC",
    "ASP.NET WEB API",
    "REACT.JS",
    "NODE.JS",
    "MONGODB",
    "SQL SERVER",
    "TAILWIND CSS",
    "JAVASCRIPT",
    "GITHUB",
  ];

  // Infinite effect ke liye array ko bada karna zaroori hai
  const scrollItems = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="py-12 bg-[#050505] border-t border-b border-white/5 overflow-hidden relative">
      {/* Left aur Right mein fade (gradient) effect taaki text achanak gayab na ho */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      <div className="animate-marquee flex gap-16 items-center">
        {scrollItems.map((skill, index) => (
          <div
            key={index}
            className="text-4xl md:text-6xl font-extrabold text-transparent text-stroke transition-all duration-300 hover:text-[#e3563b] hover:scale-110 cursor-pointer"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
