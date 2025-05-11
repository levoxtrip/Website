import React from 'react'

interface Props {
    isOpen:Boolean;
    onClose:()=> void;
    imageSrc: string;
    imageAlt:string;

    onPrevious: () => void;
    onNext: () => void;
    hasNext:boolean;
    hasPrevious:boolean;
}

const ScaledImageModal: React.FC<Props> = ({isOpen,onClose,imageSrc,imageAlt,onPrevious,onNext,hasPrevious=false,hasNext=false}) => {
    if(!isOpen) return null;

    //prevent clicks on the image or buttons from closing the modal
const handleContentClick = (e:React.MouseEvent) =>{
    e.stopPropagation();
}

return (
    <div 
      className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="max-w-4xl max-h-screen p-4 relative flex items-center"
        onClick={handleContentClick}
      >
        {/* Previous button */}
        {hasPrevious && (
          <button
            onClick={onPrevious}
            className="absolute left-0 bg-black text-white p-2  hover:invert transition-invert"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square"  strokeWidth={5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Image */}
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="max-h-full max-w-full object-contain"
        />

        {/* Next button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-0 bg-black text-white p-2  hover:invert transition-invert"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square"  strokeWidth={5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ScaledImageModal