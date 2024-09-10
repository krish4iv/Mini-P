import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
 
    <div className='flex flex-col font-inter bg-[#ededed] w-full   '>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}> </Route>
        <Route path='/pricing' element={<Pricing />}> </Route>
        <Route path='/about-us' element={<AboutUs />}> </Route>
        <Route path='/contact-us' element={<ContactPage />}> </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
