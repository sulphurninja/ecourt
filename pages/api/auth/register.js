import connectDB from "../../../utils/connectDB";
import Users from '../../../models/userModel'
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
        let { userName, firstName, lastName, dob, password,  } = req.body

        // Trim extra spaces from the userName
        userName = userName.trim();

        // Check if userName already exists (after trimming)
        const user = await Users.findOne({ userName });
        if (user) {
            return res.status(400).json({ err: 'Username already exists!' });
        }

        const newUser = new Users({
            userName,
            password,
            firstName,
            lastName,
            dob,
        });

        await newUser.save();

        res.json({ msg: "Successful Registration!"});
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}
