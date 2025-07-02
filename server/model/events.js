import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
    image: {type: String, required: true},
    title:{ type: String, required: true}
},
    { timestamps: true },
)

export default mongoose.model("Event", EventSchema)
