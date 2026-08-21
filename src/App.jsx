import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import InteractiveShowcase from "./components/InteractiveShowcase";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState(0);

  const [text1, setText1] = useState("01010");
  const [text2, setText2] = useState("01010");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const finalWord1 = "SAHIL";
    const finalWord2 = "MIRZA";
    const chars = "0101019876543210><}{][!@#$*%";

    const countInterval = setInterval(() => {
      setCounter((prev) => {
        const next = prev + 1;
        const revealIndex = Math.floor((next / 100) * 10);

        setText1(
          finalWord1
            .split("")
            .map((letter, i) => {
              if (i < revealIndex) return finalWord1[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );

        setText2(
          finalWord2
            .split("")
            .map((letter, i) => {
              if (i + 5 < revealIndex) return finalWord2[i];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""),
        );

        if (next >= 100) clearInterval(countInterval);
        return next;
      });
    }, 30);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 4500);

    return () => {
      clearInterval(countInterval);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 50,
        easing: "ease-out-cubic",
      });
    }
  }, [isLoading]);

  return (
    <div className="font-sans selection:bg-[#e3563b]/30 selection:text-white bg-black overflow-hidden relative">
      {/* 🚀 HAMARA PREMIUM ORANGE CURSOR YAHAN HAI 🚀 */}
      <CustomCursor />

      {showLoader && (
        <div
          className={`fixed inset-0 z-[999] bg-[#030303] flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${isLoading ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-4xl font-mono font-extrabold tracking-[0.4em] uppercase mb-8 opacity-90">
              <span className="text-white">{text1}</span>{" "}
              <span className="text-[#e3563b]">{text2}</span>
            </h1>
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-[#e3563b] transition-all duration-75 ease-linear shadow-[0_0_10px_#e3563b]"
                style={{ width: `${counter}%` }}
              ></div>
            </div>
            <p className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.5em] font-mono">
              {counter}%
            </p>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <Navbar />

        <main
          className="relative flex flex-col justify-end min-h-screen px-6 md:px-16 lg:px-24 pb-24 md:pb-32"
          id="home"
        >
          <div
            className="absolute inset-0 z-0 bg-transparent"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <div className="absolute top-0 right-0 w-full md:w-[45%] h-full">
              <img
                src="/profile1.jpeg"
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
              .NET & MERN Stack Developer based in Surat. I specialize in
              building robust backend architectures and dynamic interfaces.
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
          <TechStack />
          <Timeline />
          <Education />
          <Certifications />
          <Services />
          <Projects />
          <InteractiveShowcase />
          <Hobbies />
          <Contact />
          <Footer />
        </div>

        <Analytics />
      </div>
    </div>
  );
}

export default App;
