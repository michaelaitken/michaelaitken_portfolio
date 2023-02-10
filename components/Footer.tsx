import React from 'react'
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';

const roboto = Roboto({
  weight: ['100','300','400','700',],
  style: ['normal',],
  subsets: ['latin'],
})

type Props = {}

const Footer = (props: Props) => {

  return (
    <div className={`flex flex-col items-center relative bottom-0 h-[10vh] bg-[#000000] ${roboto.className}`}>
        <div className='border-t-2 border-[#828282] w-[100vw] max-w-[1920px]'/>
        <div className='max-w-[1920px] mx-auto w-full flex flex-row justify-between items-center h-[100%]'>
            <h4 className='text-white uppercase font-semibold text-[20px] leading-[20px] md:text-[32px] md:leading-[32px] ml-7'>Michael aitken</h4>
            <h4 className='text-white font-thin text-[12px] leading-[12px] md:text-[16px] md:leading-[16px]'>Copyright © {new Date().getFullYear()} Michael Aitken. All rights reserved</h4>
            <div className='flex space-x-2 md:space-x-5 mr-7'>
                <a className='flex space-x-4 items-center hover:text-[#FF8A00]' href=''>
                    <Image 
                        src={github}
                        alt='github'
                        width={35}
                        height={35}
                        className="h-[25px] md:h-[35px]"
                    />
                </a>
                <a className='flex space-x-4 items-center hover:text-[#FF8A00]' href=''>
                    <Image 
                        src={linkedin}
                        alt='linkedin'
                        width={35}
                        height={35}
                        className="h-[25px] md:h-[35px]"
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer