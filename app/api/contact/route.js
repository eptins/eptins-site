
export async function POST(req){
  const form = await req.formData()
  // TODO: send email or webhook; for now just succeed
  return new Response('ok', { status: 200 })
}
