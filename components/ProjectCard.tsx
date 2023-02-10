import React from 'react'
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import Tooltip from './Tooltip';

const roboto = Roboto({
    weight: ['100','300','400',],
    style: ['normal',],
    subsets: ['latin'],
  })

type Tech = {
    name: string,
    svg: string,
}
type Props = { id: string, imgUrl: string, title: string, subtitle: string, index: number, active: string, liveLink: string, gitLink: string, tech: Array<Tech>, handleClick: Function }

const ProjectCard = (props: Props) => {
  return (
    <div
        className={`relative ${
            props.active === props.id ? 'lg:flex-[3.5] flex-[10]'
            : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[75vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer mx-6 shadow-xl`}
        onClick={() => props.handleClick(props.id)}
    >
        <Image
            src={props.imgUrl}
            alt={props.title}
            className='absolute w-full h-full object-cover'
            width={1920}
            height={1080}

        />
        {props.active !== props.id ? (
            <div className='flex absolute justify-center lg:items-end w-full h-full lg:h-full z-10 bg-gradient-to-r lg:bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent hover:bg-[rgba(255,138,0,0.1)]'>
                <div className='flex absolute justify-start lg:justify-start items-center z-10 w-full h-full lg:h-0 lg:rotate-[-90deg] ml-10 lg:ml-0 lg:mb-[130px]'>
                    <h3 className={`font-thin sm:text-[50px] text-[50px] text-white whitespace-nowrap ${roboto.className} animate-heroSocialAnimation`}>{props.title}</h3>
                </div>
            </div>
            
        ) : (
            <div className="flex absolute bottom-0 p-6 sm:p-8 justify-end w-full h-full flex-col bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent cursor-default">
                <div className="flex flex-row justify-between md:flex-wrap whitespace-nowrap">
                    <a href={props.liveLink}>
                        <div className={`flex items-center w-[100px] xl:w-[180px] h-[50px] xl:h-[90px] rounded-full glassmorphism mb-[16px] cursor-pointer bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,138,0,0.5)] animate-projectPlayAnimation`}>
                            <Image
                                src="/play.svg"
                                alt="play"
                                className=" w-2/3 h-2/3 object-contain ml-[-10px]"
                                width={30}
                                height={30}
                            />
                            <p className={`font-thin text-[18px] xl:text-[32px] leading-[18px] xl:leading-[32px] text-white uppercase ml-[-10px] xl:ml-[-20px] ${roboto.className}`}>
                                live
                            </p>
                        </div>
                    </a>
                    <a href={props.gitLink}>
                        <div className={`flex justify-center items-center w-[100px] xl:w-[180px] h-[50px] xl:h-[90px] rounded-full glassmorphism mb-[16px] cursor-pointer bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,138,0,0.5)] animate-projectGitAnimation`}>
                            <p className={`font-thin text-[18px] xl:text-[32px] leading-[18px] xl:leading-[32px] text-white uppercase mr-0 xl:mr-[-10px] ${roboto.className}`}>
                                code
                            </p>
                            <Image
                                src="/github.svg"
                                alt="github"
                                className=" w-1/2 h-1/2 object-contain xl:mr-[-20px] mr-[-14px]"
                                width={30}
                                height={30}
                            />
                        </div>
                    </a>
                </div>
            <div>
                <h2 className={`mt-[24px] font-normal sm:text-[75px] sm:leading-[75px] text-[36px] leading-[36px] text-white ${roboto.className} animate-subtitleAnimation delay-1000`}>
                    {props.title}
                </h2>
                <p className={`text-[14px] md:text-[24px] xl:text-[28px] md:font-extralight font-light text-white ${roboto.className} animate-subtitleAnimation delay-1000`}>
                    {props.subtitle}
                </p>
            </div>
            <div className='flex justify-center mt-3 animate-subtitleAnimation delay-1000'>
                {props.tech ? (
                    props.tech.map((tech, i) => (
                    <Tooltip key={i} text={tech.name}>
                        <div className="flex justify-center items-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] p-1 mx-1 sm:mx-2 hover:bg-[rgba(0,0,0,0.2)] rounded-full object-contain">
                            <Image 
                                src={tech.svg}
                                alt={tech.name}
                                width={30}
                                height={30}
                                className="h-[20px] sm:h-[30px] object-contain"
                            />
                        </div>
                    </Tooltip>
                ))) : (
                    <div />
                )}
            </div>
        </div>
        )}
    </div>
  )
}

export default ProjectCard