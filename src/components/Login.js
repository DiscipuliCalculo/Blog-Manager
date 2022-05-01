import { useNavigate } from "react-router-dom"

function Login(props) {

  const navigate = useNavigate();

  const navigateToPosts = () => {
    navigate('/posts');
  }

  return(
    <div>
      <h1>Login</h1>
      <input type='text'/>
      <input type='text'/>
      <input type='submit'/>
      <button onClick={navigateToPosts}>Login</button>
    </div>
  )
}

export default Login