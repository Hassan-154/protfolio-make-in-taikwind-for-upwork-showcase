import React from 'react'

function AboutMe() {
    return (
        <div className="container flex item-center justify-center w-full text-center" id="about">
            {/* heading div */}
            <div className=''>
            <div class="grid place-items-center mt-10">
  <h1 class="col-start-1 row-start-1 font-bold text-gray-300 text-7xl sm:text-8xl lg:text-9xl">ABOUT ME</h1>
  <p class="col-start-1 row-start-1 font-bold text-4xl">Know Me More</p>
  <span class="col-start-1 row-start-1 h-1 w-20 bg-emerald-500 mt-16"></span>
</div>

            
               
                {/* for about content */}
                <div className='flex flex-col ml-5 mr-5 lg:flex-row text-left ml-16 mr-16'>
                    <div className='w-auto pr-50'>
                        <h1 className='font-bold text-xl pt-10 pb-3'>I'm Simone Olivia, a Web Developer</h1>
                        <p className='text-sm'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p className='pt-5'>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                    </div>
                    <div className='max-w-xs bg-black h-2 w-98'>for contact page</div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe
