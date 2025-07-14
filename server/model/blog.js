import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  {timestamps: true },
);

export default mongoose.model("Blog", BlogSchema)