# Task Manager 🚀

A simple and modern **task management web app** built with **React + Vite**.  
This project lets users organize and track tasks from a clean, intuitive UI.

👉 Live Demo: https://task-manager-one-murex.vercel.app :contentReference[oaicite:1]{index=1}

---

## 📦 Features

✔ Create tasks  
✔ View task lists  
✔ Mark tasks as completed  
✔ Delete tasks  
✔ Clean and responsive UI

> *(Add more features here as you build them!)*

---

## 🧠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React      | Frontend UI |
| Vite       | Build tool |
| JavaScript | Logic & components |
| ESLint     | Code linting |
| Vercel     | Deployment |

---

## 🚀 Getting Started

Follow these steps to **run this project locally** on your machine.

### 🛠 Prerequisites

Make sure you have this installed:

- Node.js (v16+ recommended)
- npm (comes with Node.js)

---

### 📥 1. Clone the Repo

```bash
git clone https://github.com/khurshid-99/Task-Manager.git
cd Task-Manager

```
### 📦 2. Install Dependencies
```bash
npm install

```
### 🧪 3. Run Development Server
```bash
npm run dev
```
 Open http://localhost:5173 
in your browser to see your app running.

---
# 🛠 Deployment

- This project is already set up for Vercel deployment.
- To deploy:
- Push your repo to GitHub.
- Import the project on Vercel.
- Set build command:
```bash
npm run build
```
## Set output directory:
```bash 
dist
```
 Vercel will handle the rest! Your app will be live with proper routes.

---

 # 🧹 Folder Structure
 ```bash
 Task-Manager/
├── public/           # Static assets
├── src/              # React source code
├── .gitignore
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

---

# 🧪 Scripts
| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Run in development mode  |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |

---

# ❓ Troubleshootin
### 🔹 Dashboard routing crashes
- If your app crashes when accessing routes directly (like /dashboard), ensure your vercel.json has this rewrite:

```
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
- This ensures client-side routing works properly on Vercel.

# 🤝 Contributing
### Contributions are welcome!
- Fork the repo
- Create a new branch
- Make your changes
- Open a Pull Request
---
# 📄 License
### This project is open-source — feel free to use and modify it! (Add specific license if any)

---

# ✨ Happy Coding! 😊

```

---

If you want, I can *customize the features section* to match exactly what your app does — just tell me what the app currently supports (e.g., drag-and-drop tasks, filters, localStorage use).
::contentReference[oaicite:2]{index=2}
```
