import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [input,setInput] = useState();

  const inputting=(event)=>{
    setInput(event.target.value)
  
  }

    React.useEffect(() => {
      const timer =
     Number (input > 0 &&  setInterval(() => setInput(input - 1), 1000));
      return () => clearInterval(timer);
    }, [input]);
  




  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={inputting} /> sec.
        </h1>
      </div>
<div id="current-time">{input}</div>

      
    </div>
  )
}



export default App;
