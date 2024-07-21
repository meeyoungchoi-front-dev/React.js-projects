import React, { useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import './App.css';

function App() {
  const [postResults, setPostsResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

   
  useEffect(() => {
    const  fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPostsResults(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[])

  const fetchData = async () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setPostsResults(res.data);
    })
  }

  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = postResults.slice(indexOfFirstPost, indexOfLastPost);

  // change game
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  console.log(postResults);
  return (
    <div className="App">
      <h1>USING JSON PLACE HOLDER POST API </h1>
      <Posts postResults = {currentPosts}  loading={loading}></Posts>
      <Pagination postPerPage={postPerPage} postResults={postResults.length} paginate={paginate}/>
    </div>
  );
}

export default App;
