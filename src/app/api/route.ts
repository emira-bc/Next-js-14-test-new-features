export const dynamic = 'force-static'
 
export async function GET() {
  console.log('Route de test')
  return Response.json({ 'hello': "hello" })
}