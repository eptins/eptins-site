
import Image from 'next/image'
export default function TrustRow(){
  const logos = ['/logo-1.svg','/logo-2.svg','/logo-3.svg','/logo-4.svg','/logo-5.svg','/logo-6.svg']
  return (
    <div className="logo-row">
      {logos.map((src,i)=>(<Image key={i} src={src} width={220} height={72} alt="Logo"/>))}
    </div>
  )
}
