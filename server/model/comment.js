import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    title: { type: String, required: true }
},
  {timestamps: true },)

export default mongoose.model("Comment", CommentSchema)