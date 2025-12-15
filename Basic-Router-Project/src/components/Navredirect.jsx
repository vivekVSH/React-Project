import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navredirect = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate('/');
      }} className='bg-emerald-700 m-5 cursor-pointer px-5 py-2 object-fill rounded active:scale-95'>Back to homepage</button>
      <button onClick={()=>{
        navigate(-1);
      }} className='bg-emerald-700 m-5 px-5 py-2 cursor-pointer object-fill rounded active:scale-95'>Go Back</button>
      <button onClick={()=>{
        navigate(+1);
      }} className='bg-emerald-700 m-5 px-5 py-2 cursor-pointer object-fill rounded active:scale-95'>Go Next</button>
    </div>
  )
}

export default Navredirect
