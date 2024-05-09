import connectDB from "../../../utils/connectDB";
import Users from '../../../models/userModel';
import Lawyers from '../../../models/lawyerModel';
import Judges from '../../../models/judgeModel'; // Import the Judges model
import Forensics from '../../../models/labModel'; // Import the Forensics model
import bcrypt from 'bcrypt';
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken';

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await login(req, res);
            break;
    }
}

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Check if the user exists in the Users model
        const user = await Users.findOne({ userName });

        // If the user is not found in the Users model, check the Lawyers model
        if (!user) {
            const lawyer = await Lawyers.findOne({ userName });

            if (!lawyer) {
                // If the user is not found in the Lawyers model, check the Judges model
                const judge = await Judges.findOne({ userName });

                if (!judge) {
                    // If the user is not found in the Judges model, check the Forensics model
                    const forensic = await Forensics.findOne({ userName });

                    if (!forensic) {
                        return res.status(400).json({ err: 'You are not registered!' });
                    }

                    // Generate tokens for forensic
                    const access_token = createAccessToken({ id: forensic._id });
                    const refresh_token = createRefreshToken({ id: forensic._id });

                    return res.json({
                        msg: "Login Successful!!",
                        refresh_token,
                        access_token,
                        user: {
                            userName: forensic.userName,
                            labName: forensic.labName,
                            labID: forensic.labID,
                        },
                    });
                }

                // Generate tokens for judge
                const access_token = createAccessToken({ id: judge._id });
                const refresh_token = createRefreshToken({ id: judge._id });

                return res.json({
                    msg: "Login Successful!!",
                    refresh_token,
                    access_token,
                    user: {
                        userName: judge.userName,
                        firstName: judge.firstName,
                        lastName: judge.lastName,
                    },
                });
            }

            // Generate tokens for lawyer
            const access_token = createAccessToken({ id: lawyer._id });
            const refresh_token = createRefreshToken({ id: lawyer._id });

            return res.json({
                msg: "Login Successful!!",
                refresh_token,
                access_token,
                user: {
                    userName: lawyer.userName,
                    firstName: lawyer.firstName,
                    lastName: lawyer.lastName,
                },
            });
        }

        // Generate tokens for user
        const access_token = createAccessToken({ id: user._id });
        const refresh_token = createRefreshToken({ id: user._id });

        res.json({
            msg: "Login Successful!!",
            refresh_token,
            access_token,
            user: {
                userName: user.userName,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}
