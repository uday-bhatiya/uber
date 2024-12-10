import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = (props) => {

  // sample location array
  const location = [
    '24B, Near Gaziabad, Anime cafe',
    '22C, Near Ahemdabas, Waifu cafe',
    '21D, Near Vadodara, DoFlamingo cafe',
    '20E, Near Vasepur, Straw har cafe',
  ]

  return (
    <div className='flex flex-col justify-start'>
       <h3 className='text-2xl font-semibold mb-2'>Where do you want to go ?</h3>

    {location.map((item, index) => (
        <div onClick={() => {
          props.setVehiclePanelOpen(true)
          props.setPanelOpen(false)
        } } key={index} className='flex bg-[#eee] gap-4 items-center justify-start py-6 px-3 my-1 border-2 active:border-black rounded-xl'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><FaLocationDot /></h2>
        <h4 className='font-medium'>{item}</h4>
        </div>
    ))}
    
    </div>
  )
}

export default LocationSearchPanel