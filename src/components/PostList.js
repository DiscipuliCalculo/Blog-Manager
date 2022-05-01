import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostCard from './PostCard'

function PostList(props) {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)

  const navigate = useNavigate();

  const addNewPost = () => {
    navigate('/posts/new');
  }

  useEffect(()=>{
      getPosts()
  }, [])

  let currentPosts = posts.map((post) => {
    let publishedStatus = 'unpublished'
    if (post.published === true) {
      publishedStatus = 'published'
    } 
     return <PostCard  key={post._id} title={post.title} date={post.datetime} published={publishedStatus} postId={post._id} setPost={props.setPost}/>
  })

  async function getPosts() {
    try {
      const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts');
      const text = await response.text();
      const data = JSON.parse(text);
      setPosts(data)
    } catch(err) {
      return ('not')
    }
  }



  /* Future implemenation
  /* 
  async function getPosts(props) {
    try {
      const response = await fetch('http://localhost:3000/users626d810195d10f9c45fa091e/posts');
      const text = await response.text();
      const data = JSON.parse(text);
      return data
    } catch(err) {
      console.log('message was text')
    }
  }

  const posts = fetch('http://localhost:3000/users' + props.userId + '/posts)
  */


  return(
    <div>
      <h1>Posts</h1>
      <div>
        <button onClick={addNewPost}>Add Post</button>
      </div>
      <div className="post-container">
        {currentPosts}
      </div>
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default PostList