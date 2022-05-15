import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Prot from './components/Prot'
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-zinc-800 w-full'>
      <NavBar/>
      <div className='xl:ml-64'>
      <HeroSection/>
      <Skills/>
      <AboutMe/>
      <Prot/>
      <Contact/>
      </div>
    </div>

  );
}

export default App;



