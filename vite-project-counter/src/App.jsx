import { useState } from 'react'
import './App.css'


function App() {
  // let counter=12
  let [counter, setCounter] = useState(10)

  const AddValue = () => {
    //nrml variable 

    // counter=counter+1;
    // console.log(counter);

    //state 
    setCounter(counter+1);

    //to perform action multiple times
    // setCounter((preCounter)=>preCounter+1);
    // setCounter((preCounter)=>preCounter+1);
    // setCounter((preCounter)=>preCounter+1);
    // setCounter((preCounter)=>preCounter+1);

  }

  const Remove = () => {
    // counter =counter-1;
    // console.log(counter);
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>This is the React Project - {counter}</h1>
      <h3>Counter - {counter}</h3>
      <button
        onClick={AddValue}
      >Add value</button>{' '}
      <button
        onClick={Remove}
      >Remove</button>
      <h3>Footer: {counter}</h3>

    </>
  )
}

export default App
