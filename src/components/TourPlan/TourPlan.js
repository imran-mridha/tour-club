import React from 'react';

const TourPlan = ({tour,handleActivities}) => {
  const {name,img,time} = tour;

  return (
      <div className='p-4 shadow-lg rounded-lg bg-white'>
        <img className='rounded-lg mb-3' src={img} alt="" />
        <p className='text-2xl font-semibold'>{name}</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quas.</p>
        <p className='mb-3 font-semibold'>Time Required: {time} hrs</p>
        <button onClick={()=>handleActivities(tour)} className='bg-red-500 hover:bg-red-600 uppercase w-full mb-3 rounded-lg py-2 font-semibold text-white'>Add to list</button>
    </div>
  );
};

export default TourPlan;