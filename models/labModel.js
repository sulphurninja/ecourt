import mongoose from 'mongoose'

const labSchema = new mongoose.Schema({
    labName: {
        type: String,
    },
    labID: {
        type: String,
    },
    userName: {
        type: String,
    },
    password: {
        type: String,
    },
})

let Dataset = mongoose.models.lab || mongoose.model('lab', labSchema)
export default Dataset
