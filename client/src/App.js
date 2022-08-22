import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Post from "./Component/Post/Post";
import Signup from "./Component/Signup/Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}/>  
          <Route path="/signup" element={<Signup/>}/>  
          <Route path="/home" element={<Home></Home>}/>  
          <Route path="/post" element={<Post></Post>}/>  
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
