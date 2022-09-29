import React from 'react';
import profileImg from '../../images/iman.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  return (
    <div className=''>
      <div className='flex items-center mb-10'>
        <div className='mr-2'>
          <img className='w-14 h-14 rounded-full' src={profileImg} alt="" />
        </div>
        <div>
          <p className='text-2xl font-semibold'>Imran Mridha</p>
          <p><FontAwesomeIcon icon = {faLocationPin}/> Dhaka Bangladesh</p>
        </div>
      </div>
      <div className='profile bg-red-300 rounded-lg p-5 flex justify-evenly lg:justify-between'>
        <div>
          <p><span className='text-2xl font-semibold'>05</span><small>tour</small></p>
          <p>Country</p>
        </div>
        <div>
          <p><span className='text-2xl font-semibold'>55</span><small>Place</small></p>
          <p>Visited</p>
        </div>
        <div>
          <p><span className='text-2xl font-semibold'>60</span><small>days</small></p>
          <p>Durotion</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;