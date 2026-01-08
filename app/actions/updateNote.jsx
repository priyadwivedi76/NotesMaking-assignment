'use server'

import connectDB from '@/lib/mongodb'
import Notes from '@/models/Notes'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const updateNote = async (formData) => {
  const { id, title, content, tags } = Object.fromEntries(formData)

  await connectDB()

  await Notes.findByIdAndUpdate(id, {
    title,
    content,
    tags,
  })

  revalidatePath('/') // refresh home page data
  redirect('/')
}

export default updateNote
