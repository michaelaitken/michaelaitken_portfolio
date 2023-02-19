import React from 'react'
import Image from 'next/image';
import { Roboto_Condensed, Roboto } from '@next/font/google';
import downArrow from '../public/down_arrow.svg';
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';

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
  const socials = [
  {
    name: 'github',
    image: github,
    link: 'https://github.com/michaelaitken'
  },
  {
    name: 'linkedin',
    image: linkedin,
    link: 'https://www.linkedin.com/in/maitken/'
  },
];

  return (
    <div className='flex flex-col justify-between items-center h-[87vh]'>
      <div className='flex flex-col justify-center items-center w-[100vw] mt-[15vh] lg:mt-[3vh] 2xl:mt-[20vh]'>
        <div className='flex flex-col 2xl:flex-row items-center'>
          <h1 className={`text-[90px] leading-[90px] md:text-[210px] md:leading-[210px] 2xl:text-[230px] 2xl:leading-[230px] text-white font-semibold uppercase ${robotoCondensed.className} 2xl:mr-[80px] animate-heroTitleAnimation`}>michael</h1>
          <h1 className={`text-[90px] leading-[90px] md:text-[210px] md:leading-[210px] 2xl:text-[230px] 2xl:leading-[230px] text-white font-semibold uppercase ${robotoCondensed.className} animate-heroTitleAnimation`}>aitken</h1>
        </div>
        <p className={`text-[18px] md:text-[28px] lg:text-[32px] text-[#FF8A00] font-semibold uppercase md:-mt-1 ${roboto.className}`}>software developer</p>
      </div>
      <div className='flex justify-between relative w-[100vw] bottom-10 z-10 max-w-[1920px]'>
        <div className='w-[80px] sm:w-[160px]'/>
        <div className='flex justify-end'>
          <a href='#projects'>
            <Image src={downArrow} alt="arrow" className='object-contain animate-bounce' />
          </a>
        </div>
        <div className='flex flex-col sm:flex-row items-end sm:items-center mr-10'>
          {socials.map((social, i) => (
            <a 
              key={i}  
              href={social.link}
              className="my-5 sm:mx-5"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image
              src={social.image}
              alt={social.name}
              className="w-[40px] h-[40px] fill-slate-500"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Hero