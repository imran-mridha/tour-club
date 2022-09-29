import React from 'react';

const TourPlan = ({ tour, handleActivities }) => {
  const { name, img, time, description } = tour;

  return (
    <div className='p-4 shadow-lg rounded-lg bg-white w-full h-full flex flex-col justify-between'>
      <div>
        <img className='rounded-lg mb-3 w-11/12 mx-auto lg:w-full' src={img} alt="" />
      </div>
      <div>
        <p className='text-2xl font-semibold'>{name ? name : 'Not Found'}</p>
        <p className='my-3'>{description ? description.slice(0, 100) + '...' : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, ut?'}</p>
        <p className='mb-3 font-semibold'>Time Required: {time ? time : 'Not Found'} hrs</p>
      </div>
      <div>
        <button onClick={() => handleActivities(tour)} className='border-2 border-red-500 hover:bg-red-500 focus:bg-red-500  focus:text-white uppercase w-full mb-3 rounded-lg py-2 font-semibold hover:text-white'>Add to list</button>
      </div>
    </div>
  );
};

export default TourPlan;