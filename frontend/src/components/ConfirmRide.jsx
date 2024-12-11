import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";

const ConfirmRide = (props) => {
  return (
    <div className='w-full h-full mb-2'>
      <h3 className='text-2xl font-semibold mb-2'>Confirm Ride</h3>

      <h4 onClick={() => {
        props.setConfirmRidePanel(false)
      }} >closeBtn</h4>

      <div className='flex flex-col justify-between items-center'>

        <div className='w-[70%] md:w-[50%] bg-gray-200 rounded-full my-2'>
          <img className='w-full' src="assests/uber-car.webp" alt="uber-car" />
        </div>

        <div className='w-full'>

          <div className='flex items-center gap-5 p-3 border-b-2'>

            <div>
              <div className='flex items-center justify-center gap-2'>
                <FaLocationDot />
                <p className='text-sm -mt-1 text-gray-600'>Pickup</p>
              </div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>

            <div>
              <div className='flex items-center justify-center gap-2'>
                <FaLocationCrosshairs />
                <p className='text-sm -mt-1 text-gray-600'>Destination</p>
              </div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>

            <div>
              <div className='flex items-center justify-center gap-2'>
                <FaWallet />
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
              <h3 className='text-lg font-medium'>₹3000</h3>
            </div>
          </div>

        </div>

        <button
        onClick={() => {
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
        }}
         className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>

      </div>
    </div>
  )
}

export default ConfirmRide