import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import { products } from '../../lib/cases'

export async function generateStaticParams(){
  return products.map(product=>({ slug:product.slug }))
}
export function generateMetadata({ params }){
  const product = products.find(item=>item.slug===params.slug)
  return { title: product ? `${product.title} — Bae & Boo` : 'Couple Set — Bae & Boo' }
}

export default function ProductPage({ params }){
  const product = products.find(item=>item.slug===params.slug)
  if(!product) return <div className="container section">Not found</div>
  return (<>
    <Header/>
    <section className="section"><div className="container split-panel">
      <div className="product-card" style={{boxShadow:'none'}}>
        <div className="product-visual" style={{'--swatch':product.gradient,height:560}}/>
      </div>
      <div>
        <div className="eyebrow">{product.category} couple set</div>
        <h1 className="h1" style={{fontSize:'clamp(54px,7vw,96px)'}}>{product.title}</h1>
        <p className="p" style={{marginTop:20}}>{product.summary}</p>
        <div style={{display:'flex',alignItems:'center',gap:16,margin:'24px 0',flexWrap:'wrap'}}>
          <span className="price" style={{fontSize:30}}>{product.price}</span>
          <span className="badge" style={{background:'rgba(255,248,237,.1)',color:'var(--cream)'}}>{product.palette}</span>
        </div>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:28}}>
          <a className="btn" href="/contact">Reserve this set</a>
          <a className="btn ghost" href="/work">Back to lookbook</a>
        </div>
        <div className="grid grid-3">
          {product.details.map(detail=>(
            <div className="kpi" key={detail.label}><div className="label">{detail.label}</div><div className="val" style={{fontSize:26}}>{detail.value}</div></div>
          ))}
        </div>
      </div>
    </div></section>
    <section className="section light" style={{paddingTop:0}}><div className="container">
      <h2 className="h2">What arrives for both of you</h2>
      <div className="grid grid-3" style={{marginTop:28}}>
        {product.includes.map(item=><div className="feature" key={item}><b>{item}</b><span>Styled as a complete couple look with premium finishing and care instructions.</span></div>)}
      </div>
    </div></section>
    <CTA/>
    <Footer/>
  </>)
}
