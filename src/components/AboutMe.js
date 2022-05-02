import React from 'react'

function AboutMe() {
    return (
        <div className="container flex item-center justify-center w-full text-center max-w-7xl p-4 sm:p-8 lg:p-14" id="about">
            <div>

            <div class="grid place-items-center mt-10">
  <h1 class="col-start-1 row-start-1 font-bold text-gray-300 text-6xl xs:text-7xl sm:text-8xl lg:text-9xl">ABOUT ME</h1>
  <p class="col-start-1 row-start-1 font-bold text-3xl xs:3xl sm:4xl">Know Me More</p>
  <span class="col-start-1 row-start-1 h-1 w-20 bg-emerald-500 mt-10 xs:mt-12 sm:mt-16"></span>
</div>

                {/* for about content */}
                <div className=" text-left pt-12">
        {/* set up a flex container so we can have columns */}
        <div className="colum lg:flex gap-4 ">
          {/* first column set to use 3/4 of the width of the containpmner, with a regular space between each element */}
          <div className="lg:w-3/4 space-y-4">
            <h1 className="text-2xl font-bold">UI/UX Designer & Developer</h1>
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
              <li className='pb-4'><span className='underline decoration-emerald-500'>Freelance</span> : Available</li>
              <button className="text-emerald-500 tracking-wide  text-xl  p-2 pl-6 pr-6 border-2 border-emerald-500 hover:bg-emerald-500 duration-700 hover:text-white ">Download Resume</button>
            </ul>
          </div>
        </div>
   </div>
   <div className=''>
     <h1>SERVICES</h1>
   </div>
   </div>
        </div>

    )
}

export default AboutMe
