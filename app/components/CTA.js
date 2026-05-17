import Link from 'next/link'
export default function CTA(){
  return (
    <section className="section light">
      <div className="container">
        <div className="card" style={{padding:'clamp(28px,5vw,54px)',background:'linear-gradient(135deg,#2b1119,#8f3548 58%,#d8a0a8)',color:'var(--cream)'}}>
          <div className="eyebrow">Private drop access</div>
          <div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:22,flexWrap:'wrap'}}>
            <div>
              <h2 className="h2" style={{maxWidth:760}}>Get first access to the next couple capsule.</h2>
              <p className="p" style={{marginTop:18}}>Join the Bae & Boo list for early sizing, limited monogram slots, and private styling notes for two.</p>
            </div>
            <Link href="/contact" className="btn">Join the list</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
