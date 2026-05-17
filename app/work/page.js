import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { products } from '../lib/cases'

export const metadata = { title:'Lookbook — Bae & Boo' }

export default function Work(){
  return (<>
    <Header/>
    <section className="section"><div className="container">
      <div className="eyebrow">Lookbook</div>
      <h1 className="h1">The couple edit.</h1>
      <p className="p" style={{marginTop:22}}>Shop coordinated outfits curated by occasion, fabric story, and shared mood.</p>
    </div></section>
    <section className="section light" style={{paddingTop:0}}><div className="container">
      <div className="grid grid-4">
        {products.map(product=>(
          <Link href={`/work/${product.slug}`} key={product.slug} className="product-card">
            <div className="product-visual" style={{'--swatch':product.gradient}}/>
            <div className="product-body">
              <div className="product-meta"><span className="badge">{product.category}</span><span className="price">{product.price}</span></div>
              <h2 className="product-title">{product.title}</h2>
              <p className="light p" style={{margin:0}}>{product.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div></section>
    <Footer/>
  </>)
}
