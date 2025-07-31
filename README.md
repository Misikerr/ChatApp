
# 💬 SELAM-ChatApp – Real-Time Messaging Platform

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb)
![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-orange?logo=cloudinary)
![License](https://img.shields.io/github/license/Misikerr/ChatApp)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blueviolet)
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)

> A modern full-stack chat application built for seamless real-time communication, secure messaging, and elegant media sharing — all wrapped in a clean, responsive design.

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

- 🔐 **Authentication** – Sign up, login, and protected routes via JWT
- 💬 **Instant Messaging** – Real-time chat with Socket.io
- 📁 **Media Uploads** – Send and receive images/files using Cloudinary
- 👥 **User Profiles** – View, edit, and manage user info
- 🌓 **Responsive UI** – Mobile-first, accessible design
- 🔔 **Notifications** – New message alerts (real-time)
- 🧠 **React Context** – Global state management (Auth & Chat)
- ☁️ **Cloud Deployment** – Live on Vercel

---

## 🛠️ Tech Stack

| Category   | Technology           |
|------------|----------------------|
| **Frontend**  | React (Vite), TailwindCSS |
| **Backend**   | Node.js, Express     |
| **Database**  | MongoDB, Mongoose    |
| **Authentication** | JWT, bcrypt      |
| **Real-Time** | Socket.io            |
| **Media Hosting** | Cloudinary        |
| **Deployment** | Vercel (Frontend), Render/Local (Backend) |

---

## 📁 Project Structure

```

ChatApp/
├── client/               # Frontend
│   ├── src/
│   │   ├── assets/       # Images, static files
│   │   ├── components/   # Reusable UI components
│   │   ├── context/      # Auth & Chat contexts
│   │   ├── lib/          # Utilities and helpers
│   │   ├── pages/        # React pages/routes
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
├── server/               # Backend
│   ├── controllers/      # Request logic
│   ├── lib/              # DB connection, Cloudinary config
│   ├── middleware/       # Auth, error handling
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Express routes
│   └── server.js         # Entry point
│
└── README.md

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Misikerr/ChatApp.git
cd ChatApp
````

---

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file inside `server/` directory and add the following:

```
MONGODB_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

### 4. Start Development Servers

#### Backend (Port 5000)

```bash
cd server
npm run dev
```

#### Frontend (Port 5173)

```bash
cd ../client
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to open [issues](https://github.com/Misikerr/ChatApp/issues) or submit a [pull request](https://github.com/Misikerr/ChatApp/pulls).

### Development Tips

* Stick to consistent code formatting
* Use meaningful commit messages
* Test features before pushing

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Misiker Genene(Rio)**

* GitHub: [@Misiker](https://github.com/Misikerr)
* Telegram: [@Misiker](https://t.me/Misikerr)
* LinkedIn: [@Misiker](https://www.linkedin.com/in/misiker-genene-307bba283/?trk=public-profile-join-page)

---

> Built with 💙 using React, Node.js, MongoDB & lots of ☕
