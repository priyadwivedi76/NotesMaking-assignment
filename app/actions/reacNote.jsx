import Notes from '@/models/Notes'
import connectDB from '@/lib/mongodb'

export async function getNotes() {
  await connectDB()
  const notes = await Notes.find().lean()

  return notes.map(note => ({
    ...note,
    _id: note._id.toString(),
    createdAt: note.createdAt.toISOString(),
    updatedAt: note.updatedAt.toISOString()
  }))
}
