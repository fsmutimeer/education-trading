import './globals.css'
import { Nav } from '@/components'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      {/* <body className={inter.className}>{children}</body> */}
      <body>
    
       <main className='overflow-hidden relative' >
        <Nav/>
        {children}
        </main>
        {/* <Footer/> */}
        </body>

    </html>
  )
}