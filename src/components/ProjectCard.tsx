import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} className="text-blue-500 hover:text-blue-700">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;