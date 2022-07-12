import React,{useState} from 'react'
import Typical from 'react-typical'
import Zoom from 'react-reveal/Zoom';

function HeroSection() {
    return (
     <div>
     <Zoom>
        <div id='/' class="relative bg-zinc-800">
        <div className="home h-screen"></div>
        <div class="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">


      {/* here is the main content of home page */}

      <h1 className='text-4xl pb-4 tracking-wide font-bold sm:text-6xl pb-9'>HDOBI <span className='text-emerald-500'> TAYLOR</span></h1>
  <p className='text-center text-2xl sm:text-3xl'>
  I am a {''}
  <span className='border-b-2 border-emerald-500 font-bold'>
  <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'FreeLancer',
            1000,
            'Web Developer',
            1000,
            'UI/UX Design',
            1000,
          ]}
        /> 
  </span>
  </p>



          </div>
       
    </div>
    </Zoom>
     </div>
    )
}

export default HeroSection
