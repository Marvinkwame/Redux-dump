import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [ userData, setUserData] = useState("")
  const dispatch = useDispatch();

  const allUsers = useSelector(selectAllUsers);

  const onTitleChnaged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onUserChanged = (e) =>  setUserData(e.target.value);

  const savePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userData));
    }
    setTitle("");
    setContent("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userData)

  const usersDb = allUsers.map((user) => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))

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

        <label htmlFor="author">Author:</label>
        <select name="user" value={userData} onChange={onUserChanged} id="author">
            <option value=""></option>
            {usersDb}
        </select>

        <label htmlFor="">Post Content</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={onContentChanged}
        />

        <button type="button" onClick={savePost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
