import React from 'react'
import Signup  from './pages/signup'
import Signin from './pages/signin'
import SignUpp from './pages/SignUpp'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Signup />}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signupp' element={<SignUpp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/my-about' element={<About />} />
        <Route path='/about' element={<Navigate to ='my-about'/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App