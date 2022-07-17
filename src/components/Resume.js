import React,{useState} from 'react';

function Resume() {


  const [click, setClick] = useState(true);

  function hoverCard( ) {
    setClick(false);
  }
  function leaveCard( ) {
    setClick(true);
  }

  return <div id='resume' className='h-screen w-full p-4 sm:p-8 lg:p-8 text-white'>
  <div className={click ? "bg-gray-200 transition duration-1000" : "transition duration-1000 bg-gray-900"} onMouseLeave={leaveCard} onMouseEnter={hoverCard}>be </div>
  
</div> 
}

export default Resume;
