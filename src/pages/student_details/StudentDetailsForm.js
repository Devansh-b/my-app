import React, { useState } from 'react';

function StudentDetailsForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        rollNo: '',
        branch: '',
        year: '',
        cgpa: '',
        email: '',
        phone: '',
        linkedin: '',
        skills: ''
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
        // Submit form data logic here
        console.log("Form Data Submitted:", formData);
    };

    return (
    
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg pt-8 ml-10 mr-32 mb-8 justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4">Student Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4 ">
                    <div>
                        <label className="block text-sm font-medium mb-1 ">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Roll No.</label>
                        <input
                            type="text"
                            name="rollNo"
                            value={formData.rollNo}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Branch</label>
                        <input
                            type="text"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Year</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
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
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">LinkedIn</label>
                    <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Skills</label>
                    <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Save
                </button>
            </form>
        </div>
    
    );
}

export default StudentDetailsForm;
