import React, { useEffect, useState } from 'react';
import { addToDatabase, getStoredCart } from '../../utilities/fakedb';
import Profile from '../Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TourActivities = ({ activities }) => {
  const [time, setTime] = useState(0)
  const [breaktime, setBreaktime] = useState([]);
  useEffect(() => {
    const getDataFromStorage = getStoredCart()
    setBreaktime(getDataFromStorage);
  }, [time])
  const handleBreakTime = (id) => {
    addToDatabase(id);
    setTime(id);
  }

  const handleDone = () => {
    toast('Helooooooooooooooooo');
  }
  let requierdTime = 0;
  for (const activity of activities) {
    requierdTime = requierdTime + activity.time;
  }
  return (
    <div className=' sticky top-0'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Profile />
      <div className='py-5'>
        <h2 className='text-2xl font-semibold'>Add A Break</h2>
      </div>
      <div className='break bg-slate-300 rounded-lg p-5 flex justify-between'>
        <div><button onClick={() => handleBreakTime(1)} className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-2xl'>01</span>hr</button></div>
        <div><button onClick={() => handleBreakTime(2)} className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-2xl'>02</span>hr</button></div>
        <div><button onClick={() => handleBreakTime(3)} className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-2xl'>03</span>hr</button></div>
        <div><button onClick={() => handleBreakTime(4)} className='bg-red-200 w-12 h-12 rounded-full'><span className='font-semibold text-2xl'>04</span>hr</button></div>
      </div>
      <div className='py-5'>
        <h2 className='text-2xl font-semibold'>Visiting Details</h2>
      </div>
      <div className='flex justify-between bg-slate-300 p-5 rounded-lg'>
        <div className='font-semibold'>
          <p>Visiting Time</p>
        </div>
        <div className='text-gray-600'>
          <p> <span className='font-bold'>{requierdTime}</span> hours</p>
        </div>
      </div>
      <div className='flex justify-between bg-slate-300 p-5 rounded-lg my-5'>
        <div className='font-semibold'>
          <p>Break Time</p>
        </div>
        <div className='text-gray-600'>
          <p><span className='font-bold'>{breaktime}</span> hours</p>
        </div>
      </div>
      <div>
        <button onClick={() => handleDone()} className='w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold uppercase text-white'>Activity Completed</button>
      </div>
    </div>
  );
};

export default TourActivities;