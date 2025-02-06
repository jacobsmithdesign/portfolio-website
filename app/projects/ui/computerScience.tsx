import GridBackground from "@/app/ui/gridBackground";
import Image from "next/image";
import { useEffect, useState } from "react";
import CornerGradient from "@/public/corner gradient.svg";
import Arrow from "@/public/diagonal-arrow.svg";

export default function ComupterScience({ compSciProject, onProjectClick }) {
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const background = "light";
  const foreground = "dark";
  useEffect(() => {
    setAnimateContent(true);

    const timeout = setTimeout(
      () => {
        setInitialLoad(false);
      },
      compSciProject.length * 300 + 1000
    ); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [compSciProject]);

  return (
    <div className="w-full text-dark dark:text-light ">
      <div className="w-full h-full relative flex">
        <h2
          className={`${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-500 md:text-4xl text-2xl md:pl-8 pl-4 md:py-8 py-4 z-20 h-full delay-700 pointer-events-none`}
        >
          Computer Science
        </h2>
        <GridBackground />
      </div>
      {/* Animated Border */}
      <div
        className={`border-b border-dark dark:border-light ${animateContent ? "w-full" : "w-0"} transition-all duration-700`}
      />
      <div
        className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        {compSciProject.map((project, index) => (
          <button
            key={index}
            data-flare="Read Article"
            className={`md:h-96 h-56 border-b transition-all duration-300 ${index % 2 == 0 ? "md:border-r-0 border-r" : ""} ${index != 0 ? "md:border-l" : ""} bg-light dark:bg-dark border-dark dark:border-light items-end flex relative group overflow-clip group`}
            onClick={() => onProjectClick(project)}
          >
            <div
              className={`w-full h-full z-30 ${animateContent ? "backdrop-blur-none" : "backdrop-blur-xl"} transition-all duration-700 `}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            />
            <h2
              className={`${animateContent ? "md:pb-6 pb-4 opacity-100 md:group-hover:pb-8" : "pb-0 opacity-0"} transition-all duration-500 ease-out md:px-4 px-2 md:text-2xl text-md text-left text-balance font-bold absolute z-20 text-dark dark:text-light `}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            >
              {project.title}
            </h2>
            <Arrow
              className={`md:h-16 h-10 text-dark dark:text-light top-0 right-0 absolute mt-2 mr-2 md:group-hover:mt-0 md:group-hover:mr-0 transition-all duration-500 ease-out z-20`}
            />
            <div
              className={`md:group-hover:opacity-100 opacity-0 transition-all duration-300 bg-gradient-to-t from-light dark:from-dark to-transparent absolute w-full h-full`}
            />
            <div className="absolute w-full h-2/5 bg-gradient-to-t from-light to-transparent dark:from-dark md:group-hover:opacity-80 opacity-0 transition-all duration-700 ease-in-out z-10" />
            <CornerGradient className="w-40 h-40 text-light dark:text-dark absolute right-0 top-0 z-10 opacity-0 md:group-hover:opacity-100 transition-all duration-700 translate-x-6 -translate-y-6" />
            <Image
              src={project.image.url}
              alt="background image for computer science project"
              width={400}
              height={400}
              className="object-cover overflow-clip w-full h-full absolute opacity-30 md:group-hover:opacity-80 transition-all duration-700 ease-in-out md:group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
