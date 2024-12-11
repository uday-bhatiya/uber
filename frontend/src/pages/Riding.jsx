import React from 'react';
import { FaLocationCrosshairs, FaLocationDot, FaWallet } from 'react-icons/fa6';

const Riding = () => {
    return (
        <div className='w-screen h-screen py-4 px-2 relative bg-black'>

            <div className='w-full h-full flex items-center justify-center gap-5 bg-white'>

                <div className='w-[45%] lg:w-[30%] h-full hidden md:flex bg-red-300'>
                    {/* for later */}

                    <div className='min-h-min px-6 py-8 relative hidden md:block border-b-4'>

                        <h4 className='text-2xl font-semibold'>Find a trip</h4>

                        <form className='relative py-3'>
                            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-black rounded-full"></div>
                            <input
                                onClick={() => {
                                    setPanelOpen(true)
                                }}
                                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                                type="text"
                                placeholder='Add a pick-up location'
                            />
                            <input
                                onClick={() => {
                                    setPanelOpen(true)
                                }}
                                className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                                type="text"
                                placeholder='Enter your destination' />
                        </form>
                    </div>
                </div>

                <div className='w-full md:w-[60%] lg:w-[65] h-full flex flex-col justify-center gap-2 relative overflow-hidden'>

                    <div className='w-full h-1/3 bg-black'>
                        <img
                            className='w-full h-full object-cover'
                            src="assests/map.png" alt="" />
                    </div>

                    <div className='w-full h-auto'>
                        <div className='flex flex-col justify-between items-center'>

                            <div className='w-[80%] md:w-[50%] bg-gray-200 rounded-lg py-2 px-4 my-2 flex items-center justify-between'>
                                <img className='h-12' src="assests/map.png" alt="" />
                                <div className='text-right'>
                                    <h2 className='text-lg font-medium capitalize'>FirstName</h2>
                                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>LastName</h4>
                                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                                    <h1 className='text-lg font-semibold'> ride </h1>
                                </div>
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

                        <div className='w-full flex items-center justify-center'>
                        <button
                            className='w-[80%] mt-5 my-auto bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Riding