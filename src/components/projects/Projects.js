"use client";
import { projects, titles } from "@/utils";
import FavProject from "@/components/projects/FavProject";
import OtherProject from "@/components/projects/OtherProject";

const Projects = () => {
    return (
        <div className="py-16" id="projects">
            <h1 className="font-nanum mb-3 text-4xl font-extrabold text-secondary-700">
                {titles.projects}
            </h1>
            <div className="mb-2">
                <p className="font-barlow mb-2 text-lg text-primary-700">
                    My favourite projects...
                </p>
                {projects.favorites.map((project) => (
                    <FavProject key={project.name} project={project} />
                ))}
            </div>
            <p className="font-barlow mb-2 text-lg text-primary-700">
                Other projects...
            </p>
            <div className="grid grid-cols-3 items-start gap-7">
                {projects.others.map((project) => (
                    <OtherProject key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
