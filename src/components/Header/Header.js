import React from 'react';
import profileImg from '../../images/iman.png';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className=''>
      <div className="navbar bg-red-100 px-10">
        <div className="flex-1 items-center">
          <a href='/' className=" text-xl"><img className='w-20 h-12' src={logo} alt="" /> </a>
          <h1 className='text-2xl font-bold uppercase text-red-600'>Club BD</h1>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profileImg} alt='' />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a href='/' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a href='/'>Settings</a></li>
              <li><a href='/'>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;