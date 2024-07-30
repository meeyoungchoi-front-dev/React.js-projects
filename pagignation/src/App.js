import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage] = useState(8);


  useEffect(() => {
    const  fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[])

  const indexOfLastPost = currentPage * postsperPage;
  const indexOfFirstPost = indexOfLastPost - postsperPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  const paginate = pageNumber =>  setCurrentPage(pageNumber)

  return (
    <div className="App">
      <h1>MY BLOG</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsperPage={postsperPage} 
                  totalPosts={posts.length} 
                  paginate={paginate}/>
    </div>
  );
}

export default App;
