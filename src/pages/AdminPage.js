import React from 'react';
import LeftSec from './userpage/LeftSec';
import AdminPageform from './admin/AdminPageform';

const AdminPage = () => {
  return (
    <div className='flex pt-8 bg-[#f3f4f6] w-full h-[91.37%]'>
      <LeftSec name={<><span>Training And</span><br /><span>Placement Cell</span></>} />
      <AdminPageform />
    </div>
  );
};

export default AdminPage;
