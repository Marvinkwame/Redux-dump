import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const appPosts = posts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    ))


  return (
    <section>
        <h2>Posts</h2>
        {appPosts}
    </section>
  )
}

export default PostList