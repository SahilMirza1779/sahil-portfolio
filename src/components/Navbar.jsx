const Navbar = () => {
  // Navigation links array taaki code clean rahe
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-700/50 shadow-lg transition-all duration-300">
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

          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-8 md:space-x-12 text-lg font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white relative group py-2 transition-colors duration-300"
                  >
                    {link.name}
                    {/* Magic Underline Animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
