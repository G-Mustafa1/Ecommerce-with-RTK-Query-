import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className='bg-white shadow-md text-black flex justify-between max-md:flex-col  py-5 px-[80px] fixed w-[100%] z-50 max-sm:px-[50px]'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='text-3xl font-semibold tracking-wide text-blue-600'>Shop</h1>
                    <button onClick={() => {
                        setMenuOpen(true)
                        console.log('hy')
                    }} className='md:hidden text-3xl text-blue-600'>
                        ☰
                    </button>
                </div>
                <ul className='max-md:hidden gap-8 flex'>
                    <li className='text-lg font-medium hover:text-blue-500 transition duration-300'><Link to="/">Home</Link></li>
                    <li className='text-lg font-medium hover:text-blue-500 transition duration-300'><Link to="/about">About</Link></li>
                    <li className='text-lg font-medium hover:text-blue-500 transition duration-300'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            {/*  */}
            <nav className={` text-white w-[300px] backdrop-blur-[10px] back
        flex flex-col py-6 px-8 h-full pb-9 transition duration-[1500ms] ease-in-out 
        `}
                style={{
                    position: 'fixed',
                    // left: '100%',
                    top: '0px',
                    zIndex: 50,
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    left: menuOpen ? 'calc(100% - 300px)' : "100%",
                    transition: "1.5s"

                }}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-blue-400'>Shop</h1>
                    <button onClick={() => {
                        setMenuOpen(false)
                        console.log('hy')
                    }} className='text-2xl text-white hover:text-red-400 transition'
                    >✕</button>
                    {/* <div> */}
                    {/* <button  className='md:hidden text-2xl'>☰</button> */}
                    {/* </div> */}
                </div>
                <ul className={`mt-10 flex flex-col gap-8 text-lg `}>
                    <li className='hover:text-blue-400 transition'><Link to="/">Home</Link></li>
                    <li className='hover:text-blue-400 transition'><Link to="/about">About</Link></li>
                    <li className='hover:text-blue-400 transition'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
