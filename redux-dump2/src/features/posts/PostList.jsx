import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const appPosts = orderedPosts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userDetails={post.userData} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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