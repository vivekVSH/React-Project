import React from 'react'

const App = () => {
  function click(){
    console.log("button was clicked");
  }

  function cursior(){
    console.log("Cursor come here");
  }

  return (
    <div>
      <button onClick={click} >Click Here</button>
      <button onMouseOver={cursior}>Letss Goo!!</button>
      <input onChange={(elem) =>{console.log(elem.target.value)}} type="text" placeholder='Enter My Name' />
    </div>
  )
}

export default App
