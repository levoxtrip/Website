// pages/ProjectsPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../assets/data/projects";

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-prev">
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="project-thumb"
            >
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="project-thumbnail"
              />
            </Link>
            <div className="prev-proj-info">
              <Link
                to={`/projects/${project.id}`}
                key={project.id + `btn`}
                className="project-thumb-btn"
              >
                <h2 className="prev-proj-title">{project.title}</h2>
              </Link>

              <p> {project.shortDescription}</p>
              <div className="technologies-thumb">
                {project.technologies.map((tech, index) => (
                  <p className="technologies-text" key={index}>
                    {" "}
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
