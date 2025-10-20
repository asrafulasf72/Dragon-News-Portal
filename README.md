Dragon News Portal

A clean, responsive news portal built with React. It uses React Router for navigation, Firebase for auth/data, and popular UI helpers like react-icons. Lightweight and easy to run — perfect for learning or showcasing a frontend project.

Features
  Browse categorized news and read details
  Authentication (register / login) via Firebase
  Protected routes for restricted pages
  Responsive layout with header, sidebars, and news cards
  Reusable components for fast development

Tech stack
  React + Vite
 React Router
 Firebase (Auth / Firestore)
 react-icons
 CSS (project-level styles)

 Project structure (high level)

 src/
├─ Components/        # UI pieces (NewsCard, Header, LeftAside, RightAside, etc.)
├─ Layout/            # AuthLayout, HomeLayout
├─ Pages/             # Home, NewsDetails, Login, Register, About, etc.
├─ Provider/          # AuthProvider, PrivateRoute
├─ Firebase/          # firebase.init.js
├─ Routes/            # Router setup (Router.jsx)
└─ assets, styles, main.jsx
