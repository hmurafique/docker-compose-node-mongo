# Node.js + MongoDB App with Docker Compose and CI/CD

This project demonstrates a simple Node.js and MongoDB application using Docker Compose. It also includes a CI/CD pipeline using GitHub Actions to build and push the Docker image to DockerHub.

---

## 📁 Project Structure
```bash
docker-compose-node-mongo/
├── backend/
│ ├── Dockerfile # Node.js app container
│ ├── server.js # Express server code
│ └── package.json # Node.js dependencies
├── docker-compose.yml # Multi-container setup (Node.js + MongoDB)
├── .github/
│ └── workflows/
│ └── ci.yml # GitHub Actions workflow file
├── README.md # You're here
```

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose
- GitHub Actions (CI/CD)

---

## 📦 Local Development (with Docker Compose)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/docker-compose-node-mongo.git
cd docker-compose-node-mongo

### 2. Build and Run Containers

docker-compose up --build

### 3. Test the App

Once running, go to: http://localhost:3000
You should see: Hello from Node.js + MongoDB app!

### 🔁 CI/CD Pipelie 
How it Works
 - When you push to the main branch, GitHub Actions will:
 - Checkout the code
 - Build the Docker image for backend
 - Push the image to your DockerHub account

Required GitHub Secrets
 - In your GitHub repository, go to:
 - Settings → Secrets and variables → Actions → New repository secret

Add the following:
 - DOCKER_USERNAME → your DockerHub username
 - DOCKER_PASSWORD → your DockerHub password or access token

### 🐳 DockerHub
The Docker image will be available at:
 - docker.io/yourdockerhubusername/node-mongo-backend:latest

You can pull and run it:
 - docker pull yourdockerhubusername/node-mongo-backend:latest
 - docker run -p 3000:3000 yourdockerhubusername/node-mongo-backend

### 📄 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Built with ❤️ by Hafiz Muhammad Umar Rafique

