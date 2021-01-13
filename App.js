import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let[data,setData] =useState("smile")
  function updateData() {
    return (
      setData('stay HEalthy')
    )
  }
  return(
    <div>
    <h2>
      use of state
    </h2>
    <h1>AlwaYs be {data}</h1>
    <button onClick={updateData}>update sentence</button>
    </div>
    
  )
}

export default App;
