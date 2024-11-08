import React from 'react';
import { iconlist } from '../Userpage.js';

const LeftSec = ({ name, id, year }) => {
  return (
    <div className='w-fit h-fit ml-5'>
      <div className='bg-white p-4 rounded-2xl border-2'>
        <div className='bg-red-900'>
          <img
            className='w-64 h-24 border-gray-300 rounded-2xl border-2'
            src='https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png'
            alt='userimg'
          />
        </div>

        <hr className="border-t-2 border-gray-300 my-4" />

        <div className='text-center'>
          <h2 className='text-black font-bold text-2xl break-words'>{name}</h2>
          <p>{id}</p>
          <p>{year}</p>
        </div>
      </div>

      <div className='mt-8 bg-white p-4 rounded-2xl border-2'>
        {iconlist.map((icon) => (
          <div key={icon.index} className="flex items-center my-7">
            {icon.image}
            <span className="ml-7">{icon.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSec;
