import { useState, useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import TextEditor from "./TextEditor";

function PostEditor(props) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [published, setPublished] = useState(false)
 

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if (location.state !== null) {
      getData()
    }
  }, []);

  const navigateToPosts = () => {
    navigate('/posts');
  }

  async function getData() {
    try {
      const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts/' + location.state.postId);
      const text = await response.json();
      //const data = JSON.parse(text);
      setTitle(text.title)
      setText(text.text)
    } catch(err) {
      return ('not')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (location.state !== null) {
        const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts/' + location.state.postId, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( {
            'title': title,
            'text': text
          } ), // body data type must match "Content-Type" header
        });
        console.log(response.json())
    } else {
        const response = await fetch('http://localhost:3000/users/626d810195d10f9c45fa091e/posts', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( {
            'title': title,
            'text': text
          } ), // body data type must match "Content-Type" header
        });
        console.log(response.json())
    }
    navigateToPosts()
  }

  return (
    <div>
        <textarea id='title' name='title' onChange={e => setTitle(e.target.value)} value={title}></textarea>
        <TextEditor text={text} setText={setText}/>
        <input id='published' name='published' type='checkbox'/>
        <div>
          <button onClick={handleSubmit} >Save Post</button>
          <button onClick={navigateToPosts} >Discard</button>
        </div>
    </div>
  )
}

export default PostEditor