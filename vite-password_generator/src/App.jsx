import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [isNumberAllowed, setisNumberAllowed] = useState(false)
  const [isSymbolAllowed, setisSymbolAllowed] = useState(false)
  const [password, setPassword] = useState(' ')

  const generatePassword=(useCallback(
    () => {
      let pass=''
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
      if(isNumberAllowed){
         str=str+"0123456789"
      }
      if(isSymbolAllowed){
         str=str+"!@#$%^&*()_+"
      }

      for(let i=1;i<length;i++){
        const char=Math.floor(Math.random() * str.length+1)
        pass=pass+str.charAt(char)
      }
      setPassword(pass)
        
    },
    [length,isSymbolAllowed,isNumberAllowed],
  )
  )

  useEffect(() => {
    generatePassword()
  }, [length,isSymbolAllowed,isNumberAllowed])
  
const valueref=useRef(null)
const prev=useRef('');
useEffect(()=>{
  prev.current=valueref.current.value
  
},[length,isSymbolAllowed,isNumberAllowed])

  const copyValue=()=>{
    window.navigator.clipboard.writeText(password)
    console.log(valueref);
    valueref.current.select()
  }



  return (
    <>
      <div>
        <h5 className='text-center'>Create Password</h5>
        <input
          type='text'
          placeholder='password'
          value={password}
          readOnly
          ref={valueref}
        ></input>
        <button
        onClick={copyValue}
          className='text-blue-50'
        >Copy</button>
      </div>
      <div>
        <div>
          <input
            type='range'
            min={8}
            max={100}
            value={length}
            onChange={(e) => { setLength(e.target.value) }}
          ></input>
          <label>Length:{length}</label>
        </div>
        <div>
        <input type='checkbox'
          defaultChecked={isNumberAllowed}
          onChange={() => {
            setisNumberAllowed((prev) => !prev)
          }}
        >
        </input>
        <label>Number allowed</label>
        </div>
        <div>
        <input type='checkbox'
          defaultChecked={isSymbolAllowed}
          onChange={() => {
            setisSymbolAllowed((prev) => !prev)
          }}
        >
        </input>
        <label>Symbol allowed</label>
        </div>

<h4>Random number:</h4>
<h5>{typeof prev.current!=='undefined' &&
  prev.current}</h5>
      </div>


    </>
  )
}

export default App

