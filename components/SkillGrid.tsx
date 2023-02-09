import React, { useState } from 'react'
import { Roboto } from '@next/font/google';
import Image from 'next/image';


const roboto = Roboto({
  weight: ['100','300','400',],
  style: ['normal',],
  subsets: ['latin'],
})

type TechObj = {
  name: string,
  svg: string,
  color: string
}

type Props = {techSkills: Array<TechObj>}
type HexProps = { name: string, svg: string, color: string }

const Hexagon = ({ name, svg, color }: HexProps) => {

  return (
    <div 
      className={`flex justify-center items-center hexagon w-[80px] h-[96px] lg:w-[200px] lg:h-[240px] m-1 lg:m-1 bg-gradient-radial from-[#777777] to-[#000000] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ${color} hover:z-10`}
      onClick={void(0)}
    >
      <Image 
        src={svg}
        alt={name}
        width={100}
        height={100}
        className="h-[50px] w-[50px] lg:h-[130px] lg:w-[130px]"
      />
    </div>
  );
};


const SkillGrid = ({ techSkills }: Props) =>  {
  
    const evenRow = 'flex ml-[88px] mt-[-25px] lg:ml-[208px] lg:mt-[-61px]'
    const oddRow = 'flex mt-[-25px] lg:mt-[-61px]'

    return (
      <div className='flex flex-col items-center justify-center ml-[-40px] lg:ml-[-100px]'>
        <div className='flex'>
          {techSkills.slice(0,4).map((tech, i) => (
            <Hexagon
              key={i}
              name={tech.name}
              svg={tech.svg}
              color={tech.color}
            />
          ))}
        </div>
        {techSkills.length >= 8 ? (
          <div className={`${evenRow}`}>
            {techSkills.slice(4,8).map((tech, i) => (
            <Hexagon
              key={i}
              name={tech.name}
              svg={tech.svg}
              color={tech.color}
            />
            ))}
          </div>
          ) : (<div />)}

        {techSkills.length >= 12 ? (
          <div className={`${oddRow}`}>
            {techSkills.slice(8,12).map((tech, i) => (
            <Hexagon
              key={i}
              name={tech.name}
              svg={tech.svg}
              color={tech.color}
            />
            ))}
          </div>
          ) : (<div />)}
        
        {techSkills.length >= 16 ? (
          <div className={`${evenRow}`}>
            {techSkills.slice(12,16).map((tech, i) => (
            <Hexagon
              key={i}
              name={tech.name}
              svg={tech.svg}
              color={tech.color}
            />
            ))}
          </div>
          ) : (<div />)}

          {techSkills.length >= 20 ? (
            <div className={`${oddRow}`}>
              {techSkills.slice(16,20).map((tech, i) => (
              <Hexagon
                key={i}
                name={tech.name}
                svg={tech.svg}
                color={tech.color}
              />
              ))}
            </div>
            ) : (<div />)} 

        </div>
    );
}

export default SkillGrid