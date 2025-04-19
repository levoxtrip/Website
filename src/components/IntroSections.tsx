// IntroSections.jsx - UPDATED VERSION
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThreeDProjectThumbnail from "./ThreeDProjectThumbnail";

// Import different shaders
import hoverDisplaceVertexShader from "./shaders/hoverDisplace.vert";
import tunnelEffectFragmentShader from "./shaders/tunnelEffect.frag";

const IntroSections = () => {
  // Get current location from React Router
  const location = useLocation();
  
  // Use a state variable to force remounting of ThreeJS components
  const [key, setKey] = React.useState(0);
  
  // When location changes, force remount of ThreeJS components
  useEffect(() => {
    // Force remount of Three.js components
    setKey(prevKey => prevKey + 1);
  }, [location]);

  return (
    <div className="intro-sections">
      <div className="projects-grid">
        <div className="project-prev">
          <Link to={"/Projects"} className="thumbnail-container">
            {/* Add key to force remount */}
            <ThreeDProjectThumbnail 
              key={`projects-thumbnail-${key}`}
              imageUrl="Website/img/OverviewThumbnail.png" // Fix path (removed 'public')
              vertexShader={hoverDisplaceVertexShader}
              fragmentShader={tunnelEffectFragmentShader}
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
            {/* Add key to force remount */}
            <ThreeDProjectThumbnail 
              key={`aboutme-thumbnail-${key}`}
              imageUrl="Website/img/lxt3.jpg" // Fix path (removed 'public')
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