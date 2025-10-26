import React, { useState } from 'react'

const EnrolledCourses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEnrolledCourses, setIsEnrolledCourses] = useState(true);
  const [isActiveCourses, setIsActiveCourses] = useState(false);
  const [isCompleteCourses, setIsCompleteCourses] = useState(false);
  return (
    <div className='text-[#666666]'>
      <h3 className='text-lg font-semibold tracking-wide mb-3'>
        Enrolled Courses
      </h3>
      <div className='flex gap-x-3 border-b-[1px] pb-3'>
        <button className= {`hover:text-[#015AD8] ${activeTab === 0 ? 'text-[#015AD8]' : ''}`} onClick={() => setActiveTab(0) && setIsEnrolledCourses(true)}>
          Enrolled Courses(1)
        </button>
        <button className= {`hover:text-[#015AD8] ${activeTab === 1 ? 'text-[#015AD8]' : ''}`} onClick={() => setActiveTab(1) && setIsActiveCourses(true)}>Active Courses(1)</button>
        <button className= {`hover:text-[#015AD8] ${activeTab === 2 ? 'text-[#015AD8]' : ''}`} onClick={() => setActiveTab(2) && setIsCompleteCourses(true)}>Complete Courses</button>
      </div>
    </div>
  )
}

export default EnrolledCourses