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
    status: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true },
);

export default mongoose.model("Blog", BlogSchema)