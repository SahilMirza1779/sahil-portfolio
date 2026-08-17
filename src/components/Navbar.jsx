import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Animated Logo */}
          <div className="shrink-0 transform hover:scale-105 transition-transform duration-300">
            <a
              href="#home"
              className="text-3xl font-extrabold tracking-wider group cursor-pointer"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
                Sahil
              </span>
              <span className="text-white group-hover:text-gray-200 transition-colors duration-300">
                .dev
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links & Resume Button */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <ul className="flex space-x-8 lg:space-x-12 text-lg font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white relative group py-2 transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            {/* Resume Button - Desktop */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-colors"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl absolute w-full left-0 transition-all duration-300">
          <ul className="flex flex-col px-6 pt-4 pb-8 space-y-6 text-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 text-xl font-medium transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Resume Button - Mobile */}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
