import mongoose from 'mongoose'

const lessonSchema = new mongoose.Schema({
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
  duration: {
    type: String
  },
  numberActivities: {
    type: Number
  },
  _course: { type: Schema.ObjectId, ref: 'Course' }
})
const Lesson = mongoose.model('Lesson', lessonSchema)
export default Lesson
