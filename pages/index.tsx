import Head from 'next/head';
import { Navbar, Hero } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Aitken</title>
        <meta name="description" content="description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='absolute -z-10 top-[-20%] left-[-10%] md:left-[30%] xl:left-[40%] h-[1278px] '>
          <div className=' gradient-01 w-[1278px] h-[805.54px] rotate-[40deg]' />
        </div>
        <Navbar />
        <Hero />
        <div className='absolute -z-10 bottom-[-35%] right-[5%] md:right-[40%] xl:right-[50%] h-[1278px] '>
          <div className=' gradient-02 w-[1278px] h-[805.54px] rotate-[18deg] mt-[200px]' />
        </div>
        {/* About */}

        {/* Projects */}

        {/* Skills */}

        {/* Contact Me */}
      </main>
    </>
  )
}
