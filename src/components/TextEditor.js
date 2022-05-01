function TextEditor(props) {

  return (
    <div className='text-editor-container'>
      <textarea id='post-text' className='text-editor' name='text' rows="40" cols="400" onChange={e => props.setText(e.target.value)} value={props.text} ></textarea>
    </div>
  )
}

export default TextEditor