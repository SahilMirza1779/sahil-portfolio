import Tilt from "react-parallax-tilt";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Smart Schooling",
      subtitle: "School Management System",
      description:
        "A comprehensive school management platform designed to handle administrative tasks, student records, and daily operations efficiently.",
      tech: ["PHP", "Xampp"],
      github: null,
      aos: "fade-right",
    },
    {
      id: "02",
      title: "Nexus Arena",
      subtitle: "Turn Booking System",
      description:
        "A dynamic slot booking and management system built for sports arenas to handle reservations, schedules, and user turns seamlessly.",
      tech: ["Web API", ".NET MVC", "Visual Studio"],
      github: "https://github.com/SahilMirza1779/NexusArena.API",
      aos: "fade-left",
    },
    {
      id: "03",
      title: "Noor E Amal",
      subtitle: "Islamic Tracker App",
      description:
        "A dedicated application designed with Web APIs and a robust database backend to help users track and manage their daily activities.",
      tech: ["Web API", ".NET MVC", "SSMS"],
      github: "https://github.com/SahilMirza1779/NoorEAmal.API",
      aos: "fade-right",
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-black py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-20 right-4 md:right-10 text-[100px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none text-right">
        WORK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div data-aos="fade-down" className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Featured Work
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Engineered <br className="hidden md:block" />
            <span className="font-extrabold">solutions.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <div key={index} data-aos={project.aos}>
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glareColor="#e3563b"
                glarePosition="all"
                className="h-full rounded-[2rem]"
              >
                <div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center p-8 md:p-12 lg:p-16 bg-[#080808] border border-white/5 rounded-[2rem] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e3563b]/10 h-full">
                  <div className="absolute top-4 right-8 text-[8rem] md:text-[12rem] font-black text-white/[0.02] group-hover:text-[#e3563b]/5 transition-colors duration-500 pointer-events-none select-none leading-none">
                    {project.id}
                  </div>

                  <div className="flex-1 z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-black/50 border border-white/10 rounded-xl group-hover:border-[#e3563b]/50 group-hover:shadow-[0_0_15px_rgba(227,86,59,0.2)] transition-all duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-[#e3563b]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm md:text-base font-bold tracking-[0.1em] text-white/50 uppercase">
                        {project.subtitle}
                      </h4>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 group-hover:text-[#e3563b] transition-colors duration-500">
                      {project.title}
                    </h3>

                    <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mb-10">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs font-medium text-gray-300 group-hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-sm font-bold text-white tracking-widest uppercase hover:text-[#e3563b] transition-colors group/btn"
                        >
                          View Code
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 text-sm font-bold text-gray-600 tracking-widest uppercase cursor-not-allowed">
                          Private Code
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
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
