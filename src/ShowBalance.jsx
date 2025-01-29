import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function ShowBalance(){
    const {connection} = useConnection();
    const wallet = useWallet();
    const [balancee, setBalance] = useState(0);

    async function getUserBalance(){
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
    }
    useEffect(() => {
        getUserBalance();
    }, [wallet]);


    return (
        <div className="w-full flex items-center justify-center">
        <div className="p-2 border rounded-xl hover:bg-gray-600 duration-150 ease-in-out"><span className="font-semibold">Balance:</span> <span id="balance">{balancee}</span> SOL</div>
        </div>
    )
}