import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useRef, useState } from "react";
import { toast } from "sonner";

const RequestAirdrop = () => {
    const wallet = useWallet();
    const [loading, setLoading] = useState(false);
    const {connection} = useConnection();
    const amountRef = useRef(null);
    function requestAirdrop(){
        setLoading(true);
        try{
            const publicKey = wallet.publicKey;
            const amount = amountRef.current.value;
            //1 sol = 10^9
            connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL) 
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
                {loading ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-corner-right-up"><polyline points="10 9 15 4 20 9"/><path d="M4 20h7a4 4 0 0 0 4-4V4"/></svg> }
            </button>
            </div>
        </div>
    )
} 

export default RequestAirdrop