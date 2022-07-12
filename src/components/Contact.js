import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Zoom from 'react-reveal/Zoom';

function Contact() {
  return   <div>
 <Zoom>
 <div id='contact' className=' w-full p-4 sm:p-8 lg:p-8 text-white bg-zinc-800'>
  <div className='max-w-[1240px] mx-auto '>
  <div class="flex items-center justify-between">
  <h2 className='text-4xl font-bold text-emerald-500 '>Contact Me.</h2>
  <MailOutlineIcon className='service__logo' sx={{ fontSize:50 }}/>
</div>

<div class="divide-y-2 divide-gray-500 divide-dashed">
<div class="text-center py-1"></div>
<div class="text-center py-1"></div>
</div>

{/* grid for name and email input box */}

<h3 className='text-center text-white pt-10 pb-10 text-2xl '>LET'S TALK</h3>

<div class="flex flex-col sm:flex-row sm:space-x-8 max-w-[650px] mx-auto">
<div class="basis-2/4">
<label class="block text-white text-md font-bold mb-2">
      Name
    </label>
    <input class="shadow appearance-none border w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-800" id="" type="text"/>
</div>
<div class="basis-2/4">
<label class="block text-white text-md font-bold mb-2 mt-4 sm:mt-0">
      Email
    </label>
    <input class="shadow appearance-none border  w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-800" id="" type="text"/>
</div>
</div>
{/* the message box */}
<div className='max-w-[650px] mx-auto pt-10'>
<label class="block text-white text-md font-bold mb-2">
      How can I help you?
    </label>
    <input class="shadow appearance-none border  w-full py-2 px-2 pb-24 text-white leading-tight focus:outline-none focus:shadow-outline bg-zinc-800" id="" type="text"/>
</div>

{/* this piece of code for send message button */}

<div className='container flex item-center justify-center mt-8'>
<a href="#_" class="relative inline-flex items-center justify-center px-3 py-2 overflow-hidden font-medium tracking-tighter text-white hover:text-black bg-zinc-800 group border-2 border-emerald-500">
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-500 group-hover:w-56 group-hover:h-56"></span>
<span class="relative">SEND MESSAGE</span>
</a>
</div>


{/* this piece of code is for info grid */}
<div class="grid grid-cols-3 gap-4 pt-12 text-center  max-w-[980px] mx-auto">
<div class="col-span-3 sm:col-span-1"><MailOutlineIcon className='service__logo' sx={{ fontSize:40 }}/><h3 className='text-xl pb-1.5 pt-1.5 font-bold'>example@example.com</h3></div>
<div class="col-span-3 sm:col-span-1"><LocationOnIcon className='service__logo' sx={{ fontSize:40 }}/><h3 className='text-xl pb-1.5 pt-1.5 font-bold'>123 Lorem Ipsum, USA</h3></div>
<div class="col-span-3 sm:col-span-1"><PhoneIcon className='service__logo' sx={{ fontSize:40 }}/><h3 className='text-xl pb-1.5 pt-1.5 font-bold'>(+1) 123 456 7890</h3></div>
</div>

  </div>
</div>
 </Zoom> 
  </div>
}

export default Contact;
