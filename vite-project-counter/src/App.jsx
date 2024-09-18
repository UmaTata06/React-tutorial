import { useState } from 'react'
import './App.css'


function factorial(n){
  // let i=0
  // while(i< 10000000000) i++;
  if(n<=0){
    return -1;
  }
  if(n==0){
    return 1;
  }
  return n* factorial(n-1);
}
function App() {
  // let counter=12
  let [counter, setCounter] = useState(10)
  let Factorial=factorial(counter);

  const AddValue = () => {
    //nrml variable 

    // counter=counter+1;
    // console.log(counter);

    //state 
    setCounter(counter + 1);

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

      <p>
      {counter % 2 === 0 ? `${counter} is even` : `${counter} is odd`}</p>

      
      <button
        onClick={AddValue}
      >Add value</button>{' '}
      <button
        onClick={Remove}
      >Remove</button>
      <h3>Footer: {counter}</h3>
{''}
<h4>Factorial of {counter}: {Factorial}</h4>



    </>
  )
}

export default App
