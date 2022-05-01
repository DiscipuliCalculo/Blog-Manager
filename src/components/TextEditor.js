import { useState} from 'react'

function TextEditor(props) {
  const [text, setText] = useState('')

  return (
    <div className='text-editor-container'>
      <label for='post-text'> Title</label>
      <textarea id='post-text' className='text-editor' name='text' rows="40" cols="400" onChange={e => setText(e.target.value)} value={text} ></textarea>
    </div>
  )
}

export default TextEditor