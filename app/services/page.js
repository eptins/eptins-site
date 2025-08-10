
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import CTA from '../components/CTA'

export const metadata = { title:'Services' }

export default function Page(){
  return (<>
    <Header/>
    <section className="section"><div className="container">
      <h1 className="h2">Services that move the needle</h1>
      <div className="p">Four focused offers. Zero fluff.</div>
    </div></section>
    <Services/>
    <CTA/>
    <Footer/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
      "@context":"https://schema.org","@type":"ItemList","name":"Eptins Services","itemListElement":[
        {"@type":"Service","name":"Websites (WordPress / Next.js)"},
        {"@type":"Service","name":"eCommerce (WooCommerce)"},
        {"@type":"Service","name":"Performance SEO"},
        {"@type":"Service","name":"Growth Ads (Google & Meta)"}
      ]
    })}}/>
  </>)
}
