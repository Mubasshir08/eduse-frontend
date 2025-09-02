import React from 'react'
import Cardo from './media/image1.png'
import Play from './media/play icon.png'

const Blog = () => {
  return (
    <section  className='font-inter'>
     
      <div className=' align-middle bg-blue-700 h-12 text-white flex items-center justify-center my-5'>
          <h1 className='text-4xl font-bold text-center my-10'>
            Eduse Blog
          </h1>
        </div>
      <div className='px-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10'>

         {/* card-1 start */}
        <div class="card bg-base-100 w-96 shadow-md ">
        <figure>
          <img src={Play}alt="play button" className='absolute  justify-self-auto h-15 mx-40 my-26  '/>
          <img src={Cardo}alt="cource 1"/>
      </figure>
     <div className='p-2'>
       <div div class="card-body">
        <h2 class=" font-bold text-xl">Why E-Learning Is the  Future of Education</h2>
         <a href="#">
    <p className=' text-blue-500 hover:text-blue-600  '>e-learning-future-of-education</p>
    </a>
        <p className='mb-2'>Traditional classrooms are evolving. With the rise of digital platforms, e-learning is no longer just an option—it’s the future..... 
        <a href="#">
    <span className='underline underline-offset-1 text-blue-500 hover:text-blue-600  '>Read More</span>
    </a>
    </p>
  </div>
     </div>
</div>
      {/* card-1 end */}
      {/* card-2 Start */}
      <div class="card bg-base-100 w-96 shadow-md ">
        <figure>
          <img src={Cardo}alt="Shoes"/>
      </figure>
     <div className='p-2'>
       <div div class="card-body">
        <h2 class=" font-bold text-xl">Why E-Learning Is the  Future of Education</h2>
         <a href="#">
    <p className=' text-blue-500 hover:text-blue-600  '>e-learning-future-of-education</p>
    </a>
        <p className='mb-2'>Traditional classrooms are evolving. With the rise of digital platforms, e-learning is no longer just an option—it’s the future..... 
        <a href="#">
    <span className='underline underline-offset-1 text-blue-500 hover:text-blue-600  '>Read More</span>
    </a>
    </p>
  </div>
     </div>
</div>


      
      </div>

    </section>
  )
}

export default Blog
