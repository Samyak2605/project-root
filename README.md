# 📝 Todo App Project – Step 8 (Exercise 2.2)

This project enhances our Kubernetes-based microservices setup by adding backend functionality to the Todo App. The frontend serves HTML and manages random image caching, while the new backend service handles persistent in-memory todos.

---

## 📦 Components

### 1. `todo-app`
- Serves the frontend UI (SPA).
- Displays random cached images from Lorem Picsum.
- Sends and retrieves todos using the backend API.
- Built with Node.js or any static-serving setup.

### 2. `todo-backend`
- Exposes REST API:
  - `GET /todos` – fetch all todos.
  - `POST /todos` – add a new todo (max 140 characters).
- Stores todos in memory (no DB yet).
- Built with Express.js.

---

## 📁 File Structure

```bash
project-root/
│
├── todo-app/
│   ├── Dockerfile
│   ├── src/
│   ├── ...
│   └── manifests/
│       └── todo-app-deployment.yaml
│
├── todo-backend/
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── manifests/
│       ├── todo-backend-deployment.yaml
│       └── todo-backend-service.yaml
🚀 How to Deploy
1. Build and Push Docker Images
bash
Copy
Edit
# Todo Backend
cd todo-backend
docker build -t samyak2605/todo-backend .
docker push samyak2605/todo-backend

# Todo App (if changed)
cd ../todo-app
docker build -t samyak2605/todo-app .
docker push samyak2605/todo-app
2. Apply Kubernetes Manifests
bash
Copy
Edit
# Apply Backend
kubectl apply -f todo-backend/manifests/todo-backend-deployment.yaml
kubectl apply -f todo-backend/manifests/todo-backend-service.yaml

# Apply Frontend
kubectl apply -f todo-app/manifests/todo-app-deployment.yaml
🔗 Services
Frontend (Todo App): todo-app-service

Backend API (Todo Backend): todo-backend-service

🧪 Features
✅ Submit todos (max 140 chars)

✅ List todos

✅ Image persists and refreshes every 10 minutes

✅ Multi-container Kubernetes setup with clear service separation
