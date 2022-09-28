import React from 'react';
import Profile from '../Profile/Profile';

const TourActivities = ({activities}) => {
    let requierdTime = 0;
    for(const time of activities){
      requierdTime = requierdTime + time.time;
    }
  return (
    <div className=' sticky top-0'>
      <Profile />
      <div className='py-5'>
        <h2 className='text-2xl font-semibold'>Add A Break</h2>
      </div>
      <div className='break bg-slate-300 rounded-lg p-5 flex justify-between'>
        <div><button className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-xl'>01</span><small>hr</small></button></div>
        <div><button className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-xl'>02</span><small>hr</small></button></div>
        <div><button className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-xl'>03</span><small>hr</small></button></div>
        <div><button className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-xl'>04</span><small>hr</small></button></div>
      </div>
      <div className='py-5'>
        <h2 className='text-2xl font-semibold'>Visiting Details</h2>
      </div>
      <div className='flex justify-between bg-gray-300 p-5 rounded-lg'>
        <div className='font-semibold'>
          <p>Visiting Time</p>
        </div>
        <div className='text-gray-600'>
          <p>{requierdTime}hours</p>
        </div>
      </div>
      <div className='flex justify-between bg-gray-300 p-5 rounded-lg my-5'>
        <div className='font-semibold'>
          <p>Break Time</p>
        </div>
        <div className='text-gray-600'>
          <p>10 Hours</p>
        </div>
      </div>
      <div>
        <button className='w-full bg-red-400 py-2 rounded-lg font-semibold'>Activity Completed</button>
      </div>
    </div>
  );
};

export default TourActivities;