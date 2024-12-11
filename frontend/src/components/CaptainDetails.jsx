import React from 'react';
import { FaLocationCrosshairs, FaLocationDot, FaWallet } from 'react-icons/fa6';
import { CiTimer } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";

const CaptainDetails = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
            <div className='w-full md:w-[50%] bg-gray-200 rounded-lg py-2 px-4 my-1 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='h-12 w-12 rounded-full' src="assests/map.png " alt="" />
                    <h5 className='text-base font-semibold -mt-1 -mb-1'>LastName</h5>
                </div>

                <div className='flex items-center flex-col'>
                    <h6 className='text-base font-semibold'>₹3000</h6>
                    <span className='text-sm'>Earned</span>
                </div>
            </div>

            <div className='w-full'>

                <div className='flex items-center justify-center gap-2 md:gap-4 p-3 border-b-2 bg-gray-200'>

                    <div className='px-3 py-2 flex flex-col'>
                        <div className='flex items-center flex-col justify-center gap-2'>
                            <CiTimer />
                            <p className='text-sm -mt-1 text-gray-600'>10.2</p>
                        </div>
                        <h3 className='text-base font-medium'>Hourse online</h3>
                    </div>

                    <div className='px-3 py-2 flex flex-col'>
                        <div className='flex items-center flex-col justify-center gap-2'>

                            <MdOutlineSpeed />
                            <p className='text-sm -mt-1 text-gray-600'>d</p>
                        </div>
                        <h3 className='text-base font-medium'>562/11-A</h3>
                    </div>

                    <div className='px-3 py-2 flex flex-col'>
                        <div className='flex items-center flex-col justify-center gap-2'>
                            <FaWallet />
                            <p className='text-sm -mt-1 text-gray-600'> Cash</p>
                        </div>
                        <h3 className='text-base font-medium'>₹3000</h3>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CaptainDetails