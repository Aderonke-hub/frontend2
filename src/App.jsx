import React from 'react'
// import Signup from './pages/Signup1'
// import Signin from './pages/signin'
// import SignUpp from './pages/SignUpp'
// import Dashboard from './pages/Dashboard'
// import Props from './pages/Prop'
// import About from './pages/About'
// import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
// import New from './pages/New'
// import New2 from './pages/New'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Register from './pages/Register'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App