# TaskList
# 🎯 Mission Task Manager (Full-Stack)

A lightweight, role-based task management web app built as a practical demonstration of full-stack fundamentals.
It allows teams to create projects, assign tasks (“missions”), and track progress with clear separation between **Admin** and **Member** roles.

---

## 🧠 Why this project exists

This project is intentionally **simple but complete**.
Instead of overengineering, it focuses on:

* Clean API design
* Proper authentication flow
* Role-based access control (RBAC)
* Real-world data relationships (users → projects → tasks)
* Functional UI connected to backend

---

## 🚀 Features

### 🔐 Authentication

* Signup & Login (JWT-based)
* Password hashing using bcrypt
* Token-based session handling

---

### 👥 Role-Based Access

* **Admin**

  * Create projects
  * Add members to projects
  * Assign tasks to users
  * View all tasks

* **Member**

  * View only assigned tasks
  * Update task status

---

### 📁 Project Management

* Create projects
* Add/remove members
* View team structure

---

### 📌 Task Management (Missions)

* Create tasks (admin)
* Assign tasks via dropdown (no manual IDs)
* Update task status (todo → in-progress → done)
* Role-based visibility

---

### 📊 Dashboard

* Overview of:

  * Total tasks
  * Completed
  * Pending
  * Overdue

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS (latest setup)
* Axios

### Backend

* Node.js + Express
* MongoDB (via MongoDB Atlas)
* Mongoose
* JWT Authentication

---

## 📁 Project Structure

```
mission-task-manager/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── context/
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo

```bash
git clone <your-repo-url>
cd mission-task-manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
```

Run:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Overview

### Auth

```
POST /api/auth/signup
POST /api/auth/login
```

### Projects

```
GET    /api/projects
POST   /api/projects
POST   /api/projects/:id/add-member
```

### Tasks

```
GET    /api/tasks/:projectId
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

### Users

```
GET /api/users
```

---

## 🔄 Application Flow

1. User signs up
2. User logs in → receives JWT
3. Admin creates a project
4. Admin adds members to the project
5. Admin assigns tasks
6. Members log in and see only their tasks

---

## ⚠️ Known Limitations

* No advanced user management UI
* Basic validation (can be expanded)
* No pagination for large datasets
* Minimal styling (focused on functionality)

---

## 🧠 Key Learnings Demonstrated

* REST API design
* JWT authentication flow
* Role-based authorization
* Data modeling with MongoDB
* Frontend-backend integration
* State handling in React

---

## 📦 Deployment

* Backend: Railway
* Frontend: Vercel / Netlify

---

## 🧩 Future Improvements (Optional)

* Kanban drag-and-drop board
* Notifications system
* File attachments for tasks
* Search & filters
* Team roles beyond admin/member

---

## 👤 Author

Amaan Khan
Full-stack developer focused on building practical, efficient systems.

---

## 📌 Final Note

This project is not meant to be “overbuilt.”
It is designed to **show clarity of concepts, correctness of implementation, and practical thinking**—which is often more valuable than complexity.

---
