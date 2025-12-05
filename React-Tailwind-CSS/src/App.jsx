import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const users = [
  {
    img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro : '',
    tag : 'Saticefied',
    color : 'royalblue'
  },
  {
    img : 'https://images.unsplash.com/photo-1713526708767-ae5b1889772b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    intro : '',
    tag : 'Underserved',
    color : 'orange'
  },
  {
    img : 'https://images.unsplash.com/photo-1629184510982-cf91280c1d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8',
    intro : '',
    tag : 'Underbanked',
    color:'Red'
  },
  {
    img : 'https://images.unsplash.com/photo-1629184510982-cf91280c1d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY5fHx8ZW58MHx8fHx8',
    intro : '',
    tag : 'Understandable',
    color:'Pink'
  }
]
const App = () => {
  return (
    <div>
      < Section1 users={users}/>
      < Section2/>
    </div>
  )
}

export default App
