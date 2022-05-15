import React from 'react'
import WebIcon from '@mui/icons-material/Web';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeOffIcon from '@mui/icons-material/CodeOff';
/*about heading icon*/
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
function AboutMe() {
    return (
        <div className="container flex item-center justify-center w-full text-center max-w-7xl p-4 sm:p-8 lg:p-14 text-white" id="about">
<div>
  <div class="flex items-center justify-between">
    <h2 className='text-4xl font-bold'>About Me.</h2>
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
        <div className="colum lg:flex gap-4 ">
          {/* first column set to use 3/4 of the width of the containpmner, with a regular space between each element */}
          <div className="lg:w-3/4 space-y-4">
            <h3 className="text-2xl font-bold">UI/UX Designer & Developer</h3>
            <p className='text-lg pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dicta unde quisquam sequi, nesciunt voluptatum repellat, molestias et assumenda numquam quaerat? Blanditiis atque dolor sunt quidem voluptatibus quasi, et officiis culpa placeat ab, ipsa odit deserunt quam ut suscipit, cumque minima voluptate earum repudiandae animi unde ratione illo aliquam debitis! Cupiditate tempore porro nisi vel pariatur, aperiam molestias exercitationem voluptatem magni quo libero deserunt mollitia quibusdam nemo quae nostrum iste accusantium esse minus hic. Reprehenderit error totam necessitatibus ducimus adipisci quas obcaecati maxime amet accusamus praesentium sit laborum tempora, eligendi, esse eos id vero eum? Eos amet beatae tenetur ducimus.</p>
          </div>
          {/* second column using the remaining quarter */}
          <div className="lg:w-1/4">
            <h3 className="text-2xl font-bold pb-3 ">Personal Information</h3>
            <ul className='text-lg'>
              <li className='pb-2'><span className='underline decoration-emerald-500'>Name</span> : Hdobi Taylor</li>
              <li className='pb-2'><span className='underline decoration-emerald-500'>Age</span> : 26 Years</li> 
              <li className='pb-2'><span className='underline decoration-emerald-500'>Address</span> : 123 Lorem Ipsum</li> 
              <li className='pb-2'><span className='underline decoration-emerald-500'>Email</span> : example@example.com</li>
              <li className='pb-2'><span className='underline decoration-emerald-500'>Phone</span> : (+1) 123 456 7890</li>
              <button className="text-emerald-500 tracking-wide  text-xl mt-6  p-2 pl-6 pr-6 border-2 border-emerald-500 hover:bg-emerald-500 duration-500 hover:text-white ">Download Resume</button>
            </ul>
          </div>
        </div>
   </div>
   <div className=''>
     <h2 className='text-2xl font-bold tracking-wide pt-16 pb-16'>SERVICES</h2>
     <div class="grid grid-cols-4 gap-4">
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><WebIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>Web Development</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><AppShortcutIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>App Development</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><DesignServicesIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>UX/UI Designer</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
  <div class="col-span-4 sm:col-span-2 md:col-span-1"><CodeOffIcon className='service__logo' sx={{ fontSize: 60 }}/><h1 className='text-xl pb-1.5 pt-1.5 font-bold'>Backend Development</h1><p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p></div>
</div>
   </div>
 </div>
        </div>

    )
}

export default AboutMe
