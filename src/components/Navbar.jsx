"use client"
import { Link } from "react-router-dom"

const Navabar = () => {
    return (
        <div className='flex flex-col md:flex-row gap-3 items-center w-full justify-between'>
            <h1 className="md:text-[3vw] text-2xl w-full font-bold primary-heavy text-[#60A5FA]"><span className='text-white'>Project</span> Sign</h1>
            <div className='navigation flex items-center justify-between overflow-hidden w-full bg-white rounded-full text-lg md:text-2xl text-black '>
                <Link to="/interact" className='w-full md:px-6 md:py-2 px-6 py-1 cursor-pointer hover:bg-[#60A5FA] hover:text-white font-semibold duration-200 ease-in-out'>Interact</Link>
                <span>|</span>
                <Link to="/swap" className='w-full md:px-6 md:py-2 px-6 py-1 cursor-pointer hover:bg-[#60A5FA] hover:text-white font-semibold duration-200 ease-in-out text-right'>Swap</Link>
            </div>
            <h1 className='text-black w-full hidden md:flex'>test</h1>
        </div>
    )
}

export default Navabar