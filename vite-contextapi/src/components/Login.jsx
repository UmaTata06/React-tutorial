import React from 'react'
import { useState ,useContext} from 'react'
import Usercontext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser}=useContext(Usercontext)
    const submit=(e)=>{
        console.log(e);
        e.preventDefault()
        setUser({username,password})
        
    }
    return (
        <>
            <div>
                <h1>Login</h1>
                <input type='text'
                    placeholder='usernmae'
                    value={username}
                    onChange={(e) => {
                        setusername(e.target.value)
                    }}
                >
                </input>{' '}
                <input type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                ></input>
                <button
                onClick={submit}
                >Submit</button>
            </div>
        </>

    )
}

export default Login