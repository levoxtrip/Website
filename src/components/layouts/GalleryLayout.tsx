import React from 'react';
import { ProjectData } from '../../types/project';

interface GalleryLayoutProps {
  project: ProjectData;
}

export const GalleryLayout: React.FC<GalleryLayoutProps> = ({ project }) => {
  return (
    <div className="gallery-layout">
      <h1>{project.title}</h1>
      
      {project.detailImages && (
        <div className="gallery-grid">
          {project.detailImages.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`${project.title} gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
      
      <div className="project-details">
        <p className="description">{project.description}</p>
        <div className="technologies">
          <h3>Technologies Used</h3>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};