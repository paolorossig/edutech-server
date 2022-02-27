import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  }
})
const Course = mongoose.model('Course', courseSchema)
export default Course
