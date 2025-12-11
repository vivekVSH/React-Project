import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [data, setData] = useState([]);
  const[num , setNum] = useState(0);

  const user = {
    name : 'vivek',
    age : 25,
    skill : 'java'
  }
  localStorage.setItem('vivek', 'got man');
  localStorage.setItem('user', JSON.stringify(user));
  const user1 = localStorage.getItem('user');
  console.log(JSON.parse(user1));
  localStorage.removeItem('vivek');

  const getData = async () => {
    const responce = await  fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json(); 
    console.log(data);
  }
  

  const getDatas = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('viewing data...');
    console.log(responce.data);
    setData(responce.data);
  }

  useEffect(function(){
    console.log('useeffect is running....');
  },[])

  return (
    
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={getDatas}>View Data</button>
      {data.map(function(elem,idx){
        return <h1>Hello ,{idx} {elem.name}</h1>
      })}


      {num}
      <button onClick={()=>{
        setNum(num+1);
      }}>Change Number</button>
    </div>
  )
}

export default App
