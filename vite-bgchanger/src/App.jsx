import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  const changeColor=(color)=>{
    setColor(color)

  }

  return (
    <>
    <div className='w-full h-screen duration-200 bg-black' style={{background:color}}>
      <div className='fixed flex flex-wrap bottom-10 bg-white inset-x-0 px-3 justify-center'>
        <button 
        onClick={()=>changeColor('red')}
        className='bg-white text-black rounded-full'>Red</button>
        <button 
        onClick={()=>changeColor('green')}
        className='bg-white text-black rounded-full'>Green</button>
         <button 
        onClick={()=>setColor('blue')}
        className='bg-white text-black rounded-full'>Blue</button>
      </div>

    </div>
    </>
  )
}

export default App
