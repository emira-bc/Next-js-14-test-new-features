'use server'
 
import { revalidatePath } from 'next/cache';
 
export async function GET() {
  console.log('Test api GET')
  revalidatePath('/productStatic/1')
  return Response.json({ Message: "Cache revalidated!!" })
}