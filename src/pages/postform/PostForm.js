import React from 'react';

function PostForm() {
  return (
   
      <div className="   bg-white shadow-lg rounded-md ml-10 h-fit overflow-y-hidden">
        <h2 className="text-center text-2xl font-semibold mb-4">Post</h2>
        <form className="space-y-4 pb-4 ">
          <div className='ml-4 mr-4'>
            <label className="block text-gray-700 text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 bg-[#f3f4f6] rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Title"
            />
          </div>

          <div className='ml-4 mr-4'>
            <label className="block text-gray-700 text-sm font-medium">Details</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded h-24 bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Details"
            ></textarea>
          </div>

          <div className='ml-4 mr-4'>
            <label className="block text-gray-700 text-sm font-medium">Registration Link</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Registration Link"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 ml-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">Type</label>
              <select className="w-full p-2 border border-gray-300 bg-[#f3f4f6] rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Type</option>
                
              </select>
            </div>

            <div className='mr-4'>
              <label className="block text-gray-700 text-sm font-medium">Branch</label>
              <select className="w-full p-2 border border-gray-300 bg-[#f3f4f6] rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Branch</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 ml-4">
            <div>
              <label className="block text-gray-700">Year</label>
              <select className="w-full p-2 border border-gray-300 bg-[#f3f4f6] rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Year</option>
                {/* Add options here */}
              </select>
            </div>

            <div className='mr-4'>
              <label className="block text-gray-700">CGPA</label>
              <select className="w-full p-2 border border-gray-300 bg-[#f3f4f6] rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>CGPA</option>
                {/* Add options here */}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="text-center ml-[45%] py-2 px-10 mt-4 bg-red-900 text-white rounded hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Post
          </button>
        </form>
      </div>
  
  );
}

export default PostForm;
