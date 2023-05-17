import Head from 'next/head';
import { WIP } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Aitken</title>
        <meta name="description" content="description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WIP />
      {/* <main className=' max-w-[1280px] mx-auto'>
        <section id='hero'>
          <Navbar />
          <Hero />
        </section>
        <section id='projects'>
          <Project />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <Footer />
      </main> */}
    </>
  )
}
