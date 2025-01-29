import './App.css'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './RequestAirdrop';
import { ShowBalance } from './ShowBalance';
import { SendToken } from './SendToken';
import { SignMessage } from './SignMessage';

function App() {

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden text-white">
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
                <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-6 space-y-6 text-center">
                    <h1 className="text-2xl font-bold">Solana Wallet Interaction</h1>
                    <div className="flex w-full items-center justify-center  gap-4">
                        <WalletMultiButton className="w-full" />
                        <WalletDisconnectButton className="w-full" />
                    </div>
                    <div className="space-y-4">
                        <RequestAirdrop />
                        <ShowBalance />
                        <SendToken />
                        <SignMessage />
                    </div>
                </div>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
</div>
  )
}

export default App
