import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)
  let names='uma'
  return (
    <>
    <h1 className='bg-green-500 p-3 rounded-md text-3xl text-center'>Vite with Tailwindcss</h1>
    
    <Card name='one' Technology='Angular'/>
    <Card name='two'/>
    <Card name='three'/>
    <Card/>
    <Card name={names}></Card>
    </>
  
  ) 
}  

export default App
