// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
 

  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='contacts' element={<Contact/>}></Route>
        <Route path='skills' element={<Skills/>}></Route>
        <Route path='about' element={<About/>}></Route>
        
     </Routes>
    </>
  )
}


export default App
