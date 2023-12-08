import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChnaged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const savePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
    }
    setTitle("");
    setContent("");
  };

  return (
    <section>
      <h2>Add New Content</h2>
      <form action="">
        <label htmlFor="">Post Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onTitleChnaged}
        />

        <label htmlFor="">Post Content</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={onContentChanged}
        />

        <button type="button" onClick={savePost}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
