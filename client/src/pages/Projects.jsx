import { useEffect } from "react";
import ProjectDetails from "../components/ProjectDetails";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";

const Projects = () => {
  const { projects, dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/projects`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    if (user) {
      getAllProjects();
    }
  }, [dispatch, user]);

  return (
    <div>
      <Navbar />
      <div className="p-6 md:px-10 ">
        <h2 className="text-4xl font-medium mb-10">
          {projects.length < 1 ? "No Projects" : "All Projects"}
        </h2>
        <div className="projects-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectDetails key={project._id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
