import mongoose from 'mongoose'

const lawyerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
    },
    education: {
        type: String,
    },
    SpecializationArea: {
        type: String,
    },
    yearofPassing: {
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
    licenseStatus: {
        type: Boolean,
    },
    userName: {
        type: String,
        required: true,
    },
})

let Dataset = mongoose.models.lawyer || mongoose.model('lawyer', lawyerSchema)
export default Dataset
