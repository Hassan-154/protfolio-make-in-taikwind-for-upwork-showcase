import React,{useState} from 'react'
import { Transition } from "@headlessui/react";
import myImg from '../images/myImg.jpg'
import { BiHome } from 'react-icons/bi';
import { BsPerson,BsCardList } from 'react-icons/bs';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { AiOutlineCopy } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import { AiFillGithub, AiOutlineInstagram, AiFillFacebook, AiOutlineLinkedin  } from 'react-icons/ai';
function NavBar(){
  
  const [isOpen, setIsOpen] = useState(false);

    return (
      <div className='fixed text-lg z-20 uppercase'>
    
    {/*for mobile*/}
    <div className=''>
  <nav className="bg-zinc-900 w-screen xl:hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <div className="-mr-2 flex xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {(ref) => (
        <div className="xl:hidden" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#"
              className="text-gray-300  hover:text-emerald-500 block px-3 py-0 rounded-md  text-base font-medium"
              
            >
            Dashboard
            <hr className='mt-2'></hr>
            </a>
            <a 
              href="#"
              className="text-gray-300  hover:text-emerald-500 block px-3 py-0 rounded-md text-base font-medium"
            >
              
              Team
              <hr className='mt-2'></hr>
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-emerald-500 block px-3 py-0 rounded-md text-base font-medium"
            >
              Projects
              <hr className='mt-2'></hr>
            </a>

            <a
              href="#"
              className="text-gray-300  hover:text-emerald-500 block px-3 py-0 rounded-md text-base font-medium"
            >
              Calendar
              <hr className='mt-2'></hr>
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-emerald-500 block  px-3 py-0  text-base font-medium"
            >
              Reports
              <hr className='mt-2'></hr>
            </a>
          </div>
        </div>
      )}
    </Transition>
  </nav>
</div>
   {/*for desktop*/}
   <div className="h-screen bg-zinc-900 w-52 absolute inset-y-0 left-0 transform -translate-x-full md:relative xl:translate-x-0 transition duration-200 ease-in-out">
            <div className='w-52 h-screen flex'>
            <nav className='flex flex-col text-white w-full divide-y divide-slate-700 text-[13px]'>
            <div className=''>
                <img className="" src={myImg}/>
                <div class="absolute inset-x-0 bottom-0 h-10 w-full text-center bg-emerald-500 bg-opacity-50 top-40"><h3 className='pt-1.5'>HDOBI TAYLOR</h3></div>
         </div>


              <a href='/' className="hover:text-emerald-500 cursor-pointer text-center pb-3 pt-3 transition duration-200">
              <div className='flex ml-12'>
                <BiHome className="mr-1" size={24}/><a>Home</a>
              </div>
              </a>

              <a href='/about' className="hover:text-emerald-500 cursor-pointer text-center pb-3 pt-3 transition duration-200">
              <div className='flex ml-12'>
                <BsPerson className="mr-1" size={24}/><a>About me</a>
              </div>
              </a>

              <a href='/resume' className="hover:text-emerald-500 cursor-pointer text-center pb-3 pt-3 transition duration-200">
              <div className='flex ml-12'>
                <BsCardList className="mr-1" size={24}/><a>Resume</a>
              </div>
              </a>


              <a href='/portfolio' className="hover:text-emerald-500 cursor-pointer text-center pb-3 pt-3 transition duration-200">
              <div className='flex ml-12'>
                <IoBriefcaseOutline className="mr-1" size={24}/><a>portfolio</a>
              </div>
              </a>

              <a href='/blog' className="hover:text-emerald-500 cursor-pointer text-center pb-3 pt-3 transition duration-200">
              <div className='flex ml-12'>
                <AiOutlineCopy className="mr-1" size={24}/><a>Blog</a>
              </div>
              </a>

              
              <a href='/contact' className="hover:text-emerald-500 cursor-pointer text-center pb-3 pt-3 transition duration-200">
              <div className='flex ml-12'>
                <AiOutlineMail className="mr-1" size={24}/><a>Contact</a>
              </div>
              </a>

         
              <a>
              </a>

            </nav>
            </div>






           <div className='text-white flex justify-center'
           >




  {/* picture div */}

 

              





              {/* bottom social icon */}
              <div className='absolute bottom-4'>
                {/* here i need to put the social icon */}
                <div class="flex ml-4">
<div class="cursor-pointer mr-4">
<AiOutlineLinkedin size="25"/>
</div>
<div class="cursor-pointer mr-4">
<AiFillFacebook size="25"/>
</div>
<div class="cursor-pointer mr-4">
<AiOutlineInstagram size="25"/>
</div>
<div class="cursor-pointer mr-4">
<AiFillGithub size="25"/>
</div>
</div>
              </div>

           </div>
</div>
  </div>
    )
    }

export default NavBar
