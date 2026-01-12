# React

A modern React-based project utilizing the latest frontend technologies and tools for building responsive web applications.

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations

## 📋 Prerequisites

- Node.js 18 (use nvm or asdf)
- npm 9

## 🛠️ Installation

1. Install dependencies deterministically:
   ```bash
   # Ensure Node 18
   nvm use 18 || asdf install && asdf local nodejs 18

   # Install exactly from lockfile
   npm ci
   ```
   
2. Start the development server:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables (use .env.example as template)
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```



## 📦 Deployment

Build the application for production:

```bash
npm run build
```
