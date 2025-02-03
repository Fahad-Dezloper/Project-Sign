import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import RequestAirdrop from "../RequestAirdrop"
import { ShowBalance } from "../ShowBalance"
import { SendToken } from "../SendToken"
import { SignMessage } from "../SignMessage"
import Example from "./TiltCard"
import Show from "./TiltCard"
import WalletButtons from "./WalletButtons"

const Interact = () => {
    return (
            <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
                <WalletProvider wallets={[]} autoConnect>
                    <WalletModalProvider>
            <div className='flex w-full h-full py-6 px-12 z-[30]'>
                <Show />
                <div className="w-full h-fit flex flex-col gap-8">
                        <h1 className="text-[3vw] z-[30] primary-heavy text-white">Interact</h1>
                            <WalletButtons />
                            <RequestAirdrop />
                            {/* <Example /> */}
                            {/* <div className="space-y-4">
                                <RequestAirdrop />
                                <ShowBalance />
                                <SendToken />
                                <SignMessage />
                            </div> */}
                    </div>
            </div>
                            </WalletModalProvider>
                        </WalletProvider>
                    </ConnectionProvider>
    )
}

export default Interact