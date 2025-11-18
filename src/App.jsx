import React from 'react'
import Signup from './pages/Signup1'
import Signin from './pages/signin'
import SignUpp from './pages/SignUpp'
import Dashboard from './pages/Dashboard'
import Props from './pages/Prop'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
import New from './pages/New'
import New2 from './pages/New'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Signup1 />}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signupp' element={<SignUpp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/my-about' element={<About />} />
        <Route path='/about' element={<Navigate to ='my-about'/>} />
        <Route path='/new' element={<New/>}/>
        <Route path='/new2' element={<New2/>}/>
        <Route path='*' element={<Notfound/>} />
        <Route path='/props' element={<Props/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App