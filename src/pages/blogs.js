import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
const Blogs = () => {
  let navigate = useNavigate();

  const [state, setState] = useState({
    title: "",
    image: "",
    description:""
  });

  const postBtnStyle = {
    border: "none",
    margin: 0,
    marginTop: "10px",
    color: "#fff",
    fontWeight: "bold",
    padding: "16px 20px",
    background: "#7D4C92 ",
    width: "100%",
  };
  const parentDiv = {
    align: "center",
    margin: "0px auto auto auto",
    textAlign: "center",
  };
  const formStyle = {
    width: "400px",
    border: "1px solid lightgray",
    margin: "10px auto 10px auto",
    textAlign: "center",
    padding: "30px 40px 30px 40px",
  };
  const inputFields = {
    width: "100%",
    fontFamily: "arial",
    padding: "6px",
    marginTop: "20px",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = (() => {
      const fieldValue = localStorage.getItem('list');
      return fieldValue === null
        ? []
        : JSON.parse(fieldValue);
    })();
    items.push({ title:state.title, image: state.image,description:state.description});
    localStorage.setItem('list', JSON.stringify(items));
    setState({ title: "", image: "",description:"" });
      navigate("/");
  };

  return (
    <div style={parentDiv}>
      <h1 style={{ color: "#8A2482" }}>post Blog</h1>
      <hr></hr>
      <h3>Please upload image url and title</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          style={inputFields}
          required
          type="text"
          placeholder="Enter Post Title"
          name="title"
          value={state.title}
          onChange={handleInputChange}
        />
        <input
          style={inputFields}
          required
          type="text"
          placeholder="Enter Post description"
          name="description"
          value={state.description}
          onChange={handleInputChange}
        />

        <input
          style={inputFields}
          required
          type="text"
          placeholder="Paste your image url here"
          name="image"
          value={state.image}
          onChange={handleInputChange}
        />
        <button style={postBtnStyle}>Post</button>
      </form>
    </div>
  );
};

export default Blogs;
