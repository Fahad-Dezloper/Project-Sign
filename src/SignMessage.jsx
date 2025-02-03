import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRef } from "react";
import bs58 from 'bs58'

export function SignMessage(){
    const {publicKey, signMessage} = useWallet();
    const messageRef = useRef();

    async function onClick(){
        if(!publicKey) throw new Error('Wallet not connected!');
        if(!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = messageRef.current.value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid');
        alert('successs', `Message signature: ${bs58.encode(signature)}`)

    }

    return(
        <div className="flex flex-col gap-3">
            <div className="font-semibold bg-gradient-to-br from-blue-400 to-purple-500 text-white p-2">Sign Message</div>
            <div className="flex gap-2">
            <input type="text" className="rounded-2xl primary-heavy w-full border bg-white px-5 py-3" ref={messageRef} placeholder="Message" />
            <button onClick={onClick} className="px-12 py-3 bg-[#3B82F6] w-full hover:bg-[#60A5FA] duration-200 ease-in-out text-white font-semibold primary-heavy rounded-2xl">Sign Message</button>
            </div>
        </div>
    )
}