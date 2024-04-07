import React from 'react';
import logo from './logo.png';
import { FaRegBell, FaSearch, FaLock, FaCaretRight,FaArchive  } from "react-icons/fa";
import { FaRegClock,FaRegMessage,FaCaretDown,FaRegRectangleList, FaUserPlus, FaCircleHalfStroke, FaDownload } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <div className="bg-gray-100 p-4 w-72 text-xs">
      <div className='flex gap-3 mb-3'>
        <img src={logo} alt='logo' className='h-5 my-0.5'></img>
        <div className='flex-grow flex items-center justify-between'>
          <div className='font-medium'>refero team</div>
          <div className='mr-3'>
            <FaRegBell />
          </div>
        </div>
      </div>

      <div className="mb-3 flex gap-4">
        <input
          type="text"
          placeholder="✋Ask your AI assistant"
          className="w-64 border rounded-md px-2 py-1"
        />

        <div className='p-3 border rounded-md'>
          <FaSearch />
        </div>
      </div>
      {/* Add other sidebar items here */}
      <div className='bg-gray-200 rounded-lg h-14 flex flex-col justify-center items-center gap-1 '>
        <div className='text-xs font-semibold mr-8'>Your team used 8/50 free docs</div>
        <div className='text-[10px] text-gray-400 mr-14'>Upgrade to create unlimited docs</div>
      </div>
      <div className='flex flex-col m-3 mt-5 text-xs'>
        <div className='mb-4 flex gap-4 items-center'>
          <FaRegClock /><div>Catch up</div>
        </div>
        <div className='mb-3 flex gap-4 items-center'>
          <FaRegMessage /><div className='text-xs '>Discussions</div>
        </div>
      </div>
      <div>
        <div className='m-3 font-medium text-sm mt-3'>
          Favorites
        </div>
        <div className='m-2 flex items-center gap-2'><div className='text-base'>👋</div><div className='text-xs'>Getting started</div></div>
      </div>
      <div>
        <div className='m-3 font-medium text-sm mt-5'>
          My channels
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex ml-2 text-sm gap-3 items-center'>
            <div className='flex items-center gap-3 text-gray-400'>
              <FaCaretDown />
              <div className='text-base'><FaLock /></div>
            </div>
            <div className='text-xs'>My private channel</div>
          </div>
          <div className='bg-[#E5E9F5] rounded-lg h-9 flex justify-center items-center w-52 ml-7'>
            <div className='text-sm mr-8 flex justify-center items-center gap-1'><div className='text-xl'>👋</div><div className='text-xs'>Getting started</div></div>
          </div>
          <div className='flex ml-2 text-sm gap-3 items-center'>
            <div className='flex items-center gap-3 text-gray-400'>
              <FaCaretRight />
              <div className='text-base'><FaRegRectangleList /></div>
            </div>
            <div className='text-xs'>Engineering</div>
          </div>

          <div className='flex ml-2 text-sm gap-3 items-center'>
            <div className='flex items-center gap-3 text-gray-400'>
              <FaCaretRight />
              <div className='text-base'><FaRegRectangleList /></div>
            </div>
            <div className='text-xs'>Product</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col m-2 gap-4 mt-24'>
        <div className='flex items-center text-gray-500 font-medium gap-3 text-base'>
          <FaUserPlus/><div className='text-xs font-normal text-gray-900'>Add People</div>
        </div>
        <div className='flex items-center text-gray-500 font-medium gap-3 text-base'>
          <FaCircleHalfStroke/><div className='text-xs font-normal text-gray-900'>Template</div>
        </div>
        <div className='flex items-center text-gray-500 font-medium gap-3 text-base'>
          <FaDownload/><div className='text-xs font-normal text-gray-900'>Shared with me</div>
        </div>
        <div className='flex items-center text-gray-500 font-medium gap-3 text-base'>
          <FaArchive/><div className='text-xs font-normal text-gray-900'>Archive</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
