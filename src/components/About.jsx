const About = () => {
  // Yahan humne MERN aur .NET ke skills bhi add kar diye hain
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB", // MERN Stack
    "C#",
    ".NET MVC",
    "Web API",
    "SQL Server", // .NET Stack
    "JavaScript",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  return (
    <section
      className="bg-gray-900 text-white py-24 px-4 relative overflow-hidden"
      id="about"
    >
      {/* Background Subtle Glow Effect */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Animated Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 inline-block transform hover:scale-105 transition duration-300">
            About Me
          </h2>
        </div>

        {/* Premium Glassmorphism Card */}
        <div className="bg-gray-800/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-700 shadow-2xl hover:border-blue-500/50 transition-all duration-500">
          {/* Bio Text */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-14">
            <p>
              Hello! I am{" "}
              <span className="text-blue-400 font-semibold">Sahil Mirza</span>,
              a passionate and versatile{" "}
              <span className="text-white font-bold">Fullstack Developer</span>{" "}
              based in Surat, Gujarat. Holding a Master of Computer Applications
              (MCA) degree, I have built a strong foundation in software
              engineering principles and modern web technologies.
            </p>
            <p>
              I specialize in both the{" "}
              <span className="text-white font-bold">MERN Stack</span> (MongoDB,
              Express.js, React, Node.js) and{" "}
              <span className="text-white font-bold">.NET Development</span>.
              Whether it's crafting responsive and interactive front-end user
              interfaces or architecting secure, scalable back-end APIs, I
              thrive on solving complex problems with clean and optimized code.
            </p>
            <p>
              My ultimate goal is to build seamless, user-friendly digital
              experiences while continuously learning and adapting to the
              ever-evolving tech landscape.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="border-t border-gray-700/50 pt-10">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white flex items-center justify-center gap-3">
              {/* Code SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              Tech Stack & Expertise
            </h3>

            {/* Animated Skill Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 bg-gray-900 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 py-3 px-6 rounded-xl text-sm font-medium shadow-sm hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transform hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {/* Glowing Dot Indicator */}
                  <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:bg-blue-400 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
