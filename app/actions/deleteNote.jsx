'use server'

import Notes from '@/models/Notes'
import connectDB from '@/lib/mongodb'
import { revalidatePath } from 'next/cache'

export async function deleteTodo(id) {
  await connectDB()
  await Notes.findByIdAndDelete(id)

  revalidatePath('/') // refresh UI
}