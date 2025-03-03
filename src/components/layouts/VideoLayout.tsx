import React from 'react';
import { ProjectData } from '../../types/project';
import { useNavigate } from 'react-router-dom'
interface VideoLayoutProps {
  project: ProjectData;
}

export const VideoLayout: React.FC<VideoLayoutProps> = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="video-layout">
            <div className="back-button">
        <button onClick={() => navigate('/')}>Back to Gallery</button>
      </div>
      
      {project.videoUrl && (
        <div className="video-container">
          <iframe 
            src={project.videoUrl} 
            title={project.title}
            width="1280" height="720" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      )}
              <h1 className="proj-title">{project.title}</h1>
      <div className="project-details">
        <p className="proj-description">{project.description}</p>
        
        <div className="technologies">
          <h3>Technologies Used</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {project.detailImages && (
          <div className="detail-images-grid">
            {project.detailImages.map((img, index) => (
              <img key={index} src={`../../${img}`} alt={`${project.title} ${img} ${index + 1}`} />
            ))}
          </div>
        )}

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