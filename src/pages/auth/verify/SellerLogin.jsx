import React from 'react'

const SellerLogin = () => {
  return (
    <form action="" className='w-1/2 rounded-2xl shadow-md mx-auto py-10 translate-y-20 text-center'>
        <h3 className='text-2xl font-bold text-[#015AD8]'>SELLER LOGIN</h3>
        <input type="email" name="" id="" placeholder='Email' className='w-2/3 border-2 border-gray-400 my-3 py-3 px-2 rounded-md'/>
        <input type="text" name="" id="" placeholder='verification code' className='w-2/3 border-2 border-gray-400 my-3 py-3 px-2 rounded-md'/>
        <button className='bg-[#015AD8] text-white w-2/3 py-3 rounded-md mt-4'>Login</button>
    </form>
  )
}

export default SellerLogin