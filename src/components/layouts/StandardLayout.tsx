import React from "react";
import { ProjectData } from "../../types/project";
// import { useNavigate } from "react-router-dom";
import ProjectTextSection from "../ProjectTextSection";
import ProjectDetailMediaSection from "../ProjectDetailMediaSection";
import Footer from "../Footer";
import BackBtn from "../BackBtn";
import Header from "../Header";
interface StandardLayoutProps {
  project: ProjectData;
}

export const StandardLayout: React.FC<StandardLayoutProps> = ({ project }) => {
  // const navigate = useNavigate();
  return (
    <div className="standard-layout">
       <Header/>
      <BackBtn to={"/projects"} text={"←"} />
      <img className="standard-hero-img" src={`${project.thumbnailUrl}`}></img>

      <ProjectTextSection project={project} />

      <ProjectDetailMediaSection project={project} />
      <Footer />
    </div>
  );
};
