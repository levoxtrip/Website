// components/layouts/InteractiveLayout.tsx
import React from 'react';
import { ProjectData } from '../../types/project';

interface InteractiveLayoutProps {
  project: ProjectData;
}

export const InteractiveLayout: React.FC<InteractiveLayoutProps> = ({ project }) => {
  return (
    <div className="interactive-layout">
      <h1>{project.title}</h1>
      
      <div className="interactive-demo">
        {project.demoUrl ? (
          <div className="demo-frame">
            <iframe 
              src={project.demoUrl} 
              title={`${project.title} Interactive Demo`}
              sandbox="allow-same-origin allow-scripts"
            ></iframe>
          </div>
        ) : (
          <div className="demo-placeholder">
            <p>Interactive demo not available</p>
          </div>
        )}
      </div>
      
      <div className="project-details">
        <p className="description">{project.description}</p>
        
        <div className="technologies">
          <h3>Technologies Used</h3>
          <div className="tech-badges">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="links">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            className="github-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Source Code
          </a>
        )}
      </div>
    </div>
  );
};