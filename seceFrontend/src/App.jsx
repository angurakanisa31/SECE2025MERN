
import Home from"./components/FunctionalComponents/Home"
import About from "./components/FunctionalComponents/About"
import Gallery from "./components/FunctionalComponents/Gallery"
import Contact from "./components/FunctionalComponents/Contact"
import Navbar from "./components/FunctionalComponents/Navbar"
import Signup from "./components/FunctionalComponents/Signup"
import Login from "./components/FunctionalComponents/Login"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
import { useState } from "react";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  
  };

  return (<div>
  <BrowserRouter>
  {isAuthenticated && <Navbar onLogout = {handleLogout}/>}
    <Navbar/>
      <Routes>
      {!isAuthenticated ? (
          <>
            <Route path="/" element={<Signup onLogin={handleLogin} />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
      </>
  ):(
  <>
        
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path="/Gallery" element={<Gallery image="SECE logo" page="Gallery"/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        
        </>
  )}
  </Routes>
  </BrowserRouter>
  </div>
      )
};

export default App;


