import { createContext, useContext, useState } from 'react';

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
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
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
