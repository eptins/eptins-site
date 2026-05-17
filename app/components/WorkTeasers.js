import Link from 'next/link'
import { products } from '../lib/cases'

export default function WorkTeasers(){
  return (
    <section className="section light" id="shop">
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',gap:24,alignItems:'end',marginBottom:28,flexWrap:'wrap'}}>
          <div>
            <div className="eyebrow" style={{color:'var(--rose-deep)'}}>The first drop</div>
            <h2 className="h2">Couple sets made for your shared calendar.</h2>
          </div>
          <Link href="/work" className="btn dark">View all looks</Link>
        </div>
        <div className="grid grid-4">
          {products.map(product=>(
            <Link href={`/work/${product.slug}`} key={product.slug} className="product-card">
              <div className="product-visual" style={{'--swatch':product.gradient}}/>
              <div className="product-body">
                <div className="product-meta"><span className="badge">{product.category}</span><span className="price">{product.price}</span></div>
                <h3 className="product-title">{product.title}</h3>
                <p className="light p" style={{margin:0}}>{product.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
