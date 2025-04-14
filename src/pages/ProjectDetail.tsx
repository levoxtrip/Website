// pages/ProjectDetail.tsx
import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { projects } from "../assets/data/projects";
import { ProjectLayoutSelector } from "../components/ProjectLayoutSelector";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="project-detail-page">
      <ProjectLayoutSelector project={project} />
    </div>
  );
};

export default ProjectDetail;
