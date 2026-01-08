import Notes from '@/models/Notes'
import connectDB from '@/lib/mongodb'

export async function getNotes() {
  await connectDB()
  const notes = await Notes.find().lean()

  return notes.map(note => ({
    ...note,
    _id: note._id.toString(),
   createdAt: new Date(note.createdAt).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
  updatedAt: new Date(note.updatedAt).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }),
  }))
}
