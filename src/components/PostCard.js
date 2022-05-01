import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PostCard(props) {

  const navigate = useNavigate();

  const navigateToPost = () => {
    props.setPost(props.postId)
    navigate('/posts/' + props.postId, {state:{postId: props.postId, check: 'here'}});
  }

  const deletePost = () => {

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