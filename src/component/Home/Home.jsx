import React from 'react'
import Image from '../../assets/add.png'
import Gif from '../../assets/right-arrow.gif'
import { useNavigate } from 'react-router'



function Home() {
  const navigate = useNavigate();

  const handlestart = () => {
    navigate('/login')
  };
  return (
    <>
    <div className='flex flex-row mx-9 my-0 justify-evenly'>

    <div className='container flex flex-wrap justify-center max-w-max flex-col'>

      <h1 className=' flex justify-items-start text-teal-400 font-bold agu-display md:text-7xl'>
        Notes Manager
      </h1>
      <span className='md:text-2xl font-color-1 pacifico-regular'>

      Save, edit
       <br /> and Delete your Notes
      </span>
      <button
      onClick={handlestart}
      className='flex flex-row third-color max-w-max text-white md:mx-2 my-8 rounded-full md:px-2 md:py-1'>
        Get Started
        <img src={Gif} alt="" 
        className='size-6 mx-2 text-3xl w-10' />
      </button>
      </div>

      <img src={Image}
       alt="files" 
       className='size-90 duration-1000'
       />
      
       </div>
       
</>
  )
}
export default Home
