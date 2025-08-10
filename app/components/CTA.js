
import Link from 'next/link'
export default function CTA(){
  return (
    <section className="section">
      <div className="container card" style={{padding:24,display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
        <div>
          <div className="h2" style={{margin:0}}>Have a project?</div>
          <div className="p" style={{margin:0}}>Tell us the outcome you want; we’ll map the shortest path.</div>
        </div>
        <Link href="/contact" className="btn">Start a project</Link>
      </div>
    </section>
  )
}
