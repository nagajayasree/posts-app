// import './index.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Posts from './pages/Posts.jsx';
import PostDetails from './pages/PostDetails.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import NavBar from './components/NavBar.jsx';
import Profile from './user/Profile.jsx';
import CreatePost from './pages/CreatePost.jsx';
import { AuthProvider } from './context/auth-Context/auth-context.jsx';
import { PostsProvider } from './context/posts-context/posts-context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post-details" element={<PostDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  </StrictMode>,
);
