import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [blogs,setBlogs] =useState([]);
  console.log(blogs);
  const fetchPostData = () => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=10")
        .then((res) => {
          setPosts(res.data);
        });
    } catch (err) {}
  };

  useEffect(() => {
    fetchPostData();
    setBlogs(JSON.parse(localStorage.getItem('list')) || []) 
  },[]);

  return (
    <div className={style.featuresContainer}>
      <h1 className={style.featuresTitle}>My Blogs</h1>
      <ul className={style.cards}>  
        {blogs?.map((item) => (
          <li className={style.cards__item}>
            <div className={style.card}>
              <div className={style.icons}>
                <img src={item.image} alt="cardimg" />
              </div>
              <div className={style.card__content}>
                <div className={style.card__title}>{item.title}</div>
                <p className={style.card__text}>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
        </ul>
      <h1 className={style.featuresTitle}>Posts</h1>
      <ul className={style.cards}>
        {posts.map((item) => (
          <li className={style.cards__item}>
            <div className={style.card}>
              <div className={style.icons}>
                <img src={item.url} alt="cardimg" />
              </div>
              <div className={style.card__content}>
                <div className={style.card__title}>{item.id}</div>
                <p className={style.card__text}>{item.title}</p>
                <div className={style.readMore}>
                  <Link to={`/post/${item.id}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
