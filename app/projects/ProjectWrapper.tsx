"use client";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Arrow from "../../public/diagonal-arrow.svg";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { animate } from "framer-motion";
import { StructuredText } from "react-datocms";
import customRenderers from "./customRenderers";
import Close from "../../public/cross.svg";
import Modal from "./projectModal";
import CornerGradient from "../../public/corner gradient.svg";
import {
  HoverGradient,
  HoverGradient2,
  HoverGradient3,
} from "../components/hoverGradient";
import MyThemeContext from "../context/themeContext";
function WebDevelopment({ webdevProject }) {
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
      webdevProject.length * 300 + 1000
    ); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, [webdevProject]);

  return (
    <div className="w-full text-dark dark:text-light">
      <h2
        className={`${animateContent ? "opacity-100" : "opacity-0"} duration-700 md:text-4xl text-2xl md:pl-8 pl-4 md:py-8 py-4`}
      >
        Web Development
      </h2>
      {/* Animated Border */}
      <div
        className={`border-b border-dark dark:border-light ${animateContent ? "w-full" : "w-0"} transition-all duration-700`}
      />
      <div
        className={` ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        {webdevProject.map((project, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 `}
            style={{
              transitionDelay: initialLoad
                ? `${150 * (index + 1) + 400}ms`
                : "0ms",
            }}
          >
            <button key={index}>
              <a
                href={project.url}
                className={`md:h-96 h-56 border-b border-r bg-secondary border-dark dark:border-light items-end flex relative group overflow-clip`}
              >
                <div
                  className={`w-full h-full z-30 ${animateContent ? "backdrop-blur-none" : "backdrop-blur-xl"} transition-all duration-700`}
                  style={{
                    transitionDelay: initialLoad
                      ? `${150 * (index + 1) + 400}ms`
                      : "0ms",
                  }}
                />
                <h2
                  className={`${animateContent ? "pb-6 opacity-100" : "pb-0 opacity-0"} transition-all duration-700 ease-in-out pl-4 md:text-2xl text-md text-left text-balance font-bold absolute z-20 md:group-hover:text-${background}`}
                  style={{
                    transitionDelay: initialLoad
                      ? `${150 * (index + 1) + 400}ms`
                      : "0ms",
                  }}
                >
                  Visit website
                </h2>
                <Arrow
                  className={`md:h-16 h-10 text-dark dark:text-light md:group-hover:text-${background} top-0 right-0 absolute mt-2 mr-2 md:group-hover:mt-0 md:group-hover:mr-0 transition-all duration-300 ease-in-out z-20`}
                />
                <div
                  className={`md:group-hover:opacity-100 opacity-0 transition-all duration-300 bg-gradient-to-t from-${background} to-transparent absolute w-full h-full`}
                />
                <Image
                  src={project.image.url}
                  alt="background image for computer science project"
                  width={400}
                  height={400}
                  className="object-cover overflow-clip w-full h-full absolute opacity-30 md:group-hover:opacity-60 transition-all duration-700 ease-in-out md:group-hover:scale-105"
                />
              </a>
            </button>
            <div className="md:col-span-2 md:h-full h-56 flex flex-col relative">
              <h1
                className={`md:text-4xl text-md font-bold ${animateContent ? "pl-4" : "pl-0"} pt-4 transition-all duration-500`}
                style={{
                  transitionDelay: initialLoad
                    ? `${150 * (index + 1) + 400}ms`
                    : "0ms",
                }}
              >
                {project.title}
              </h1>
              <StructuredText
                data={project.content.value.document}
                customNodeRules={customRenderers}
              />
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
                  <div
                    className={`bg-bluepastel md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                  >
                    TypeScript
                  </div>
                  <div
                    className={`bg-redpastel md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                  >
                    DatoCMS
                  </div>
                  <div
                    className={`bg-dark md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                  >
                    NextJS
                  </div>
                  <div
                    className={`bg-yellowpastel md:px-4 px-1 md:text-lg text-xs font-bold text-light`}
                  >
                    tailwindCSS
                  </div>
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

function CompterScience({ compSciProject, onProjectClick }) {
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
    <div className="w-full text-dark dark:text-light">
      <h2
        className={`${animateContent ? "opacity-100" : "opacity-0"} duration-700 md:text-4xl text-2xl md:pl-8 pl-4 md:py-8 py-4`}
      >
        Computer Science
      </h2>
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
            <CornerGradient className="w-40 h-40 text-light dark:text-dark absolute right-0 top-0 z-10 opacity-0 md:group-hover:opacity-50 transition-all duration-700 translate-x-6 -translate-y-6" />
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

function EnlargedProject({ projectDetails }) {
  if (!projectDetails) return null;
  const background = "light";
  const foreground = "dark";

  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col md:pb-10 pb-4 border-b border-dark dark:border-light md:mb-10 mb-4">
        <Image
          src={projectDetails.image.url}
          alt={`Image for ${projectDetails.title}`}
          width={800}
          height={800}
          className="object-cover md:w-1/2 w-full md:h-72 h-36"
        />
        <div className="md:w-1/2 w-full md:h-72 p-2 items-end flex">
          <h1 className="md:text-xl text-sm mx-4 text-left text-balance">
            {projectDetails.subcontent}
          </h1>
        </div>
      </div>
      {projectDetails.articles.map((article, index) => (
        <div key={index} className="pb-10">
          <StructuredText
            data={article.articleContent.value.document}
            customNodeRules={customRenderers}
          />
          <Image
            src={article.image.url}
            alt={`Article image ${index + 1}`}
            width={800}
            height={800}
            unoptimized
            className="object-contain w-full md:max-h-[32rem] max-h-64 mb-10"
          />
        </div>
      ))}
    </div>
  );
}
export function ProjectWrapper({ compSciProject, webdevProject }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const background = "light";
  const foreground = "dark";

  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className={`py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen bg-light dark:bg-dark text-dark dark:text-light`}
    >
      <div
        className={`border border-dark dark:border-light h-full relative overflow-hidden`}
      >
        <div
          className={`w-full flex text-center border-b border-dark dark:border-light md:h-24 h-12 group overflow-clip`}
        >
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10 `}
          >
            Projects.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="overflow-y-scroll h-full hide-scrollbar md:pb-24 pb-12">
          <WebDevelopment webdevProject={webdevProject} />
          <CompterScience
            compSciProject={compSciProject}
            onProjectClick={handleProjectClick}
          />
          <Modal isOpen={selectedProject !== null} onClose={handleClose}>
            <EnlargedProject projectDetails={selectedProject} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ProjectWrapper;
