import React from "react";
import { Link } from "react-router-dom";

const IntroSections = () => {
  return (
    <div className="intro-sections">
      <div className="projects-grid">
        <div className="project-prev">
          <Link to={"/Projects"}>
            <img
              src={"/Website/img/mh/MA-AR1.png"}
              className="project-thumbnail"
            />
          </Link>
          <div className="prev-proj-info">
            
            <Link className={"prev-proj-title"} to={"/Projects"}>
              Projects
            </Link>
            <p> Explore my portfolio of work that transforms ideas into memorable experiences.</p>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-prev">
        <div className="prev-proj-info">
            
            <Link className={"prev-proj-title"} to={"/AboutMe"}>
              About me
            </Link>
            <p> Learn about my journey, vision, and expertise.</p>
          </div>
          <Link to={"/AboutMe"}>
            <img
              src={"/Website/img/mh/MA-AR1.png"}
              className="project-thumbnail"
            />
          </Link>
     
        </div>
      </div>

    </div>
  );
};
export default IntroSections;
