import mongoose from 'mongoose'

const judgeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
    source: {
        type: String,
    },

    password: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
    },
})

let Dataset = mongoose.models.judge || mongoose.model('judge', judgeSchema)
export default Dataset
