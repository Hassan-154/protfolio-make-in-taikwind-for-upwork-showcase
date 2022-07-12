import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Prot from './components/Portfolio'
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';

import {BrowserRouter,Routes, Route,} from "react-router-dom";
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className='w-full bg-zinc-700'>
      <NavBar/>
     <div className='xl:ml-52'>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<HeroSection/>} />
   <Route path='/about' element={<AboutMe/>} />
   <Route path='/resume' element={<Resume/>} />
   <Route path='/portfolio' element={<Portfolio/>} />
   <Route path='/blog' element={<Blog/>} />
   <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
     </div>




    </div>

  );
}

export default App;



