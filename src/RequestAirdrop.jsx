import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRef } from "react";

export default function RequestAirdrop(){
    const wallet = useWallet();
    const {connection} = useConnection();
    const amountRef = useRef(null);
    function requestAirdrop(){
        const publicKey = wallet.publicKey;
        const amount = amountRef.current.value;
        connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL) //1 sol = 10^9
    }

    return(
        <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
            <input type="text" ref={amountRef} className="border rounded-md p-2" placeholder="Amount..." />
            <button onClick={requestAirdrop}>Request Airdrop</button>
            </div>
            <div className="bg-gray-200/20 rounded-md p-2">
                {wallet.publicKey?.toBase58()}
            </div>
        </div>
    )
} 