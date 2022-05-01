import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import TextEditor from "./TextEditor";

function PostEditor() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const navigate = useNavigate();

  const navigateToPosts = () => {
    navigate('/posts');
  }

 


  return (
    <div>
      <form>
        <label for='title'> Title</label>
        <textarea id='title' name='title' ></textarea>
        <TextEditor/>
        <label for='published'>Published? </label>
        <input id='published' name='published' type='checkbox'/>
        <div>
          <input type='submit' value='Save'/>
          <button onClick={navigateToPosts} >Discard</button>
        </div>
      </form>
    </div>
  )
}

export default PostEditor