import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse is over any clickable element
      const target = e.target;
      if (target && target.closest) {
        const isClickable = target.closest(
          'a, button, input, textarea, [role="button"]',
        );
        setIsHovering(!!isClickable);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Solid Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block bg-[#e3563b] rounded-full transition-transform duration-75 ease-out"
        style={{
          width: "10px",
          height: "10px",
          // JS math for perfect centering without CSS conflicts
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${isHovering ? 2.5 : 1})`,
        }}
      ></div>

      {/* Outer Glow Ring (Trails behind smoothly) */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99998] hidden md:block border border-[#e3563b]/50 rounded-full transition-all duration-300 ease-out"
        style={{
          width: "36px",
          height: "36px",
          transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
