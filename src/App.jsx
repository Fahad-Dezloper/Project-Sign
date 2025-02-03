import './App.css'
import '@solana/wallet-adapter-react-ui/styles.css';
import Interact from './components/Interact';
import { Route, Routes, Navigate } from 'react-router-dom';
import Swap from './components/Swap';

function App() {

  return (
    <>
    <div className="w-full h-full rounded-3xl shadow-lg space-y-6 backdrop-blur-lg text-black relative overflow-hidden text-center z-[30]">
    <img src="/space-background.avif" alt="" className='absolute w-full h-full object-cover blur-sm' />
    <Routes>
        <Route path="/" element={<Navigate to="/interact" />} />
        <Route path='/interact' element={<Interact />} /> 
        <Route path='/swap' element={<Swap />} />
        </Routes>
        </div>
    </>
  )
}

export default App
