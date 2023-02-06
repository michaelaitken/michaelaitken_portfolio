import Head from 'next/head';
import { Roboto } from '@next/font/google';
import { Navbar } from '../components';

const roboto = Roboto({
  weight: ['100', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

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
        <div className='absolute gradient-01 w-[1278px] h-[805.54px] -z-10 rotate-[40deg] top-[-20%] right-[2%]' />
        <Navbar />

        {/* Hero */}

        {/* About */}

        {/* Projects */}

        {/* Skills */}

        {/* Contact Me */}
      </main>
    </>
  )
}
