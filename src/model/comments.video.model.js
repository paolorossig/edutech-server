import mongoose from 'mongoose'

const commentsVideoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  type: {
    type: String
  },
  comment: {
    type: String,
    required: true
  }
  //   _student: { type: Schema.ObjectId, ref: 'Student' }, TODO AFTER MAKE STUDENT MODEL
})
const CommentsVideo = mongoose.model('CommentsVideo', commentsVideoSchema)
export default CommentsVideo
