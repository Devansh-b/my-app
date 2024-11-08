import React from 'react'
import LeftSec from './userpage/LeftSec'
import StudentDetailsForm from './student_details/StudentDetailsForm'

const Student_Details_Page = () => {
  return (
    <div className='flex pt-8 bg-green-50 w-full h-[91.37%]'> 
      <LeftSec/>
      <StudentDetailsForm/>
    </div>
  )
}

export default Student_Details_Page
