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
      <Image src={underConstruction} alt='construction_image' height={500} width={500} className='w-[200px] h-[200px] md:w-[500px] md:h-[500px] object-contain'/>
      <div className='flex flex-col md:flex-row gap-0 md:gap-10 justify-center items-center my-5'>
        <h1 className='text-white text-[75px] lg:text-[100px] uppercase font-extralight leading-[75px] lg:leading-[100px]'>COMING</h1>
        <h1 className='text-white text-[75px] lg:text-[100px] uppercase font-extralight leading-[75px] lg:leading-[100px]'>SOON!</h1>
      </div>
      
      <div className='text-center'>
        <p className='text-[40px] text-purple-400'>Its time for a new coat of paint! 🎨</p>
        <p className='text-[20px] text-gray-400'>🚧 My new website is currently under construction 🚧</p>
      </div>
      


      <div className='flex flex-col md:flex-row items-center gap-3 mt-10 text-center'>
        <h1 className='text-[#FF8A00] text-[50px] leading-[30px]'>AitkenMusic <span className='text-[#FFF] text-[30px]'>is still avaliable 🎶 : </span></h1>
        <a href='https://music.michaelaitken.com' className='mt-2 text-[30px] bg-transparent uppercase font-black px-5 py-3 border-2 border-[#FF8A00] rounded-xl cursor-pointer hover:bg-[#FF8A00] hover:text-white group'>
          <span className='text-[#FF8A00] group-hover:text-white'>
            Aitken
          </span>
          Music
        </a>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-3 mt-10 text-center'>
        <h1 className='text-[#0F9CD5] text-[50px] leading-[30px]'>ATLAS <span className=' text-gray-600 text-[30px]'>By Michael Aitken: </span></h1>
        <a href='https://atlas.michaelaitken.com' className='mt-2 text-[30px] bg-transparent uppercase font-black px-5 py-3 border-2 border-[#0F9CD5] rounded-xl cursor-pointer hover:bg-[#FFF] hover:text-white group'>
          <Image
            src="/logo_text_coloured.png"
            alt='atlas_logo'
            height={100}
            width={100}
          />
        </a>
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