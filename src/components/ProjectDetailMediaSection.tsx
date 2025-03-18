import { ProjectData } from "../types/project";
interface Props {
  project: ProjectData;
}
const ProjectDetailMediaSection = ({ project }: Props) => {
  return (
    <div>
      {/* Videos Section */}
      {project.detailVideos && (
        <div className="video-grid">
          {project.detailVideos.map((vid, index) => (
            <div className="video-container">
              <iframe
                key={index}
                src={vid}
                width="1280"
                height="720"
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}

      {project.detailImages && (
        <div className="detail-images-grid">
          {project.detailImages.map((img, index) => (
            <img
              key={index}
              src={`${img}`}
              alt={`${project.title} ${img} ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailMediaSection;
