import React from "react";
import { ProjectData } from "../../types/project";
import { useNavigate } from "react-router-dom";
import ProjectTextSection from "../ProjectTextSection";
import ProjectDetailMediaSection from "../ProjectDetailMediaSection";
import Footer from "../Footer";
interface StandardLayoutProps {
  project: ProjectData;
}

export const StandardLayout: React.FC<StandardLayoutProps> = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="standard-layout">
      <div className="back-button">
        <button onClick={() => navigate("/")}>Back to Gallery</button>
      </div>
      <img className="standard-hero-img" src={`${project.thumbnailUrl}`}></img>

      <ProjectTextSection project={project} />

      <ProjectDetailMediaSection project={project} />
      <Footer />
    </div>
  );
};
