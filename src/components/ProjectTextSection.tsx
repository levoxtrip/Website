import React from "react";
import { ProjectData } from "../types/project";

interface Props {
  project: ProjectData;
}

const ProjectTextSection = ({ project }: Props) => {
  return (
    <>
      <h1 className="proj-title">{project.title}</h1>
      <p className="proj-description">{project.description}</p>

      {project.url?.trim() && (
        <a
          className="link-button"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      )}

      <div className="technologies-detail">
        <h3>Technologies Used: </h3>

        <ul>
          {project.technologies.map((tech, index) => (
            <li className="technologies-text" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectTextSection;
