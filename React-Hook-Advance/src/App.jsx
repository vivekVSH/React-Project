import React from 'react'
import { useState } from 'react'


const App = () => {

  const [obj , setObj] = useState({user : 'vivek' , age : 20});

  function changeObj(){
    let changeO = {...obj};
    changeO.user = 'Yash';
    changeO.age = 24;

    setObj(changeO);
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form is submited!!");
  }
  return (
    <div>
      <h1>{obj.user}, {obj.age}</h1>
      <button onClick={changeObj}>Click</button>

      <form onSubmit={(e) => {
        submitForm(e);
      }}>
        <input onChange={(e) => {
          console.log(e.target.value);
        }} type="text" placeholder='Enter Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
