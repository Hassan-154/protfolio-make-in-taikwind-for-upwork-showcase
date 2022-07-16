import React from 'react'
import WebIcon from '@mui/icons-material/Web';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeOffIcon from '@mui/icons-material/CodeOff';
/*about heading icon*/
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Zoom from 'react-reveal/Zoom';
function AboutMe() {
    return (
      <div>
      <Zoom>
        <div className="bg-zinc-800 container flex item-center justify-center w-full text-center max-w-7xl p-4 sm:p-8 lg:p-14 text-white" id="about">
<div>
  <div class="flex items-center justify-between">
    <h2 className='text-4xl font-bold text-emerald-500'>About Me.</h2>
    <PermIdentityIcon className="service__logo" sx={{ fontSize: 60 }}/>
  </div>
  
  
 {/* horizontal line after heading line */}
    <div class="divide-y-2 divide-gray-500 divide-dashed">
  <div class="text-center py-2"></div>
  <div class="text-center py-2"></div>
</div>

                {/* for about content */}
                <div className=" text-left pt-12">
        {/* set up a flex container so we can have columns */}
        <div className="colum sm:flex gap-6 ">
          {/* first column set to use 3/4 of the width of the containpmner, with a regular space between each element */}
          <div className="lg:w-3/4 space-y-4">
            <h3 className="text-2xl font-bold">UI/UX Designer & Developer</h3>
            <p className=' pb-1 text-[16px] leading-relaxed'>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
            <p className='pb-1 text-[16px] leading-relaxed'>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>



          </div>
          {/* second column using the remaining quarter */}
          <div className="lg:w-1/3 space-y-2">
            <h3 className="text-2xl font-bold ">Personal Information</h3>
            <ul className='text-md'>
              <li className=''><span className='border-b-2 border-emerald-500'>Name</span> : Hdobi Taylor</li>
              <li className=''><span className='border-b-2 border-emerald-500'>Age</span> : 26 Years</li>
              <li className=''><span className='border-b-2 border-emerald-500'>Residence</span>: New York, USA</li>
              <li className=''><span className='border-b-2 border-emerald-500'>Address</span> : 123 Lorem Ipsum</li> 
              <li className=''><span className='border-b-2 border-emerald-500'>Email</span> : example@example.com</li>
              <li className=''><span className='border-b-2 border-emerald-500'>Phone</span> : (+1) 123 456 7890</li>
              <li className=''><span className='border-b-2 border-emerald-500'>Freelance</span> : Available</li>


              {/* this piece of code for send message button */}

<div className='mt-4 uppercase text-[13px] cursor-pointer'>
<span href="#_" class="relative inline-flex items-center justify-center px-3 py-2 overflow-hidden tracking-tighter hover:text-black bg-zinc-800 group border-2 border-emerald-500">
<span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-500 group-hover:w-56 group-hover:h-56"></span>
<span class="relative hover:text-black font-bold">Download resume</span>
</span>
</div>

            </ul>
          </div>
        </div>
   </div>
   <div className='pt-12'>
     <h3 className='special-underline text-2xl font-bold tracking-wide pt-16 pb-16'>SERVICES</h3>
     <div class="grid grid-cols-4 gap-4 pt-12">
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><WebIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>Web Development</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><AppShortcutIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>App Development</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><DesignServicesIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>UX/UI Designer</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><CodeOffIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>Backend Development</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
</div>
   </div>
 </div>
        </div>
        </Zoom>
        </div>

    )
}

export default AboutMe
