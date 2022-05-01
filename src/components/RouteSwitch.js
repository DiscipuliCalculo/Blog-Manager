import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import PostEditor from "./PostEditor";
import PostList from "./PostList";


const RouteSwitch = (props) => {
  const [post, setPost] = useState(null)
  const [login, setLogin] = useState('')

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/posts" element={<PostList checkin='hello' setPost={setPost} />} />
          <Route path={'/posts/new'} element={<PostEditor/>}/>
          <Route path={'/posts/' + post} element={<PostEditor/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default RouteSwitch