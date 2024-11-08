import React from 'react'
import { Link } from 'react-router-dom'

const Startup = () => {
  return (
    <div className='flex gap-4 items-center justify-center'>
      <Link to="/adminsignup">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Admin
        </button>
      </Link>
      <Link to="/studentsignup">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Student
        </button>
      </Link>
    </div>
  )
}

export default Startup
