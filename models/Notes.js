import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    tag: {
      type: String,
      enum: ['Work', 'Personal', 'Creative','Urgent'],
      default: 'Work'
    },
  },
  { timestamps: true }
)

export default mongoose.models.Notes || mongoose.model('Notes', NoteSchema)
