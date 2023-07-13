
import './App.css';
import { useState } from 'react';

function App() {
  //state (counter) - to hold initial value 
  //setCounter - to set value for counter state
  const [counter,setCounter] = useState(0)

  //create a function for incrementing counter
  function incrementCounter(){
    setCounter(counter+1)
  }

  //create a function for decrementing counter
  function decrementCounter(){
    if(counter!==0){
    setCounter(counter-1)
  }
}
  //create a function for reset counter
  function resetCounter(){
    setCounter(0)
  }

  return (
    <div 
    style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      border:'2px solid grey',
      marginLeft:'550px',
      marginTop:'150px',
      width:'500px',
      height:'270px',
      padding:'20px',
      boxShadow:'2px 3px 2px 3px',
      backgroundColor:'rgba(0, 0, 0, 0.856)',
      borderRadius:'10px',
    }}
    className="App">
      <header className="App-header">
        <h3>Counter App</h3>
        <h1>{counter}</h1>
        <button
        style={{
          backgroundColor:'green',
          color:'white',
          padding:'4px',
          margin:'5px',
          border:'2px solid white'
        }}
        
        onClick={incrementCounter}>Increment</button>
        <button
          style={{
            backgroundColor:'red',
            color:'white',
            padding:'4px',
            margin:'5px',
            border:'2px solid white'
          }}
        onClick={decrementCounter}>Decrement</button>
        <button
          style={{
            backgroundColor:'black',
            color:'white',
            padding:'4px',
            margin:'5px',
            border:'2px solid white'
          }}
        onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
}

export default App;
