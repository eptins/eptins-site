import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">Bae <span>&</span> Boo</div>
          <p className="p" style={{fontSize:15,marginTop:12}}>Premium clothing designed exclusively for couples who want to arrive together, beautifully.</p>
        </div>
        <div><b>Shop</b><p><Link href="/#shop">New drop</Link></p><p><Link href="/work">Lookbook</Link></p></div>
        <div><b>Brand</b><p><Link href="/services">Collections</Link></p><p><Link href="/#couples-only">Couples only</Link></p></div>
        <div><b>Concierge</b><p><Link href="/contact">Join waitlist</Link></p><p>hello@baeandboo.example</p></div>
      </div>
      <div className="container" style={{marginTop:34,color:'rgba(255,248,237,.48)',fontSize:14}}>© 2026 Bae & Boo. Couples only, always.</div>
    </footer>
  )
}
