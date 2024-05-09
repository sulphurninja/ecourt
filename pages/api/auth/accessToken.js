import connectDB from "../../../utils/connectDB";
import Users from '../../../models/userModel';
import Lawyers from '../../../models/lawyerModel';
import Judges from '../../../models/judgeModel';
import Forensics from '../../../models/labModel';
import bcrypt from 'bcrypt';
import { createAccessToken, createRefreshToken } from '../../../utils/generateToken';
import jwt from 'jsonwebtoken';

connectDB();

export default async (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        if (!rf_token) return res.status(400).json({ err: 'Login Now!' });
        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
        if (!result) return res.status(400).json({ err: 'Incorrect token or it has expired!' });

        let userOrVendor;

        // Check if the token corresponds to a user
        userOrVendor = await Users.findById(result.id);

        // If the token doesn't correspond to a user, check if it corresponds to a lawyer
        if (!userOrVendor) {
            userOrVendor = await Lawyers.findById(result.id);
        }

        // If the token doesn't correspond to a lawyer, check if it corresponds to a judge
        if (!userOrVendor) {
            userOrVendor = await Judges.findById(result.id);
        }

        // If the token doesn't correspond to a judge, check if it corresponds to a forensics
        if (!userOrVendor) {
            userOrVendor = await Forensics.findById(result.id);
        }

        // If neither user, lawyer, judge, nor forensics is found, return an error
        if (!userOrVendor) return res.status(400).json({ err: 'User, lawyer, judge, or lab does not exist!' });

        // Generate an access token
        const access_token = createAccessToken({ id: userOrVendor._id });

        // Determine the type of user and return appropriate data
        let responseData;
        if (userOrVendor instanceof Users) {
            responseData = {
                userName: userOrVendor.userName,
                firstName: userOrVendor.firstName,
                lastName: userOrVendor.lastName,
            };
        } else if (userOrVendor instanceof Lawyers) {
            responseData = {
                firstName: userOrVendor.firstName,
                education: userOrVendor.education,
                SpecializationArea: userOrVendor.SpecializationArea,
                yearofPassing: userOrVendor.yearofPassing,
                lastName: userOrVendor.lastName,
                userName: userOrVendor.userName,
                // Add more fields specific to lawyers
            };
        } else if (userOrVendor instanceof Judges) {
            responseData = {
                firstName: userOrVendor.firstName,
                lastName: userOrVendor.lastName,
                userName: userOrVendor.userName,
            };
        } else if (userOrVendor instanceof Forensics) {
            responseData = {
                labName: userOrVendor.labName,
                labID: userOrVendor.labID,
            };
        }

        // Return the access token along with user or vendor information in the response
        res.json({
            access_token,
            userOrVendor: responseData
        });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
};
