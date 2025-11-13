import React, { useEffect, useState } from 'react'
import Navbar from '../../shared/Navbar'
import Footer from '../../shared/Footer'
import CourseCard from '../../components/e_learning_components/CourseCard'
import FakeData from '../../assets/data/fakedata.json'
import { Link } from 'react-router-dom'

const E_learning = () => {
  const [courses, setCourses] = useState([])
  const [images, setImages] = useState({})

  useEffect(() => {
    setCourses(FakeData.products)

    // dynamically import all course images from assets
    const importedImages = import.meta.glob('../../assets/images/courseImages/*', { eager: true, query: '?url' })
    setImages(importedImages)
  }, [])

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-20 mt-10">
        {courses.map((course) => {
          // get the dynamic URL for the image
          const imgPath = '../../' + course.img
          const imgUrl = images[imgPath] || ''
          return <Link key={course.id} to={`/course-details/${course.id}`}> <CourseCard key={course.id} course={{ ...course, img: imgUrl }} /> </Link>
        })}
      </div>
      <Footer />
    </div>
  )
}

export default E_learning
