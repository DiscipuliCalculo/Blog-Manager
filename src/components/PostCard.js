import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PostCard(props) {

  const navigate = useNavigate();

  const navigateToPost = () => {
    props.setPost(props.postId)
    navigate('/posts/' + props.postId, {state:{postId: props.postId, check: 'here'}});
  }

  async function deletePost() {
    const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts/' + props.postId, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
    });
    console.log(response.json())
  }

  return(
    <div className="post-card">
        <div>
          <h3>{props.title}</h3>
          <p>{props.date}</p>
        </div>
        <div>
          <p>{props.published}</p>
          <input type='hidden' name='postId' value={props.postId} />
          <button onClick={navigateToPost}>Edit</button>
          <button onClick={deletePost}>Delete</button>
        </div>
    </div>
  )

}

export default PostCard