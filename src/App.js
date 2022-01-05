import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import SideNav from './components/SideNav';

function App() {
  return (
    <div>
      <SideNav/>
      <div className='md:ml-64' style={{marginTop: "-100vh"}}>
        <HeroSection/>
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;



