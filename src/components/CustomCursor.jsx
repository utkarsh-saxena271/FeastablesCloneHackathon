import React, { useState, useEffect } from "react";

const CustomCursor = ({ defaultSize = 20 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentSize, setCurrentSize] = useState(defaultSize);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-cursor-size]");

    const handleEnter = (e) => {
      const size = parseInt(e.target.getAttribute("data-cursor-size"), 10);
      setCurrentSize(isNaN(size) ? defaultSize : size);
    };

    const handleLeave = () => {
      setCurrentSize(defaultSize);
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [defaultSize]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        borderRadius: "50%",
        backgroundColor: "#ff9900",
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;