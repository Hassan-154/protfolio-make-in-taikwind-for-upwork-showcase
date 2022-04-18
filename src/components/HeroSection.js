import React,{useState} from 'react'


function HeroSection() {
    return (
<section class="hero-background text-white flex items-center w-full h-screen justify-center" id='hero'>
  <div className='hero-content text-center max-w-2xl pt-20'>
  <h1 className='text-4xl pb-4 tracking-wide font-bold sm:text-6xl pb-9'>Hi, I'm <span className='text-emerald-500'>Hdobi Taylor.</span> A Web Developer.</h1>
 <p className='tracking-wide pb-4 sm:text-lg pb-9'>I'm a Web Developer, I love to create beautiful and functional websites. I worked on various web technologies but ReactJs is my first pirority😍.</p>
      <button className="text-emerald-500 tracking-wide text-xl rounded-full p-4 pl-14 pr-14 border-2 border-emerald-500 hover:bg-emerald-500 hover:text-white ">Hire Me</button>
  </div>
</section>
    )
}

export default HeroSection
