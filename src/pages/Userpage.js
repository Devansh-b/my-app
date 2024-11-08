import React, { useState } from 'react';
import { MdHome } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { CiSaveDown2 } from "react-icons/ci";
import SearchBar from './userpage/SearchBar';
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
        {/* Example dates; replace with actual calendar logic if needed */}
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

  const branches = ["CS", "COE", "ENC", "ME", "ECE"];
  const years = ["1", "2", "3", "4"];
  const cgpas = ["6", "7", "8", "9"];
  const types = ["Internship", "Full-time"];

  return (
    <div className="flex flex-col lg:flex-row pt-8 bg-[#f3f4f6] w-full min-h-screen">
      <LeftSec />
      <div className="lg:ml-14 w-full lg:w-2/3 px-4">
        <SearchBar />
        <div className="flex  gap-14 justify-center lg:justify-start ">
          <Dropdown label="Branch" options={branches} onChange={setBranch} />
          <Dropdown label="Year" options={years} onChange={setYear} />
          <Dropdown label="CGPA" options={cgpas} onChange={setCgpa} />
          <Dropdown label="Type" options={types} onChange={setType} />
        </div>
        <div className="mt-6 rounded-md overflow-hidden shadow-lg">
          <h3 className="text-center bg-red-900 text-white p-2">Heading</h3>
          <div className="bg-white p-4">
            <Post />
            <hr className="border-t-2 border-gray-300 my-4" />
            <div className="flex flex-wrap justify-around">
              {selectedIcons.map((icon) => (
                <div key={icon.index} className="flex items-center my-2">
                  {icon.image}
                  <span className="pl-2">{icon.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0">
        <Calendar />
        <EventLegend />
      </div>
    </div>
  );
}

export default Userpage;
