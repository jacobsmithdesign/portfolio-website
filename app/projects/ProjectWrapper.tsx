"use client";
import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Arrow from "../../public/diagonal-arrow.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import { StructuredText } from "react-datocms";
import customRenderers from "./customRenderers";
import Close from "../../public/cross.svg";
import Modal from "./projectModal";
function WebDevelopment({ webdevProject }) {
  const [animateContent, setAnimateContent] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

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
    <div className="w-full">
      <h2
        className={`${animateContent ? "opacity-100" : "opacity-0"} duration-700 md:text-4xl text-2xl md:pl-8 pl-4 md:py-8 py-4`}
      >
        Web Development
      </h2>
      {/* Animated Border */}
      <div
        className={`border-b border-dark ${animateContent ? "w-full" : "w-0"} transition-all duration-700`}
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
                className={`md:h-96 h-56 border-b border-r bg-secondary border-dark items-end flex relative group overflow-clip`}
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
                  className={`${animateContent ? "pb-6 opacity-100" : "pb-0 opacity-0"} transition-all duration-700 ease-in-out pl-4 md:text-2xl text-md text-left text-balance font-bold absolute z-20 md:group-hover:text-light`}
                  style={{
                    transitionDelay: initialLoad
                      ? `${150 * (index + 1) + 400}ms`
                      : "0ms",
                  }}
                >
                  Visit website
                </h2>
                <Arrow
                  className={`md:h-16 h-10 text-dark md:group-hover:text-light top-0 right-0 absolute mt-2 mr-2 md:group-hover:mt-0 md:group-hover:mr-0 transition-all duration-300 ease-in-out z-20`}
                />
                <div className="md:group-hover:opacity-100 opacity-0 transition-all duration-300 bg-gradient-to-t from-dark to-transparent absolute w-full h-full" />
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
                <div className="border-dark border flex md:flex-row flex-col">
                  <div className="bg-bluepastel md:px-4 px-1 md:text-lg text-xs font-bold text-light">
                    TypeScript
                  </div>
                  <div className="bg-redpastel md:px-4 px-1 md:text-lg text-xs font-bold text-light ">
                    DatoCMS
                  </div>
                  <div className="bg-dark md:px-4 px-1 md:text-lg text-xs font-bold text-light ">
                    NextJS
                  </div>
                  <div className="bg-yellowpastel md:px-4 px-1 md:text-lg text-xs font-bold text-light ">
                    tailwindCSS
                  </div>
                </div>
              </div>
              {/* Animated Border */}
              <div
                className={`border-b border-dark ${animateContent ? "w-full" : "w-0"} transition-all duration-700 bottom-0 absolute`}
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
    <div className="w-full">
      <h2
        className={`${animateContent ? "opacity-100" : "opacity-0"} duration-700 md:text-4xl text-2xl md:pl-8 pl-4 md:py-8 py-4`}
      >
        Computer Science
      </h2>
      {/* Animated Border */}
      <div
        className={`border-b border-dark ${animateContent ? "w-full" : "w-0"} transition-all duration-700`}
      />
      <div
        className={`grid md:grid-cols-3 grid-cols-2 ${animateContent ? "opacity-100" : "opacity-0"} transition-all duration-700 delay-500`}
      >
        {compSciProject.map((project, index) => (
          <button
            key={index}
            className={`md:h-96 h-56 border-b transition-all duration-300 ${index % 2 == 0 ? "md:border-r-0 border-r" : ""} ${index != 0 ? "md:border-l" : ""} bg-secondary border-dark items-end flex relative group overflow-clip`}
            onClick={() => onProjectClick(project)}
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
              className={`${animateContent ? "md:pb-6 pb-4 opacity-100" : "pb-0 opacity-0"} transition-all duration-700 ease-in-out md:px-4 px-2 md:text-2xl text-md text-left text-balance font-bold absolute z-20 md:group-hover:text-light`}
              style={{
                transitionDelay: initialLoad
                  ? `${150 * (index + 1) + 400}ms`
                  : "0ms",
              }}
            >
              {project.title}
            </h2>
            <Arrow
              className={`md:h-16 h-10 text-dark md:group-hover:text-light top-0 right-0 absolute mt-2 mr-2 md:group-hover:mt-0 md:group-hover:mr-0 transition-all duration-300 ease-in-out z-20`}
            />
            <div className="md:group-hover:opacity-100 opacity-0 transition-all duration-300 bg-gradient-to-t from-dark to-transparent absolute w-full h-full" />
            <Image
              src={project.image.url}
              alt="background image for computer science project"
              width={400}
              height={400}
              className="object-cover overflow-clip w-full h-full absolute opacity-30 md:group-hover:opacity-60 transition-all duration-700 ease-in-out md:group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function EnlargedProject({ projectDetails }) {
  if (!projectDetails) return null;

  return (
    <div>
      <h2 className="md:text-4xl text-2xl font-bold mb-4">
        {projectDetails.title}
      </h2>
      <Image
        src={projectDetails.image.url}
        alt={`Image for ${projectDetails.title}`}
        width={800}
        height={800}
        className="object-cover w-full h-96 mb-4"
      />
      <StructuredText
        data={projectDetails.content.value.document}
        customNodeRules={customRenderers}
      />
    </div>
  );
}
export function ProjectWrapper({ compSciProject, webdevProject }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-2 pr-2 md:pl-20 pl-14 flex flex-col h-screen">
      <div className="border border-dark h-full relative overflow-hidden">
        <div className="w-full text-center bg-dark border-b border-dark">
          <h1
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light`}
          >
            Projects.
          </h1>
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
