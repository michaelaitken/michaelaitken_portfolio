import React, { useState } from 'react'
import { Roboto } from '@next/font/google';
import { SkillGrid } from 'components';
import { techSkills } from '@/constants';

const roboto = Roboto({
  weight: ['100','300','400',],
  style: ['normal',],
  subsets: ['latin'],
})

type Props = {}

const About = (props: Props) => {
  const [active, setActive] = useState('project-2')

  return (
    <div className=''>
      <div className='max-w-[1920px] mx-auto w-fullflex flex-col'>
        <div className='flex justify-start items-center mb-[-25px] text-white px-6 py-4'>
          <div className='h-[60px] md:h-[120px] w-1 md:w-2 bg-[#FF8A00] rounded-full mx-5 md:mx-10' />
          <h1 className={`text-center font-light uppercase text-[50px] md:text-[100px] ${roboto.className}`}><span className='text-[55px] md:text-[110px]'>A</span>bout</h1>
        </div>
        <div className='flex flex-col xl:flex-row justify-center'>
            <div className='w-[300px] h-[300px] bg-slate-500' />

            <div>
                <SkillGrid techSkills={techSkills} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About