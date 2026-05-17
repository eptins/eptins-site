'use client'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container inner">
        <Link href="/" className="brand">Bae <span>&</span> Boo</Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/#shop" className="keep">Shop</Link>
          <Link href="/services">Collections</Link>
          <Link href="/work">Lookbook</Link>
          <Link href="/#couples-only">Couples Only</Link>
          <Link href="/contact" className="btn">Join the list</Link>
        </nav>
      </div>
    </header>
  )
}
