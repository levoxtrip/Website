// pages/ProjectsPage.tsx
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../assets/data/projects";
import AnimatedFilterBtns from "../components/AnimatedFilterBtns";
import BackBtn from "../components/BackBtn";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectsPage: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort((a, b) => a.localeCompare(b));

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTech)
        );

  const handleFilterChange = (tech) => {
    setSelectedTech(tech);
    console.log("set current filter");
  };
  
  const handleExpandToggle = () => {
    setSelectedTech("All");
  };
  
  const handleAnyButtonClick = () => {
    console.log("handle button click");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  
  return (
    <div className="projects-page">
      <Header />
      
      {/* Back Button */}
      <BackBtn to={"/"} text={"←"} />
      
      {/* Technology Filter Buttons */}
      <div className="tech-filter">
        <AnimatedFilterBtns
          onFilterChange={handleFilterChange}
          onExpandToggle={handleExpandToggle}
          onButtonClick={handleAnyButtonClick}
          items={allTechnologies}
        />
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-prev" key={project.id}>
            <Link
              to={`/projects/${project.id}`}
              className="project-thumb block"
            >
              <div className="img-container">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="project-thumbnail"
                />
              </div>
            </Link>
            <div className="prev-proj-info">
              <Link
                to={`/projects/${project.id}`}
                className="project-thumb-btn"
              >
                <h3 className="prev-proj-title">{project.title}</h3>
              </Link>

              <p className="mb-15">{project.shortDescription}</p>
              <div className="technologies-thumb">
                {project.technologies.map((tech, index) => (
                  <p className="technologies-text" key={index}>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;