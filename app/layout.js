import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'Embsys Intelligence — Autonomous Agents for Visual Inspection',

  description:
    'We build autonomous AI agents for visual inspection — serving industrial manufacturing (defect detection, quality control, robotic guidance) and jewelry fintech (gold loan audit, authentication, vault monitoring).',

  icons: {
    icon: '/embsys_logo.png',
  },

  openGraph: {
    title: 'Embsys Intelligence — Autonomous Agents for Visual Inspection',
    description:
      'Autonomous AI agents for manufacturing inspection, defect detection, jewelry audit, authentication, and vault monitoring.',
    url: 'https://embsysai.in',
    siteName: 'Embsys Intelligence',
    images: [
      {
        url: 'https://embsysai.in/embsys_logo.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Embsys Intelligence',
    description:
      'Autonomous AI agents for visual inspection, industrial automation, and fintech security.',
    images: ['https://embsysai.in/embsys_logo.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
