import Home from "./components/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specific from "./components/Specific_news/Specific";
import Login from "./components/Login/Login";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/specific_news/:id' element={<Specific/>}/>
      </Routes>
  </Router>
  )
}

export default App
