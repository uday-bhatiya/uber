import React from 'react';
import { FaLocationCrosshairs, FaLocationDot, FaWallet } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const CompleteRide = (props) => {

    const navigate = useNavigate();

  return (
    <div className='w-full h-full mb-2'>
    <h3 className='text-2xl font-semibold mb-2'>Finish this Ride!</h3>

    
    <h4 onClick={() => {
        props.setCompleteRidePanel(false)
    }} >closeBtn</h4>

    <div className='w-full md:w-[50%] border-2 border-yellow-400 rounded-lg py-2 px-4 my-1 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
            <img className='h-12 w-12 rounded-full' src="assests/map.png " alt="" />
            <h5 className='text-base font-semibold -mt-1 -mb-1'>LastName</h5>
        </div>

        <div className='flex items-center flex-col'>
            <h6 className='text-base font-semibold'>2.2Km</h6>
        </div>
    </div>

    <div className='flex flex-col justify-between items-center '>

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
            navigate('/captain-home')
        }}
        className='w-full mt-2 bg-green-600 text-white font-semibold p-2 rounded-lg'>Finish Ride</button>

    </div>
</div>
  )
}

export default CompleteRide