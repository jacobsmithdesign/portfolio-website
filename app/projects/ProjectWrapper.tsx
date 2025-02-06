"use client";
import { inter } from "../fonts/fonts";
import { useContext, useState } from "react";
import Modal from "./projectModal";
import { HoverGradient3 } from "../components/hoverGradient";
import MyThemeContext from "../context/themeContext";
import GridBackground from "../ui/gridBackground";
import WebDevelopment from "./ui/WebDevelopment";
import ComputerScience from "./ui/computerScience";
import EnlargedProject from "./ui/enlargedProject";

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
            className={`${inter.className} pl-2 lg:text-8xl md:text-6xl text-5xl overflow-clip text-left font-bold text-tertiary text-light absolute z-10`}
          >
            Projects.
          </h1>
          <HoverGradient3 />
        </div>
        <div className="overflow-y-scroll h-full hide-scrollbar md:pb-24 pb-12 transition-all duration-500">
          <WebDevelopment webdevProject={webdevProject} />
          <ComputerScience
            compSciProject={compSciProject}
            onProjectClick={handleProjectClick}
          />
          <Modal isOpen={selectedProject !== null} onClose={handleClose}>
            <EnlargedProject projectDetails={selectedProject} />
          </Modal>
          <GridBackground />
        </div>
      </div>
    </div>
  );
}

export default ProjectWrapper;
