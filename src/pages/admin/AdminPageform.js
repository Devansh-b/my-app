import React, { useState } from 'react';

function AdminPageform() {
  const [formData, setFormData] = useState({
    title: '',
    details: '',
    registrationLink: '',
    type: '',
    branch: '',
    year: '',
    cgpa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
  };

  return (
    
      <div className="w-full max-w-2xl bg-white p-6 shadow-md rounded-md flex flex-col items-center justify-center md:p-8 ml-28">
        <h2 className="text-2xl font-semibold text-center mb-4">Post</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Details</label>
            <textarea
              name="details"
              rows="4"
              value={formData.details}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Registration Link</label>
              <input
                type="text"
                name="registrationLink"
                value={formData.registrationLink}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              >
                <option value="">Select Type</option>
                <option value="Event">Event</option>
                <option value="Announcement">Announcement</option>
                <option value="Notice">Notice</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              >
                <option value="">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CGPA</label>
              <input
                type="text"
                name="cgpa"
                value={formData.cgpa}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 text-white bg-maroon-500 rounded hover:bg-maroon-600"
          >
            Post
          </button>
        </form>
      </div>
   
  );
}

export default AdminPageform;
