import React from 'react';
import { TiMessage } from "react-icons/ti";
import { CiSaveDown2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

function Post({ title, details, registrationLink, year, cgpa, branchesEligible, author }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-lg my-4">
      {/* Author Section */}
      <div className="flex items-center mb-4">
        <img
          src={author.profilePic}
          alt={author.name}
          className="w-8 h-8 rounded-full object-cover mr-2"
        />
        <span className="font-semibold text-gray-800">{author.name}</span>
      </div>

      {/* Post Title */}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

      {/* Post Details */}
      <p className="mt-2 text-gray-600">{details}</p>

      {/* Registration Link */}
      {registrationLink && (
        <a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 hover:underline"
        >
          Register Here
        </a>
      )}

      {/* Post Information */}
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <div>
          <span className="font-bold">Year: </span>{year.join(", ")}
        </div>
        <div>
          <span className="font-bold">CGPA: <span className='font-normal'>above</span> </span>{cgpa}
        </div>
        <div>
          <span className="font-bold">Branch: </span>{branchesEligible.join(", ")}
        </div>
      </div>

      {/* Icons at the bottom */}
      <div className="mt-4 flex justify-between">
        <div className="flex items-center">
          <SlCalender className="text-xl" />
          <span className="pl-2">Add To Cal</span>
        </div>
        <div className="flex items-center">
          <TiMessage className="text-xl" />
          <span className="pl-2">Query</span>
        </div>
        <div className="flex items-center">
          <CiSaveDown2 className="text-xl" />
          <span className="pl-2">Save</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
