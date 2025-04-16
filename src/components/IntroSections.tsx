import React from "react";
import { Link } from "react-router-dom";
import ThreeDProjectThumbnail from "./ThreeDProjectThumbnail";

// Import different shaders
import basicVertexShader from "./shaders/basic.vert";
import hoverDisplaceVertexShader from "./shaders/hoverDisplace.vert"
import orthographicShiftVertexShader from "./shaders/orthographicShift.vert";
// import stackEffectFragmentShader from "./shaders/stackEffect.frag";
import waveEffectFragmentShader from "./shaders/waveEffect.frag";
// import pixelTransitionFragmentShader from "./shaders/pixelTransition.frag";
import tunnelEffectFragmentShader from "./shaders/tunnelEffect.frag"

const IntroSections = () => {
  return (
    <div className="intro-sections">
      <div className="projects-grid">
        <div className="project-prev">
          <Link to={"/Projects"} className="thumbnail-container">
            <ThreeDProjectThumbnail 
              imageUrl="/Website/img/mh/MA-AR1.png"
              vertexShader={basicVertexShader}
              fragmentShader={waveEffectFragmentShader}
            />
          </Link>
          <div className="prev-proj-info">
            <Link className={"prev-proj-title"} to={"/Projects"}>
              Projects
            </Link>
            <p>Explore my portfolio of work that transforms ideas into memorable experiences.</p>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-prev">
          <div className="prev-proj-info">
            <Link className={"prev-proj-title"} to={"/AboutMe"}>
              About me
            </Link>
            <p>Learn about my journey, vision, and expertise.</p>
          </div>
          <Link to={"/AboutMe"} className="thumbnail-container">
            <ThreeDProjectThumbnail 
              imageUrl="/Website/img/mh/MA-AR1.png"
              vertexShader={hoverDisplaceVertexShader}
              fragmentShader={tunnelEffectFragmentShader}
              uniforms={{
                // You can pass additional custom uniforms here
                uColorShift: { value: 0.5 }
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroSections;