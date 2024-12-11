import React from 'react'

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

                <div className='w-full md:w-[60%] lg:w-[65] h-full flex flex-col justify-between relative overflow-hidden'>

                    <div className='w-full h-1/2'>
                        <img
                            className='w-full h-full object-cover'
                            src="assests/map.png" alt="" />
                    </div>

                    <div className='w-full h-1/2 bg-green-600'>
                        <div ref={vehiclePanelRef} className=' h-full w-full bg-white bottom-0 py-10 px-4 translate-y-full'>

                            <VehiclePanel panelCloseRef={panelCloseRef} setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel} setPanelOpen={setPanelOpen} />

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Riding