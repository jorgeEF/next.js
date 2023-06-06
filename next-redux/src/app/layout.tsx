import './globals.css'
import { Inter } from 'next/font/google'
import {Providers} from '@/redux/providers'

export const metadata = {
  title: 'Next.js + redux: UI / API',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='container mx-auto bg-blue-500'>
          <Providers>
            {children}
          </Providers>
        </div>    
      </body>
    </html>
  )
}
