# Deepfake Detection Web Application

A web application built to detect deepfake images and videos using machine learning models. This project aims to provide users with an easy-to-use interface for uploading media files and receiving predictions on whether the content is a deepfake or authentic.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [License](#license)

## Overview
This application uses a custom-trained deep learning model to classify images and videos as deepfake or authentic. Users can upload media files through a frontend interface, which sends the files to a backend server for analysis. The backend then processes the file using a convolutional neural network (CNN) and returns the results to the user.

## Features
- **Deepfake Detection**: Detects whether an uploaded image or video is a deepfake.
- **User Authentication**: Secure login and signup functionality.
- **Upload and View History**: Users can upload images and view past results.
- **Confidence Score**: The model provides a confidence score indicating the likelihood that a media file is a deepfake.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Flask (Python)
- **Machine Learning**: TensorFlow, Keras (for CNN model)
- **Firebase**: Authentication and storage
- **Cloud Services**: Firebase, or local Flask API for processing media files

## Project Structure
```bash
deepfake-detection
├── models                  # ML models (e.g., image_model.h5)
├── public                  # Public assets for React app
├── src
│   ├── components          # React components
│   ├── firebase            # Firebase configuration files (if using Firebase)
│   ├── pages               # Main pages (Home, Dashboard, etc.)
│   ├── App.js              # Main app entry point
│   ├── index.js            # React root
│   └── ...                 # Other frontend files
├── app.py                  # Flask backend server
├── README.md               # Project documentation
└── ...                     # Other configuration files (package.json, etc.)
```
## Installation and Setup

### Prerequisites
- **Node.js** and **npm** installed for the React frontend.
- **Python** and **pip** for the Flask backend.

### Frontend Setup (React)
1. Clone the repository:
   ```bash
   git clone https://github.com/lakshyagrg23/DeepfakeDetection.git
   cd DeepfakeDetection

2. Navigate to the React app directory:
   ```bash
   cd src

3. Install dependencies:
   ```bash
   npm install

4. Start the React development server:
   ```bash
   npm start

The React app should now be running at http://localhost:3000.

### Backend Setup (Flask)

1. Install Python dependencies (ensure you're in the root project directory):
   ```bash
   pip install -r requirements.txt

2. Run the Flask server:
   ```bash
   python app.py
The Flask server should now be running at http://127.0.0.1:5000.

3. If you're using Firebase for authentication or storage, configure Firebase by adding your Firebase configuration to the appropriate files.

## Environment Variables

Create a `.env` file in the root directory to store any necessary environment variables, such as Firebase configuration keys or Flask secret keys.

## Usage

- **Sign Up / Log In**: Register or log in using the authentication system.
- **Upload Media**: Choose to upload an image or video for deepfake detection.
- **View Results**: After uploading, the system will analyze the media and return a prediction indicating whether it’s likely a deepfake, along with a confidence score.
- **History**: View past uploads and results in the History section.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

