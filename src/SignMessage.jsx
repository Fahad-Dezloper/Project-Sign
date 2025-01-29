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
            <div className="font-semibold bg-gray-100/50 text-black p-2 border-t-2">Sign Message</div>
            <input type="text" className="py-2 rounded-lg border px-4" ref={messageRef} placeholder="Message" />
            <button onClick={onClick}>Sign Message</button>
        </div>
    )
}