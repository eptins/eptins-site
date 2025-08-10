
import Link from 'next/link'

const cards = [
  { slug:'maga-floors', title:'Maga Floors — WordPress Catalog', line:'A fast, elegant catalog for multi-brand flooring.' },
  { slug:'dr-alice-dental', title:'Dr. Alice Dental — Local SEO & Leads', line:'Intent-led pages + local SEO for steady enquiries.' },
  { slug:'blizz-infrared-sauna', title:'Blizz Infrared Sauna — High-Ticket Leads', line:'Quality B2C/B2B enquiries on lean spend.' }
]

export default function WorkTeasers(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Selected work</h2>
        <div className="grid grid-3">
          {cards.map(c=>(
            <Link key={c.slug} href={`/work/${c.slug}`} className="card" style={{padding:24}}>
              <div style={{height:160,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',borderRadius:12,marginBottom:12}}/>
              <div style={{fontWeight:700,marginBottom:6}}>{c.title}</div>
              <div className="p" style={{margin:0}}>{c.line}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
