export async function POST(req){
  const form = await req.formData()
  const name = form.get('name')
  const email = form.get('email')
  const service = form.get('service')

  console.log('Bae & Boo waitlist request', { name, email, service })
  return new Response('ok', { status: 200 })
}
