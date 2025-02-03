import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRef, useState } from "react";
import Airdrop from "./icons/airdrop";
import Loader from "./icons/Loader";
import { toast } from "sonner";

export default function RequestAirdrop(){
    const wallet = useWallet();
    const [loading, setLoading] = useState(false);
    const {connection} = useConnection();
    const amountRef = useRef(null);
    function requestAirdrop(){
        setLoading(true);
        try{
            const publicKey = wallet.publicKey;
            const amount = amountRef.current.value;
            connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL) //1 sol = 10^9
            toast.success("🎁 AirDrop Successfully");
        } catch(e){
            console.log(e);
        }finally{
            setLoading(false)
        }
    }

    return(
        <div className="flex items-center justify-center gap-3 z-[30]">
            <div className="flex items-center  gap-2 relative">
            <input type="text" ref={amountRef} className="border md:w-[18vw] w-full primary-heavy rounded-2xl bg-white px-5 py-3" placeholder="Airdrop Amount" />
            <button onClick={requestAirdrop} className={`absolute right-0 p-2 bg-black ${loading ? "animate-spin" : ""} scale-75 text-white rounded-full cursor-pointer`}>
                {loading ? <Loader /> : <Airdrop /> }
            </button>
            </div>
        </div>
    )
} 