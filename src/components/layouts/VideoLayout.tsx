import React from "react";
import { ProjectData } from "../../types/project";
import { useNavigate } from "react-router-dom";
import ProjectTextSection from "../ProjectTextSection";
import ProjectDetailMediaSection from "../ProjectDetailMediaSection";
import Footer from "../Footer";
interface VideoLayoutProps {
  project: ProjectData;
}

export const VideoLayout: React.FC<VideoLayoutProps> = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="video-layout">
      <div className="back-button">
        <button onClick={() => navigate("/")}>Back to Gallery</button>
      </div>

      {project.videoUrl && (
        <div className="flex">
          <iframe
            src={project.videoUrl}
            title={project.title}
            width="1280"
            height="720"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <ProjectTextSection project={project} />

      <ProjectDetailMediaSection project={project} />
      <Footer />
    </div>
  );
};
