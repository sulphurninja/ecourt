// Request Schema
import mongoose from 'mongoose'

const requestSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lawyer',
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
})

let Dataset = mongoose.models.request || mongoose.model('request', requestSchema)
export default Dataset
