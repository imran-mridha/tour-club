import React from 'react';
import profileImg from '../../images/iman.png'

const Header = () => {
  return (
    <div className=''>
      <div className="navbar bg-red-100 px-10">
        <div className="flex-1">
          <a href='/' className=" text-xl">daisyUI</a>
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