'use client'
import React, { useState } from 'react';
import '../globals.css';
import Image from "next/image";


function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex'>
            <button onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 items-end">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </button>
            {isOpen && (
                <div className="w-29 h-screen top-0 left-0 fixed bg-primary text-white z-10">
                    <div className="">
                        <span className="text-xl m-4 absolute mt-4 xl:invisible" onClick={toggleMenu} >x</span>
                        <a href="#" className="flex justify-center items-baseline mx-auto pt-11">
                            <Image src="/logo.svg" width={47.27} height={40} alt="N Banking" />
                            <h2 className="px-0.5 text-sm md:text-base font-GilroyMedium">Banking</h2>
                        </a>
                    </div>
                    <nav className="">
                        <div className="ml-4 mt-11 space-y-6 ">
                            <a href="#">
                                <li className=" flex items-center gap-3 bg-blue-600  hover:bg-blue-400 rounded-l-lg px-3 h-12 text-sm md:text-base">
                                    <Image src="/dashboard.svg" width={30} height={30} alt="" />
                                    Dashboard
                                </li>
                            </a>
                            <a href="#" className="block">
                                <li className="flex items-center gap-3 text-sm md:text-base  hover:bg-blue-400 rounded-l-lg px-3 h-12">
                                    <Image src="/perfil.svg" width={30} height={30} alt="" />
                                    My Accounts
                                </li>
                            </a>
                            <a href="#" className="block">
                                <li className="flex items-center gap-3 text-sm md:text-base  hover:bg-blue-400 rounded-l-lg px-3 h-12">
                                    <Image src="/cards.svg" width={30} height={30} alt="" />
                                    My Cards
                                </li>
                            </a>
                            <a href="#" className="block">
                                <li className="flex items-center gap-3 text-sm md:text-base  hover:bg-blue-400 rounded-l-lg px-3 h-12">
                                    <Image src="/transfer.svg" width={30} height={30} alt="" />
                                    Fund Transfer
                                </li>
                            </a>
                            <a href="#" className="block">
                                <li className="flex items-center gap-3 text-sm md:text-base hover:bg-blue-400 rounded-l-lg px-3 h-12">
                                    <Image src="/paper.svg" width={30} height={30} alt="" />
                                    Bill Payment
                                </li>
                            </a>
                            <a href="#" className="block  ">
                                <li className="flex items-center gap-3 text-sm md:text-base hover:bg-blue-400 rounded-l-lg px-3 h-12">
                                    <Image src="/settings.svg" width={30} height={30} alt="" />
                                    Settings
                                </li>
                            </a>
                        </div>
                    </nav>
                </div>
            )}
            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </div>
    );
}
export default Menu;