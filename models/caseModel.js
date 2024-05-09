import mongoose from 'mongoose'

const caseSchema = new mongoose.Schema({
    CNR: {
        type: String,
    },
    Filing: {
        type: String,
    },
    FilingDate: {
        type: String,
    },
    FirstHearing: {
        type: String,
    },
    NextHearing: {
        type: String,
    },
    Stage: {
        type: Boolean,
    },
    JudgeID: {
        type: String,
    },
    VictimStatement: {
        type: String,
    },
    userName: {
        type: String,
    },
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lawyer',
    },
    evidence: {
        type: String,
    },
})

let Dataset = mongoose.models.case || mongoose.model('case', caseSchema)
export default Dataset
