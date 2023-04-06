import { useState } from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="*" element={<Pagenotfound/>} />
        </Routes> 
      </>
    </div>
  );
}

export default App;
