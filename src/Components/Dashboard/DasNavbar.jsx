import React from 'react';
import { Link } from 'react-router-dom';
import useRole from '../Hooks/useRole';
import LoadingSpinner from '../Shared/LoadingSpinner';

const DasNavbar = () => {

  const {role,isLoading} = useRole();
  if(isLoading){
    <LoadingSpinner></LoadingSpinner>
  }
    return (
        <div className="navbar bg-lime-200">
        <div className="navbar-start">
            <div className='btn btn-warning'>
            <Link to="/"><button className="font-bold text-xl">PaidWork</button></Link>
            </div>
        </div>
        <div className="navbar-end flex lg:gap-6 gap-2 items-center font-bold">
         <div className='flex flex-col gap-2'>
          <p className='btn btn-sm'>Coin: {role?.coin}</p>
          <p className='btn btn-sm'>Role: {role?.role}</p>
         </div>
         <div className='flex flex-col gap-2'>
         <img className='h-10 w-10 rounded-full mx-auto' src={role?.photo} alt="" />
         <p className='btn'>{role?.name}</p>
         </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    );
};

export default DasNavbar;