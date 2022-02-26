import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState();
  const { id } = useParams();
  
  const fetchPostData = () => {
    try {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res) => {
          setPosts(res.data);
        });
    } catch (err) {}
  };

  useEffect(() => {
    fetchPostData();
  });
  return (
    <div style={{ textAlign: "center" }}>
      <img src={posts?.url} alt="post" />
      <h1>{posts?.title}</h1>
    </div>
  );
}

export default Posts;
