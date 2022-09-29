import React, { useEffect, useState } from 'react';
import TourActivities from '../TourActivities/TourActivities';
import TourPlan from '../TourPlan/TourPlan';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('tours.json')
      .then(res => res.json())
      .then(data => setTours(data))
  }, [])

  const handleActivities = (selesctedTour)=>{
    let newTour = [...activities,selesctedTour]
    setActivities(newTour)
  }
  return (
    <div className=''>
      <h2 className='mx-10 pt-5 text-2xl font-semibold'>Select Today's <span className='font-bold text-red-600'>Tour Plan</span></h2>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <div className='col-span-5 md:col-span-4 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-10'>
          {tours.map(tour => <TourPlan key={tour.id} tour={tour} handleActivities ={handleActivities}/>)}
        </div>
        <div className='bg-white rounded-lg   px-5'>
          <TourActivities tours = {tours} setTours = {setTours} activities ={activities}/>
        </div>
      </div>
    </div>
  );
};

export default Tours;