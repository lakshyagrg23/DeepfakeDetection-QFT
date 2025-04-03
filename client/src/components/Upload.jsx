import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [mediaType, setMediaType] = useState(null); // Track whether image or video is selected
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null); // To store the prediction result

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile || !mediaType) {
      alert('Please select a file and media type!');
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Send request to Flask API based on mediaType
      const endpoint = mediaType === 'image' ? 'http://127.0.0.1:5000/predict-image' : 'http://127.0.0.1:5000/predict-video';
      const response = await axios.post(endpoint, formData);

      console.log("Response from Flask:", response);

      // Update prediction result and Check if response contains the expected fields
    if (response.data && response.data.prediction) {
      setPrediction(`Prediction: ${response.data.prediction}`);
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    alert('Failed to process the file. Please try again.');
  }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-6">Upload Media for Deepfake Detection</h2>

      <div className="flex gap-4 mb-4">
        {/* Button for selecting image */}
        <button
          className={`px-4 py-2 rounded ${mediaType === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setMediaType('image')}
        >
          Upload Image
        </button>

        {/* Button for selecting video */}
        <button
          className={`px-4 py-2 rounded ${mediaType === 'video' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setMediaType('video')}
        >
          Upload Video
        </button>
      </div>

      {/* Display the file input only after selecting media type */}
      {mediaType && (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="file"
            accept={mediaType === 'image' ? 'image/*' : 'video/*'}
            onChange={handleFileChange}
            className="mb-4"
          />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
            Submit
          </button>
        </form>
      )}

      <p className="text-gray-600 mt-4">
        Please select whether you are uploading an image or a video file. The file will be analyzed by the respective model.
      </p>

      {/* Display prediction result */}
      {prediction && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">Prediction Result:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
