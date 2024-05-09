import connectDB from "../../../utils/connectDB";
import Lawyers from '../../../models/lawyerModel'
import bcrypt from 'bcrypt'

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try {
        let { userName, firstName, education, SpecializationArea, yearofPassing, lastName, password, licenseStatus } = req.body

        // Trim extra spaces from the userName
        userName = userName.trim();

        // Check if userName already exists (after trimming)
        const user = await Lawyers.findOne({ userName });
        if (user) {
            return res.status(400).json({ err: 'Username already exists!' });
        }

        const newUser = new Lawyers({
            userName,
            password,
            firstName,
            yearofPassing,
            SpecializationArea,
            licenseStatus,
            education,
            lastName,
        });

        await newUser.save();

        res.json({ msg: "Successful Registration!" });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}
