import { inter } from "../fonts/fonts";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fetchCompSciProjects, fetchWebDevProjects } from "../lib/fetchData";
import ProjectWrapper from "./ProjectWrapper";
const Projects: React.FC = async () => {
  const compSciProjects = await fetchCompSciProjects();
  const webdevProjects = await fetchWebDevProjects();
  return (
    <ProjectWrapper
      compSciProject={compSciProjects}
      webdevProject={webdevProjects}
    />
  );
};

export default Projects;
