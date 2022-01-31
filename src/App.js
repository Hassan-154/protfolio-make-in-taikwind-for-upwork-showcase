import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Prot from './components/Prot'
import WhatIDo from './components/WhatIDo';

function App() {
  return (
    <div className='bg-slate-50 w-full'>
      <NavBar/>
      <div className='lg:ml-64'>
      <HeroSection />
      <AboutMe/>
      <WhatIDo/>
      <Prot/>
      </div>
      
    </div>

  );
}

export default App;



