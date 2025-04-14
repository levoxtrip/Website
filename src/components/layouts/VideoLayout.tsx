import React from "react";
import { ProjectData } from "../../types/project";
import { useNavigate } from "react-router-dom";
import BackBtn from "../BackBtn";
import ProjectTextSection from "../ProjectTextSection";
import ProjectDetailMediaSection from "../ProjectDetailMediaSection";
import Footer from "../Footer";
import Header from "../Header";
interface VideoLayoutProps {
  project: ProjectData;
}

export const VideoLayout: React.FC<VideoLayoutProps> = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="video-layout">
      <Header/>
      <BackBtn to={"/projects"} text={"←"} />

      {project.videoUrl && (
        <div className="flex">
          <iframe
            className="video-iframe"
            src={project.videoUrl}
            title={project.title}
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
