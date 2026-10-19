# Eduse
 
**Eduse** is a student-focused platform that brings **e-commerce** and **e-learning** together in one place. Students can sell their own products, enroll in courses, or host and teach their own courses, all from a single account.
 
🔗 **Live demo:** [eduse-frontend.vercel.app](https://eduse-frontend.vercel.app)
 
> This repository contains the **frontend** of Eduse, built with React and Vite.
 
---
 
## Features
 
### 🛒 Marketplace
- Students can list and sell their own products
- Browse and purchase products from other students
- Manage your own listings
### 🎓 Learning
- Browse and enroll in courses
- Track the courses you are enrolled in
- Students can **host their own courses** and become instructors
### 👤 Platform
- One account for buying, selling, learning and teaching
- Responsive interface built for desktop and mobile
- Dashboards with charts for tracking activity
---
 
## Tech Stack
 
| Area | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev) |
| Build tool | [Vite 7](https://vite.dev) |
| Routing | [React Router 7](https://reactrouter.com) |
| State management | [Redux Toolkit](https://redux-toolkit.js.org) + [React Redux](https://react-redux.js.org) |
| State persistence | [redux-persist](https://github.com/rt2zz/redux-persist) |
| HTTP client | [Axios](https://axios-http.com) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) + PostCSS + Autoprefixer |
| Charts | [Recharts](https://recharts.org) |
| Icons | [Lucide React](https://lucide.dev) and [React Icons](https://react-icons.github.io/react-icons/) |
| Font | [Inter Variable](https://fontsource.org/fonts/inter) via Fontsource |
| Linting | ESLint 9 with React Hooks and React Refresh plugins |
| Deployment | [Vercel](https://vercel.com) |
 
---
 
## Project Structure
 
```
eduse-frontend/
├── public/               # Static assets
├── src/                  # Application source code
├── index.html            # App entry HTML
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── package.json
```
 
---
 
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org) 18 or newer
- npm (comes with Node.js)
### Installation
 
```bash
# Clone the repository
git clone https://github.com/Mubasshir08/eduse-frontend.git
 
# Move into the project
cd eduse-frontend
 
# Install dependencies
npm install
```
 
### Run in development
 
```bash
npm run dev
```
 
The app will start on the local address printed in your terminal (usually `http://localhost:5173`).
 
### Available scripts
 
| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
 
---
 
## Backend
 
Eduse's frontend communicates with a backend API through Axios. Make sure the API is running and that the frontend is pointed at it before using features such as authentication, products and courses.
 
---
 
## Deployment
 
The project is deployed on Vercel. To deploy your own copy:
 
1. Push the repository to your GitHub account
2. Import it into [Vercel](https://vercel.com/new)
3. Use the default Vite settings (build command `npm run build`, output directory `dist`)
4. Add any environment variables your setup needs, then deploy
---
 
## Contributing
 
Contributions, issues and feature requests are welcome.
 
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request
---
 
## Author
 
**Mubasshir** — [@Mubasshir08](https://github.com/Mubasshir08)