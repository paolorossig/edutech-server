import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  _lesson: { type: Schema.ObjectId, ref: 'Lesson' },
  _course: { type: Schema.ObjectId, ref: 'Course' },
  _questions: [{ type: Schema.ObjectId, ref: 'Question' }]
})
const Video = mongoose.model('Video', videoSchema)
export default Video
