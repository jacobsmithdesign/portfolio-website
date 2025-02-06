"use client";
import React, { useState, useEffect, useRef } from "react";

// Track the cursor's position
interface Position {
  x: number;
  y: number;
}

function FlareCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 }); // Cursor position
  const [hoverText, setHoverText] = useState<string | null>(null); // Text displayed inside the flare
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false); // Detect touch devices to disable the cursor
  const [textWidth, setTextWidth] = useState<number>(0); // Dynamic width of the flare based on text
  const textRef = useRef<HTMLDivElement>(null); // Ref to measure text width

  // Check if the device is a touch screen
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Update cursor position based on mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Attach hover events to elements with data-flare attributes
  const updateFlareElements = () => {
    const elements = document.querySelectorAll("[data-flare]");

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;

      // Show "type" for form fields, otherwise display the data-flare text
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setHoverText("type");
        return;
      }

      setHoverText(target.getAttribute("data-flare"));
    };

    const handleMouseOut = () => {
      setHoverText(null);
    };

    const handleClick = () => {
      setHoverText(null);
    };

    // Clean and reapply event listeners to prevent duplicates
    elements.forEach((el) => {
      el.removeEventListener("mouseenter", handleMouseOver);
      el.removeEventListener("mouseleave", handleMouseOut);
      el.removeEventListener("click", handleClick);

      el.addEventListener("mouseenter", handleMouseOver);
      el.addEventListener("mouseleave", handleMouseOut);
      el.addEventListener("click", handleClick);
    });
  };

  // Adjust flare width based on the text size
  useEffect(() => {
    if (hoverText && textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, [hoverText]);

  // Handle mouse movement and observe DOM changes for dynamic content
  useEffect(() => {
    if (isTouchDevice) return;

    window.addEventListener("mousemove", handleMouseMove);
    updateFlareElements();

    // Reapply event listeners when new elements are added to the DOM
    const observer = new MutationObserver(() => {
      updateFlareElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, [isTouchDevice]);

  // Disable cursor on touch devices
  if (isTouchDevice) return null;

  return (
    <div
      className="fixed z-[60] pointer-events-none md:block hidden"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`backdrop-blur-md bg-light/40 dark:bg-dark/40 flex border items-center border-dark dark:border-light px-2 py-1 transition-all duration-300 ease-in-out relative whitespace-nowrap min-w-8 overflow-hidden ${
          hoverText ? "h-8 rounded-2xl" : "h-8 w-8 rounded-none"
        }`}
        style={{
          width: hoverText ? `${textWidth + 17}px` : "2rem", // Adjust width dynamically based on text
        }}
      >
        <div
          ref={textRef}
          className={`${
            hoverText ? "opacity-100 delay-150" : "opacity-0"
          } transition-opacity duration-300 dark:text-light`}
        >
          {hoverText}
        </div>
      </div>
    </div>
  );
}

export default FlareCursor;
