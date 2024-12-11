import React, { useContext, useRef, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import LogoutBtn from '../components/LogoutBtn.jsx';
import { IoIosArrowDown } from "react-icons/io";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationSearchPanel from '../components/LocationSearchPanel.jsx';
import VehiclePanel from '../components/VehiclePanel.jsx';
import ConfirmRide from '../components/ConfirmRide.jsx';
import LookingForDriver from '../components/LookingForDriver.jsx';
import WaitingForDriver from '../components/WaitingForDriver.jsx';

const Home = () => {

  const { user } = useContext(UserDataContext);

  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const waitingForDriverRef = useRef(null);

  const panelCloseRef = useRef(null);

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '80%',
        padding: 24
        // opacity:1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
        // opacity:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {

    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }

  }, [vehiclePanelOpen])

  useGSAP(() => {

    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        bottom: '-0%',
      
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        bottom: '-100%',
      })
    }

  }, [confirmRidePanel])

  useGSAP(() => {

    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        bottom: '-0%',
      
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        bottom: '-100%',
      })
    }

  }, [vehicleFound])

  useGSAP(() => {

    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        bottom: '-0%',
      
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        bottom: '-100%',
      })
    }

  }, [waitingForDriver])

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

        <div className='w-full md:w-[60%] lg:w-[65] h-full flex flex-col justify-between relative overflow-hidden'>
         
          <div className='h-screen w-screen'>

          </div>

          <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>

            <div className='min-h-min px-6 py-8 relative md:hidden border-b-4'>
              <h5 ref={panelCloseRef} onClick={() => {
                setPanelOpen(false)
              }} className='absolute right-0 px-8' >
                <IoIosArrowDown className='text-2xl' />
              </h5>
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

            <div ref={panelRef} className='h-[0%]'>
              <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
            </div>
          </div>

          <div ref={vehiclePanelRef} className=' h-full w-full bg-white bottom-0 py-10 px-4 translate-y-full'>

            <VehiclePanel panelCloseRef={panelCloseRef} setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel}  setPanelOpen={setPanelOpen}/>

          </div>

          <div ref={confirmRidePanelRef} className=' h-full w-full bg-white bottom-[-100%]  px-4 absolute pt-10'>

          <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel} />

          </div>

          {/* <div ref={vehicleFoundRef} className=' h-full w-full bg-white bottom-[-100%]  px-4 absolute pt-10'>

          <LookingForDriver setVehicleFound={setVehicleFound} setWaitingForDriver={setWaitingForDriver}/>

          </div> */}
          
          <div ref={vehicleFoundRef} className=' h-full w-full bg-white bottom-[-100%]  px-4 absolute pt-10'>

          <WaitingForDriver setVehicleFound={setVehicleFound} />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home