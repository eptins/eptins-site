
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { cases } from '../../lib/cases'

export async function generateStaticParams(){
  return cases.map(c=>({ slug:c.slug }))
}
export function generateMetadata({ params }){
  const c = cases.find(x=>x.slug===params.slug)
  return { title: c ? c.title : 'Case' }
}

export default function CasePage({ params }){
  const c = cases.find(x=>x.slug===params.slug)
  if(!c) return <div className="container section">Not found</div>
  return (<>
    <Header/>
    <section className="section"><div className="container">
      <h1 className="h2">{c.title}</h1>
      <p className="p">{c.summary}</p>
      <div className="grid grid-2" style={{margin:'24px 0'}}>
        {c.kpis.map((k,i)=>(
          <div key={i} className="kpi">
            <div className="label">{k.label}</div>
            <div className="val">{k.value}</div>
          </div>
        ))}
      </div>
      <hr className="sep"/>
      <h3 className="h3">What we did</h3>
      <ul>
        {c.highlights.map((h,i)=>(<li key={i} className="p">{h}</li>))}
      </ul>
    </div></section>
    <Footer/>
  </>)
}
