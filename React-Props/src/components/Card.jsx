import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user} , {props.age}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, obcaecati!</p>
        <button>View</button>
      </div>
    </div>
  )
}

export default Card
