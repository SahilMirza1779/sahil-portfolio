const Projects = () => {
  const projectList = [
    {
      title: "Smart Schooling (School Management System)",
      description:
        "A comprehensive school management platform designed to handle administrative tasks, student records, and daily operations efficiently.",
      techStack: ["PHP", "Xampp"],
      githubLink: null, // Null rakha hai taaki button na dikhe
      liveLink: "#",
    },
    {
      title: "Nexus Arena (Turn Booking System)",
      description:
        "A dynamic slot booking and management system built for sports arenas to handle reservations, schedules, and user turns seamlessly.",
      techStack: ["Web API", ".NET MVC", "Visual Studio"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Noor E Amal (Islamic Tracker App)",
      description:
        "A dedicated application designed with Web APIs and a robust database backend to help users track and manage their daily activities.",
      techStack: ["Web API", ".NET MVC", "SSMS"],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section
      className="bg-gray-800 text-white py-24 px-4 relative overflow-hidden"
      id="projects"
    >
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 inline-block transform hover:scale-105 transition duration-300">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 shadow-xl hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Magic Top Border on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div>
                {/* Folder Icon Section */}
                <div className="mb-6 flex justify-between items-center">
                  <div className="p-3 bg-blue-900/30 text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-base leading-relaxed h-24 overflow-hidden">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 border border-gray-600 text-gray-300 text-xs px-4 py-1.5 rounded-full group-hover:border-blue-500/50 group-hover:text-blue-300 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links (Icons + Text) */}
              <div className="flex items-center space-x-6 pt-5 border-t border-gray-800">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group/link"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 group-hover/link:scale-110 transition-transform"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
