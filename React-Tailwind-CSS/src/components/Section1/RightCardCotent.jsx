import React from 'react'

const RightCardCotent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
        <h2 className='bg-white justify-center rounded-full w-14 h-14 items-center flex text-2xl font-semibold'>{props.id+1 }</h2>
        <div>
            <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis suscipit ipsa aspernatur temporibus esse?</p>
            <div>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardCotent
