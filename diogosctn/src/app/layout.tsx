import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './_components/header/header'
import Footer from './_components/footer/footer'
import './_styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diogo | Full-Stack Web Developer',
  description: 'Personal page of Diogo de Souza Caetano a full stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>  
        <main>
          <Header/>
            {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
