export type ProjectLayout = 'standard' | 'gallery' | 'video' | 'interactive';

export interface ProjectData {
    id: string;
    title: string;
    shortDescription:string;
    description: string;
    technologies: string[];
    layout: ProjectLayout;
    thumbnailUrl: string;
    detailImages?: string[];
    videoUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
    // Add any other fields specific to your projects
  }