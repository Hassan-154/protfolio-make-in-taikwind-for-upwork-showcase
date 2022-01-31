import React,{useState} from 'react'


function HeroSection() {
    return (
        <section class="hero-background text-white flex items-center w-full h-screen justify-center" id='hero'>
  <div className='hero-content text-center'>
      <h1>Welcome</h1>
      <p>I am Hdobi Taylor</p>
      <p>based in Los Angeles, California.</p>
      <button className="text-emerald-500 rounded-full p-4 pl-14 pr-14 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white ">Hire Me</button>
  </div>
</section>
    )
}

export default HeroSection
