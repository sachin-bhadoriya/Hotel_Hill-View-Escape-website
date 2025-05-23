// CursorTrail.jsx
import React, { useEffect } from "react";
import '../../CSSFile/CursorTrail.css'


const CursorTrail = () => {
  useEffect(() => {
    const numDots = 1;
    const dots = Array.from({ length: numDots }, (_, i) =>
      document.getElementById(`trail-${i}`)
    );

    const positions = Array(numDots).fill({ x: 0, y: 0 });

    const updateDots = (e) => {
      positions[0] = { x: e.clientX, y: e.clientY };

      for (let i = 1; i < numDots; i++) {
        const prev = positions[i - 1];
        const current = positions[i];

        positions[i] = {
          x: current.x + (prev.x - current.x) * 0.3,
          y: current.y + (prev.y - current.y) * 0.3,
        };
      }

      dots.forEach((dot, i) => {
        if (dot) {
          dot.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
        }
      });
    };

    window.addEventListener("mousemove", updateDots);
    return () => window.removeEventListener("mousemove", updateDots);
  }, []);

  return (
    <>
      {[...Array(1)].map((_, i) => (
        <div key={i} className="trail-dot" id={`trail-${i}`} />
      ))}
    </>
  );
};

export default CursorTrail;
