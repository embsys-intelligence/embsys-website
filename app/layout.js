import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Embsys Intelligence - Industrial AI Visual Inspection',
  description: 'Agentic AI Powered Visual Intelligence Platform for Industrial Inspection and Automation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
