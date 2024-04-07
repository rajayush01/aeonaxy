import React from 'react';
import { FaXmark } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";


const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-2 flex justify-between items-center">
      <div className='text-center flex-grow ml-14 font-light text-sm'>Enable browser notifications to avoid missing out on important activity</div>
      <div className='flex gap-3'>
      <button className="bg-blue-600 text-white py-[5px] px-3 rounded-md flex gap-1 text-xs justify-between items-center"><div className='mt-0'><FaRegBell/></div>Enable notifications</button>
      <div className='text-xl mt-1 '>
        <FaXmark/>
      </div>
      </div>
    </div>
  );
};

export default Header;
