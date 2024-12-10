import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';

const VehiclePanel = (props) => {
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-2'>Choose a Vehicle</h3>

            <h4 onClick={() => {
                props.setVehiclePanelOpen(false)
            }} >closeBtn</h4>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className='flex items-center justify-center px-3 py-6 border-2 active:border-black rounded-xl my-2 bg-[#eee]'>
                <div className='w-[20%]'>
                    <img className='w-full' src="assests/uber-car.webp" alt="uber-car" />
                </div>

                <div className='w-[70%]'>
                    <h4 className='flex items-center gap-2 font-medium text-base'>UberGo <span className='flex items-center gap-2'><FaUser />4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, compact ride</p>
                </div>
                <h2 className='text-xl'>₹193.3</h2>
            </div>

            <div className='flex items-center justify-center px-3 py-6 border-2 active:border-black rounded-xl my-2 bg-[#eee]'>
                <div className='w-[20%]'>
                    <img className='w-full' src="assests/uber-bike.webp" alt="uber-bike" />
                </div>

                <div className='w-[70%]'>
                    <h4 className='flex items-center gap-2 font-medium text-base'>UberGo <span className='flex items-center gap-2'><FaUser />1</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, bike ride</p>
                </div>
                <h2 className='text-xl'>₹33.3</h2>
            </div>

            <div className='flex items-center justify-center px-3 py-6 border-2 active:border-black rounded-xl my-2 bg-[#eee]'>
                <div className='w-[20%]'>
                    <img className='w-full' src="assests/uber-auto.webp" alt="uber-auto" />
                </div>

                <div className='w-[70%]'>
                    <h4 className='flex items-center gap-2 font-medium text-base'>UberGo <span className='flex items-center gap-2'><FaUser />3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, auto ride</p>
                </div>
                <h2 className='text-xl'>₹83.3</h2>
            </div>
        </div>
    )
}

export default VehiclePanel