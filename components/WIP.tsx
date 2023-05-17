import React from 'react'
import Image from 'next/image';
// import { Roboto_Condensed, Roboto } from '@next/font/google';
import downArrow from '../public/down_arrow.svg';
import underConstruction from '../public/underconstruction.svg';
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';

type Props = {}

// const robotoCondensed = Roboto_Condensed({
//   weight: ['700',],
//   style: ['normal',],
//   subsets: ['latin'],
// })

// const roboto = Roboto({
//   weight: ['700',],
//   style: ['normal',],
//   subsets: ['latin'],
// })



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
    <div className='flex flex-col justify-center items-center h-[100vh] w-[100%]'>
      <Image src={underConstruction} alt='construction_image' height={500} width={500}/>
      <div className='flex flex-col md:flex-row gap-0 md:gap-10 justify-center items-center my-5'>
        <h1 className='text-white text-[100px] uppercase font-extralight leading-[100px]'>Coming</h1>
        <h1 className='text-white text-[100px] uppercase font-extralight leading-[100px]'>Soon!</h1>
      </div>
      
      <p className='text-[20px] text-gray-400'>A new website is currently under construction</p>

      <div className='flex flex-col md:flex-row items-center gap-3 mt-10'>
        <h1 className='text-[#FFF] text-[30px]'>AitkenMusic <span className='text-[#FFF]'>is still avaliable: </span></h1>
        <a href='https://music.michaelaitken.com' className='text-[30px] bg-transparent uppercase font-black px-5 py-3 border-2 border-[#FF8A00] rounded-xl cursor-pointer hover:bg-[#FF8A00] hover:text-white group'><span className='text-[#FF8A00] group-hover:text-white'>Aitken</span>Music</a>
      </div>
      <div className='flex flex-row items-end sm:items-center mt-10'>
          {socials.map((social, i) => (
            <a 
              key={i}  
              href={social.link}
              className="mx-5"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image
              src={social.image}
              alt={social.name}
              className="w-[40px] h-[40px]"
              />
            </a>
          ))}
        </div>
    </div>
  )
}

export default Hero