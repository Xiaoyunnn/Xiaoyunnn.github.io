"use client";
import { projects, titles } from "@/utils";
import FavProject from "@/components/projects/FavProject";

const Projects = () => {
  return (
    <div className="py-16" id="experience">
      <h1 className="text-4xl font-extrabold font-nanum text-secondary-700 mb-3">
        {titles.projects}
      </h1>
      <div className="mb-2">
        <p className="mb-2 font-barlow text-primary-700">
          My favourite projects...
        </p>
        {projects.favorites.map((project) => (
          <FavProject key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
