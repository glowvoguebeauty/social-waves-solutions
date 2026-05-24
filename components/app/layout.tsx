import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Preloader } from '@/components/preloader'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk' 
})

export const metadata: Metadata = {
  title: 'Social Waves Solutions - Premium Online Learning',
  description: 'Master digital skills with industry-leading courses from AI to Marketing',
  keywords: 'online courses, learning platform, AI, marketing, development',
  authors: [{ name: 'Social Waves Solutions' }],
  openGraph: {
    title: 'Social Waves Solutions - Premium Online Learning',
    description: 'Master digital skills with industry-leading courses',
    url: 'https://socialwaves.solutions',
    siteName: 'Social Waves Solutions',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Waves Solutions - Premium Online Learning',
    description: 'Master digital skills with industry-leading courses',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Preloader />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}