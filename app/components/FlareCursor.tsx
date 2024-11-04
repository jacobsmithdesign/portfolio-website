"use client";
import React, { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

function FlareCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const updateFlareElements = () => {
    const elements = document.querySelectorAll("[data-flare]");

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;

      // Check if the element is a form control (input, textarea, button, select)
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setIsPointer(true);
        setHoverText(" "); // Display a message like "Type here" when hovering over form controls
        return;
      }

      // For other elements with data-flare, show the specific text
      setIsPointer(true);
      setHoverText(target.getAttribute("data-flare"));
    };

    const handleMouseOut = () => {
      setIsPointer(false);
      setHoverText(null);
    };

    const handleClick = () => {
      setIsPointer(false);
      setHoverText(null);
    };

    elements.forEach((el) => {
      el.removeEventListener("mouseenter", handleMouseOver);
      el.removeEventListener("mouseleave", handleMouseOut);
      el.removeEventListener("click", handleClick);

      el.addEventListener("mouseenter", handleMouseOver);
      el.addEventListener("mouseleave", handleMouseOut);
      el.addEventListener("click", handleClick);
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    updateFlareElements();

    const observer = new MutationObserver(() => {
      updateFlareElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed z-[60] pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)", // Center the element based on its width and height
      }}
    >
      <div
        className={`backdrop-blur-md bg-light/40 dark:bg-dark/40 flex ${
          hoverText
            ? "max-w-full h-8 rounded-2xl min-w-8 mx-auto"
            : "min-w-8 h-8 w-8 rounded-none max-w-8"
        } border items-center border-dark dark:border-light px-2 py-1 transition-all relative whitespace-nowrap`}
        style={{
          maxWidth: hoverText ? "100%" : "2rem",
        }}
      >
        <div
          className={`${hoverText ? "opacity-100 delay-150" : "opacity-0"} w-full transition-all duration-150 dark:text-light`}
        >
          {hoverText}
        </div>
      </div>
    </div>
  );
}

export default FlareCursor;
