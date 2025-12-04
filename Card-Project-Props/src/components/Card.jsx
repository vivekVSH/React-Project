import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    //console.log(props.logo);
  return (
    <div>
      <div className="Card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>save <Bookmark /></button> 
        </div>
        <div className="center">  
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.post}</h2>
          <div>
            <h4>{props.tag11}</h4>
            <h4>{props.tag22}</h4>
          </div>
        </div>
        <div className="bottom"> 
          <div>
            <h3>{props.payment}</h3>
            <p>{props.place}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
