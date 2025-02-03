import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navabar from './components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './ui/Sonner.jsx'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Toaster />
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
    <WalletModalProvider>
    <div className='w-screen h-screen relative flex items-center flex-col gap-4 justify-center md:px-10 md:py-6 pt-4 overflow-y-auto bg-black md:overflow-hidden'>
    <Navabar />
    <App />
    </div>
    </WalletModalProvider>
     </WalletProvider>
      </ConnectionProvider>
    </BrowserRouter>
  </StrictMode>,
)
