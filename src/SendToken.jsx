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
        <div className="flex flex-col gap-3 mt-8">
            <div className="font-semibold bg-gray-100/50 text-black p-2 border-t-2">Transfer Sol</div>
            <input type="text" ref={toRef} className="py-2 rounded-lg border px-4" id="to" placeholder="To" />
            <input type="text" ref={amountRef} className="py-2 rounded-lg border px-4" id="amount" placeholder="Amount" />
            <button onClick={sendToken}>Send</button>
        </div>
    )
}