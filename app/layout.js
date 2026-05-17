import './globals.css'
export const metadata = {
  title: 'Bae & Boo — Premium Couple Clothing',
  description: 'Premium coordinated clothing, matching sets, and elevated everydaywear designed exclusively for couples.',
  metadataBase: new URL('https://baeandboo.example'),
  openGraph: {
    type: 'website',
    url: 'https://baeandboo.example',
    siteName: 'Bae & Boo',
    title: 'Bae & Boo — Premium Couple Clothing',
    description: 'Premium coordinated clothing and matching sets designed exclusively for couples.'
  }
}

export default function RootLayout({ children }){
  const orgJsonLd = {
    '@context':'https://schema.org',
    '@type':'Organization',
    name:'Bae & Boo',
    url:'https://baeandboo.example',
    slogan:'Premium clothing for couples only'
  }

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  )
}
