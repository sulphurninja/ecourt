import connectDB from "../../../utils/connectDB";
import Labs from '../../../models/labModel'
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
        let { labName, labID, password } = req.body
        // Trim extra spaces from the userName
        labName = labName.trim();
        // Check if userName already exists (after trimming)
        const user = await Labs.findOne({ labName });
        if (user) {
            return res.status(400).json({ err: 'Username already exists!' });
        }

        const newUser = new Labs({
            labName,
            labID,
            password,
        });

        await newUser.save();

        res.json({ msg: "Successful Registration!" });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}
