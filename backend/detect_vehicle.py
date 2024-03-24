import uuid
from flask import Flask, request, jsonify,send_from_directory
from flask_cors import CORS  # Import CORS from flask_cors
from cvlib.object_detection import draw_bbox,detect_common_objects

import cv2
import numpy as np

app = Flask(__name__)
CORS(app)

import base64
import time
import os

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/process_image', methods=['POST'])
def process_image():
    # Get the image file from the request
    image_file = request.files['image']
    # Process the image (You'll implement this)
    processed_image,count = process_image_function(image_file)
    # Save the processed image to a file
    processed_image_path = save_image_to_file(processed_image)
    # Generate URL for the processed image
    processed_image_url = generate_image_url(processed_image_path)
    # Return the processed image URL
    return jsonify({'processed_image_url': processed_image_url,"count":count})

def save_image_to_file(image_bytes):
    # Define the directory to save the processed images
    save_dir = 'processed_images'
    os.makedirs(save_dir, exist_ok=True)
    # Generate a unique filename for the processed image
    image_filename = 'processed_image_' + str(uuid.uuid4()) + '.jpg'
    image_path = os.path.join(save_dir, image_filename)
    # Save the image bytes to the file
    with open(image_path, 'wb') as f:
        f.write(image_bytes)
    return image_path

def generate_image_url(image_path):
    # Assuming the server is hosted on localhost
    server_url = 'http://localhost:5000'
    # Generate the URL for the image
    image_url = server_url + '/' + image_path
    return image_url

def process_image_function(image_file):
    # Read the image from the file object
    img = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), -1)
    
    # Perform object detection
    box, label, count = detect_common_objects(img)
    
    # Draw bounding boxes around objects
    output_img = draw_bbox(img, box, label, count)

    output_rgb = cv2.cvtColor(output_img, cv2.COLOR_BGR2RGB)
    
    _, img_encoded = cv2.imencode('.jpg', output_img)

    return img_encoded,len(label)


@app.route('/processed_images/<path:filename>')
def serve_image(filename):
    return send_from_directory(os.path.join(app.root_path, 'processed_images'), filename)

if __name__ == '__main__':
    app.run()
