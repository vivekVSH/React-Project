import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-600 justify-between'>
      <h2 className='text-xl font-bold'>WelCome Brand</h2>
      <div className='flex text-lg font-bold gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/course'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
