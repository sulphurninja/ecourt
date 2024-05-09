// pages/api/getUser.js

import connectDB from '../../utils/connectDB'; // Import your connectDB utility
import User from '../../models/userModel'; // Import your Lawyer model

connectDB(); // Connect to your MongoDB database

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { userName } = req.query;
            // Fetch all lawyers from the database
            const user = await User.find({userName});

            res.status(200).json({ success: true, data: user });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
