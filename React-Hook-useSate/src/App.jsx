import React, { useState } from 'react'

const App = () => {

  const[num , steNum] = useState(0);

  function increaseNum(){
    steNum(num+1);
  }

  function decreaseNum(){
    steNum(num-1);
  }

  function resetNum(){
    steNum(0);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={resetNum}>Reset</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App
