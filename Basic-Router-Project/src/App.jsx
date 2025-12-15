import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import {Routes , Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Couses from './pages/Couses'
import CourseDetails from './pages/CourseDetails'
import Navredirect from './components/Navredirect'


const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar/>
      <Navredirect/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='/course' element={<Couses/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*'  element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
