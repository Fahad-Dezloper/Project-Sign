"use client"

import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { RxCopy } from "react-icons/rx"
import { TiTick } from "react-icons/ti"

const Show = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <TiltCard />
    </div>
  )
}

const ROTATION_RANGE = 32.5
const HALF_ROTATION_RANGE = 32.5 / 2

const TiltCard = () => {
  const wallet = useWallet()
  const [isHovered, setIsHovered] = useState(false)
  const {connection} = useConnection();
  const [copy, setCopied] = useState(false);
  const [balancee, setBalance] = useState(0);
  const ref = useRef(null)
  const publicRef = useRef();

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x)
  const ySpring = useSpring(y)

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`

  
async function getUserBalance(){
    const balance = await connection.getBalance(wallet.publicKey);
    setBalance(balance / LAMPORTS_PER_SOL);
}

useEffect(() => {
    getUserBalance();
}, [wallet]);


  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = (ref.current).getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1
    const rY = mouseX / width - HALF_ROTATION_RANGE

    x.set(rX)
    y.set(rY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const copyToClipboard = () => {
    console.log("public ref key", publicRef.current.value)
    window.navigator.clipboard.writeText(publicRef.current.value);
    // alert("Copied to clipboard!");
    setCopied(true);
    setTimeout(() => {
        setCopied(false);
    }, 2000);
  }


  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[40vh] w-[40vw] rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 shadow-xl"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl bg-white/90 shadow-lg p-6 flex flex-col"
      >
        {wallet && <><div className="flex flex-col w-fit">
            <h2 className="text-[1.5vw] font-bold text-gray-800">Solana Wallet</h2>
            <h2 className="text-sm text-left text-gray-600">Connected</h2>
          </div>

        <div className="mt-4 text-left">
          <p className="text-sm font-medium text-gray-600">Wallet Address</p>
          <div className="flex justify-between items-center">
          <input ref={publicRef} value={wallet.publicKey} className="text-lg font-mono text-gray-800 break-all" />
          <div onClick={copyToClipboard} className="p-2 hover:bg-gray-400 hover:text-white rounded-md duration-200">
            {copy ? <TiTick /> : <RxCopy />}
          </div>
          </div>
        </div>

        <div className="mt-4">
          {/* <p className="text-sm font-medium text-gray-600">Balance</p> */}
          <motion.p
            className="text-2xl mt-8 font-bold text-gray-800"
            style={{
              filter: isHovered ? "blur(0px)" : "blur(4px)",
              transition: "filter 0.3s ease-in-out",
            }}
          >
            {balancee} SOL
          </motion.p>
        </div></>}
          {/* image */}
      </div>
    </motion.div>
  )
}

export default Show

