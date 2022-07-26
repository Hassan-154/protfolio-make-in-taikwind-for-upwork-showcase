import React,{useState} from 'react';
import { BsCardList } from 'react-icons/bs';


function Resume() {

  const [isLoading, setIsLoading] = useState(false)

  const buttonHandler = () => {
    setIsLoading(current => !current)
    console.log(isLoading) // is false 
  }
  

  return <div id='resume'  className=' w-full p-4 sm:p-8 lg:p-8 text-white bg-zinc-800'>
 <button  onClick={buttonHandler} >Current Status</button>
</div>
}

export default Resume;
