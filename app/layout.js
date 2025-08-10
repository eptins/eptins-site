import './globals.css'
import { Space_Grotesk, Inter } from 'next/font/google'

const space = Space_Grotesk({ subsets:['latin'], weight:['400','600','700'], variable:'--font-space' })
const inter = Inter({ subsets:['latin'], weight:['400','500','600','700'], variable:'--font-inter' })

export const metadata = {
  title: 'Eptins — Premium websites that perform',
  description: 'Design-led WordPress/Next.js builds, performance SEO, and growth ads.',
  metadataBase: new URL('https://eptins.com'),
  openGraph: {
    type: 'website',
    url: 'https://eptins.com',
    siteName: 'Eptins',
    title: 'Eptins — Premium websites that perform',
    description: 'Design-led WordPress/Next.js builds, performance SEO, and growth ads.'
  }
}

export default function RootLayout({ children }){
  const orgJsonLd = {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Eptins Enterprises LLP",
    "url":"https://eptins.com"
  }

  return (
    <html lang="en">
      <body className={`${space.variable} ${inter.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  )
}
