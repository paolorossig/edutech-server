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
  _comments: [{ type: Schema.ObjectId, ref: 'CommentsVideo' }]
})
const Question = mongoose.model('Question', questionSchema)
export default Question
