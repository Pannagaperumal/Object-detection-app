import React from 'react';

const ImageDisplay = ({ inputImage, processedImage, count }) => {
  return (
    <div>
      <div>
        <h2>Input Image</h2>
        <img src={inputImage} alt="Input" />
      </div>
      <div>
        <h2>Processed Image</h2>
        <img src={processedImage} alt="Processed" />
        <h3>No of vehicles Detected: {count}</h3>
      </div>
    </div>
  );
};

export default ImageDisplay;
