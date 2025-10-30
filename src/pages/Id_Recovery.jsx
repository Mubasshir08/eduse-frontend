import React from 'react'
import { CiLock } from 'react-icons/ci'

const Id_Recovery = () => {
  return (
    <form className='w-[454px] rounded-2xl shadow-md mx-auto translate-y-20'>   
        {/* card-header section */}
        <div className='text-center px-5 pt-5'>
          <div className='rounded-full border-[1px] border-black mx-auto w-[50px] h-[50px] flex justify-center items-center my-5'>
            <CiLock size={25}/>
          </div>
            <h2 className='text-lg'>Trouble logging in?</h2>  
            <p className='text-[#666666] py-5'>Enter your email, phone number and we’ll <br />send you a link to get back into your account</p>
        </div>  
        {/* input section */}
        <div className='my-10 px-5'>
            <input type="text" name="" id="" placeholder='Email, Phone Number' className='w-full border-2 border-gray-400 my-3 py-3 px-2 rounded-md'/>
            <button className='bg-[#015AD8] text-white w-full py-3 rounded-md mt-4'>Send login link</button>
        </div>
        {/* card-footer section */}
        <div className='bg-[#FAFAFA] h-full mt-24 py-4 text-center rounded-b-2xl'>
          <h3>Back to login</h3>
        </div>
    </form>
  )
}

export default Id_Recovery