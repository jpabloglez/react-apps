/**
 * Represents a gallery component that displays a collection of images.
 */
import React from 'react';


/**
 * Represents an image object with a source and alternative text.
 */
interface Image {
    src: string;
    alt: string;
}

/**
 * Represents the props for the Gallery component.
 */
interface GalleryProps {
    images: Image[]; // The array of images to be displayed in the gallery.
}

import { useState } from 'react';
import Modal from '../modal/Modal';

/**
 * Represents a gallery component that displays a collection of images.
 */
const ImageGallery: React.FC<GalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const handleImageClick = (image: Image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 rounded-sm">
                {images.map((image, index) => (
                    <img
                        className="h-auto max-w-full hover:scale-105 rounded-lg cursor-pointer"
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {selectedImage && (
                <Modal onClose={handleCloseModal}>
                    <img className="max-w-full max-h-full" src={selectedImage.src} alt={selectedImage.alt} />
                </Modal>
            )}
        </div>
    );
};

export default ImageGallery;