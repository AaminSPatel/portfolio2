import React, { useState } from 'react';

const categories = ['All', 'Nature', 'Urban', 'Portrait', 'Art'];

const images = {
  All: [
    { src: '../bg2.jpg', alt: 'Nature 1' },
    { src: '../bg1.jpg', alt: 'Urban 1' },
    { src: '../port1.jpg', alt: 'Portrait 1' },
    { src: '../art3.jpg', alt: 'Art 1' },
    
    // Add more images for the 'All' category
  ],
  Nature: [
    { src: '../bg2.jpg', alt: 'Nature 1' },
    { src: '../bg6.jpg', alt: 'Nature 2' },
    { src: '../bg5.jpg', alt: 'Nature 3' },
    // Add more nature images
  ],
  Urban: [
    { src: '../bg1.jpg', alt: 'Urban 1' },
    { src: '../bg7.jpg', alt: 'Urban 2' },
    // Add more urban images
  ],
  Portrait: [
    { src: '../port1.jpg', alt: 'Portrait 1' },
    { src: '../port2.jpg', alt: 'Portrait 2' },
    { src: '../user6.avif', alt: 'Portrait 3' },
    { src: '../pik4.avif', alt: 'Portrait 4' },
    // Add more portrait images
  ],
  Art: [
    { src: '../art1.avif', alt: 'Art 1' },
    { src: '../art2.jpg', alt: 'Art 2' },
    { src: '../art3.jpg', alt: 'Art 3' },
    // Add more art images
  ],
};

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-4 my-7 ">
      <div className="flex overflow-x-auto mb-4 border-b-2 border-teal-400">
        {categories.map(category => (
          <button
            key={category}
            className={`py-2 px-4 text-lg font-semibold cursor-pointer transition-colors duration-300 
                        ${selectedCategory === category ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-700'}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images[selectedCategory].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
            <img src={image.src} alt={image.alt} className="w-full h-40 object-cover rounded-lg"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
