import React, { useState } from "react";
import { Roboto } from '@next/font/google';
import logo from '../public/logo.svg'
import menu from '../public/menu.svg'
import close from '../public/close.svg'
import Image from "next/image";

type Props = {}

const roboto = Roboto({
    weight: ['100',],
    style: ['normal',],
    subsets: ['latin'],
  })

export default function Navbar({}: Props) {
    const links = ["projects", "about", "contact"];
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className={roboto.className}>
            {/* Navbar for normal screen size ${(0.75+(i*0.5)).toString} */}
            <div className="flex justify-between items-center max-w-[2000px] mx-auto">
                <div className="ml-[60px] lg:ml-[100px] mt-[50px]">
                    <Image className="w-[100px] h-[100px] z-10 object-contain" src={logo} alt="logo"/>
                </div>
                <div className="">
                    <ul className="hidden lg:flex flex-row text-white text-[32px] mr-[90px]"> 
                        {links.map((link, i) => (
                            <li 
                            key={i}
                            className={`mx-[40px] mt-7 font-thin hover:text-[#FF8A00] animate-[linksAnimation_0.75_ease-in-out]`}
                            >
                            <a href={`#${link}`}>{link.toUpperCase()}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navbar Menu for Mobile */}
                <div className="relative flex lg:hidden justify-end">
                    <button 
                        className="mt-[50px] mr-[60px] z-10"
                        onClick={handleToggle}
                    >
                        {menuOpen ? (
                            <Image className="w-[80px] h-[80px] object-contain" src={close} alt="close"/>
                        ) : (
                            <Image className="w-[80px] h-[80px] object-contain" src={menu} alt="menu"/>
                        )}
                    </button>
                    <div className={`bg-gradient-to-r from-[#000000]/95 to-transparent backdrop-blur-md w-[100vw] h-[100vh] t-0 l-0 ${menuOpen ? "fixed overflow-y-scroll hide-scroll-bar" : "hidden"}`}>
                        <div className="flex flex-col">
                            <ul className="text-white text-[50px] ml-[70px] mt-[100px]">
                                {links.map((link, i) => (
                                    <li 
                                    key={i}
                                    className="mt-[90px] font-thin hover:text-[#FF8A00] uppercase"
                                    >
                                    <a href={`#${link}`}>{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}