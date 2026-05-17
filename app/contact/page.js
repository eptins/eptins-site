import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactFormClient from './ContactFormClient'

export const metadata = { title:'Join the List — Bae & Boo' }

export default function Contact(){
  return (
    <>
      <Header/>
      <section className="section">
        <div className="container split-panel">
          <div>
            <div className="eyebrow">Private access</div>
            <h1 className="h1" style={{fontSize:'clamp(56px,8vw,108px)'}}>Style two wardrobes with one concierge.</h1>
            <p className="p" style={{marginTop:20}}>Join the Bae & Boo list for early access to drops, monogram slots, and tailored sizing support for both partners.</p>
          </div>
          <ContactFormClient/>
        </div>
      </section>
      <Footer/>
    </>
  )
}
