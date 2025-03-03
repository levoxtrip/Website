// components/ProjectLayoutSelector.tsx
import React from 'react';
import { ProjectData } from '../types/project';
import { StandardLayout } from './layouts/StandardLayout.tsx';
import { GalleryLayout } from './layouts/GalleryLayout.tsx';
import { VideoLayout } from './layouts/VideoLayout.tsx';
import { InteractiveLayout } from './layouts/InteractiveLayout.tsx';

interface ProjectLayoutSelectorProps {
  project: ProjectData;
}

export const ProjectLayoutSelector: React.FC<ProjectLayoutSelectorProps> = ({ project }) => {
  switch (project.layout) {
    case 'gallery':
      return <GalleryLayout project={project} />;
    case 'video':
      return <VideoLayout project={project} />;
    case 'interactive':
      return <InteractiveLayout project={project} />;
    case 'standard':
    default:
      return <StandardLayout project={project} />;
  }
};