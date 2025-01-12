import React, {useState, useRef} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()

  }
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        padding:24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding:0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 
          ref={panelCloseRef} 
          onClick={()=>{
            setPanelOpen(false)
          }} 
          className='absolute top-6 right-6 text-2xl opacity-0'>
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input 
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
            type="text" 
            placeholder='Add a pick-up location'/>
            <input 
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e)=>{
              setDestination
            }}
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' 
            type="text" 
            placeholder='Enter your destination'/>
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='w-full fixed translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-14'>
        <h5 className='p-3 w-[90%] text-center absolute top-0' onClick={()=>{
          setVehiclePanel(false)
        }}><i className='text-3xl text-grey-300 ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
        <div className='w-full border-2 active:border-black rounded-xl flex items-center justify-between p-4 mb-2'>
          <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo 
              <span><i className='ri-user-3-fill'></i>4</span>
            </h4>
            <h5 className='font-medium text-lg'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>
        <div className='w-full border-2 active:border-black rounded-xl flex items-center justify-between p-4 mb-2'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"/>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto 
              <span><i className='ri-user-3-fill'></i>1</span>
            </h4>
            <h5 className='font-medium text-lg'>3 mins away</h5>
            <p className='font-normal text-xs'>Affordable motorcycle ride</p>
          </div>
          <h2 className='text-xl font-semibold'>₹65.17</h2>
        </div>
        <div className='w-full border-2 active:border-black rounded-xl flex items-center justify-between p-4 mb-2'>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"/>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto 
              <span><i className='ri-user-3-fill'></i>3</span>
            </h4>
            <h5 className='font-medium text-lg'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable auto rides</p>
          </div>
          <h2 className='text-xl font-semibold'>₹118.21</h2>
        </div>
      </div>
    </div>
  )
}

export default Home