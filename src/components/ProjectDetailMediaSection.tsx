import { useState } from "react";
import { ProjectData } from "../types/project";
import ScaledImageModal from '../components/ScaledImageModal'
interface Props {
  project: ProjectData;
}
const ProjectDetailMediaSection = ({ project }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex < project.detailImages.length - 1 ? prevIndex + 1 : prevIndex
    );
  };




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
              alt={`${project.title} detail ${index + 1}`}
              className="cursor-pointer hover:invert transition-invert"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      )}

      {/* Modal component with navigation */}
      {project.detailImages && (
        <ScaledImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={project.detailImages[currentImageIndex]}
          imageAlt={`${project.title} detail ${currentImageIndex + 1}`}
          onPrevious={goToPrevious}
          onNext={goToNext}
          hasPrevious={currentImageIndex > 0}
          hasNext={currentImageIndex < project.detailImages.length - 1}
        />
      )}
</div>
  );
};

export default ProjectDetailMediaSection;
