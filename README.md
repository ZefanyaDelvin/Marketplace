# React Vite Project

A React project scaffolded with [Vite](https://vitejs.dev/), including instructions for setup, running, and deployment.

---

## Table of Contents

* [Prerequisites](#prerequisites)
* [Setup](#setup)
* [Running the Project](#running-the-project)
* [Building for Production](#building-for-production)
* [Deployment](#deployment)
* [Folder Structure](#folder-structure)
* [License](#license)

---

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (v16+ recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

Verify installation:

```bash
node -v
npm -v
```

---

## Setup

Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

Install dependencies:

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

---

## Running the Project

To start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

Open your browser and go to `http://localhost:5173` (Vite default port). The server supports hot module replacement (HMR), so your changes will reflect instantly.

---

## Building for Production

To create a production build:

```bash
# Using npm
npm run build

# Using yarn
yarn build
```

This will generate optimized files in the `dist/` folder.

Preview the production build locally:

```bash
# Using npm
npm run preview

# Using yarn
yarn preview
```

---

## Deployment

You can deploy your React Vite project to various platforms. The following is how to deploy this project on GitHub

### GitHub Pages

1. Install `gh-pages`:

```bash
npm install --save-dev gh-pages
```

2. Add scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## Folder Structure

```
your-project/
├─ public/         # Static assets
├─ src/
│  ├─ assets/      # Images, fonts, etc.
│  ├─ components/  # React components
│  ├─ layouts/     # Page Layout
│  ├─ pages/       # Page components
│  ├─ router/      # Page router
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## License

This project is licensed under the MIT License.
