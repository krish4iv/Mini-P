import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className='flex flex-col font-inter bg-[#ededed] w-full overflow-x-auto'>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
