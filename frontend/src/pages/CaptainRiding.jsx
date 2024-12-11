import React, { useRef, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import CompleteRide from '../components/CompleteRide';

const CaptainRiding = () => {

  const [completeRidePanel, setCompleteRidePanel] = useState(false);
  const completeRidePanelRef = useRef(null);

  useGSAP(() => {

    if (completeRidePanel) {
      gsap.to(completeRidePanelRef.current, {
        bottom: '-0%',
      
      })
    } else {
      gsap.to(completeRidePanelRef.current, {
        bottom: '-100%',
      })
    }

  }, [completeRidePanel])

    return (
        <div className='w-screen h-screen py-4 px-2 relative bg-black'>

            <div className='w-full h-full flex items-center justify-center gap-5 bg-white'>

                <div className='w-[45%] lg:w-[30%] h-full hidden md:flex bg-red-300'>
                    {/* for later */}
                </div>

                <div className='w-full md:w-[60%] lg:w-[65] h-full flex flex-col justify-between relative overflow-hidden'>

                    <div className='w-full h-4/5 bg-black'></div>

                    <div className='w-full h-1/5 bg-yellow-400 p-6 flex flex-col items-center justify-center gap-2'>
                        <div 
                          onClick={() => {
                            setCompleteRidePanel(true)
                        }}
                        className='w-full h-96 flex items-center justify-center'>
                            <IoIosArrowUp className='text-2xl' />
                        </div>
                        <h5 className='font-semibold text-xl'>4 KM away </h5>
                        <button
                        onClick={() => {
                            setCompleteRidePanel(true)
                        }}
                         className='bg-green-600 text-white font-semibold px-10 py-2 rounded-lg'>Complete ride</button>

                    </div>


                    <div ref={completeRidePanelRef} className=' h-full w-full bg-white bottom-[-100%]  px-4 absolute pt-10'>

                        <CompleteRide setCompleteRidePanel={setCompleteRidePanel} />

                    </div>


                </div>

            </div>

        </div>
    )
}

export default CaptainRiding