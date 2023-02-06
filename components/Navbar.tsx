import React, { useState } from "react";
import logo from '../public/logo.svg'
import menu from '../public/menu.svg'
import close from '../public/close.svg'
import Image from "next/image";

type Props = {}

export default function Navbar({}: Props) {
    const links = ["projects", "about", "contact"];
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav>
            <div className="flex justify-between items-center max-w-[2000px] mx-auto">
                <div className="ml-[60px] lg:ml-[100px] mt-[50px]">
                    <Image className="w-[100px] h-[100px] z-10 object-contain" src={logo} alt="logo"/>
                </div>
                <div className="">
                    <ul className="hidden lg:flex flex-row text-white text-[40px] mr-[50px] ">
                        {links.map((link, i) => (
                            <li 
                            key={i}
                            className="mr-[70px] mt-10 font-thin hover:text-[#FF8A00]"
                            >
                            <a href={`#${link}`}>{link.toUpperCase()}</a>
                            </li>
                        ))}
                    </ul>
                </div>
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
                    <div className={`bg-[#000000]/40 backdrop-blur-sm w-[90%] h-[90%] t-0 l-0 ${menuOpen ? "fixed overflow-y-scroll" : "hidden"}`}>
                        <div className="flex flex-col">
                            <ul className="text-white text-[50px] ml-5 mt-[100px]">
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