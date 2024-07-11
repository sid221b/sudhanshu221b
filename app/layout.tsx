import type { Metadata } from 'next'
import {
  Noto_Sans_Mono,
  Source_Code_Pro,
  Rokkitt,
  Fira_Code,
  Nunito,
  Rubik,
  Figtree,
  Noto_Sans_JP,
  Fira_Mono,
  Roboto
} from 'next/font/google'
import './globals.css'
import Providers from './Providers'
import Navbar from '@root/components/Navbar'

const font = Figtree({
  preload: true,
  subsets: ['latin'],
  variable: '--font-app',
  display: 'swap'
})

const font2 = Figtree({
  preload: true,
  subsets: ['latin'],
  variable: '--font-app-2',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Sudhanshu Chaurasia',
  description: 'Generated with ❤️ in next.js'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body
        className={`${font.variable} ${font2.variable} font-sans bg-gray-100 dark:bg-stone-950`}
      >
        <div className='relative md:max-w-[720px] lg:max-w-[1024px] mx-auto flex flex-col'>
          <Providers>
            <Navbar />
            <div className='flex-1'>
              <div>{children}</div>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  )
}
