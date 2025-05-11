import React, { useState, useEffect } from 'react'

interface Props {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
    onPrevious: () => void;
    onNext: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
}

const ScaledImageModal: React.FC<Props> = ({
    isOpen,
    onClose,
    imageSrc,
    imageAlt,
    onPrevious,
    onNext,
    hasPrevious = false,
    hasNext = false
}) => {
    const [isZoomed, setIsZoomed] = useState(false);
    
    // Reset zoom when modal opens or image changes
    useEffect(() => {
        setIsZoomed(false);
    }, [isOpen, imageSrc]);

    if (!isOpen) return null;

    // Prevent clicks on the image or buttons from closing the modal
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // Toggle zoom state when image is clicked
    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft' && hasPrevious) {
                onPrevious();
            } else if (e.key === 'ArrowRight' && hasNext) {
                onNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, hasPrevious, hasNext, onPrevious, onNext]);

    return (
        <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div 
                className={`relative flex items-center justify-center ${isZoomed ? 'w-full h-full p-2' : 'w-5/6 h-5/6 p-4'}`}
                onClick={handleContentClick}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Previous button */}
                {hasPrevious && (
                    <button
                        onClick={onPrevious}
                        className="absolute left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                        aria-label="Previous image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Image */}
                <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    onClick={toggleZoom}
                    className={`
                        object-contain cursor-pointer
                        ${isZoomed ? 'max-h-full max-w-full' : 'max-h-full max-w-full'}
                        transition-transform duration-300
                    `}
                    title="Click to zoom in/out"
                />

                {/* Next button */}
                {hasNext && (
                    <button
                        onClick={onNext}
                        className="absolute right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                        aria-label="Next image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Zoom instructions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    Click image to {isZoomed ? 'zoom out' : 'zoom in'}
                </div>
            </div>
        </div>
    );
};

export default ScaledImageModal;