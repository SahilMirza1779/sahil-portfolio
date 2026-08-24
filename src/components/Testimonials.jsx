const Testimonials = () => {
  const reviews = [
    {
      name: "Client - Nexus Arena",
      role: "Sports Management",
      text: "Sahil's work on the slot booking system was flawless. The .NET MVC architecture he engineered is incredibly robust, secure, and scalable for our arena.",
    },
    {
      name: "Project Lead - MedixCore",
      role: "Healthcare Tech",
      text: "The MERN stack Hospital Management System Sahil developed streamlined our entire workflow. His command over both backend logic and dynamic interfaces is outstanding.",
    },
    {
      name: "Tech Mentor",
      role: "Software Architect",
      text: "From Entity Framework Core to JWT authentication, Sahil writes exceptionally clean and maintainable code. A truly dedicated and problem-solving full-stack engineer.",
    },
  ];

  return (
    <section className="relative bg-[#050505] py-24 px-6 md:px-16 lg:px-24 border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div data-aos="fade-down" className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            What{" "}
            <span className="font-extrabold text-[#e3563b]">People Say.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base font-light">
            Feedback on my engineered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-black border border-white/5 p-8 rounded-2xl hover:border-white/15 transition-all duration-300 group cursor-none"
            >
              <svg
                className="w-8 h-8 text-[#e3563b]/40 mb-6 group-hover:text-[#e3563b] transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div>
                <h4 className="text-white font-bold tracking-wider text-sm uppercase">
                  {review.name}
                </h4>
                <p className="text-[#e3563b] text-xs font-medium mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
