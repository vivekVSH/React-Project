import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = 'Vivek Hande' age = {20} />
      <Card user = 'Umesh' age = {25} />
    </div>
  )
}

export default App

