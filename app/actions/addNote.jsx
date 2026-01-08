'use server'

import connectDB from '@/lib/mongodb'
import Notes from '@/models/Notes'
import { redirect } from 'next/navigation'

const addNote = async (formData) => {
  const { title, content, tags } = Object.fromEntries(formData)
  console.log(title,content,tags)
  await connectDB()
  await Notes.create({ title, content, tags})

  redirect('/')
}

export default addNote

