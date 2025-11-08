import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Profile = () => {
  const { user } = useOutletContext();
  return (
    <div className='p-3 text-[#666666]'>
      <h3 className='text-lg font-semibold tracking-wide mb-3'>My Profile</h3>
      <h5 className='pb-2'>Name : {user.name}</h5>
      <h5 className='pb-2'>Email : {user.email}</h5>
    </div>
  )
}

export default Profile