import React, { useState } from 'react';
///import './PhotoGallery.css'; // Ensure this CSS file contains the necessary styles
//import './gallery.css'
const categories = ['All', 'Nature', 'Urban', 'Portrait', 'Art'];

const images = {
  All: [
    { src: '../bg1.jpg', alt: 'Nature 1' },
    { src: '../bg1.jpg', alt: 'Urban 1' },
    { src: '../bg1.jpg', alt: 'Portrait 1' },
    { src: '../bg1.jpg', alt: 'Art 1' },
    // Add more images for the 'All' category
  ],
  Nature: [
    { src: '../bg1.jpg', alt: 'Nature 1' },
    { src: '../bg1.jpg', alt: 'Nature 2' },
    // Add more nature images
  ],
  Urban: [
    { src: '../bg1.jpg', alt: 'Urban 1' },
    { src: '../bg1.jpg', alt: 'Urban 2' },
    // Add more urban images
  ],
  Portrait: [
    { src: '../bg1.jpg', alt: 'Portrait 1' },
    { src: '../bg1.jpg', alt: 'Portrait 2' },
    // Add more portrait images
  ],
  Art: [
    { src: '../bg1.jpg', alt: 'Art 1' },
    { src: '../bg1.jpg', alt: 'Art 2' },
    // Add more art images
  ],
};

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="photo-gallery">
      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {images[selectedCategory].map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
