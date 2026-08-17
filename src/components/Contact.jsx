const Contact = () => {
  return (
    <section
      className="bg-gray-900 text-white py-20 px-4 border-t border-gray-800"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 mb-4 inline-block transform hover:scale-105 transition duration-300">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Currently looking for new opportunities. Whether you have a
            question, a project proposal, or just want to say hi, my inbox is
            always open!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Details */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 shadow-xl transition-all duration-500 group">
            <h3 className="text-2xl font-semibold mb-8 text-white group-hover:text-blue-400 transition-colors duration-300">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Phone Row */}
              <div className="flex items-center space-x-5 group/item cursor-default">
                <div className="bg-gray-700/50 p-4 rounded-xl text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg font-medium text-gray-200 group-hover/item:text-blue-300 transition-colors">
                    +91 63549 61591
                  </p>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-center space-x-5 group/item cursor-default">
                <div className="bg-gray-700/50 p-4 rounded-xl text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium text-gray-200 group-hover/item:text-blue-300 transition-colors">
                    sahilmirza01779@gmail.com
                  </p>
                </div>
              </div>

              {/* Location Row */}
              <div className="flex items-center space-x-5 group/item cursor-default">
                <div className="bg-gray-700/50 p-4 rounded-xl text-blue-400 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:shadow-[0_0_15px_rgba(37,99,235,0.5)] transform group-hover/item:-translate-y-1 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-medium text-gray-200 group-hover/item:text-blue-300 transition-colors">
                    Surat, Gujarat
                  </p>
                </div>
              </div>

              {/* Connect Links */}
              <div className="pt-8 border-t border-gray-700 mt-8">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-5">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/sahil-mirza-sahil-mirzadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-xl transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/SahilMirza1779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-xl transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 shadow-xl transition-all duration-500">
            {/* Maine aapka link yahan laga diya hai */}
            <form
              action="https://formspree.io/f/xppaypeo"
              method="POST"
              className="space-y-6 text-left"
            >
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Sahil Mirza"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Let's talk about..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 mt-2 flex justify-center items-center space-x-2"
              >
                <span>Send Message</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
