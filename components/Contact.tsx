import React from 'react'
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import { useForm, SubmitHandler } from "react-hook-form";
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';
import mail from '../public/mail.svg';

type Props = {}
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

const roboto = Roboto({
    weight: ['100','300','400','700',],
    style: ['normal',],
    subsets: ['latin'],
})

const Contact = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:aitken.michael@outlook.com?subject=${formData.subject}&body=${formData.message}`
    };

    const onEmail = () => {
        window.location.href = 'mailto:aitken.michael@outlook.com'
    };
  

  return (
    <div className='max-w-[1920px] mx-auto w-full flex flex-col mt-[10vh]'>
        <div className='flex justify-start items-center mb-[-25px] text-white px-6 pb-4'>
            <div className='h-[60px] md:h-[120px] w-1 md:w-2 bg-[#FF8A00] rounded-full mx-5 md:mx-10' />
            <h1 className={`text-center font-light uppercase text-[50px] md:text-[100px] ${roboto.className}`}><span className='text-[55px] md:text-[110px]'>C</span>ontact</h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
            <div className={`flex flex-col items-center text-white mt-[70px] lg:-mt-10 w-[50%] space-y-12 ${roboto.className}`}>
                {/* <h4 className='text-[40px] uppercase'>Get in touch</h4> */}
                <button className='flex space-x-4 items-center hover:text-[#FF8A00]' onClick={onEmail}>
                    <Image 
                        src={mail}
                        alt='email'
                        width={35}
                        height={30}
                    />
                    <p>aitken.michael@outlook.com</p>
                </button>
                <a className='flex space-x-4 items-center hover:text-[#FF8A00]' href=''>
                    <Image 
                        src={github}
                        alt='github'
                        width={35}
                        height={35}
                    />
                    <p>Github</p>
                </a>
                <a className='flex space-x-4 items-center hover:text-[#FF8A00]' href=''>
                    <Image 
                        src={linkedin}
                        alt='linkedin'
                        width={35}
                        height={35}
                    />
                    <p>LinkedIn</p>
                </a>
            </div>
            
            <div className={`flex flex-col text-center bg-[#000000]/30 px-[80px] pt-[40px] pb-[80px] ${roboto.className} w-[110%] lg:w-[50%] mt-10`}>
                {/* <h4 className='mb-[40px] text-[40px] uppercase text-white'>Contact Me</h4> */}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[100%] mx-auto z-10'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput w-[100%]' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput w-[100%]' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
                    <button className='bg-transparent hover:bg-[#FF8A00] py-5 px-10 rounded-md text-[#FF8A00] hover:text-white font-bold text-lg uppercase border-[#FF8A00] border-2'>Submit</button>
                </form>
                <div className='mx-auto text-center w-[300px] mt-2'>
                    <p className='text-[#FFFFFF]/40'>Opens your default email application and prefills the provided information</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact