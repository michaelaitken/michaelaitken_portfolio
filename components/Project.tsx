import React, { useState } from 'react'
import { ProjectCard } from 'components';
import { projectData } from '../constants';

type Props = {}

const Project = (props: Props) => {
  const [active, setActive] = useState('project-2')

  return (
    <div className='text-white px-6 py-12'>
      <div className='max-w-[1920px] mx-auto w-fullflex flex-col'>
        <h1 className='text-center uppercase text-[60px]'>Project</h1>
        <p className='text-center text-white'>Information Here</p>
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