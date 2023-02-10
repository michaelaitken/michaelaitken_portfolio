import React, { useState } from 'react'
import { Roboto } from '@next/font/google';
import { SkillGrid } from 'components';
import { techSkills } from '@/constants';

const roboto = Roboto({
  weight: ['100','300','400','700',],
  style: ['normal',],
  subsets: ['latin'],
})

type Props = {}

const About = (props: Props) => {
  const aboutPClass = "font-thin lg:text-[32px] md:text-[26px] text-[20px] text-center text-[#E7E7E7]"
  const aboutSpanClass = 'font-semibold'

  return (
    <div className='max-w-[1920px] mx-auto w-full flex flex-col mt-[10vh] lg:mt-0'>
      <div className='flex flex-col xl:flex-row justify-center xl:justify-between items-center'>
        <div className='flex flex-col'>
          <div className='flex justify-start items-center mb-[-25px] text-white px-6 pb-4'>
            <div className='h-[60px] md:h-[120px] w-1 md:w-2 bg-[#FF8A00] rounded-full mx-5 md:mx-10' />
            <h1 className={`text-center font-light uppercase text-[50px] md:text-[100px] ${roboto.className}`}><span className='text-[55px] md:text-[110px]'>A</span>bout</h1>
          </div>
          <div className='px-[30px] md:px-[50px]'>
            <p className={`mt-[40px] ${aboutPClass} ${roboto.className}`}>Hi, I&apos;m <span className={`${aboutSpanClass}`}>Michael</span>! I&apos;m a talented web developer with a focus on <span className={`${aboutSpanClass}`}>front-end development</span>. My passion for technology and electronics has driven me to excel in creating dynamic and interactive websites that deliver <span className={`${aboutSpanClass}`}>outstanding user experiences</span>.</p>

            <p className={`my-[40px] ${aboutPClass} ${roboto.className}`}>I have honed my skills in a wide range of front-end technologies, including <span className={`${aboutSpanClass}`}>React, NEXT.js, Tailwind</span> and many more. I am also familiar with <span className={`${aboutSpanClass}`}>back-end development</span> and <span className={`${aboutSpanClass}`}>databases</span>, which has given me a well-rounded understanding of the full web development process.</p>

            <p className={`mb-[40px] ${aboutPClass} ${roboto.className}`}>I am always eager to stay up to date with the <span className={`${aboutSpanClass}`}>latest industry trends and technologies</span>. Whether it&apos;s exploring new frameworks or experimenting with cutting-edge technologies, I&apos;m always looking for ways to <span className={`${aboutSpanClass}`}>expand my knowledge</span> and improve my craft.</p>
          </div>
        </div>
        <div className='flex flex-col text-center'>
          <p className={`text-[#323232] font-normal uppercase mb-4 ${roboto.className}`}>Hover over the tiles</p>
          <SkillGrid techSkills={techSkills} />
        </div>
      </div>
    </div>
  )
}

export default About