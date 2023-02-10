import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='overflow-x-hidden lg:overflow-hidden'>
      <Head />
      <body className='overflow-x-hidden lg:overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
