import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolios from './Components/Portfolios'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import {Toaster} from 'react-hot-toast'

function App() {
 
  return (
    <><div><Navbar/>
    <Home/>
    <About/>
    <Portfolios/>
    <Experience/>
     <Contact/>
    <Footer/></div>
     <Toaster /></>
  )
}

export default App
