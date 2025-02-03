import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const WalletButtons = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4 z-[30]">
        <WalletMultiButton
                className="flex"
        />
        <WalletDisconnectButton className="w-full" />
    </div>
  )
}

export default WalletButtons