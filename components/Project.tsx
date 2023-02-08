import React from 'react'

type Props = {}

const Project = (props: Props) => {
  return (
    <div className='text-white px-6 py-12'>
      <div className='max-w-[1920px] mx-auto w-fullflex flex-col'>
        <h1 className='text-center uppercase text-[60px]'>Project</h1>
        <p className='text-center text-white'>Information Here</p>
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {/* <ProjectCard 
            key={project.key}
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Project