import { createContext, useContext, useState } from 'react';
import { useAuth } from '../auth-context/auth-context.jsx';

const PostsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
}

export function PostsProvider({ children }) {
  const { user } = useAuth();

  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: crypto.randomUUID(),
        author: user?.displayName,
        image:
          'https://images.unsplash.com/photo-1768590237847-ebc94f180def?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
        ...newPost,
      },
    ]);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const value = { posts, addPost, deletePost };

  console.log(posts);

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
