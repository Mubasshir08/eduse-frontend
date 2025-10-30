import React from 'react'
import { CiUnread } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <form className='w-[454px] h-[626px] rounded-2xl shadow-md mx-auto translate-y-12'>
        <h3 className='text-[#015AD8] text-center text-2xl font-bold py-4'>WELCOME</h3>
        <section className='mt-5 px-9'>
           {/* email section */}
        <div>
          <h3>E-mail<span className='text-red-600'>*</span></h3>
          <input type="email" name="" id="" className='w-full border-2 border-gray-400 my-3 py-2 px-2 rounded-lg'/>
        </div>
        {/* password section */}
        <div className='mt-4'>
          <h3>
            Password<span className='text-red-600'>*</span>
          </h3>
            <div className='relative'>
              <input type="password" name="" id="" className='w-full border-2 border-gray-400 my-3 py-2 px-2 rounded-lg'/>
              <CiUnread className='absolute top-1/2 right-3 -translate-y-1/2' />
            </div>
          <h3 className='text-[#015AD8] mt-2 text-sm underline'>Forgot Password?</h3>  
        </div>
        <button className='bg-[#015AD8] text-white w-full py-3 rounded-md mt-4'>Login</button>
        <div className='w-1/2 mt-5 mx-auto flex items-center justify-between text-gray-400'>
          <hr className='w-[40%]'/>
          <h3>Or</h3>
          <hr className='w-[40%]'/>
        </div>
        <div className='relative'>
          <button className='border-2 border-[#999999] w-full py-3 rounded-md mt-4'>Continue with google</button>
          <FcGoogle size={25} className='absolute top-7 left-16'/>
        </div>
        <p className='text-center text-gray-400 mt-4'>New to Eduse? <span className='text-[#015AD8] cursor-pointer underline'>Sign Up</span></p>
        </section>
    </form>
  )
}

export default SignIn