import React, { useState } from 'react';

const Upload = () => {
  const [mediaType, setMediaType] = useState(null); // To track whether image or video is selected
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile || !mediaType) {
      alert('Please select a file and media type!');
      return;
    }
    // Send the file to the correct ML model (image or video) based on mediaType
    console.log('Uploading:', selectedFile, 'as', mediaType);

    // Add logic to handle file upload and send to ML model
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
    </div>
  );
};

export default Upload;
