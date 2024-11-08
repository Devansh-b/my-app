import React, { useState } from 'react';
import axios from 'axios';

const Student_Signup_form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/auth/student/signup', {
        name,
        email,
        password,
      });

      // Log the response from the backend
      console.log('Response:', response.data);

      setSuccess('Signup successful!');
      setError('');
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      // Log the error if the request fails
      console.error('Error during signup:', error);
      setError(error.response?.data?.message || 'Signup failed. Please try again.');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="items-center inline-block ml-20 w-fit">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-50 p-6 rounded  shadow-md lg:w-96 md:w-64 lg:h-[410px] md:h-[350px]"
      >
        <h2 className="text-2xl lg:mb-4 text-center">Student Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <div className="lg:mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-transparent"
            required
          />
        </div>

        <div className="lg:mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-transparent"
            required
          />
        </div>

        <div className="lg:mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {/* <p className="lg:mt-4 text-center">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p> */}
      </form>
    </div>
  );
};

export default Student_Signup_form;
