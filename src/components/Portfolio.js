import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Zoom from 'react-reveal/Zoom';

function Portfolio() {
  return  <div>
    <Zoom>
    <div id='Portfolio.' className='h-screen w-full p-4 sm:p-8 lg:p-8 text-white bg-zinc-800'>
  <div className='max-w-[1240px] mx-auto '>
  <div class="flex items-center justify-between">
  <h2 className='text-4xl font-bold text-emerald-500 '>Portfolio.</h2>
  <BusinessCenterIcon className='service__logo' sx={{ fontSize:50 }}/>
</div>

<div class="divide-y-2 divide-gray-500 divide-dashed">
<div class="text-center py-1"></div>
<div class="text-center py-1"></div>
</div>

{/* this piece of code for portfolio menu */}

<div className=''>

</div>



  </div>
</div> 
    </Zoom>
  </div>
}

export default Portfolio;
