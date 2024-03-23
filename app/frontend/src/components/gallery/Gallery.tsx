// App.tsx o cualquier otro componente
import React from 'react';
import ImageGallery from './ImageGallery';

const App: React.FC = () => {
    const images = [
        { src: 'image1.jpg', alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 2' },
        { src: 'image3.jpg', alt: 'Image 1' },
        { src: 'image2.jpg', alt: 'Image 2' },
        { src: 'image1.jpg', alt: 'Image 2' },
        // ... Add more images here
    ];

    return (
        <div className="App">
            <ImageGallery images={images} />
        </div>
    );
};

export default App;
