import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userDetails }) => {
    const user = useSelector(selectAllUsers);

    const foundAuthor = user.find(user => user.id == userDetails);

  return  <span>by {foundAuthor ? foundAuthor.name : "No Author"}</span>
  
}

export default PostAuthor