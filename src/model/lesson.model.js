import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
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
  }
  //_course: { type: Schema.ObjectId, ref: 'Course' } PARA DESPUES DE HACER EL MODELO DE CURSO
})
const Lesson = mongoose.model('Lesson', lessonSchema)
export default Lesson
