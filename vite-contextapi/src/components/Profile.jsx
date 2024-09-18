import React, { useContext } from 'react'
import Usercontext from '../context/UserContext'

function Profile() {
  const {user}=useContext(Usercontext)
  return (
    <div>profile:{user.username}</div>
  )
}

export default Profile