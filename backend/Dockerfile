# Use the official Python image as a base
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /backend

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask app source code to the working directory
COPY . .

# Expose the port the Flask app runs on
EXPOSE 5000

# Set the command to run the Flask app
CMD ["python", "detect_vehicle.py"]
