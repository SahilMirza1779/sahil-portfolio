import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications"; // Yahan naya import
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    // Yahan humara cinematic scroll animation initialize ho raha hai
    AOS.init({
      duration: 1000,
      once: false, // Scroll up karne par reverse hoga
      mirror: true, // Wapas aane par fir animate hoga
      offset: 50,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="font-sans selection:bg-gray-500/30 selection:text-white bg-black overflow-hidden relative">
      <Navbar />

      <main
        className="relative flex flex-col justify-end min-h-screen px-6 md:px-16 lg:px-24 pb-24 md:pb-32"
        id="home"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-black"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <div className="absolute top-0 right-0 w-full md:w-[45%] h-full">
            <img
              src="/Sahil_photo.jpg"
              alt="Sahil Mirza"
              className="w-full h-full object-cover object-center transform -scale-x-100 opacity-80"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop";
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-2xl">
          <h1
            data-aos="fade-right"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.05] mb-6"
          >
            Code isn't written. <br />
            It's{" "}
            <span className="font-extrabold text-[#e3563b]">
              engineered.
            </span>{" "}
            <br />I build first.
          </h1>

          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-base md:text-lg text-gray-400 max-w-xl font-light leading-relaxed mb-10"
          >
            .NET & MERN Stack Developer based in Surat. I specialize in building
            robust backend architectures and dynamic interfaces.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap gap-4 pt-4 md:pt-6"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-[#e3563b] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#c94930] hover:shadow-[0_0_25px_rgba(227,86,59,0.3)] transition-all duration-300 flex items-center gap-2 group"
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:border-[#e3563b] hover:text-[#e3563b] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 flex items-center gap-2"
            >
              Let's Collaborate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <div className="relative z-20 bg-black">
        <About />
        <Timeline />
        <Services />
        <Projects />

        {/* Naya Certifications Section Yahan Render Hoga */}
        <Certifications />

        <Hobbies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
