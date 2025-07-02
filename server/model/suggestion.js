import mongoose from 'mongoose'

const SuggestionSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc:{ type: String, required: true}
},
    { timestamps: true },
)

export default mongoose.model("Suggestion", SuggestionSchema)
