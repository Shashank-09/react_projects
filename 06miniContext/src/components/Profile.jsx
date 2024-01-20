import React from 'react'
import UseContext from '../context/UserContext'
import { useContext } from 'react'

const Profile = () => {
  const {user} = useContext(UseContext)

   if(!user) return <div>please login</div>

   return <div>welcome : {user.username}</div>
}

export default Profile