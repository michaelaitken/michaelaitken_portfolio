import React, { useState } from 'react'
import { ProjectCard } from 'components';
import { projectData } from '../constants';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['100','300','400',],
  style: ['normal',],
  subsets: ['latin'],
})

type Props = {}

const Project = (props: Props) => {
  const [active, setActive] = useState('project-2')

  return (
    <div className='text-white px-6 py-4'>
      <div className='max-w-[1920px] mx-auto w-fullflex flex-col'>
        <div className='flex justify-start items-center mb-[-25px]'>
          <div className='h-[60px] md:h-[120px] w-1 md:w-2 bg-[#FF8A00] rounded-full mx-5 md:mx-10' />
          <h1 className={`text-center font-light uppercase text-[50px] md:text-[100px] ${roboto.className}`}><span className='text-[55px] md:text-[110px]'>P</span>rojects</h1>
          {/* <p className='text-center text-white'>Information Here</p> */}
        </div>
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[90vh] gap-5'>
          {projectData.map((project, index) => (
            <ProjectCard 
            key={project.id}
            {...project}
            index={index}
            active={active}
            handleClick={setActive}
          />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project