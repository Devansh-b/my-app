import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Cookies from 'js-cookie';  // Import js-cookie to work with cookies

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
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook for redirection

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Retrieve the token from cookies using the correct cookie name
        const token = Cookies.get('jwt-thaparnexus'); // Get the token from the cookie

        // Check if the token is available
        if (!token) {
            setError('No token provided. Please log in first.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.put(
                'http://localhost:5000/api/v1/auth/student/complete-profile', 
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Add the token to the request header
                    },
                }
            );
            console.log('Student Details Saved:', response.data);
            setSuccess('Profile completed successfully!');
            setError('');
            setFormData({
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

            // Redirect to another page (e.g., Userpage)
            navigate('/userpage');
        } catch (error) {
            console.error('Error saving student details:', error);
            setError(error.response?.data?.message || 'Failed to save details. Please try again.');
            setSuccess('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg pt-8 ml-10 mr-32 mb-8 justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4">Student Details</h2>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
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

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">LinkedIn</label>
                        <input
                            type="text"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Skills</label>
                        <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-[#f3f4f6]"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {loading ? 'Saving Details...' : 'Save Details'}
                </button>
            </form>
        </div>
    );
}

export default StudentDetailsForm;
