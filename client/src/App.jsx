import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import Solution from './pages/Solution'
import View from './pages/View'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Hero></Hero>} />
        <Route path="/solution" element={<Solution></Solution>} />
        <Route path="/view" element={<View></View>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
