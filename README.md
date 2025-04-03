# DeepFakeShield: AI-Powered Deepfake Detection Using Quantum Fourier Transform and CNN

Deepfake technology has advanced significantly, making it increasingly difficult to distinguish between real and manipulated images. These synthetic media pose serious threats in misinformation, identity fraud, and cybercrime. Traditional detection methods struggle with the subtle artifacts in deepfake images.

By employing Quantum Fourier Transform, our proposed model enhances deepfake detection beyond traditional methods

## Overview
This model is a deep learning-based solution designed to detect deepfake images effectively. The system extracts quantum frequency features using QFT and integrates them with spatial domain features from the original image. This combined representation is then processed by a CNN to classify images as real or fake.

By employing QFT, the system enhances deepfake detection beyond traditional FFT-based methods, capturing subtle perturbations introduced by deepfake generation techniques. The model is trained on benchmark datasets containing real and deepfake images to ensure high accuracy and robustness.

## Features and Functionalities
- **Quantum Fourier Transform (QFT) Feature Extraction** – Captures subtle frequency anomalies introduced by deepfake generation methods, enhancing detection accuracy.
- **Hybrid Feature Representation** – Combines QFT-extracted frequency domain features with the original image's spatial information, allowing the CNN to learn more comprehensive patterns.
- **Deep Learning-Based Classification** – A convolutional neural network (CNN) is trained to differentiate between real and fake images using the enriched feature set.
- **Adaptive to Multiple Deepfake Techniques** – Designed to work across different deepfake generation methods, including GAN-based, autoencoder-based, and diffusion model-based manipulations.

## Quantum Circuit
![WhatsApp Image 2025-04-04 at 02 09 48_86759d34](https://github.com/user-attachments/assets/84fe25a2-4c95-4f9e-8a73-f698621d0477)


## Technologies Used
- **Frameworks & Libraries**: TensorFlow/Keras, PyTorch, NumPy
- **Deep Learning Model**: Convolutional Neural Networks (CNNs)
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Python
- **Database**: Firebase

## Results and Analysis
![WhatsApp Image 2025-04-04 at 02 10 09_a51e707f](https://github.com/user-attachments/assets/d617c59c-f5c2-43f5-9fe9-1efda194a9e2)


## Project Structure
```bash
deepfake-detection/
│── assets/
│── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│── models/
│── server/
│   ├── app.py
│   ├── firebase.json
│── .gitignore
│── README.md
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
- **Upload Media**: Choose to upload an image for deepfake detection.
- **View Results**: After uploading, the system will analyze the media and return a prediction indicating whether it’s likely a deepfake, along with a confidence score.
- **History**: View past uploads and results in the History section.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

