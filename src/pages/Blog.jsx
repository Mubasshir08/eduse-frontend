import React from 'react'
import Cardvido from "../assets/video/v1.mp4"
import Cardvidtwo from "../assets/video/v2.mp4"
import Cardvidthre from "../assets/video/v3.mp4"
import Cardvidfo from "../assets/video/v4.mp4"




const Blog = () => {
  return (
    <section  className='font-inter'>
     
      <div className=' align-middle bg-blue-700 h-12 text-white flex items-center justify-center my-5'>
          <h1 className='text-4xl font-bold text-center my-10'>
            Eduse Blog
          </h1>
        </div>
      <div className='px-20 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 gap-10 mb-10'>

         {/* card-1 start */}
        <div class="card bg-base-100 w-96 shadow-md  rounded-b-md">
        <figure>
          {/* video */}
          <video  controls src={Cardvido} type="video/mp4" className='rounded-t-md'/>
    
          
      </figure>
     <div className='p-2'>
       <div div class="card-body">
        <h2 class=" font-bold text-xl">Why E-Learning Is the  Future of Education</h2>
         <a href="#">
    <p className=' text-blue-500 hover:text-blue-600  '>e-learning-future-of-education</p>
    </a>
        <p className='mb-2'>Traditional classrooms are evolving. With the rise of digital platforms, e-learning is no longer just an option—it’s the future..... 
        <a href="#">
    <span className='underline underline-offset-1 text-blue-500 hover:text-blue-600  '> Read More</span>
    </a>
    </p>
  </div>
     </div>
</div>
      {/* card-1 end */}

      {/* card-2 Start */}
      <div class="card bg-base-100 w-96 shadow-md rounded-b-md">
        <figure>
          {/* video */}
          <video  controls src={Cardvidtwo} type="video/mp4" className='rounded-t-md'/>
      </figure>
     <div className='p-2'>
       <div div class="card-body">
        <h2 class=" font-bold text-xl">How Student-to-Student E-Commerce Builds Real Business Skills</h2>
         <a href="#">
    <p className=' text-blue-500 hover:text-blue-600  '>student-ecommerce-real-business-skills</p>
    </a>
        <p className='mb-2'>Forget theory—Eduse lets students dive into real-world entrepreneurship by buying and selling within a secure digital marketplace built just for them...... 
        <a href="#">
    <span className='underline underline-offset-1 text-blue-500 hover:text-blue-600  '> Read More</span>
    </a>
    </p>
  </div>
     </div>
</div>
    {/* 2nd card end */}

    {/* 3rd card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md">
        <figure>
          {/* video */}
          <video  controls src={Cardvidthre} type="video/mp4" className='rounded-t-md'/>
      </figure>
     <div className='p-2'>
       <div div class="card-body">
        <h2 class=" font-bold text-xl">Top 5 In-Demand Skills You Can Learn Online with Eduse</h2>
         <a href="#">
    <p className=' text-blue-500 hover:text-blue-600  '>e-learning-future-of-education</p>
    </a>
        <p className='mb-2'>Want to stay ahead in today’s job market? These five skills
are in demand, and you can master them all through 
Eduse’s certified courses...... 
        <a href="#">
    <span className='underline underline-offset-1 text-blue-500 hover:text-blue-600  '> Read More</span>
    </a>
    </p>
  </div>
     </div>
</div>

    {/* 3rd card end */}

    {/* 4th card start */}

          <div class="card bg-base-100 w-96 shadow-md rounded-b-md ">
        <figure>
          {/* video */}
          <video  controls src={Cardvidfo} type="video/mp4" className='rounded-t-md'/>
      </figure>
     <div className='p-2'>
       <div div class="card-body">
        <h2 class=" font-bold text-xl">Top 5 In-Demand Skills You Can Learn Online with Eduse</h2>
         <a href="#">
    <p className=' text-blue-500 hover:text-blue-600  '>e-learning-future-of-education</p>
    </a>
        <p className='mb-2'>Want to stay ahead in today’s job market? These five skills
are in demand, and you can master them all through 
Eduse’s certified courses...... 
        <a href="#">
    <span className='underline underline-offset-1 text-blue-500 hover:text-blue-600  '> Read More</span>
    </a>
    </p>
  </div>
     </div>
</div>

    {/* 4th card end */}

      
      </div>

    </section>
  )
}

export default Blog
