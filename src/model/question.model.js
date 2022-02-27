import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
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
  _lesson: { type: Schema.ObjectId, ref: 'Lesson' }
  //   _course: { type: Schema.ObjectId, ref: 'Course' } PARA DESPUES DE HACER EL MODELO DE CURSO
})
const Question = mongoose.model('Question', questionSchema)
export default Question