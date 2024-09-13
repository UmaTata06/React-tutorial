import React from 'react'
import { useState } from 'react'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
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
            </div>
        </>

    )
}

export default Login