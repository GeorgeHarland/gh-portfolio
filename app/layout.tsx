import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalStyle } from '@/styles'
import StyledComponentsRegistry from '@/components/styledComponentsRegistry'
import DefaultTemplate from '@/templates/DefaultTemplate'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GH Portfolio',
  description: 'GH Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={inter.className}><StyledComponentsRegistry><DefaultTemplate>{children}</DefaultTemplate></StyledComponentsRegistry></body>
    </html>
  )
}
