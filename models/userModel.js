import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)
export default Dataset
