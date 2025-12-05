import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardCotent from './RightCardCotent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      < RightCardCotent tag={props.tag} color={props.color} id={props.id} intro={props.intro}/>
    </div>
  )
}

export default RightCard
