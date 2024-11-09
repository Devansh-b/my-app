import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdHome } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiSaveDown2 } from "react-icons/ci";
import SearchBar from './userpage/SearchBar'; // SearchBar component for handling search input
import Dropdown from './userpage/Dropdown';
import Post from './userpage/Post';
import { TiMessage } from "react-icons/ti";
import LeftSec from './userpage/LeftSec';

export const iconlist = [
  { index: 0, image: <MdHome />, text: "Home" },
  { index: 1, image: <IoMdNotificationsOutline />, text: "Notification" },
  { index: 2, image: <SlCalender />, text: "Calendar" },
  { index: 3, image: <CiSaveDown2 />, text: "Saved" },
];

const selectedIcons = [
  { index: 2, image: <SlCalender />, text: "Add To Cal" },
  { index: 4, image: <TiMessage />, text: "Query" },
  { index: 3, image: <CiSaveDown2 />, text: "Saved" }
];

function Calendar() {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg mt-4">
      <h3 className="text-center bg-red-900 text-white p-2">September 2024</h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="p-1 bg-green-100 rounded-full">{i + 1}</div>
        ))}
      </div>
    </div>
  );
}

function EventLegend() {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg mt-4">
      <h3 className="text-center text-lg font-semibold mb-2">Event Legend</h3>
      <div className="flex items-center mb-2">
        <span className="w-3 h-3 bg-orange-400 rounded-full mr-2"></span>
        <span>Application Submission</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        <span>Pre-Placement Sessions</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
        <span>Coding Test</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
        <span>Hackathon</span>
      </div>
    </div>
  );
}

function Userpage() {
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [type, setType] = useState('');
  const [userData, setUserData] = useState({ name: '', rollno: '', year: '' });
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const branches = ["CS", "COE", "ENC", "ME", "ECE"];
  const years = ["1", "2", "3", "4"];
  const cgpas = ["6", "7", "8", "9"];
  const types = ["Internship", "Full-time"];

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/student/profile");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/student/posts"); // Endpoint for fetching posts
        setSearchResults(response.data); // Store posts in searchResults state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Function to handle search and update search results
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/student/posts?searchText=${query}`);
      setSearchResults(response.data); // Set fetched search results to state
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row pt-8 bg-[#f3f4f6] w-full min-h-screen justify-center">
      <LeftSec name={userData.name} rollno={userData.rollno} year={userData.year} />

      <div className="lg:ml-14 w-full lg:w-2/3 px-4">
        <SearchBar onSearch={handleSearch} /> {/* SearchBar component with onSearch prop */}
        <div className="flex gap-14 justify-center lg:justify-start">
          <Dropdown label="Branch" options={branches} onChange={setBranch} />
          <Dropdown label="Year" options={years} onChange={setYear} />
          <Dropdown label="CGPA" options={cgpas} onChange={setCgpa} />
          <Dropdown label="Type" options={types} onChange={setType} />
        </div>
        <div className="mt-6 rounded-md overflow-hidden shadow-lg">
          
          <div className="bg-white p-4 rounded-md shadow-lg">
            {searchResults.length ? (
              searchResults.map((post, index) => (
                <Post
                  key={index}
                  title={post.title}
                  details={post.details}
                  registrationLink={post.registrationLink}
                  year={post.year}
                  cgpa={post.cgpa}
                  branchesEligible={post.branchesEligible}
                  author={post.author} // Passing author data to Post component
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No posts available</p>
            )}
          </div>
        </div>

        <Calendar />
        <EventLegend />
      </div>
    </div>
  );
}

export default Userpage;
