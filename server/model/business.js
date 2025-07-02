import mongoose from 'mongoose';

const BizSchema = new mongoose.Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    owner: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    desc: { type: String, required: true }
},
    { timestamps: true },
);

export default mongoose.model("Business", BizSchema)
