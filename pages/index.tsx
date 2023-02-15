import Head from 'next/head';
import { Navbar, Hero, Project, About, Contact, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Aitken</title>
        <meta name="description" content="description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' max-w-[1280px] mx-auto'>
        {/* <div className='absolute -z-10 top-[-20%] left-[-10%] md:left-[30%] xl:left-[40%] h-[1278px]'>
          <div className=' gradient-01 w-[1278px] h-[805.54px] rotate-[40deg]' />
        </div> */}
        <section id='hero'>
          <Navbar />
          <Hero />
        </section>
        {/* <div className='absolute -z-10 top-[28%] right-[5%] md:right-[40%] xl:right-[50%] h-[1278px]'> 
          <div className=' gradient-02 w-[1278px] h-[805.54px] rotate-[18deg] mt-[200px]' />
        </div>
        <div className='absolute -z-20 top-[85%] left-[-10%] md:left-[45%] xl:left-[55%] h-[1278px]'>
          <div className=' gradient-01 w-[1278px] h-[805.54px] rotate-[40deg]' />
        </div> */}
        <section id='projects'>
          <Project />
        </section>
        {/* <div className='absolute -z-10 top-[120%] right-[5%] md:right-[40%] xl:right-[50%] h-[1278px]'> 
          <div className=' gradient-02 w-[1278px] h-[805.54px] rotate-[18deg] mt-[200px]' />
        </div>
        <div className='absolute -z-20 top-[180%] left-[-10%] md:left-[45%] xl:left-[55%] h-[1278px]'>
          <div className=' gradient-01 w-[1278px] h-[805.54px] rotate-[40deg]' />
        </div> */}
        <section id='about'>
          <About />
        </section>
        {/* <div className='absolute -z-10 top-[240%] right-[5%] md:right-[40%] xl:right-[50%] h-[1278px]'> 
          <div className=' gradient-02 w-[1278px] h-[805.54px] rotate-[18deg] mt-[200px]' />
        </div> */}
        <section id='contact'>
          <Contact />
        </section>
        {/* <div className='absolute -z-20 top-[300%] left-[10%] md:left-[45%] xl:left-[60%] h-[600px]'>
          <div className=' gradient-01 w-[600px] h-[400px] rotate-[40deg]' />
        </div> */}
        <Footer />
      </main>
    </>
  )
}
