import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Posts from './pages/posts.jsx';
import PostDetails from './pages/PostDetails.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './pages/Profile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post-details" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
