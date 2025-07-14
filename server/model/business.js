import mongoose from 'mongoose';

const BizSchema = new mongoose.Schema({
    image: { type: String, required: true },
    imagePublicId: String,
    title: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    desc: { type: String, required: true },
    approved: { type: Boolean, default: false, },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User",
      // required: true,
    },
},
    { timestamps: true },
);

export default mongoose.model("Business", BizSchema)
