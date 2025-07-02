import mongoose from 'mongoose'

const HerosSchema = new mongoose.Schema({
    image: {type: String, required: true},
    town:{ type: String, required: true},
    stateOfOrigin:{ type: String, required: true},
    dateOfDeath:{ type: String, required: true},
    causeOfDeath:{ type: String, required: true},
    buriedOn:{ type: String, required: true},
},
    { timestamps: true },
)

export default mongoose.model("Heros", HerosSchema)
