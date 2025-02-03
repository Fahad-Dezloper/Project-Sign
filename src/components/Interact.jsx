import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { SendToken } from "../shared/SendToken"
import { SignMessage } from "../shared/SignMessage"
import RequestAirdrop from "../shared/RequestAirdrop"
import Show from "../shared/TiltCard"
import WalletButtons from "../shared/WalletButtons"

const Interact = () => {
    return (
            <div className='flex flex-col gap-4 md:flex-row w-full h-full py-6 md:px-12 z-[30]'>
                <div className="w-full h-full"><Show /></div>
                <div className="w-full h-fit flex flex-col items-center gap-6 z-[30]">
                        <h1 className="text-[3vw] z-[30] primary-heavy text-white hidden md:flex">Interact</h1>
                            <WalletButtons />
                            <RequestAirdrop />
                            <SendToken />
                            <SignMessage />
                            {/* <ShowBalance /> */}
                            {/* <Example /> */}
                            {/* <div className="space-y-4">
                            </div> */}
                    </div>
            </div>
    )
}

export default Interact