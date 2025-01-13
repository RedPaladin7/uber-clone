import React from 'react';
import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className='right-2 top-2 b fixed h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className='text-lg font-medium ri-home-5-line'></i>
      </Link>
      <div className="h-1/2">
        <img src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" />
      </div>
      <div className="h-1/2">
        <div className="flex items-center justify-between">
          <img
            className="h-12 p-4"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Sarthak</h2>
            <h4 className="text-xl font-semibold -mt-1 -md-1">MP04 AB 1234</h4>
            <p className="font-sm text-gray0699">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex gap-4 justify-between flex-col items-center"></div>
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs 193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Make a payment</button>
      </div>
    </div>
  );
};

export default Riding;
