import React from 'react';
import { FaLocationCrosshairs, FaLocationDot, FaWallet } from 'react-icons/fa6';

const LookingForDriver = (props) => {
    return (
        <div className='w-full h-full mb-2'>
            <h3 className='text-2xl font-semibold mb-2'>Looking for driver...</h3>

            <h4 onClick={() => {
                props.setVehicleFound(false)
                props.setWaitingForDriver(true)
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

            </div>
        </div>
    )
}

export default LookingForDriver