import React, { useState } from 'react';
import axios from 'axios'; //used for calling api
import NavBar from './components/common/NavBar';
import ImageUploadForm from './components/image/ImageUploadForm';
import ImageDisplay from './components/image/ImageDisplay';
import { ClipLoader } from 'react-spinners';
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [inputImage, setInputImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(null);


  const handleImageUpload = async (image) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/process_image', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
  
      setInputImage(URL.createObjectURL(image));
      setProcessedImage(response.data.processed_image_url);
      setCount(response.data.count);
  } catch (error) {
      console.error('Error uploading image: ', error);
      toast.error('Failed to upload image. Please try again later.');
  } finally {
      setLoading(false);
  }
  };

  return (
    <div className="app-container">
      <NavBar />
      <div className="main-content">
      <h3>Upload Image to Process</h3>
        <ImageUploadForm handleImageUpload={handleImageUpload} />
        {loading ? (
          <div className="loading-container">
            <ClipLoader color="#000" loading={loading} size={50} />
          </div>
        ) : (
          processedImage && (
            <ImageDisplay inputImage={inputImage} processedImage={processedImage} count={count}/>
            
          )
        )}
        <ToastContainer position="top-right" />
        <div class="section-divider"></div>
        <footer className="footer">
        <div className="guidelines">
          <h3>General Guidelines</h3>
          <ul class="no-bullets">
            <li>Upload high-quality images for better results.</li>
            <li>Supported image formats: JPG, PNG, GIF.</li>
            <li>Maximum file size: 5MB.</li>
          </ul>
        </div>
        <div className="credits">
          <p>Made with React.js by Akhila</p>
        </div>
      </footer>
      </div>
    </div>
    
  );
};

export default App;
