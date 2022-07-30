import React,{useState} from 'react';
import { BsCardList } from 'react-icons/bs';
import { AiOutlineCopy } from 'react-icons/ai';


function Resume() {
  return (
    <div id='blog' className=' w-full p-4 sm:p-8 lg:p-8 text-white bg-zinc-800'>
       <div className='max-w-[1240px] mx-auto '>
       <div class="flex items-center justify-between">
  <h2 className='text-4xl font-bold text-emerald-500 '>My Blogs.</h2>
  <AiOutlineCopy className='service__logo' size={50}/>
</div>

<div class="divide-y-2 divide-gray-500 divide-dashed">
<div class="text-center py-1"></div>
<div class="text-center py-1"></div>
</div>
<div className='pt-6'></div>
{/* resume content */}
{/* grid with 2 section one for experience and other is for education */}
<div className="colum md:flex">
<div className="w-4/4 md:w-2/4 space-y-2">
<h3 className='special-underline text-center text-white text-2xl uppercase'>experience</h3>
<div className="colum gap-4 pt-6">
{/* experience 1 */}
<div className='w-3/3'>
<div class="flex gap-0">
  <div class="w-0/6">
    <div class="w-full h-full grid">
  <div class="flex flex-col items-end">
    <div class="flex items-center space-x-2 translate-y-2">
      <p class="text-white">2018</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>

    <div class="flex h-full w-1 border-l-2 border-cyan-500 mr-[3px]"></div>
     <div class="flex items-center space-x-2 -translate-y-2">
      <p class="text-white">2022</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
  </div>
</div>
  </div>
  <div class="w-6/6 text-white p-8">
  <h4 className='text-[18px] pb-0.5'>LEAD UI DESIGNER</h4>
<h5 className='text-[12px] text-emerald-500 pb-1'>BIG DESIGN COMPANY, NY, USA</h5>
<p className='text-[16px]'>Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima</p>
  </div>
</div>
</div>
{/* experience 2 */}
<div className='w-3/3'>
<div class="flex gap-0">
  <div class="w-0/6">
    <div class="w-full h-full grid">
  <div class="flex flex-col items-end">
    <div class="flex items-center space-x-2 translate-y-2">
      <p class="text-white">2018</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>

    <div class="flex h-full w-1 border-l-2 border-cyan-500 mr-[3px]"></div>
     <div class="flex items-center space-x-2 -translate-y-2">
      <p class="text-white">2022</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
  </div>
</div>
  </div>
  <div class="w-6/6 text-white p-8">
  <h4 className='text-[18px] pb-0.5'>LEAD UI DESIGNER</h4>
<h5 className='text-[12px] text-emerald-500 pb-1'>BIG DESIGN COMPANY, NY, USA</h5>
<p className='text-[16px]'>Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima</p>
  </div>
</div>
</div>
{/* experience 3 */}
<div className='w-3/3'>
<div class="flex gap-0">
  <div class="w-0/6">
    <div class="w-full h-full grid">
  <div class="flex flex-col items-end">
    <div class="flex items-center space-x-2 translate-y-2">
      <p class="text-white">2018</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>

    <div class="flex h-full w-1 border-l-2 border-cyan-500 mr-[3px]"></div>
     <div class="flex items-center space-x-2 -translate-y-2">
      <p class="text-white">2022</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
  </div>
</div>
  </div>
  <div class="w-6/6 text-white p-8">
  <h4 className='text-[18px] pb-0.5'>LEAD UI DESIGNER</h4>
<h5 className='text-[12px] text-emerald-500 pb-1'>BIG DESIGN COMPANY, NY, USA</h5>
<p className='text-[16px]'>Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima</p>
  </div>
</div>
</div>
</div>



</div>
  {/* education */}
<div className="w-4/4 md:w-2/4">
<h3 className='special-underline text-center text-white text-2xl uppercase'>education</h3>
<div className="colum gap-4 pt-6">
{/* education 1 */}
<div className='w-3/3'><div class="flex gap-0">
  <div class="w-0/6">
    <div class="w-full h-full grid">
  <div class="flex flex-col items-end">
    <div class="flex items-center space-x-2 translate-y-2">
      <p class="text-white">2018</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
    
    <div class="flex h-full w-1 border-l-2 border-cyan-500 mr-[3px]"></div>
     <div class="flex items-center space-x-2 -translate-y-2">
      <p class="text-white">2022</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
  </div>
</div>
  </div>
  <div class="w-6/6 text-white p-8">
  <h4 className='text-[18px] pb-0.5'>LEAD UI DESIGNER</h4>
<h5 className='text-[12px] text-emerald-500 pb-1'>BIG DESIGN COMPANY, NY, USA</h5>
<p className='text-[16px]'>Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima</p>
  </div>
</div></div>
{/* education 2 */}
<div className='w-3/3'><div class="flex gap-0">
  <div class="w-0/6">
    <div class="w-full h-full grid">
  <div class="flex flex-col items-end">
    <div class="flex items-center space-x-2 translate-y-2">
      <p class="text-white">2018</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
    
    <div class="flex h-full w-1 border-l-2 border-cyan-500 mr-[3px]"></div>
     <div class="flex items-center space-x-2 -translate-y-2">
      <p class="text-white">2022</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
  </div>
</div>
  </div>
  <div class="w-6/6 text-white p-8">
  <h4 className='text-[18px] pb-0.5'>LEAD UI DESIGNER</h4>
<h5 className='text-[12px] text-emerald-500 pb-1'>BIG DESIGN COMPANY, NY, USA</h5>
<p className='text-[16px]'>Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima</p>
  </div>
</div></div>
{/* education 3 */}
<div className='w-3/3'><div class="flex gap-0">
  <div class="w-0/6">
    <div class="w-full h-full grid">
  <div class="flex flex-col items-end">
    <div class="flex items-center space-x-2 translate-y-2">
      <p class="text-white">2018</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
    
    <div class="flex h-full w-1 border-l-2 border-cyan-500 mr-[3px]"></div>
     <div class="flex items-center space-x-2 -translate-y-2">
      <p class="text-white">2022</p>
      <div class="w-3 h-3 border-2 border-cyan-500 rounded-full"></div>
    </div>
  </div>
</div>
  </div>
  <div class="w-6/6 text-white p-8">
  <h4 className='text-[18px] pb-0.5'>LEAD UI DESIGNER</h4>
<h5 className='text-[12px] text-emerald-500 pb-1'>BIG DESIGN COMPANY, NY, USA</h5>
<p className='text-[16px]'>Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima</p>
  </div>
</div></div>
</div>

</div>
</div>

{/* here is the  skills line containers*/}
<div className="colum md:flex mt-12">
{/* DESIGN SKILLS */}
<div className="w-4/4 md:w-2/4 space-y-2">
<h3 className='special-underline text-center text-white text-2xl uppercase'>DESIGNER Skills</h3>

</div>
{/* CODING SKILLS */}
<div className="w-4/4 md:w-2/4 space-y-2">
<h3 className='special-underline text-center text-white text-2xl uppercase'>CODING SKILLS</h3>

  </div>
</div>

    <div class="relative pt-48">
       <div className='w-52 h-4 bg-slate-500 '></div>
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70"></div>
    </div>





       </div>
    </div>
  )
}

export default Resume