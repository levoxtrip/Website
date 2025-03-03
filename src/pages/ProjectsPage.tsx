// pages/ProjectsPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../assets/data/projects";

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
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
            <Link to={`/projects/${project.id}`} key={project.id + `btn`} className="project-thumb-btn">
            <h2 className="prev-proj-title">{project.title}</h2>
              </Link>
           
            <p> {project.shortDescription}</p>
            <div className="technologies">
            {project.technologies.map((tech,index) => (
                <p className="technologies-text" key={index} > {tech}</p>
            ))}
</div>
              {/* <Link to={`/projects/${project.id}`} key={project.id + `btn`} className="project-thumb-btn">
                Go to Project
              </Link> */}
   
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
