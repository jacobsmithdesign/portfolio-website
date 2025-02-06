import GridBackground from "@/app/ui/gridBackground";
import Image from "next/image";
import { useEffect, useState } from "react";
import CornerGradient from "@/public/corner gradient.svg";
import Arrow from "@/public/diagonal-arrow.svg";
import { StructuredText } from "react-datocms";
import customRenderers from "../customRenderers";

export default function WebDevelopment({ webdevProject }) {
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const background = "light";
  const foreground = "dark";
  useEffect(() => {
    setAnimateContent(true);

    const timeout = setTimeout(() => {
      setInitialLoad(false);
    }, 1300); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [webdevProject]);

  return (
    <div className="w-full text-dark dark:text-light">
      <div className={`w-full h-full relative flex `}>
        <h2
          className={`${animateContent ? "opacity-100" : "opacity-0"} duration-700 md:text-4xl text-2xl md:pl-8 pl-4 md:py-8 py-4 z-20 h-full pointer-events-none`}
        >
          Web Development
        </h2>
        <GridBackground />
      </div>
      {/* Animated Border */}
      <div
        className={`border-b border-dark dark:border-light ${animateContent ? "w-full" : "w-0"} transition-all duration-700`}
      />
      <div
        className={`${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        {webdevProject.map((project, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700`}
          >
            <a
              key={index}
              href={project.url}
              data-flare={"Visit " + project.title}
              className={`md:h-96 h-56 border-b border-r bg-secondary dark:bg-dark/30 border-dark dark:border-light items-end flex relative group overflow-clip`}
            >
              <div
                className={`w-full h-full z-30 ${animateContent ? "backdrop-blur-none" : "backdrop-blur-xl"} transition-all duration-700 `}
                style={{
                  transitionDelay: initialLoad
                    ? `${200 * (index + 1) + 400}ms`
                    : "0ms",
                }}
              />
              <h2
                className={`${animateContent ? "pb-6 opacity-100" : "pb-0 opacity-0"} transition-all duration-700 ease-in-out pl-4 md:text-2xl text-md text-left text-balance font-bold absolute z-20 text-dark dark:text-light`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 400}ms`
                    : "0ms",
                }}
              >
                Visit website
              </h2>
              <Arrow
                className={`md:h-16 h-10 text-dark dark:text-light  top-0 right-0 absolute mt-2 mr-2 md:group-hover:mt-0 md:group-hover:mr-0 transition-all duration-300 ease-in-out z-20`}
              />
              <div className="absolute w-full h-2/5 bg-gradient-to-t from-light to-transparent dark:from-dark md:group-hover:opacity-80 opacity-0 transition-all duration-700 ease-in-out z-10" />
              <CornerGradient className="w-40 h-40 text-light dark:text-dark absolute right-0 top-0 z-10 opacity-0 md:group-hover:opacity-100 transition-all duration-700 translate-x-6 -translate-y-6" />
              <Image
                src={project.image.url}
                alt="background image for computer science project"
                width={400}
                height={400}
                className="object-cover overflow-clip w-full h-full absolute opacity-30 md:group-hover:opacity-60 transition-all duration-700 ease-in-out md:group-hover:scale-105"
              />
            </a>
            <div className="md:col-span-2 md:h-full h-56 flex flex-col relative">
              <h1
                className={`md:text-4xl text-md font-bold ${animateContent ? "pl-4" : "pl-0"} pt-4 transition-all duration-500 ease-out text-dark dark:text-light`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 400}ms`
                    : "0ms",
                }}
              >
                {project.title}
              </h1>
              <div
                className={`${animateContent ? "pl-4" : "pl-0"} ransition-all duration-500 ease-out text-dark dark:text-light`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 500}ms`
                    : "0ms",
                }}
              >
                <StructuredText
                  data={project.content.value.document}
                  customNodeRules={customRenderers}
                />
              </div>
              <div
                className={`flex justify-end items-end ml-2 h-full mb-2 ${animateContent ? "mr-2" : "mr-8"} transition-all duration-700`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 400}ms`
                    : "0ms",
                }}
              >
                <div
                  className={`border-dark dark:border-light border flex md:flex-row flex-col`}
                >
                  {project.typescript && (
                    <div
                      className={`bg-bluepastel md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                    >
                      TypeScript
                    </div>
                  )}
                  {project.datocms && (
                    <div
                      className={`bg-redpastel md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                    >
                      DatoCMS
                    </div>
                  )}
                  {project.nextjs && (
                    <div
                      className={`bg-dark md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                    >
                      NextJS
                    </div>
                  )}
                  {project.tailwindcss && (
                    <div
                      className={`bg-yellowpastel md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                    >
                      tailwindCSS
                    </div>
                  )}
                </div>
              </div>
              {/* Animated Border */}
              <div
                className={`border-b border-dark dark:border-light ${animateContent ? "w-full" : "w-0"} transition-all duration-700 bottom-0 absolute`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 600}ms`
                    : "0ms",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
