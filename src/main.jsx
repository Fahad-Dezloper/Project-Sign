import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navabar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className='w-screen h-screen relative flex items-center flex-col gap-4 justify-center px-10 py-6 bg-black overflow-hidden'>
    <Navabar />
    <App />
    </div>
    </BrowserRouter>
  </StrictMode>,
)
