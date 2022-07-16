import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Zoom from 'react-reveal/Zoom';
import { motion } from "framer-motion"
import Fade from 'react-reveal/Fade';


import { FiPlus } from 'react-icons/fi';

function Portfolio() {

  

  function refreshPage() {
    window.location.reload(false);
  }
  return  <div>
    <Zoom>
    <div id='Portfolio.' className='w-full p-4 sm:p-8 lg:p-8 text-white bg-zinc-800'>
  <div className='max-w-[1240px] mx-auto'>
  <div class="flex items-center justify-between">
  <h2 className='text-4xl font-bold text-emerald-500 '>Portfolio.</h2>
  <BusinessCenterIcon className='service__logo' sx={{ fontSize:50 }}/>
</div>

<div class="divide-y-2 divide-gray-500 divide-dashed">
<div class="text-center py-1"></div>
<div class="text-center py-1"></div>
</div>

{/* this piece of code for portfolio menu */}

<body class="antialiased mt-4">
    <h3 class="mb-2 text-[22px]"  onClick={refreshPage}>Masonry Design with TailwindCss</h3>
    

    <div class="masonry-1-col sm:masonry-2-col lg:masonry-3-col"> 
    
          {/* first grid item */}

          <div class="break-inside mb-3 text-white">
          <div className='flex item-center justify-center'>
        <div className='w-full h-64  overflow-hidden relative rounded-2xl'>
        <img className='absolute inset-0 object-cover rounded-2xl rounded-b-lg' src='https://images.unsplash.com/photo-1657204862338-356fec1c3f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <div className='absolute rounded-2xl inset-0 opacity-0 hover:opacity-100  hover:bg-emerald-700/80 '>
        <motion.h3 whileHover={{ x: 0 }} transition={{ delay: 0 }}
        className='w-full h-full text-black'>Sports Web <motion.FiPlus className="mr-1.5" size={24} whileHover={{ x: 0 }} transition={{ delay: 0 }} ></motion.FiPlus>
        </motion.h3>
        </div>
          </div>
      </div> 
      </div>



  {/* Second grid item */}


      <div class="break-inside mb-3  text-white">

      <div className='flex item-center justify-center'>
        <div className='w-full h-72 overflow-hidden relative rounded-2xl'>
        <img className='absolute inset-0 object-cover rounded-2xl rounded-b-lg' src='https://images.unsplash.com/photo-1657204862338-356fec1c3f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <div className='absolute rounded-2xl inset-0 opacity-0  hover:bg-cyan-500 ease-in duration-300 hover:opacity-100 ease-in duration-300'>
        <motion.h3 whileHover={{ x: 100 }} transition={{ delay: 0 }}
        className='w-full h-full text-black'>
        Sports Web
        </motion.h3>
        </div>
          </div>
      </div>
      </div>


   
  {/* third grid item */}

    



      <div class="break-inside mb-3  text-white">

      <div className='flex item-center justify-center'>
        <div className='w-full h-96 overflow-hidden relative rounded-2xl'>
        <img className='absolute inset-0 object-cover rounded-2xl rounded-b-lg' src='https://images.unsplash.com/photo-1657204862338-356fec1c3f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <div className='absolute rounded-2xl inset-0 opacity-0 hover:bg-cyan-500 hover:opacity-80'>
        <div className='flex item-center justify-center relative'>
          <h1 className=''>3</h1>
        </div>
        </div>
          </div>
      </div>
      </div>


  {/* fourth grid item */}










      <div class="break-inside mb-3 text-white">

      <div className='flex item-center justify-center'>
        <div className='w-full h-56  overflow-hidden relative rounded-2xl'>
        <img className='absolute inset-0 object-cover rounded-2xl rounded-b-lg' src='https://images.unsplash.com/photo-1657204862338-356fec1c3f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <div className='absolute rounded-2xl inset-0 opacity-0 hover:bg-cyan-500 hover:opacity-80'>
        <div className='flex item-center justify-center relative'>
          <h1 className=''>4</h1>
        </div>
        </div>
          </div>
      </div>
      </div>






      
  {/* fifth grid item */}









      <div class="break-inside mb-3 text-white">
      <div className='flex item-center justify-center'>
        <div className='w-full h-60  overflow-hidden relative rounded-2xl'>
        <img className='absolute inset-0 object-cover rounded-2xl rounded-b-lg' src='https://images.unsplash.com/photo-1657204862338-356fec1c3f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <div className='absolute rounded-2xl inset-0 opacity-0 hover:bg-cyan-500 hover:opacity-80'>
        <div className='flex item-center justify-center relative'>
          <h1 className=''>5</h1>
        </div>
        </div>
          </div>
      </div>
      </div>




            
  {/* six grid item */}






      <div class="break-inside mb-3 text-white">
      <div className='flex item-center justify-center'>
        <div className='w-full h-80  overflow-hidden relative rounded-2xl'>
        <img className='absolute inset-0 object-cover rounded-2xl rounded-b-lg' src='https://images.unsplash.com/photo-1657204862338-356fec1c3f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
        <div className='absolute rounded-2xl inset-0 opacity-0 hover:bg-cyan-500 hover:opacity-80'>
        <div className='flex item-center justify-center relative'>
          <h1 className=''>6</h1>
        </div>
        </div>
          </div>
      </div>
      </div>

      {/* seventh grid item */}



 

    </div>
  </body>





  </div>
</div> 
    </Zoom>
  </div>
}

export default Portfolio;
