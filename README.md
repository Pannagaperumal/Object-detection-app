# Object-detection-app

This application will detection, recognize and count the objects in the given image input.


Sample Results:

Image before processing :

![image](https://github.com/Akhilad12/Object-detection-app/assets/146235118/6b32f9f8-aca7-4632-b71c-aacf64721db7)


Image after processing :

![image](https://github.com/Akhilad12/Object-detection-app/assets/146235118/10a30a6a-e3ca-43ed-b077-041610d4706e)




## Deployment

##Setting Up the Environment:

1.Clone the repository to your local machine.

2.Install the required dependencies by running:

```bash
  pip install -r requirements.txt
```
3.Ensure you have Docker installed on your machine.


##Running the Application Locally:

1.Navigate to the project directory.

2.Start the Flask server by running:

```bash
  python detect_vehicle.py
```
3.Start the React front end by running:

Install dependencies:
```bash
  npm install
```
Build the React app: 
```bash
   npm run build
```
Start the React app:
```bash
  npm start
```
4.Access the application at http://localhost:3000 in your web browser.

##Testing the Application

1.To test the application, you can upload images containing vehicles to see the object detection in action.

2.Verify that the application correctly recognizes and counts the types of vehicles in the uploaded images.

##Deployment with Docker

1.Create a Dockerfile in the project directory with the following content:

```bash
FROM python:3.9
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```
2.Build the Docker image by running:

```bash
 docker build -t image-processing-app .
```
3.Run the Docker container by executing:

```bash
 docker run -p 5000:5000 image-processing-app
```

4.Access the application at http://localhost:5000 in your web browser.
