"use client"
import { useState } from 'react';

const ProductGallery = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = props.images;
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className='flex border align-middle items-center p-5 m-5'>
      <button className=' inline-block text-xs border m-2' onClick={handlePrevClick}>Previous</button>
      <img className=' block h-52 object-contain w-70 overflow-hidden' src={productImages[currentImageIndex]} alt={`Product Image ${currentImageIndex + 1}`} />
      <button className='border m-2 text-xs'  onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ProductGallery;