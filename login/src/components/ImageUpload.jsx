import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(`Image uploaded successfully: ${response.data.imageUrl}`);
    } catch (error) {
      console.error(error);
      setMessage('Error uploading image');
    }
  };

  return (
    <div>
      <h2>Upload Profile Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default ImageUpload;
