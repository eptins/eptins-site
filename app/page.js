import AnniversaryRibbon from './components/AnniversaryRibbon'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustRow from './components/TrustRow'
import WorkTeasers from './components/WorkTeasers'
import Services from './components/Services'
import Approach from './components/Approach'
import Proof from './components/Proof'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home(){
  return (<>
    <AnniversaryRibbon/>
    <Header/>
    <Hero/>
    <section className="section" style={{paddingTop:20,paddingBottom:44}}><div className="container">
      <div className="p" style={{marginBottom:16,opacity:.9}}>Designed for couples who want coordinated style without compromise.</div>
      <TrustRow/>
    </div></section>
    <WorkTeasers/>
    <Services/>
    <Approach/>
    <Proof/>
    <CTA/>
    <Footer/>
  </>)
}
