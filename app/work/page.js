
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { cases } from '../lib/cases'

export const metadata = { title:'Work' }

export default function Work(){
  return (<>
    <Header/>
    <section className="section"><div className="container">
      <h1 className="h2">Selected work</h1>
      <div className="grid grid-3">
        {cases.map(c=>(
          <Link href={`/work/${c.slug}`} key={c.slug} className="card" style={{padding:24}}>
            <div style={{height:160,background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.08)',borderRadius:12,marginBottom:12}}/>
            <div style={{fontWeight:700,marginBottom:6}}>{c.title}</div>
            <div className="p" style={{margin:0}}>{c.summary}</div>
          </Link>
        ))}
      </div>
    </div></section>
    <Footer/>
  </>)
}
