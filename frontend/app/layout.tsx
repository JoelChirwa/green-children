import '../styles/globals.css'
import { Poppins, Inter } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700'],
  variable: '--font-heading'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata = {
  title: 'Green Children Malawi',
  description: 'Empowering young people to be lifelong stewards of nature.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body">
        <Cursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}