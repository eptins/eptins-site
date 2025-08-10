
import './globals.css'
import { Space_Grotesk, Inter } from 'next/font/google'
import { DefaultSeo } from 'next-seo'

const space = Space_Grotesk({ subsets:['latin'], weight:['400','600','700'], variable:'--font-space' })
const inter = Inter({ subsets:['latin'], weight:['400','500','600','700'], variable:'--font-inter' })

export const metadata = {
  title: 'Eptins — Premium websites that perform',
  description: 'Design-led WordPress/Next.js builds, performance SEO, and growth ads.',
  metadataBase: new URL('https://eptins.com'),
  openGraph: { type: 'website', url: 'https://eptins.com', title: 'Eptins', description: 'Premium websites that perform.' }
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className={`${space.variable} ${inter.variable}`}>
        <DefaultSeo
          titleTemplate="%s — Eptins"
          openGraph={{ site_name:'Eptins' }}
          additionalScript={[
            {
              type: 'application/ld+json',
              innerHTML: JSON.stringify({
                "@context":"https://schema.org","@type":"Organization","name":"Eptins Enterprises LLP","url":"https://eptins.com"
              })
            }
          ]}
        />
        {children}
      </body>
    </html>
  )
}
