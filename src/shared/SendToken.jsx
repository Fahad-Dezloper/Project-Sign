import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useRef } from "react";

export function SendToken(){
    const wallet = useWallet();
    const {connection} = useConnection();
    const toRef = useRef();
    const amountRef = useRef();

    async function sendToken(){
        let to = toRef.current.value;
        let amount = amountRef.current.value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transaction, connection);
        alert("Sent: " + amount + " SOL to " + to);
    }

    return(
        <div className="flex flex-col gap-3 md:mt-8 z-[30] min-w-[30vw] ">
            <div className="font-semibold bg-gradient-to-br from-blue-400 to-purple-500 text-white text-center p-2 w-full">Transfer Sol</div>
            <input type="text" ref={toRef} className="rounded-2xl primary-heavy w-full border bg-white px-5 py-3" id="to" placeholder="To" />
            <div className="flex gap-2">
            <input type="text" ref={amountRef} className="rounded-2xl primary-heavy bg-white px-5 py-3" id="amount" placeholder="Amount" />
            <button onClick={sendToken} className="px-12 py-3 bg-[#3B82F6] w-full hover:bg-[#60A5FA] duration-200 ease-in-out text-white font-semibold primary-heavy rounded-2xl">Send</button>
            </div>
        </div>
    )
}