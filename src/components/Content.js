import React from 'react';
import lock from './lock.png';
import last from './last.png';
import { FaRegRectangleList, FaAngleLeft, FaAngleRight, FaLock, FaEllipsisVertical, FaLightbulb, FaRegMessage } from "react-icons/fa6";


const Content = () => {
  return (
    <div className="p-4 flex-grow overflow-x-hidden box-content">
      <div className='text-gray-500 flex gap-5 items-center text-xs'>
        <FaRegRectangleList />
        <FaAngleLeft />
        <FaAngleRight />
        <div className='flex justify-center items-center gap-2'><FaLock />My private channel / 👋 Getting started </div>
        <div className="absolute inset-x-0 flex justify-end p-4">
          <div className="flex items-center space-x-5">
            <div>Share</div>
            <div><FaRegMessage /></div>
            <div className='text-sm mb-1'>⭐</div>
            <div className='text-sm'><FaEllipsisVertical /></div>
          </div>
        </div>
      </div>
      <div className='m-6 ml-40 '>
        <div className='font-bold text-4xl justify-center items-center '>
          Getting Started
        </div>
        <div className='bg-gray-100 mt-4 w-3/4 h-48 '>
          <div className='flex m-5 gap-1'>
            <div>
              <img src={lock} alt='lock' className='h-4 w-12 items-center mt-4  '></img>
            </div>
            <div>
              <p className='text-[16px] mt-3'>
                This doc is in your <span className='font-bold'>private channel</span>, where you can store your private work. You can share
                docs one by one from here, but to properly organize your team's knowledge base, use
                <span className='font-bold'> workspace channels</span>.
              </p>
              <br></br>
              <p className='text-[16px] mt-4'>
                You can make channels <span className='font-bold'>public</span> to make all docs visible to everyone on the team, or <span className='font-bold'>private </span>
                if you want the channel's docs to only be visible by a selection of teammates.

              </p>
            </div>
          </div>
        </div>
        <div className='text-3xl font-semibold w-3/4 mt-16'>
          Collaborate with your team with these three features
        </div>
        <div className='mt-6 text-lg font-semibold mb-4'>
          ✍Docs
        </div>
        <div className='bg-[#C9DAF8] w-3/4 h-64 flex items-center'>
          <div className=''>
            <div className='bg-[#78A4F4] rounded-xl text-xs w-10 flex item-center justify-center mb-15 ml-10 mb-5 text-white'>Docs</div>
            <p className='mb-5 ml-10 text-xl'>
              Create docs to collaborate with your team.
              <p> Type<span className='bg-[#A5C3F1] font-bold'> / </span>
                to discover Slite's editor tools and bring your docs to life.</p>
            </p>
          </div>
          <div>
            <img src={last} alt='last' className='h-64 w-[34rem]' />
          </div>
        </div>
        <div className='flex items-center mt-4'>
          <div className='relative'>
            <FaLightbulb className='absolute top-2 left-3 text-yellow-500' />
            <input
              type="text"
              placeholder="Give it a go by typing / below"
              className="w-[756px] border rounded-md pl-10 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
