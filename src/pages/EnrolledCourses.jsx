import React, { useState } from 'react'

const EnrolledCourses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEnrolledCourses, setIsEnrolledCourses] = useState(true);
  const [isActiveCourses, setIsActiveCourses] = useState(false);
  const [isCompleteCourses, setIsCompleteCourses] = useState(false);
  return (
    <div className='text-[#666666]'>
      {/* Page Title */}
      <h3 className='text-lg font-semibold tracking-wide mb-3'>
        Enrolled Courses
      </h3>
      {/* Courses Tab */}
      <div className='flex gap-x-3 border-b-[1px] pb-3'>
        <button className= {`hover:text-[#015AD8] ${activeTab === 0 ? 'text-[#015AD8]' : ''}`} onClick={() => setActiveTab(0) && setIsEnrolledCourses(true)}>
          Enrolled Courses(1)
        </button>
        <button className= {`hover:text-[#015AD8] ${activeTab === 1 ? 'text-[#015AD8]' : ''}`} onClick={() => setActiveTab(1) && setIsActiveCourses(true)}>Active Courses(1)</button>
        <button className= {`hover:text-[#015AD8] ${activeTab === 2 ? 'text-[#015AD8]' : ''}`} onClick={() => setActiveTab(2) && setIsCompleteCourses(true)}>Complete Courses</button>
      </div>
      {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="No Data"
            className="w-24 h-24 mb-4 opacity-70"
          />
          <p>No Data Available in this Section</p>
        </div>
    </div>
  )
}

export default EnrolledCourses