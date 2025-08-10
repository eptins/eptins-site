import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactFormClient from './ContactFormClient'

export const metadata = { title:'Start a Project' }

export default function Contact(){
  return (
    <>
      <Header/>
      <section className="section">
        <div className="container">
          <h1 className="h2">Tell us the outcome you want</h1>
          <ContactFormClient/>
        </div>
      </section>
      <Footer/>
    </>
  )
}
