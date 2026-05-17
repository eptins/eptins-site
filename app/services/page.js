import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Approach from '../components/Approach'

export const metadata = { title:'Collections — Bae & Boo' }

export default function Page(){
  return (<>
    <Header/>
    <section className="section"><div className="container">
      <div className="eyebrow">Bae & Boo collections</div>
      <h1 className="h1">Couple capsules for every shared occasion.</h1>
      <p className="p" style={{marginTop:22}}>Explore premium matching sets across date nights, weekends, resort escapes, and monogrammed evening moments.</p>
    </div></section>
    <Services/>
    <Approach/>
    <CTA/>
    <Footer/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      '@context':'https://schema.org','@type':'ItemList','name':'Bae & Boo Couple Clothing Collections','itemListElement':[
        {'@type':'Product','name':'Date Night Couple Sets'},
        {'@type':'Product','name':'Weekend Soft Couple Sets'},
        {'@type':'Product','name':'Resort Edit Couple Sets'},
        {'@type':'Product','name':'Monogram Atelier Couple Sets'}
      ]
    })}}/>
  </>)
}
