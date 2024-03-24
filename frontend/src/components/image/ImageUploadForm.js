import React, { useState } from 'react';

const ImageUploadForm = ({ handleImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleImageUpload(image);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input type="file" onChange={handleChange} style={inputStyle} />
      <button type="submit" style={buttonStyle}>Upload Image</button>
    </form>
  );
};

// CSS styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid',
  borderRadius: '5px',
  padding: '15px', 
};

const inputStyle = {
  marginBottom: '30px',
};

const buttonStyle = {
  backgroundColor: '#F48A73', /* Green */
  border: 'none',
  color: 'Black',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '18px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '10px',
};

export default ImageUploadForm;
