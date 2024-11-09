# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io

app = Flask(__name__)
CORS(app) 

# Load your models
image_model = tf.keras.models.load_model('models/image_model.h5')
# video_model = tf.keras.models.load_model('path/to/video_model.h5')

# Function to preprocess image and apply FFT
def preprocess_image(image):

    # Convert to RGB if image has an alpha channel (4 channels)
    if image.mode == 'RGBA':
        image = image.convert('RGB')

    # Resize the image to match the model's expected input size
    image = image.resize((64, 64))
    image_array = np.array(image) / 255.0  # Normalize the image
    image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension

    # FFT feature extraction
    image_gray = np.dot(image_array[0, :, :, :], [0.2989, 0.587, 0.114])
    fft_features = np.abs(np.fft.fft2(image_gray))
    fft_features = np.expand_dims(fft_features, axis=(0, -1))  # Match input shape

    return image_array, fft_features

# Endpoint for image prediction
@app.route('/predict-image', methods=['POST'])
def predict_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    image = Image.open(file.stream)

    # Preprocess the image for the model
    image_array, fft_features = preprocess_image(image)

    # Predict using the model
    prediction = image_model.predict([image_array, fft_features])[0][0]
    is_deepfake = prediction < 0.5  # Assuming threshold of 0.5 for binary classification

    # Run prediction
    prediction = image_model.predict([image_array, fft_features])[0][0]
    is_deepfake = prediction < 0.5  # Threshold for binary classification

    # Log the response
    response = {
        "prediction": "deepfake" if is_deepfake else "authentic",
        "confidence": float(prediction)
    }
    print("Response:", response)  # Print the response to the terminal for debugging

    return jsonify({
        "prediction": "deepfake" if is_deepfake else "authentic",
        "confidence": float(prediction)
    })

if __name__ == '__main__':
    app.run(debug=True)
