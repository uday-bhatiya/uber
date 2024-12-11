import React, { useRef, useState } from 'react';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);

  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);


  useGSAP(() => {

    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        bottom: '-0%',
      
      })
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        bottom: '-100%',
      })
    }

  }, [ridePopUpPanel])

  useGSAP(() => {

    if (confirmRidePopUpPanel) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        bottom: '-0%',
      
      })
    } else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        bottom: '-100%',
      })
    }

  }, [confirmRidePopUpPanel])

  return (
    <div className='w-screen h-screen py-2 px-2 relative bg-black'>

      <div className='w-full h-full flex items-center justify-center gap-5 bg-white'>

        <div className='w-[45%] lg:w-[30%] h-full hidden md:flex bg-red-300'>
          {/* for later */}

        </div>

        <div className='w-full md:w-[50%] lg:w-[65] h-full flex flex-col justify-center relative overflow-hidden'>

          <div className='w-full h-1/2 bg-black'>
            {/* for later */}
          </div>

          <div className='flex flex-col justify-evenly items-center w-full h-1/2'>

            <CaptainDetails />

          </div>

          <div ref={ridePopUpPanelRef} className=' h-full w-full bg-white bottom-[-100%]  px-4 absolute pt-10'>

          <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />

          </div>

          <div ref={confirmRidePopUpPanelRef} className=' h-full w-full bg-white bottom-[-100%]  px-4 absolute pt-10'>

          <ConfirmRidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />

          </div>

        </div>

      </div>

    </div>
  )
}

export default CaptainHome