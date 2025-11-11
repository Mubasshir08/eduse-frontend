import React from 'react'

const CourseCard = ({img, title, author}) => {
  return (
    <div className='w-3/4'>
        <img src={img} alt="" />
        <div className='py-4'>
            <h1 className='text-gray-800'> {title} </h1>
            <p className='text-gray-500'> {author} </p>
            {/* rating */}
            <div className='flex items-center gap-1'>
                <img className="h-4" src="src\assets\images\Star18.png" alt="" />
                <p>4.5</p>
                <p>(1.2k)</p>
            </div>
            {/* price */}
            <div className='flex items-center gap-2'>
                <p className='text-gray-800 font-semibold'>BDT 1,500</p>
                <p className='text-gray-500 line-through'>BDT 2,500</p>
            </div>
        </div>
    </div>
  )
}

export default CourseCard