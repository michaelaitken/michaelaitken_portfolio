import React from 'react'
import { Roboto_Condensed, Roboto } from '@next/font/google';

type Props = {}

const robotoCondensed = Roboto_Condensed({
  weight: ['700',],
  style: ['normal',],
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['700',],
  style: ['normal',],
  subsets: ['latin'],
})


const Hero = ({}: Props) => {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[80vh] -mt-[80px]'>
      <div className='flex flex-col xl:flex-row items-center'>
        <h1 className={`text-[90px] leading-[90px] md:text-[210px] md:leading-[210px] lg:text-[230px] lg:leading-[230px] text-white font-semibold uppercase ${robotoCondensed.className} xl:mr-[80px] animate-h1Animation`}>michael</h1>
        <h1 className={`text-[90px] leading-[90px] md:text-[210px] md:leading-[210px] lg:text-[230px] lg:leading-[230px] text-white font-semibold uppercase ${robotoCondensed.className} animate-h1Animation`}>aitken</h1>
      </div>
      <p className={`text-[18px] md:text-[28px] lg:text-[32px] text-[#FF8A00] font-semibold uppercase md:-mt-1 ${roboto.className}`}>software developer</p>
    </div>
  )
}

export default Hero