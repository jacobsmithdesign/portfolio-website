"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import MyThemeContext from "../context/themeContext";

const GridBackground: React.FC = () => {
  const colors = ["#606EA9", "#C85656", "#DFB862", "#7D9B53", "#9C7BB5"];
  // Define the colors array
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridSize, setGridSize] = useState({ rows: 0, columns: 0 });

  // Function to get a random color from the array
  const getRandomColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const updateGridSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        const tileSize = 30; // Set your desired tile size in pixels

        const columns = Math.floor(containerWidth / tileSize);
        const rows = Math.floor(containerHeight / tileSize);

        setGridSize({ rows, columns });
      }
    };

    updateGridSize(); // Initial calculation

    window.addEventListener("resize", updateGridSize); // Recalculate on window resize
    return () => {
      window.removeEventListener("resize", updateGridSize); // Cleanup listener
    };
  }, []);

  // Create the array of divs with
  const gridItems = Array.from({
    length: gridSize.rows * gridSize.columns,
  }).map((_, index) => (
    <div
      key={index}
      className="w-full h-full relative "
      onMouseEnter={(e) => {
        console.log("entered");
        (e.target as HTMLDivElement).style.transition = "0.02s ease";
        (e.target as HTMLDivElement).style.backgroundColor = getRandomColor();
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLDivElement).style.transition = "0.7s ease";
        (e.target as HTMLDivElement).style.backgroundColor = "";
      }}
    >
      <div className="absolute border-l border-t border-light/50 dark:border-dark/20 w-full h-full" />
    </div>
  ));

  return (
    <>
      <div className="absolute w-full h-full backdrop-blur-2xl z-10 pointer-events-none flex" />
      <div
        ref={containerRef}
        className="absolute w-full h-full opacity-70 md:grid hidden"
        style={{
          gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        }}
      >
        {gridItems}
      </div>
    </>
  );
};

export default GridBackground;

export const GridBackground2: React.FC = () => {
  const { isDarkTheme } = useContext(MyThemeContext);

  const colorDark = "#78736B";
  const colorLight = "#BAB2A0";

  const containerRef = useRef<HTMLDivElement>(null);
  const [gridSize, setGridSize] = useState({ rows: 0, columns: 0 });

  const updateGridSize = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      const tileSize = 30; // Set your desired tile size in pixels

      const columns = Math.floor(containerWidth / tileSize);
      const rows = Math.floor(containerHeight / tileSize);

      setGridSize({ rows, columns });
    }
  };

  useEffect(() => {
    updateGridSize(); // Initial calculation

    window.addEventListener("resize", updateGridSize); // Recalculate on window resize
    return () => {
      window.removeEventListener("resize", updateGridSize); // Cleanup listener
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current.parentElement;
      if (container) {
        const handleTransitionEnd = () => {
          updateGridSize();
        };

        container.addEventListener("transitionend", handleTransitionEnd);

        return () => {
          container.removeEventListener("transitionend", handleTransitionEnd);
        };
      }
    }
  }, [containerRef]);

  const gridItems = Array.from({
    length: gridSize.rows * gridSize.columns,
  }).map((_, index) => (
    <div
      key={index}
      className="w-full h-full relative"
      onMouseEnter={(e) => {
        (e.target as HTMLDivElement).style.transition = "0s ease";
        (e.target as HTMLDivElement).style.backgroundColor = isDarkTheme
          ? colorDark
          : colorLight;
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLDivElement).style.transition = "0.3s ease";
        (e.target as HTMLDivElement).style.backgroundColor = "";
      }}
    >
      <div className="absolute border-l border-t border-light/50 dark:border-dark/20 w-full h-full" />
    </div>
  ));

  return (
    <>
      <div className="absolute w-full h-full backdrop-blur-3xl z-10 pointer-events-none" />
      <div
        ref={containerRef}
        className="absolute w-full h-full opacity-100 md:grid hidden"
        style={{
          gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        }}
      >
        {gridItems}
      </div>
    </>
  );
};
