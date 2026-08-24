import { useRef, useState } from "react";

const MagneticButton = ({ children, className, href }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 }); // 0.3 is the magnetic pull strength
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Element = href ? "a" : "button";

  return (
    <Element
      href={href}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition:
          position.x === 0
            ? "transform 0.4s ease-out"
            : "transform 0.1s linear",
      }}
    >
      {children}
    </Element>
  );
};

export default MagneticButton;
