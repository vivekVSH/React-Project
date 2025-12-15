import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const parmes = useParams();
    console.log(parmes.id);

  return (
    <div>
      <h1>Start the Course</h1>
    </div>
  )
}

export default CourseDetails
