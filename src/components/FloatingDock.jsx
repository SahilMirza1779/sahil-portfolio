const FloatingDock = () => {
  const links = [
    {
      id: "home",
      label: "Home",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      ),
    },
    {
      id: "projects",
      label: "Work",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      id: "hobbies",
      label: "Hobbies",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] hidden md:flex items-center gap-6 px-8 py-3 bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.8)]">
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="group relative p-2 text-white/40 hover:text-[#e3563b] transition-colors cursor-none"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
          >
            {link.icon}
          </svg>
          {/* Hover Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#111] border border-white/10 text-white text-[10px] uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingDock;
