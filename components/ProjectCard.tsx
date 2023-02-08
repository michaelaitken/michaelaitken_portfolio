import React from 'react'
import Image from 'next/image';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    weight: ['100',],
    style: ['normal',],
    subsets: ['latin'],
  })

type Props = { id: string, imgUrl: string, title: string, index: number, active: string, liveLink: string, gitLink: string, handleClick: Function }

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
            <div className='flex absolute justify-center lg:items-end w-full h-full lg:h-full z-10 bg-gradient-to-r lg:bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent'>
                <div className='flex absolute justify-start lg:justify-start items-center z-10 w-full h-full lg:h-0 lg:rotate-[-90deg] ml-10 lg:ml-0 lg:mb-[130px]'>
                    <h3 className={`font-thin sm:text-[50px] text-[50px] text-white whitespace-nowrap ${roboto.className} animate-heroSocialAnimation`}>{props.title}</h3>
                </div>
            </div>
            
        ) : (
            <div className="flex absolute bottom-0 p-2 sm:p-8 justify-end w-full h-full flex-col bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">
                <div className="flex flex-row justify-between md:flex-wrap whitespace-nowrap">
                    <a href={props.liveLink}>
                        <div className={`flex items-center w-[100px] md:w-[180px] h-[50px] md:h-[90px] rounded-full glassmorphism mb-[16px] cursor-pointer bg-[rgba(0,0,0,0.4)] hover:bg-[#FF8A00]`}>
                            <Image
                                src="/play.svg"
                                alt="play"
                                className=" w-2/3 h-2/3 object-contain ml-[-10px]"
                                width={30}
                                height={30}
                            />
                            <p className={`font-thin text-[18px] md:text-[32px] leading-[18px] md:leading-[32px] text-white uppercase ml-[-10px] md:ml-[-20px] ${roboto.className}`}>
                                live
                            </p>
                        </div>
                    </a>
                    <a href={props.gitLink}>
                        <div className={`flex justify-center items-center w-[100px] md:w-[180px] h-[50px] md:h-[90px] rounded-full glassmorphism mb-[16px] cursor-pointer bg-[rgba(0,0,0,0.4)] hover:bg-[#FF8A00]`}>
                            <p className={`font-thin text-[18px] md:text-[32px] leading-[18px] md:leading-[32px] text-white uppercase mr-0 md:mr-[-10px] ${roboto.className}`}>
                                code
                            </p>
                            <Image
                                src="/github.svg"
                                alt="github"
                                className=" w-1/2 h-1/2 object-contain mr-[-20px]"
                                width={30}
                                height={30}
                            />
                        </div>
                    </a>
                </div>
                <div className="flex flex-row justify-between">
                </div>
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
                {props.title}
            </h2>
        </div>
        )}
    </div>
  )
}

export default ProjectCard